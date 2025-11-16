// FORMAT:
// 'URL section variable name': {
//     title: 'Class Details',
//     password: 'download password',
//     themeColor: 'Color for UI/UX',
//     students: ["StudentA", "StudentB", "StudentC"]
// },

const attendanceData = {

    'A': {
        title: "B.Tech CSE A",
        password: "@@@",
        themeColor: "blue",
        creator: "Karamjit Singh & Avnoor Singh Bal",
        students: [
            "AARUSHI SETHI", "ABHAY SINGH", "ABHI VERMA", "AKARSHDEEP SINGH", "AKASHDEEP SINGH", "AMANAT SHARMA",
            "AMANDEEP KAUR", "AMRIK SINGH", "ANANYA SINGLA", "ANGEL GUPTA", "ANIKET", "ANKIT KUMAR",
            "ANMOLDEEP KAUR", "ANMOLPREET KAUR", "ANSH AHLAWAT", "ANUSHKA", "ARCHIE DHIR", "ARIHANT SHARMA",
            "ARMAAN DEORA", "ARMAANDEEP SINGH", "ARNAV CHANDEL", "ARSHDEEP SINGH", "ARSHDEEP SINGH", "ARYAN RAJ",
            "ARYANSH", "ASHIMA", "ATHARV KAUL", "AVNOOR SINGH BAL", "AVZ SHARMA", "AYUSH RAJ", "BALGOPAL RAI SINGH",
            "BARINDERPAL SINGH", "BISHAV HANS", "BHAKTI GUPTA", "BHAUMIK", "BHAVYA", "BHAVYA SHARMA", "BIRJOT KAUR",
            "CHAHAT", "CHAKSHIKA CHAWLA", "CHARU MALHOTRA", "CHAUDHARY ASHUTOSH KUMAR", "DEEPALI LUTHRA", "DEEPIKA",
            "DEVAM SAGGU", "DEVANG", "DHRUV PATHANIA", "DHRUV SHARMA", "DILJOT KAUR", "DIVYA", "DINKAR MITTAL",
            "DIPTI", "DIVJOT SINGH", "DIVJOT SINGH", "DIVYANSH", "GARIMA TRIKHA", "GARV SEHGAL", "GOUTAM KUMAR",
            "GURANGAD SINGH", "GURANSHPREET SINGH", "GURJASHAN SINGH", "GURMANNAT KAUR", "GURMEET SINGH", "GURNOOR KAUR",
            "GURNOOR SINGH", "GURNOOR SINGH", "GURPREET KAUR", "GURSAJ SINGH", "GURSEERAT KAUR", "GURSHAN SINGH",
            "GURSHAN SINGH", "GURSIMRAN SINGH", "HAETAL KATARIA", "HARANSH SINGH", "HARGUN DEEP SINGH", "HARJAP SINGH",
            "HARKIRAT SINGH RIAR", "HARMANJOT SINGH", "HARNEET KAUR", "HARNOOR KAUR", "HARSHIL GUPTA", "HARSHIL GUPTA",
            "HARSHIT MALHOTRA", "HARSHIT MOHAN SHARMA", "HARSHPREET KAUR", "HARSIDAK SINGH", "HARWINDER SINGH",
            "ISHAN SEHGAL", "ISHITA", "ISHMEET KAUR", "ISHMEET SINGH", "JAGJIT SINGH", "JAGWINDER SINGH",
            "JAHIRUL ISLAM JOY", "JAHNAVI", "JAHNVI UCHARIA", "JASDEEP KAUR", "JASHANPREET SINGH", "JASKARANJEET SINGH",
            "JASKIRAT KAUR", "JASLEEN KAUR", "JASMIN KAUR SANDHU", "JASMINE KAUR", "JASPREET KAUR", "JATIN BERI",
            "JITISH MONGA", "KARAMJIT SINGH", "KARAN SINGH", "KARSIMRAN SINGH", "KASHIKA", "KAVYA ARORA", "KESHAV PURI",
            "KHUSHAAN LAL", "KHUSHI MEHTA", "KHUSHPREET SINGH", "KIRT PAUL", "KOMALPREET KAUR", "KRISH BHAGAT",
            "KRISH GUMBER", "KRISH KUMAR", "KRISH NAYYAR", "KRISHAN CHOPRA", "KRISHI SONDHI", "KRISHNA",
            "KRITAGAYA BHATIA", "KRITIKA MEHTA", "KUNAL", "KUSHAGRAH JAIN", "KISHNA MONGA "
        ]
    },
    'B': {
        title: "B.Tech CSE B",
        password: "@Bsec",
        themeColor: "teal",
        creator: "Karamjit Singh & Avnoor Singh Bal",
        students: [
            "LAKSHDEEP SINGH", "MALHAR ARORA", "MANASVI", "MANJOT KAUR", "MANJOT SINGH", "MANPAVAN KAUR", "MANPREET KUMAR",
            "MANRAJDEEP SINGH", "MANTHAN ATTIRI", "MANTHAN SHARMA", "MEHAK GUPTA", "MEHAK PADWAL", "MEHAKDEEP KAUR",
            "MEHAKPREET SINGH", "MEHAR JOLLY", "MISHTHI", "MITHILESHWAR", "MOHIT", "MOHIT SALWAN", "MOHIT SINGH",
            "MOULIK YADAV", "MRIDULA", "MUSKAN", "NANDANI GARG", "NANDINI RATHORE", "NAVDEEP KAUR", "NAVJIT KAPIL",
            "NAVJOT KAUR", "NAVNEET KAUR", "NAVREET KAUR", "NAVYA", "NEELESH KALIA", "NIMISH SURI", "NIRJALA", "NITISH",
            "PALAK SHARMA", "PAVITERPREET SINGH", "PAVNEET SINGH", "PRABHNOOR KAUR", "PRABHNOOR SINGH", "PRANAV JOSHI",
            "PRINCE KUMAR", "PRITIKA", "PRIYANSHI", "RAGHAV SHARMA", "RAHUL SHARMA", "RANVIR SINGH", "RASHMITA",
            "RAVDEEP KAUR", "RAYAN CHANDEL", "REHAN SINGH", "RIDHAMPREET SINGH", "RISHITA", "RIVANSHU BEHAL", "ROHINI SHARMA",
            "ROHIT KUMAR", "ROOPANSHI SHARMA", "RUDRAKSH MEHRA", "RUDRAKSH SHARMA", "RUHI", "SACHIN KUMAR", "SAHEJVEER SINGH",
            "SAHIBPREET SINGH", "SAHIL GUPTA", "SAKSHAM GUPTA", "SAKSHAM RATHOR", "SAMAIRA", "SAMRIDHI SHARMA", "SANCHI SHARMA",
            "SANYAM GAUTAM", "SATYAK GUPTA", "SAWAL PUSHKARNA", "SAWNI", "SHAGUN KAUR", "SHASHANK SHEKHAR", "SHAURYA THAKUR",
            "SHIVANG GUPTA", "SHIVANSH SHUKLA", "SHIVJOT SINGH", "SHREYANSH", "SIDHARTH ATTRI", "SIRTAJ SINGH", "SIYA",
            "SOURAV", "SUKHMANI", "SUKHMANJEET SINGH", "SUKHMANPREET", "SUKHPAL SINGH", "SUNAKSHI MEHTA", "SUNDARAM KUMAR",
            "SUNDIDH SOOD", "SURYA DEY", "SUSHANK BALIHOTRA", "SUSHEN GUPTA", "TANDRIKA RANI KUNDU", "TANMAYA MAIJAAN",
            "TEJAL CHOPRA", "TRIBHUVAN SINGH", "TUSHAR", "UJWAL", "UTTAMPREET KAUR", "VAIBHAV MAHAJAN", "VAISHALI KUNDAL",
            "VARENYA MAIAJAN", "VARUN ALOONA", "VENU GOPAL SHARMA", "VINEET KUMAR", "VINOD PARMAR", "VISHAL CHOUDHARY",
            "VISHESH KUMAR", "YASHIKA", "YOGITA", "YUVRAJ JASSI", "JATIN"
        ]
    },
    'CE': {
        title: "B.Tech CE",
        password: "@CEsec",
        themeColor: "green",
        creator: "Karamjit Singh & Avnoor Singh Bal",
        students: [
            "Aditya Sharma", "Agamdeep Singh", "Agampal Singh", "Akarshak Rajput", "Amuldeep Kaur", "Anchaldeep Kaur",
            "Anjodh Singh", "Artaj Singh Dhillon", "Bhavishya Sharma", "Bhumi", "Danishpreet Singh", "Dhruv Puri",
            "Diya Sharma", "Gautam Prashar", "Gurleen Kaur", "Gurnoor Kaur", "Gursagar Singh", "Hardik Gupta", "Harleen Kaur",
            "Harpuneet Kaur", "Harshit Maini", "Harshjot Singh", "Harsimranjeet Singh Uppal", "Hemen Gopal", "Ishrat Sandhu",
            "Jasmine Kaur", "Jasvin Kaur Sachdeva", "Jespeeya Kaur", "Karandip Singh", "Kartik Sethi", "Kayna Arora",
            "Kuljeet Kaur", "Kulraj Singh", "Lovenoor Singh Rataul", "Manarsh Singh Bhullar", "Manbir Singh", "Manreet Kaur",
            "Manya Sharma", "Megha", "Megha", "Mukund Kumar", "Navjot Kaur", "Navjot Kaur Mahal", "Nishandeep Singh", "Pankhuri",
            "Parneet Kaur", "Piyush Kumar", "Prabhjapji Kaur", "Pushkar Kalra", "Riana Kakkar", "Rishita Khanna", "Saksham Arora",
            "Sanica Dhawan", "Savinay Bedi", "Sehajbir Singh", "Sehajbir Singh", "Shreyaaditya Chilllar", "Shria Sharma",
            "Simarjit Singh", "Suhani Arora", "Sunandita Menon", "Suraj Gautam", "Tanveer Kaur", "Vaibhav Mahajan",
            "Vaibhav Nanda", "Vibhav Sharma", "Yashika", "Yuvraj Sharma", "Srishti", "Gursidakeep Singh", "Parth Sareen",
            "Hargun Singh", "Janvi", "Guransh Singh"]
    },
    'AiRMt': {
        title: "M.Tech AI&R",
        password: "@AIRsec",
        themeColor: "purple",
        creator: "Karamjit Singh & Avnoor Singh Bal",
        students: [
            "ANKITA RANI", "ANKUSH KAUR", "ARMAN SINGH", "ARMANPREET SINGH", "ARSHDEEP SINGH", "ARSHNOOR KAUR", "ARVIND KAUR", "ARYAN SHARMA",
            "BHAVYA GOYAL", "CHANDEEP SINGH", "CHANDEEP SINGH", "CHITSIMRAN KAUR", "DAMANPREET KOR", "DEVANSH", "DHAVAN KHERA", "DHARNA MAHAJAN",
            "DIKSHA", "DILPREET SINGH", "DIVJEET", "GAGANDEEP SINGH", "GARV MAHAJAN", "GOVIND PAL", "GURBIR SINGH", "GURLEEN SINGH", "GURMANPREET KAUR",
            "GURMEET KAUR", "HARJEET SINGH", "HARMANJOT SINGH", "HARMANPREET KAUR", "HARMEET SINGH SETHI", "HARMOHIT PREET SINGH", "HARNOOR SINGH",
            "HARPREET SINGH", "HARSIMRANJIT SINGH", "HIMANI", "JASHANPREET SINGH", "JASKARAN SINGH", "JASLEEN KAUR", "JASMAN KAUR", "KANWARDEEP SINGH",
            "KARANDEEP SINGH", "KARMANPAL SINGH", "KHUSHVEER KAUR", "KOMAL", "KAPIL", "KRISHNA", "KULVANSHPREET SINGH", "MANCHUR SHARMA", "MANDEEP SINGH",
            "MANISH", "MANKIRAT SINGH", "MANKIRAT SINGH", "MANSI", "MANSIRAT KAUR", "MANVEER KAUR", "MOHIT", "NAMAN", "NAMAN SINGH", "NEHA DEVI",
            "NIRBHAY KAUR", "NIRMAL SINGH", "NISHCHAL SINGH", "NITIMA RANI", "NOORDEEP SINGH", "OASIS", "PARMINDER SINGH", "PARTH SETHI", "PRABHJEET SINGH",
            "PRABHJOT", "PRABHJOT SINGH", "PRABHSIMRAN SINGH", "PRIYANJALI", "RAJNEESH", "RAHUL BHUTTAR", "RANVEER SINGH NAGI", "RIDHIMA KAUR", "RITIK",
            "ROOPAMPREET KAUR", "SADHANA", "SANDEEP KAUR", "SEHAJPREET KAUR", "SHARANJOT KAUR", "SHIVAM KUMAR", "SHIVIKA VERMA", "SHUBHAM KUMAR",
            "SHUBHKIRATPAL SINGH", "SIMARJIT SINGH", "SIMRANJIT KAUR", "SOHAM BAWA", "SUKHJIT KAUR", "SUKMANI SHARMA", "SUKHMANPREET KAUR", "SUNAINA DEVI",
            "SUNDEEP KAUR", "SURPREET SINGH S", "SWASTIK", "TANISH", "TEJAS THAKUR", "TEJINDER SINGH", "USTAT CHHAPRA", "VANSHIKA VERMA", "YUDHVIR SINGH", "YUVRAJ SINGH"
        ]
    },
    'AiMlBt': {
        title: "B.Tech AIML",
        password: "@Aisec",
        themeColor: "blue",
        creator: "Karamjit Singh & Avnoor Singh Bal",
        students: ["ADITYA KUMAR", "ADITYA PARTAP SINGH", "AKALSIFAT KAUR", "ARNAV BHANDARI", "ARSHDEEP SINGH", "ARYAN SHARMA",
            "BHAVISHYA", "CHETANYA SHARMA", "DRISHTI SHARMA", "EKAMJOT KAUR", "GAGANDEEP SAHOTRA", "GURJEET SINGH", "GURNOOR SINGH",
            "HARJOT SINGH", "HARKIRAT KAUR", "HARKIRAT SINGH", "HARLEEN KAUR", "HARSHDEEP SINGH", "HARSHIT", "HARSIMRAN KAUR",
            "HIMANSHU CHAUHAN", "ISHMEET SINGH", "JAPJEE KAUR", "JASNOOR SINGH", "KANHIYA", "KAVYA SHARMA", "KUMAR GOURAV",
            "MANMEET KAUR", "MANPREET", "MANTHAN SHARMA", "MEHAK", "MOHIN BHAGAT", "NANDIKA ARORA", "NAVPREET KAUR", "NIKSHITA THAKUR",
            "NISHANT MAHANIA", "PALAKPREET KAUR", "PRATHAM VINAYAK", "PRINCE", "PUNEET KUMAR", "RAGHAV SHARMA", "RAKSHITA ARORA",
            "REETISH KUMAR", "ROHTANSH SHARMA", "SANJANA", "SANVI", "SHIVANSHI MAHAJAN", "SUKHMANPREET KAUR", "SUKSHAM PATIAL",
            "SUNEHA ATTRI", "TARUN KUMAR", "TRISHANSH CHAUHAN", "UDBHAV KRISHNA SHARMA", "UJALA AGGARWAL", "VAIBHAV SAINI",
            "VANSH CHOUDHARY", "VANSH GUPTA", "VANYA AHUJA", "VIDHI BANSAL", "YUVRAJ SINGH"]
    },
    'AiMlMt': {
        title: "M.Tech CSE(FYIP)",
        password: "@Mtsec",
        themeColor: "teal",
        creator: "Karamjit Singh & Avnoor Singh Bal",
        students: ["AAMANA", "ADITI SHARMA", "ANMOLPREET", "ARSHNOOR KAUR", "BALDEEP SINGH", "BNEET KAUR", "DAISY SHARMA",
            "EKAMJOT KAUR", "HARDILPREET KAUR", "HARJOT SINGH", "HARSIMRAT SUMMAN", "HITAKSHI", "JASMINE KAUR",
            "KARAN CHOUDHARY", "KASHISH", "KASHVI TANEJA", "KHUSHBOO", "KHUSHI MAHAJAN", "KHUSHI TALWAR", "KRISHNA SHARMA",
            "KRITIKA SINGLA", "LAVANYA JOSHI", "LOVENEET", "MEHTAAB PURI", "MOHITESHWAR SHARMA", "MUNISHWAR",
            "MUSKAAN KAUR", "PARMEET SINGH", "PRATHAM", "RISHIKA SINGH", "SAKSHAM MANGOTRA", "SAMRIDHI", "SEEYA SHARMA",
            "SIFATJOT SINGH", "SUMIT KUMAR", "USTATDEEP SINGH", "VAIBHAV MEHRA", "VANSH ARORA", "VEEBHUTI MAHAJAN",
            "ZORAVAR SINGH"]
    },
    'AiRBt': {
        title: "B.Tech AI&R",
        password: "@AIRsec",
        themeColor: "green",
        creator: "Karamjit Singh & Gurbani Kaur",
        students: ["AAYUSHI MAHAJAN", "ADITYA KUMAR", "AGAM BHATIA", "AKSHDEEP KAUR", "AMIROSE", "AMREEN KAUR",
            "ANJANA KASHYAP", "ANKIT KUMAR", "ANSH ARORA", "ARLEEN", "ARSHDEEP KAUR", "ARSHDEEP SINGH", "ARSHIT THAKUR",
            "ARSHPREET KAUR", "ASHISH", "ASHMEET SINGH", "AVNEET KAUR GILL", "BHAVIKA JOHAR", "BHAWARDEEP SINGH",
            "DEV GROVER", "DIVYANSH", "GAYATRI SHARMA", "GURBANI KAUR", "GURKIRAT SINGH", "GURLEEN KAUR", "GURSIDAKDEEP SINGH",
            "HARBIR SINGH", "HARJOT SINGH", "HARJOT SINGH", "HARKIRAT SINGH", "HARMANDEEP SINGH", "HARMANPREET KAUR",
            "IRIESH SHARMA", "ISHMEET SINGH", "ISHNOOR SINGH", "ISHTI", "JASKARAN THAPAR", "KARANDEEP KAUR",
            "KARTIK", "KAVISH KUMAR NOOR", "KRISHNA", "KRISHNA DHIR", "LAKSHDEEP SAINI", "LOVEJOT TANDON",
            "MANDEEP KAUR", "MANIYA NARULA", "MANMEET SINGH", "MANRAJ SINGH RANDHAWA", "MANREET KAUR", "MANROOP SINGH",
            "MEHAKDEEP KAUR", "MEHTAB BARPAGA", "MOHIN BHAGAT", "MOONPARI KAUR", "NANDIKA ARORA", "NIRJALA",
            "NIYATI SETH", "PALAKPREET KAUR", "PARAS BAWA", "PAWANVIR SINGH", "PAYAL SALARIA", "PIYUSH"]
    }

};









