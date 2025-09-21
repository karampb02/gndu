const attendanceData = {
    'A': {
        title: "Section A",
        password: "@Asection",
        themeColor: "blue",
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
        title: "Section B",
        password: "@Bsec",
        themeColor: "teal",
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
    'C': {
        title: "Section CE",
        password: "@CEsec",
        themeColor: "green",
        students: [
            "Aditya Sharma", "Agamdeep Singh", "Agampal Singh", "Akarshak Rajput", "Amuldeep Kaur", "Anchladeep Kaur",
            "Anmol Singh", "Artaj Singh Dhillon", "Bhavishya Sharma", "Bhumi", "Danishpreet Singh", "Dhruv Puri",
            "Diya Sharma", "Gautam Prashar", "Gurleen Kaur", "Gurnoor Kaur", "Gursagar Singh", "Hardik Gupta", "Harleen Kaur",
            "Harpreet Kaur", "Harshit Maini", "Harshot Singh", "Harsimranjeet Singh Uppal", "Hemen Gopal", "Ishrat Sandhu",
            "Jasmine Kaur", "Jasvin Kaur Sachdeva", "Jespeeya Kaur", "Karandip Singh", "Kartik Sethi", "Kayna Arora",
            "Khushrose Dhillon", "Kulejet Kaur", "Kulraj Singh", "Lovenoor Singh Rataul", "Manarsh Singh Bhullar", "Manbir Singh",
            "Manreet Kaur", "Manya Sharma", "Megha", "Megha", "Mukund Kumar", "Navjot Kaur", "Navjot Kaur Mahal",
            "Nishandeep Singh", "Pankhuri", "Parneet Kaur", "Piyush Kumar", "Prabhajpi Kaur", "Pratham Vinayak", "Pushkar Kalra",
            "Riana Kakkar", "Rishita Khanna", "Saksham Arora", "Samyak", "Sanica Dhawan", "Savinay Bedi", "Sehajbir Singh",
            "Shreyaaditya Chilllar", "Shira Sharma", "Simarjit Singh", "Suhani Arora", "Sunandita Menon", "Suraj Gautam",
            "Tanveer Kaur", "Vaibhav Mahajan", "Vaibhav Nanda", "Vaibhav Sharma", "Yashika", "Yuvraj Sharma", "Srishti",
            "Gursidakeep Singh", "Parth Sareen", "Hargun Singh"
        ]
    }

};

