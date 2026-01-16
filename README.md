# 📚 College Attendance Tracker

A modern, high-end web application for tracking student attendance with real-time statistics, PDF export, and a beautiful glassmorphism UI design.

## ✨ Features

### Core Functionality
- ✅ **Real-time Attendance Marking** - Click on student names to toggle present/absent status
- 📊 **Live Statistics** - Instant count updates for present, absent, and total students
- 📄 **PDF Export** - Generate attendance reports with password protection
- 🔄 **Reset Functionality** - Clear all attendance records with one click
- 🎓 **Multiple Sections** - Support for various B.Tech, M.Tech, and other programs

### Design & UX
- 🎨 **Modern Glassmorphism UI** - Beautiful frosted glass effects with backdrop blur
- 🌈 **Gradient Themes** - Each section has unique color coding for easy identification
- ⚡ **Smooth Animations** - Elegant transitions and micro-interactions
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎯 **Intuitive Interface** - Minimal learning curve with clear visual hierarchy

### Supported Programs

#### B.Tech
- CSE A (Blue)
- CSE A 2 (Blue)
- CSE B (Blue)
- AIML (Purple)
- AI&R (Green)
- CE (Teal)

#### M.Tech
- CSE(FYIP) (Blue)
- AI&R (Green)
- GNM (Purple)

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN resources)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gndu.git
cd gndu
```

2. Open `index.html` in your web browser:
```bash
# Using Python's built-in server (recommended)
python -m http.server 8000

# Then visit http://localhost:8000
```

Or simply double-click `index.html` to open it directly.

## 📖 Usage

### Marking Attendance

1. Select a class/section from the home page
2. Enter the subject name (optional)
3. Click on student names to toggle their status:
   - **Red background** = Absent (default)
   - **Green background** = Present
4. View real-time statistics at the top
5. Use **Reset** button to clear all markings

### Exporting Reports

1. Click **Export as PDF** button
2. Enter the section password
3. PDF will be generated with:
   - Attendance summary
   - Date and time
   - Present and absent student lists
   - Creator watermark


## 📁 Project Structure

```
gndu/
├── index.html          # Home page with section selection
├── attendance.html     # Main attendance tracking page
├── app.js             # Core application logic
├── data.js            # Student data and section configuration
└── README.md          # This file
```

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Tailwind CSS + Custom CSS
- **PDF Generation**: jsPDF library
- **Fonts**: Google Fonts (Inter)

## 🎨 Customization

### Changing Colors

Available theme colors:
- `blue` - Blue gradient
- `teal` - Teal gradient
- `green` - Green gradient
- `purple` - Purple gradient

## 📝 Features in Detail

### Live Statistics Panel
Real-time counter showing:
- ✅ Present count (green)
- ❌ Absent count (red)
- 📊 Total students

### Smart Duplicate Handling
Automatically detects and handles duplicate student names by appending numbers (e.g., "JOHN SMITH (2)")

### PDF Export
Generated PDFs include:
- Report header with section name
- Subject name, date, and time
- Summary statistics
- Alphabetical lists of present and absent students
- Creator watermark

### Responsive Design
- **Desktop**: Full 3-column grid layout
- **Tablet**: 2-column layout
- **Mobile**: Single column, optimized touch targets

## 🔒 Security Notes

- Passwords protect PDF export functionality
- No data is stored on servers (client-side only)
- Student data is not transmitted anywhere

## 🐛 Known Limitations

- No persistent storage (data lost on page refresh)
- Maximum realistic capacity: ~500 students per section
- Requires JavaScript enabled

## 🔄 Future Enhancements

- [ ] Local storage for attendance history
- [ ] Export to Excel/CSV
- [ ] Attendance percentage tracking
- [ ] Date-based reports
- [ ] Admin dashboard
- [ ] Database integration
- [ ] User authentication

## 📞 Support

For issues, suggestions, or questions:
- Create an issue on GitHub
- Contact: karamjit.singh@example.com

## 👥 Contributors

- **Karamjit Singh** - Lead Developer
- **Avnoor Singh Bal** - Co-Developer

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Tailwind CSS for styling framework
- jsPDF for PDF generation
- Google Fonts for typography
- Inspired by modern SaaS design patterns

---

**Made with ❤️ for educational institutions**

Last Updated: January 16, 2026
Version: 2.0.0
