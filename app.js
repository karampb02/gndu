document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Element References ---
    const sectionTitleEl = document.getElementById('section-title');
    const dateEl = document.getElementById('date');
    const tableBody = document.getElementById('table-body');
    const subjectInput = document.getElementById('subject');
    const presentCountEl = document.getElementById('present-count');
    const absentCountEl = document.getElementById('absent-count');
    const totalCountEl = document.getElementById('total-count');
    const exportBtn = document.getElementById('export-btn');
    const resetBtn = document.getElementById('reset-btn');
    const passwordModal = document.getElementById('password-modal');
    const passwordInput = document.getElementById('password-input');
    const cancelBtn = document.getElementById('cancel-btn');
    const submitPasswordBtn = document.getElementById('submit-password-btn');
    const passwordErrorEl = document.getElementById('password-error');

    // --- State Management ---
    let currentSectionData = {};
    let dateTimeInterval;

    // --- Initialization ---
    function init() {
        const params = new URLSearchParams(window.location.search);
        const section = params.get('section');

        if (!section || !attendanceData[section]) {
            alert('Invalid section specified. Redirecting to home.');
            window.location.href = 'index.html';
            return;
        }

        currentSectionData = attendanceData[section];
        document.title = `Attendance Tracker - ${currentSectionData.title}`;

        setupUI();
        populateTable();
        updateStats();
        setupEventListeners();
    }

    // --- UI Setup ---
    function setupUI() {
        sectionTitleEl.textContent = `Attendance - ${currentSectionData.title}`;

        // Update date and time display, and refresh it every second
        const updateDateTime = () => {
            const dateObj = new Date();
            // Using 'en-IN' for DD/MM/YYYY format, and en-US for standard 12-hour AM/PM time
            const dateString = dateObj.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });
            const timeString = dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
            // Use innerHTML to render bold tags and non-breaking spaces for better layout
            dateEl.innerHTML = `<strong>Date:</strong> ${dateString} &nbsp;&nbsp;|&nbsp;&nbsp; <strong>Time:</strong> ${timeString}`;
        };

        updateDateTime(); // Initial call
        if (dateTimeInterval) clearInterval(dateTimeInterval); // Clear previous interval if any
        dateTimeInterval = setInterval(updateDateTime, 1000); // Update every second

        // Apply theme colors
        const theme = currentSectionData.themeColor;
        exportBtn.classList.add(`theme-bg-${theme}`, `theme-hover-bg-${theme}`);
        submitPasswordBtn.classList.add(`theme-bg-${theme}`, `theme-hover-bg-${theme}`);
        subjectInput.classList.add(`theme-ring-${theme}`);
    }

    function populateTable() {
        const studentsRaw = currentSectionData.students;
        // Handle duplicate names by adding a counter
        const nameCount = {};
        studentsRaw.forEach(name => { nameCount[name.toUpperCase()] = (nameCount[name.toUpperCase()] || 0) + 1; });
        const dupSeen = {};
        const students = studentsRaw.map(name => {
            const upperName = name.toUpperCase();
            if (nameCount[upperName] === 1) { return name; }
            dupSeen[upperName] = (dupSeen[upperName] || 0) + 1;
            return `${name} (${dupSeen[upperName]})`;
        });

        tableBody.innerHTML = ''; // Clear existing rows
        students.forEach((name, index) => {
            const row = tableBody.insertRow();
            row.classList.add('absent', 'cursor-pointer', 'transition-colors', 'duration-200');

            const cell1 = row.insertCell();
            cell1.textContent = index + 1;
            cell1.classList.add('px-6', 'py-4', 'border-b', 'border-gray-200');

            const cell2 = row.insertCell();
            cell2.textContent = name;
            cell2.classList.add('px-6', 'py-4', 'border-b', 'border-gray-200');

            row.addEventListener('click', () => {
                row.classList.toggle('present');
                row.classList.toggle('absent');
                updateStats();
            });
        });
    }

    // --- Event Handlers ---
    function setupEventListeners() {
        resetBtn.addEventListener('click', resetAttendance);
        exportBtn.addEventListener('click', () => {
            passwordModal.classList.remove('hidden');
            passwordInput.focus();
        });
        cancelBtn.addEventListener('click', closeModal);
        submitPasswordBtn.addEventListener('click', handlePasswordSubmit);
        passwordInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') handlePasswordSubmit();
        });
    }

    function handlePasswordSubmit() {
        if (passwordInput.value === currentSectionData.password) {
            exportPDF();
            closeModal();
        } else {
            passwordErrorEl.classList.remove('hidden');
            passwordInput.value = '';
        }
    }

    function closeModal() {
        passwordModal.classList.add('hidden');
        passwordErrorEl.classList.add('hidden');
        passwordInput.value = '';
    }

    // --- Core Logic ---
    function getStudentLists() {
        const rows = Array.from(tableBody.rows);
        const present = rows.filter(row => row.classList.contains('present')).map(row => `${row.cells[0].textContent}. ${row.cells[1].textContent}`);
        const absent = rows.filter(row => row.classList.contains('absent')).map(row => `${row.cells[0].textContent}. ${row.cells[1].textContent}`);
        return { present, absent };
    }

    function updateStats() {
        const { present, absent } = getStudentLists();
        presentCountEl.textContent = present.length;
        absentCountEl.textContent = absent.length;
        totalCountEl.textContent = present.length + absent.length;
    }

    function resetAttendance() {
        Array.from(tableBody.rows).forEach(row => {
            row.classList.remove('present');
            row.classList.add('absent');
        });
        updateStats();
    }

    // --- PDF Export ---
    function exportPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const { present, absent } = getStudentLists();
        const total = present.length + absent.length;
        const dateObj = new Date();
        const dateStr = dateObj.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timeStr = dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

        const pageHeight = doc.internal.pageSize.getHeight();
        const pageWidth = doc.internal.pageSize.getWidth();
        let yPos = 20;
        const lineHeight = 7;
        const leftMargin = 15;

        // Header
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.text(`Attendance Report - ${currentSectionData.title}`, pageWidth / 2, yPos, { align: "center" });
        yPos += 15;

        // Info section updated to include time
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(`Subject: ${subjectInput.value || 'N/A'}`, leftMargin, yPos);
        yPos += 8;
        doc.text(`Date: ${dateStr}`, leftMargin, yPos);
        doc.text(`Time: ${timeStr}`, pageWidth - leftMargin, yPos, { align: "right" });
        yPos += 8;
        doc.text(`Present: ${present.length}  |  Absent: ${absent.length}  |  Total: ${total}`, leftMargin, yPos);
        yPos += 8;
        doc.setLineWidth(0.5);
        doc.line(leftMargin, yPos - 5, pageWidth - leftMargin, yPos - 5);


        function addStudentList(title, students, color) {
            if (yPos > pageHeight - 25) { doc.addPage(); yPos = 20; }
            doc.setFont("helvetica", "bold");
            doc.setTextColor(0, 0, 0);
            doc.text(title, leftMargin, yPos);
            yPos += lineHeight * 1.5;

            doc.setFont("helvetica", "normal");
            doc.setTextColor(color[0], color[1], color[2]);
            students.forEach(line => {
                if (yPos > pageHeight - 15) {
                    doc.addPage();
                    yPos = 20;
                }
                doc.text(line, leftMargin, yPos);
                yPos += lineHeight;
            });
            yPos += lineHeight;
        }

        addStudentList("Present Students:", present, [34, 139, 34]); // ForestGreen
        addStudentList("Absent Students:", absent, [220, 20, 60]); // Crimson

        // Footer Watermark
        doc.setTextColor(150, 150, 150);
        doc.setFontSize(8);
        const watermarkText = "Created by: Karamjit Singh & Avnoor Singh Bal";
        const textWidth = doc.getTextWidth(watermarkText);
        doc.text(watermarkText, pageWidth - textWidth - 10, pageHeight - 10);

        const filenameDateStr = dateStr.replace(/\//g, '-');
        doc.save(`attendance_${currentSectionData.title.replace(' ', '_').toLowerCase()}_${filenameDateStr}.pdf`);
    }

    // --- Start the app ---
    init();
});
