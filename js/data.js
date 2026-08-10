/**
 * CS&IT KLU — Data Engine v2
 * localStorage-backed. DB.init() seeds defaults once.
 */

const DEFAULT_DATA = {


  events: [
    {
      "id": 1,
      "date": "2026-06-29",
      "title": "2026-2027 A.Y. Odd Semester Orientation & Registrations",
      "type": "Academic",
      "desc": "Held from 29 June to 4 July 2026."
    },
    {
      "id": 2,
      "date": "2026-07-13",
      "title": "Commencement of Classwork",
      "type": "Academic",
      "desc": "Start of odd semester classwork."
    },
    {
      "id": 3,
      "date": "2026-08-31",
      "title": "SEM IN-1 Exams",
      "type": "Examination",
      "desc": "Conducted from 31 August to 5 September 2026."
    },
    {
      "id": 4,
      "date": "2026-09-11",
      "title": "Last Date for Re-Check (SEM IN-1)",
      "type": "Academic",
      "desc": "Deadline to request re-check for SEM IN-1 exams."
    },
    {
      "id": 5,
      "date": "2026-10-12",
      "title": "Lab In-Sem Exams",
      "type": "Examination",
      "desc": "Held from 12 to 17 October 2026."
    },
    {
      "id": 6,
      "date": "2026-10-30",
      "title": "Techno-Management Immersion Week",
      "type": "Academic",
      "desc": "Conducted on 30–31 October 2026."
    },
    {
      "id": 7,
      "date": "2026-10-31",
      "title": "Last Date to Pay End Exam Fee",
      "type": "Academic",
      "desc": "Deadline for exam fee payment."
    },
    {
      "id": 8,
      "date": "2026-11-09",
      "title": "SEM IN-2 Exams",
      "type": "Examination",
      "desc": "Conducted from 9 to 14 November 2026."
    },
    {
      "id": 9,
      "date": "2026-11-12",
      "title": "Last Instruction Day",
      "type": "Academic",
      "desc": "Final day of instruction for the semester."
    },
    {
      "id": 10,
      "date": "2026-11-13",
      "title": "Declaration of Detention List",
      "type": "Academic",
      "desc": "Detention list is published."
    },
    {
      "id": 11,
      "date": "2026-11-16",
      "title": "Semester End Exams",
      "type": "Examination",
      "desc": "Held from 16 to 28 November 2026."
    },
    {
      "id": 12,
      "date": "2026-11-30",
      "title": "Even Semester Orientation & Registrations",
      "type": "Academic",
      "desc": "From 30 November to 5 December 2026."
    },
    {
      "id": 13,
      "date": "2026-12-07",
      "title": "Even Semester Classwork Begins",
      "type": "Academic",
      "desc": "Commencement of even semester classwork."
    },
    {
      "id": 14,
      "date": "2027-02-01",
      "title": "SEM IN-1 Exams (Even)",
      "type": "Examination",
      "desc": "Held from 1 to 6 February 2027."
    },
    {
      "id": 15,
      "date": "2027-02-12",
      "title": "Last Date for Re-Check (SEM IN-1 Even)",
      "type": "Academic",
      "desc": "Deadline for re-check requests."
    },
    {
      "id": 16,
      "date": "2027-03-12",
      "title": "Cultural Immersion Week",
      "type": "Academic",
      "desc": "Held on 12–13 March 2027."
    },
    {
      "id": 17,
      "date": "2027-03-15",
      "title": "Lab In-Sem Exams (Even)",
      "type": "Examination",
      "desc": "Held from 15 to 20 March 2027."
    },
    {
      "id": 18,
      "date": "2027-04-03",
      "title": "Last Date to Pay End Exam Fee (Even)",
      "type": "Academic",
      "desc": "Deadline for exam fee payment."
    },
    {
      "id": 19,
      "date": "2027-04-12",
      "title": "SEM IN-2 Exams (Even)",
      "type": "Examination",
      "desc": "Conducted from 12 to 17 April 2027."
    },
    {
      "id": 20,
      "date": "2027-04-14",
      "title": "Last Instruction Day (Even)",
      "type": "Academic",
      "desc": "Final teaching day."
    },
    {
      "id": 21,
      "date": "2027-04-15",
      "title": "Detention List Declaration (Even)",
      "type": "Academic",
      "desc": "Published before semester exams."
    },
    {
      "id": 22,
      "date": "2027-04-19",
      "title": "Even Semester End Exams",
      "type": "Examination",
      "desc": "Held from 19 April to 2 May 2027."
    },
    {
      "id": 23,
      "date": "2027-05-03",
      "title": "Summer Internship (4 Weeks)",
      "type": "Academic",
      "desc": "From 3 May to 29 May 2027."
    },
    {
      "id": 24,
      "date": "2027-05-03",
      "title": "Summer Internship (8 Weeks)",
      "type": "Academic",
      "desc": "From 3 May to 26 June 2027."
    },
    {
      "id": 25,
      "date": "2027-05-28",
      "title": "Summer Term Orientation",
      "type": "Academic",
      "desc": "Held on 28–29 May 2027."
    },
    {
      "id": 26,
      "date": "2027-05-31",
      "title": "Summer Term Classwork Begins",
      "type": "Academic",
      "desc": "Start of summer term."
    },
    {
      "id": 27,
      "date": "2027-06-14",
      "title": "Summer SEM IN-1 Exams",
      "type": "Examination",
      "desc": "Held on 14–15 June 2027."
    },
    {
      "id": 28,
      "date": "2027-06-18",
      "title": "Summer Lab Exams",
      "type": "Examination",
      "desc": "Held from 18 to 19 June 2027."
    },
    {
      "id": 29,
      "date": "2027-06-28",
      "title": "Next Academic Year Registrations",
      "type": "Academic",
      "desc": "From 28 June to 3 July 2027."
    },
    {
      "id": 30,
      "date": "2027-07-03",
      "title": "Summer Term Last Instruction Day",
      "type": "Academic",
      "desc": "End of teaching for summer term."
    },
    {
      "id": 31,
      "date": "2027-07-05",
      "title": "Summer SEM IN-2 Exams",
      "type": "Examination",
      "desc": "Held on 5–6 July 2027."
    },
    {
      "id": 32,
      "date": "2027-07-08",
      "title": "Summer End Exams",
      "type": "Examination",
      "desc": "Held from 8 to 10 July 2027."
    },
    {
      "id": 33,
      "date": "2027-07-12",
      "title": "Academic Year 2027-28 Begins",
      "type": "Academic",
      "desc": "Start of academic year 2027-2028."
    }
  ]
,
  /* ── PLACEMENTS ──────────────────────────────────────────────────
     Each record: rollNo, name, gender, company, ctc (display), ctcNum (numeric, highest for that offer)
  ──────────────────────────────────────────────────────────────── */
  placements: {

y23:[
  {
    "id": 1,
    "rollNo": "2300090011",
    "name": "DIVVELA SRAVANI",
    "gender": "Female",
    "company": "TCS",
    "ctc": "7.09 LPA",
    "ctcNum": 7.09
  },
  {
    "id": 2,
    "rollNo": "2300090037",
    "name": "RAJUVARI GNANAVIKA",
    "gender": "Female",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 3,
    "rollNo": "2300090044",
    "name": "VARADA DHEERAJ GUPTA",
    "gender": "Male",
    "company": "TCS",
    "ctc": "7.09 LPA",
    "ctcNum": 7.09
  },
  {
    "id": 4,
    "rollNo": "2300090051",
    "name": "YEDLAPROLU SAI CHARAN",
     "gender": "Male",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 5,
    "rollNo": "2300090058",
    "name": "KAMASANI SHYAM PRASAD REDDY",
     "gender": "Male",
    "company": "TCS",
    "ctc": "7.09 LPA",
    "ctcNum": 7.09
  },
  {
    "id": 6,
    "rollNo": "2300090062",
    "name": "BHOGIREDDY ESWAR NAGA SATWIK",
     "gender": "Male",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 7,
    "rollNo": "2300090088",
    "name": "KAPUGANTI MADHUMITHA",
     "gender": "Female",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 8,
    "rollNo": "2300090129",
    "name": "SHAIK MOHAMMED ASHRAF",
     "gender": "Male",
    "company": "TCS",
    "ctc": "7.09 LPA",
    "ctcNum": 7.09
  },
  {
    "id": 9,
    "rollNo": "2300090141",
    "name": "MOHAMMAD ABDUL AHAD SHARIF",
     "gender": "Male",
    "company": "TCS",
    "ctc": "7.09 LPA",
    "ctcNum": 7.09
  },
  {
    "id": 10,
    "rollNo": "2300090155",
    "name": "VARSHACHALAM MARUTHI RANGA GANESH",
     "gender": "Male",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 11,
    "rollNo": "2300090156",
    "name": "CHAKKA PREM SAI KOTESWAR",
     "gender": "Male",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 12,
    "rollNo": "2300090160",
    "name": "SANKA VENKATA JASWANTH",
     "gender": "Male",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 13,
    "rollNo": "2300090175",
    "name": "RYALI VITHALA KAMESWARA BALAJI",
     "gender": "Male",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 14,
    "rollNo": "2300090178",
    "name": "SHAGAMREDDY INDRASENAREDDY",
     "gender": "Male",
    "company": "TCS",
    "ctc": "7.09 LPA",
    "ctcNum": 7.09
  },
  {
    "id": 15,
    "rollNo": "2300090201",
    "name": "KAKARLA VENKATA RAMASAI PAVAN SHANMUKH",
     "gender": "Male",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 16,
    "rollNo": "2300090209",
    "name": "GORINTLA VEERA VENKATA SATYA SAI",
     "gender": "Male",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 17,
    "rollNo": "2300090232",
    "name": "JANDHYALA SAI KAVYA SRI",
     "gender": "Female",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 18,
    "rollNo": "2300090248",
    "name": "MUTHAKANI VEDASAHITHI",
     "gender": "Female",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 19,
    "rollNo": "2300090253",
    "name": "LOCHARLA SHREYA SREE",
     "gender": "Female",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 20,
    "rollNo": "2300090259",
    "name": "KORUKONDA RAMA DEVI",
     "gender": "Female",
    "company": "TCS",
    "ctc": "7.09 LPA",
    "ctcNum": 7.09
  },
  {
    "id": 21,
    "rollNo": "2300090265",
    "name": "VASAMSETTY KARTHIK",
     "gender": "Male",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 22,
    "rollNo": "2300090272",
    "name": "YARLAGADDA MAHESH",
     "gender": "Male",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 23,
    "rollNo": "2300090284",
    "name": "KOTA GEETHA SRI",
     "gender": "Female",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 24,
    "rollNo": "2300090291",
    "name": "VADDE MANIKANTA",
     "gender": "Male",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 25,
    "rollNo": "2300090297",
    "name": "ABBURI ANITHA",
     "gender": "Female",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 26,
    "rollNo": "2300090301",
    "name": "M SHARANYA",
     "gender": "Female",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 27,
    "rollNo": "2300090318",
    "name": "ACHUTHA MEENAKSHI",
     "gender": "Female",
    "company": "TCS",
    "ctc": "7.09 LPA",
    "ctcNum": 7.09
  },
  {
    "id": 28,
    "rollNo": "2300090332",
    "name": "KANAGALA HARSHA VARDHAN",
     "gender": "Male",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 29,
    "rollNo": "2300090341",
    "name": "MORLA REVANTH KUMAR",
     "gender": "Male",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 30,
    "rollNo": "2300090343",
    "name": "DODDI KHYATHI",
     "gender": "Female",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 31,
    "rollNo": "2300090377",
    "name": "NIMMALAPUDI NAGA VENKATA BALAJI",
     "gender": "Male",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 32,
    "rollNo": "2300090386",
    "name": "PERUMALLA JYOTHI SRI",
     "gender": "Female",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 33,
    "rollNo": "2300090390",
    "name": "KANUGONDA VYSHNAVI REDDY",
     "gender": "Female",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 34,
    "rollNo": "2300090392",
    "name": "PUNYALA SRINIVASA REDDY",
     "gender": "Male",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 35,
    "rollNo": "2300090398",
    "name": "AATREYA SUKLA DAS",
     "gender": "Male",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  },
  {
    "id": 36,
    "rollNo": "2300090400",
    "name": "MEGHANA SRI VYSHNAVI EATHA",
     "gender": "Female",
    "company": "TCS",
    "ctc": "3.4 LPA",
    "ctcNum": 3.4
  }
],




    y22: [
      {
    "id": 1,
    "rollNo": "2200090001",
    "name": "Gudla Sai Vishnu",
    "gender": "Male",
    "company": "Learnflu",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 2,
    "rollNo": "2200090002",
    "name": "Kolli Trilochana",
    "gender": "Female",
    "company": "Inspire Leap",
    "ctc": "6.5 LPA",
    "ctcNum": 6.5
  },
  {
    "id": 3,
    "rollNo": "2200090003",
    "name": "Vishnubhotla Naga Bhushana Siddhanth",
    "gender": "Male",
    "company": "Global Quest Technologies",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 4,
    "rollNo": "2200090004",
    "name": "Jyothika Katta",
    "gender": "Female",
    "company": "SkillHigh",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 5,
    "rollNo": "2200090006",
    "name": "Mohammad Rahena",
    "gender": "Female",
    "company": "AllDigiTech Limited",
    "ctc": "3 LPA",
    "ctcNum": 3
  },
  {
    "id": 6,
    "rollNo": "2200090007",
    "name": "Kaki Bhargavi",
    "gender": "Female",
    "company": "AllDigiTech Limited",
    "ctc": "3 LPA",
    "ctcNum": 3
  },
  {
    "id": 7,
    "rollNo": "2200090008",
    "name": "Ratala Bhargavi",
    "gender": "Female",
    "company": "Krutanic",
    "ctc": "7 LPA",
    "ctcNum": 7
  },
  {
    "id": 8,
    "rollNo": "2200090009",
    "name": "Yenugula Harsha Bhargav",
    "gender": "Male",
    "company": "Capgemini",
    "ctc": "4.25 LPA",
    "ctcNum": 4.25
  },
  {
    "id": 9,
    "rollNo": "2200090011",
    "name": "Kousalya Chilukuri",
    "gender": "Female",
    "company": "Prodapt (Dream)",
    "ctc": "5.5 LPA",
    "ctcNum": 5.5
  },
  {
    "id": 10,
    "rollNo": "2200090013",
    "name": "Vishnu Sreya Cherukuri",
    "gender": "Female",
    "company": "Altruist Technologies",
    "ctc": "2.4 LPA",
    "ctcNum": 2.4
  },
  {
    "id": 11,
    "rollNo": "2200090014",
    "name": "Marri Bharanidhar",
    "gender": "Male",
    "company": "TREKVERSE",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 12,
    "rollNo": "2200090015",
    "name": "Shaik Mastanvali",
    "gender": "Male",
    "company": "SkillHigh",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 13,
    "rollNo": "2200090018",
    "name": "Bhimavarapu Koushik Reddy",
    "gender": "Male",
    "company": "Altruist Technologies",
    "ctc": "2.4 LPA",
    "ctcNum": 2.4
  },
  {
    "id": 14,
    "rollNo": "2200090019",
    "name": "Chittabattina Tirumala",
    "gender": "Female",
    "company": "R- Tech Solutions",
    "ctc": "4 LPA",
    "ctcNum": 4
  },
  {
    "id": 15,
    "rollNo": "2200090020",
    "name": "Chittineni Kesava Rao",
    "gender": "Male",
    "company": "Krutanic",
    "ctc": "7 LPA",
    "ctcNum": 7
  },
  {
    "id": 16,
    "rollNo": "2200090021",
    "name": "Eluri D M Sanjana Nagamani",
    "gender": "Female",
    "company": "Deloitte US-India",
    "ctc": "7.6 LPA",
    "ctcNum": 7.6
  },
  {
    "id": 17,
    "rollNo": "2200090024",
    "name": "Uppala Yamini Lakshmi Aparna Sai",
    "gender": "Female",
    "company": "CTS GenC",
    "ctc": "6.75 LPA",
    "ctcNum": 6.75
  },
  {
    "id": 18,
    "rollNo": "2200090025",
    "name": "Kancharla Navya Sri",
    "gender": "Female",
    "company": "LearnBay",
    "ctc": "5 LPA",
    "ctcNum": 5
  },
  {
    "id": 19,
    "rollNo": "2200090027",
    "name": "Javvadi Naga Sai Bhavani",
    "gender": "Female",
    "company": "Infosys",
    "ctc": "3.6 LPA",
    "ctcNum": 3.6
  },
  {
    "id": 20,
    "rollNo": "2200090028",
    "name": "Nallani Sravya Sri",
    "gender": "Female",
    "company": "Infosys",
    "ctc": "3.6 LPA",
    "ctcNum": 3.6
  },
  {
    "id": 21,
    "rollNo": "2200090031",
    "name": "Shashank Kommineni",
    "gender": "Male",
    "company": "City Union Bank",
    "ctc": "2.75 LPA",
    "ctcNum": 2.75
  },
  {
    "id": 23,
    "rollNo": "2200090033",
    "name": "Tankala Reshma Rohitha Sai",
    "gender": "Female",
    "company": "Hexaware BPS Ltd",
    "ctc": "3.2 LPA",
    "ctcNum": 3.2
  },
  {
    "id": 24,
    "rollNo": "2200090034",
    "name": "Kvikita Reddy",
    "gender": "Female",
    "company": "Inspire Leap",
    "ctc": "6.5 LPA",
    "ctcNum": 6.5
  },
  {
    "id": 25,
    "rollNo": "2200090035",
    "name": "Mohammad Adnan Shariff",
    "gender": "Male",
    "company": "CTS GenC Next",
    "ctc": "6.75 LPA",
    "ctcNum": 6.75
  },
  {
    "id": 26,
    "rollNo": "2200090036",
    "name": "Chappa Damodhar Krishna",
    "gender": "Male",
    "company": "TREKVERSE",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 27,
    "rollNo": "2200090037",
    "name": "Karri Dinesh Pavan Kumar",
    "gender": "Male",
    "company": "R- Tech Solutions",
    "ctc": "4 LPA",
    "ctcNum": 4
  },
  {
    "id": 28,
    "rollNo": "2200090038",
    "name": "Syed Muntaz",
    "gender": "Female",
    "company": "Jyesta",
    "ctc": "9 LPA",
    "ctcNum": 9
  },
  {
    "id": 29,
    "rollNo": "2200090039",
    "name": "Vishnumolakala Pooja",
    "gender": "Male",
    "company": "Alpha Innovation",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 30,
    "rollNo": "2200090040",
    "name": "Reddy Keshava Laxmi",
    "gender": "Female",
    "company": "R- Tech Solutions",
    "ctc": "4 LPA",
    "ctcNum": 4
  },
  {
    "id": 31,
    "rollNo": "2200090041",
    "name": "Devarapalli Sai Satwika",
    "gender": "Female",
    "company": "Sutherland Global",
    "ctc": "3.25 LPA",
    "ctcNum": 3.25
  },
  {
    "id": 32,
    "rollNo": "2200090042",
    "name": "Shlok Bolakani",
    "gender": "Male",
    "company": "SkillHigh",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 33,
    "rollNo": "2200090045",
    "name": "Gnana Venkata Sathya Chaithanya Kota",
    "gender": "Male",
    "company": "Altruist Technologies",
    "ctc": "2.4 LPA",
    "ctcNum": 2.4
  },
  {
    "id": 34,
    "rollNo": "2200090046",
    "name": "Md Ikramullah",
    "gender": "Male",
    "company": "InfosysHackwithInfy",
    "ctc": "9.5 LPA",
    "ctcNum": 9.5
  },
  {
    "id": 35,
    "rollNo": "2200090047",
    "name": "Kakarla Vara Prasad",
    "gender": "Male",
    "company": "TREKVERSE",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 36,
    "rollNo": "2200090048",
    "name": "Pavan Kumar Reddy",
    "gender": "Male",
    "company": "R- Tech Solutions",
    "ctc": "4 LPA",
    "ctcNum": 4
  },
  {
    "id": 37,
    "rollNo": "2200090049",
    "name": "Kuruguntla Deepak Reddy",
    "gender": "Male",
    "company": "FacePrep",
    "ctc": "4 LPA",
    "ctcNum": 4
  },
  {
    "id": 38,
    "rollNo": "2200090050",
    "name": "Perumalla Heysriram",
    "gender": "Male",
    "company": "Krutanic",
    "ctc": "7 LPA",
    "ctcNum": 7
  },
  {
    "id": 39,
    "rollNo": "2200090053",
    "name": "Linga Shashank",
    "gender": "Male",
    "company": "CTS GenC",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 40,
    "rollNo": "2200090055",
    "name": "Chikkala Lavanya",
    "gender": "Female",
    "company": "CodeYoung",
    "ctc": "4.5 LPA",
    "ctcNum": 4.5
  },
  {
    "id": 41,
    "rollNo": "2200090056",
    "name": "Akkala Jayendra Naga Vinay",
    "gender": "Male",
    "company": "Global Quest Technologies",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 42,
    "rollNo": "2200090058",
    "name": "Gaddam Pavan Kumar",
    "gender": "Male",
    "company": "Global Quest Technologies",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 43,
    "rollNo": "2200090059",
    "name": "Guntaka Jaideep Reddy",
    "gender": "Male",
    "company": "Prodapt (ASE)",
    "ctc": "6.25 LPA",
    "ctcNum": 6.25
  },
  {
    "id": 44,
    "rollNo": "2200090061",
    "name": "Guduru Sridevi",
    "gender": "Female",
    "company": "Krutanic",
    "ctc": "7 LPA",
    "ctcNum": 7
  },
  {
    "id": 45,
    "rollNo": "2200090062",
    "name": "Paleti Anusha",
    "gender": "Female",
    "company": "Altruist Technologies",
    "ctc": "2.4 LPA",
    "ctcNum": 2.4
  },
  {
    "id": 46,
    "rollNo": "2200090065",
    "name": "Tellakula Varshitha",
    "gender": "Female",
    "company": "Prodapt (ASE)",
    "ctc": "4 LPA",
    "ctcNum": 4
  },
  {
    "id": 47,
    "rollNo": "2200090066",
    "name": "Chinka Thirumala Devi",
    "gender": "Female",
    "company": "CTS GenC",
    "ctc": "4 LPA",
    "ctcNum": 4
  },
  {
    "id": 48,
    "rollNo": "2200090067",
    "name": "Puvvada Aakash",
    "gender": "Male",
    "company": "Altruist Technologies",
    "ctc": "2.4 LPA",
    "ctcNum": 2.4
  },
  {
    "id": 49,
    "rollNo": "2200090068",
    "name": "Bhavanasi Yaswanth Ajay",
    "gender": "Male",
    "company": "SkillHigh",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 50,
    "rollNo": "2200090071",
    "name": "Kammili Geethasri Seshu",
    "gender": "Female",
    "company": "Altruist Technologies",
    "ctc": "2.4 LPA",
    "ctcNum": 2.4
  },
  {
    "id": 51,
    "rollNo": "2200090074",
    "name": "Parisi Deepthi Naga Sri",
    "gender": "Female",
    "company": "Krutanic",
    "ctc": "7 LPA",
    "ctcNum": 7
  },
  {
    "id": 52,
    "rollNo": "2200090076",
    "name": "N Sathyavathani",
    "gender": "Female",
    "company": "CTS GenC Next",
    "ctc": "6.75 LPA",
    "ctcNum": 6.75
  },
  {
    "id": 53,
    "rollNo": "2200090077",
    "name": "Kollipara Rishitha",
    "gender": "Female",
    "company": "Hexaware BPS Ltd",
    "ctc": "3.2 LPA",
    "ctcNum": 3.2
  },
  {
    "id": 54,
    "rollNo": "2200090080",
    "name": "Arilli Jagadeesh",
    "gender": "Male",
    "company": "Hexaware BPS Ltd",
    "ctc": "3.2 LPA",
    "ctcNum": 3.2
  },
  {
    "id": 55,
    "rollNo": "2200090085",
    "name": "Battula Venkata Chaitanya Reddy",
    "gender": "Male",
    "company": "Zenoti",
    "ctc": "11.5 LPA",
    "ctcNum": 11.5
  },
  {
    "id": 56,
    "rollNo": "2200090086",
    "name": "Basireddy Gnaneswara Reddy",
    "gender": "Male",
    "company": "CTS GenC",
    "ctc": "4 LPA",
    "ctcNum": 4
  },
  {
    "id": 57,
    "rollNo": "2200090087",
    "name": "Shaik Imran Rasool",
    "gender": "Male",
    "company": "Loyalty Juggernaut",
    "ctc": "6.194 LPA",
    "ctcNum": 6.194
  },
  {
    "id": 58,
    "rollNo": "2200090088",
    "name": "Gadde Nagaraju",
    "gender": "Male",
    "company": "Altruist Technologies",
    "ctc": "2.4 LPA",
    "ctcNum": 2.4
  },
  {
    "id": 59,
    "rollNo": "2200090091",
    "name": "Baggu Chandu",
    "gender": "Male",
    "company": "Learnflu",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 60,
    "rollNo": "2200090092",
    "name": "Yadamakanti Nithin",
    "gender": "Male",
    "company": "TCS Ninja",
    "ctc": "3.45 LPA",
    "ctcNum": 3.45
  },
  {
    "id": 61,
    "rollNo": "2200090093",
    "name": "Suraboina Keerthi Sri",
    "gender": "Female",
    "company": "TCS Ninja",
    "ctc": "3.45 LPA",
    "ctcNum": 3.45
  },
  {
    "id": 62,
    "rollNo": "2200090094",
    "name": "Ediga Kiran Kumar",
    "gender": "Male",
    "company": "TCS Ninja",
    "ctc": "7 LPA",
    "ctcNum": 7
  },
  {
    "id": 63,
    "rollNo": "2200090095",
    "name": "Cherukuri Chenna Keshava",
    "gender": "Male",
    "company": "Hexaware BPS Ltd",
    "ctc": "3.2 LPA",
    "ctcNum": 3.2
  },
  {
    "id": 64,
    "rollNo": "2200090096",
    "name": "Kushagra Pandey",
    "gender": "Male",
    "company": "Capgemini",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 68,
    "rollNo": "2200090106",
    "name": "Mamillapalli Nikhil Chowdary",
    "gender": "Male",
    "company": "Learnflu",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 69,
    "rollNo": "2200090108",
    "name": "Manorama Tatini",
    "gender": "Female",
    "company": "Inspire Leap",
    "ctc": "6.5 LPA",
    "ctcNum": 6.5
  },
  {
    "id": 70,
    "rollNo": "2200090109",
    "name": "Kollimarla Gnaneswar",
    "gender": "Male",
    "company": "LTI Mindtree",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 71,
    "rollNo": "2200090111",
    "name": "Vahinipathi Rama Krishna",
    "gender": "Male",
    "company": "WebileApps",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 72,
    "rollNo": "2200090112",
    "name": "Reddybathula Naga Samhitha",
    "gender": "Female",
    "company": "AllDigiTech Limited",
    "ctc": "3 LPA",
    "ctcNum": 3
  },
  {
    "id": 73,
    "rollNo": "2200090113",
    "name": "Mallemoggala Sahithi",
    "gender": "Female",
    "company": "R- Tech Solutions",
    "ctc": "4 LPA",
    "ctcNum": 4
  },
  {
    "id": 74,
    "rollNo": "2200090114",
    "name": "Puranam Venkata Naga Sai Pavan Kumar",
    "gender": "Male",
    "company": "LTI Mindtree",
    "ctc": "4.05 LPA",
    "ctcNum": 4.05
  },
  {
    "id": 75,
    "rollNo": "2200090116",
    "name": "Boddula Lokesh",
    "gender": "Male",
    "company": "TREKVERSE",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 76,
    "rollNo": "2200090118",
    "name": "Sadhineni Varshitha",
    "gender": "Female",
    "company": "MuSigma",
    "ctc": "5 LPA",
    "ctcNum": 5
  },
  {
    "id": 77,
    "rollNo": "2200090120",
    "name": "Meda Karthik Mani",
    "gender": "Male",
    "company": "CTS GenC",
    "ctc": "4.05 LPA",
    "ctcNum": 4.05
  },
  {
    "id": 78,
    "rollNo": "2200090124",
    "name": "Ramini Himasree",
    "gender": "Female",
    "company": "CTS GenC",
    "ctc": "4 LPA",
    "ctcNum": 4
  },
  {
    "id": 79,
    "rollNo": "2200090125",
    "name": "Gudimetla Sai Maneesha",
    "gender": "Female",
    "company": "Hexaware BPS Ltd",
    "ctc": "3.2 LPA",
    "ctcNum": 3.2
  },
  {
    "id": 80,
    "rollNo": "2200090128",
    "name": "Nagella Gopal Reddy",
    "gender": "Male",
    "company": "Hexaware BPS Ltd",
    "ctc": "3.2 LPA",
    "ctcNum": 3.2
  },
  {
    "id": 81,
    "rollNo": "2200090129",
    "name": "Kandula Preethi Sri",
    "gender": "Female",
    "company": "Capgemini",
    "ctc": "4.25 LPA",
    "ctcNum": 4.25
  },
  {
    "id": 82,
    "rollNo": "2200090131",
    "name": "Kota Jaswanth",
    "gender": "Male",
    "company": "Omega HealthCare",
    "ctc": "3.25 LPA",
    "ctcNum": 3.25
  },
  {
    "id": 83,
    "rollNo": "2200090134",
    "name": "Jonnalagadda Sumanth",
    "gender": "Male",
    "company": "EMIDS",
    "ctc": "10 LPA",
    "ctcNum": 10
  },
  {
    "id": 84,
    "rollNo": "2200090136",
    "name": "Patan Reshma",
    "gender": "Female",
    "company": "Qspider",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 85,
    "rollNo": "2200090140",
    "name": "Akhil Gajula",
    "gender": "Male",
    "company": "RealPage",
    "ctc": "10 LPA",
    "ctcNum": 10
  },
  {
    "id": 89,
    "rollNo": "2200090146",
    "name": "Chatan Pannag Vajhala",
    "gender": "Male",
    "company": "Learnflu",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 90,
    "rollNo": "2200090148",
    "name": "Puppala Vijay",
    "gender": "Male",
    "company": "Inspire Leap",
    "ctc": "6.5 LPA",
    "ctcNum": 6.5
  },
  {
    "id": 92,
    "rollNo": "2200090151",
    "name": "Sofian Khan",
    "gender": "Male",
    "company": "CTS GenC",
    "ctc": "4 LPA",
    "ctcNum": 4
  },
  {
    "id": 93,
    "rollNo": "2200090152",
    "name": "Karri Harshitha Reddy",
    "gender": "Female",
    "company": "Capgemini",
    "ctc": "4.25 LPA",
    "ctcNum": 4.25
  },
  {
    "id": 94,
    "rollNo": "2200090156",
    "name": "Tagoor GopiNath Tadiboina",
    "gender": "Male",
    "company": "Altruist Technologies",
    "ctc": "2.4 LPA",
    "ctcNum": 2.4
  },
  {
    "id": 95,
    "rollNo": "2200090158",
    "name": "Tasaddaq Hussain",
    "gender": "Male",
    "company": "SkillHigh",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 96,
    "rollNo": "2200090159",
    "name": "Shaik Mujahid Sharukh",
    "gender": "Male",
    "company": "Arshith Fresh India Pvt Ltd",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 97,
    "rollNo": "2200090160",
    "name": "Pothuri Pavan Sai Rahul",
    "gender": "Male",
    "company": "SkillHigh",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 98,
    "rollNo": "2200090161",
    "name": "Sajja Rakshith",
    "gender": "Male",
    "company": "Inspire Leap",
    "ctc": "6.5 LPA",
    "ctcNum": 6.5
  },
  {
    "id": 99,
    "rollNo": "2200090163",
    "name": "Vinnakota Bala Adithya Vardan",
    "gender": "Male",
    "company": "CTS GenC",
    "ctc": "4 LPA",
    "ctcNum": 4
  },
  {
    "id": 100,
    "rollNo": "2200090164",
    "name": "Mandava Ganesh Kumar",
    "gender": "Male",
    "company": "Infosys_HackwithInfy",
    "ctc": "6.25 LPA",
    "ctcNum": 6.25
  },
  {
    "id": 101,
    "rollNo": "2200090165",
    "name": "Bhaviri Somsekhar",
    "gender": "Male",
    "company": "TCS Digital",
    "ctc": "7 LPA",
    "ctcNum": 7
  },
  {
    "id": 102,
    "rollNo": "2200090167",
    "name": "Majety Nikhilesh",
    "gender": "Male",
    "company": "LTI Mindtree",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 103,
    "rollNo": "2200090168",
    "name": "Boyina Avinash",
    "gender": "Male",
    "company": "Capgemini",
    "ctc": "4.25 LPA",
    "ctcNum": 4.25
  },
  {
    "id": 104,
    "rollNo": "2200090169",
    "name": "Chillimunta Naga Narasimha",
    "gender": "Male",
    "company": "R- Tech Solutions",
    "ctc": "4 LPA",
    "ctcNum": 4
  },
  {
    "id": 105,
    "rollNo": "2200090170",
    "name": "Sri Harshith Nadella",
    "gender": "Male",
    "company": "Siemens",
    "ctc": "20 LPA",
    "ctcNum": 20
  },
  {
    "id": 106,
    "rollNo": "2200090172",
    "name": "Chowta NVSSM Anjaneya Aravind",
    "gender": "Female",
    "company": "LearnBay",
    "ctc": "5 LPA",
    "ctcNum": 5
  },
  {
    "id": 107,
    "rollNo": "2200090173",
    "name": "Yellaturu Keerthana",
    "gender": "Female",
    "company": "Hexaware BPS Ltd",
    "ctc": "3.2 LPA",
    "ctcNum": 3.2
  },
  {
    "id": 108,
    "rollNo": "2200090174",
    "name": "Asmathunnisa Begum",
    "gender": "Female",
    "company": "AllDigiTech Limited",
    "ctc": "3 LPA",
    "ctcNum": 3
  },
  {
    "id": 109,
    "rollNo": "2200090175",
    "name": "Pathan Vasiya",
    "gender": "Female",
    "company": "Infosys",
    "ctc": "3.6 LPA",
    "ctcNum": 3.6
  },
  {
    "id": 110,
    "rollNo": "2200090182",
    "name": "Budampudi Alekhya",
    "gender": "Male",
    "company": "CTS GenC",
    "ctc": "4 LPA",
    "ctcNum": 4
  },
  {
    "id": 111,
    "rollNo": "2200090186",
    "name": "Rakesh Chinnabathuni",
    "gender": "Male",
    "company": "AllDigiTech Limited",
    "ctc": "3 LPA",
    "ctcNum": 3
  },
  {
    "id": 112,
    "rollNo": "2200090187",
    "name": "Pathan Irfan Khan",
    "gender": "Male",
    "company": "Learnflu",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 113,
    "rollNo": "2200090190",
    "name": "Chandolu Rithin Venkat",
    "gender": "Male",
    "company": "TelePerformance",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 114,
    "rollNo": "2200090191",
    "name": "Bhimavarapu Chetan Reddy",
    "gender": "Female",
    "company": "TelePerformance",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 115,
    "rollNo": "2200090197",
    "name": "Maddi V N S Datta Charitha",
    "gender": "Female",
    "company": "AcmeGrade",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 116,
    "rollNo": "2200090198",
    "name": "Jasti Sri Veera Reshma Lakshmi Devi",
    "gender": "Female",
    "company": "AcmeGrade",
    "ctc": "5 LPA",
    "ctcNum": 5
  },
  {
    "id": 117,
    "rollNo": "2200090203",
    "name": "Yenduri Eeshitha",
    "gender": "Female",
    "company": "Inspire Leap",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 118,
    "rollNo": "2200090205",
    "name": "Manvitha",
    "gender": "Male",
    "company": "Inspire Leap",
    "ctc": "6.5 LPA",
    "ctcNum": 6.5
  },
  {
    "id": 119,
    "rollNo": "2200090206",
    "name": "Lohith Malireddy",
    "gender": "Female",
    "company": "CTS GenC",
    "ctc": "4.05 LPA",
    "ctcNum": 4.05
  },
  {
    "id": 121,
    "rollNo": "2200090212",
    "name": "Mohammad Salar Saheb",
    "gender": "Male",
    "company": "SkillHigh",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 122,
    "rollNo": "2200090214",
    "name": "Chaladi Tulasi Ram",
    "gender": "Female",
    "company": "Altruist Technologies",
    "ctc": "2.4 LPA",
    "ctcNum": 2.4
  },
  {
    "id": 123,
    "rollNo": "2200090219",
    "name": "Vishnu Vardhan",
    "gender": "Male",
    "company": "Capgemini",
    "ctc": "4.25 LPA",
    "ctcNum": 4.25
  },
  {
    "id": 124,
    "rollNo": "2200090220",
    "name": "Cheedella Pavani",
    "gender": "Female",
    "company": "Altruist Technologies",
    "ctc": "2.4 LPA",
    "ctcNum": 2.4
  },
  {
    "id": 125,
    "rollNo": "2200090221",
    "name": "Chittypolu Deepak",
    "gender": "Male",
    "company": "Altruist Technologies",
    "ctc": "2.4 LPA",
    "ctcNum": 2.4
  },
  {
    "id": 126,
    "rollNo": "2200090222",
    "name": "Kamineni Sritapasya",
    "gender": "Male",
    "company": "Inspire Leap",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 127,
    "rollNo": "2200090227",
    "name": "Ganesh Gundu",
    "gender": "Male",
    "company": "Inspire Leap",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 128,
    "rollNo": "2200090228",
    "name": "Yeddula Nikhil Reddy",
    "gender": "Female",
    "company": "Hexaware BPS Ltd + TelePerformance",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 129,
    "rollNo": "2200090229",
    "name": "Kunapareddy Vishnu Venkata Naga Sai",
    "gender": "Male",
    "company": "Inspire Leap",
    "ctc": "6.5 LPA",
    "ctcNum": 6.5
  },
  {
    "id": 130,
    "rollNo": "2200090233",
    "name": "Prabhanjani",
    "gender": "Male",
    "company": "LTI Mindtree",
    "ctc": "7 LPA",
    "ctcNum": 7
  },
  {
    "id": 131,
    "rollNo": "2200090235",
    "name": "K Jai Kishan",
    "gender": "Female",
    "company": "CTS GenC Pro",
    "ctc": "5.5 LPA",
    "ctcNum": 5.5
  },
  {
    "id": 132,
    "rollNo": "2200090236",
    "name": "B Gokul Krishna Sai",
    "gender": "Male",
    "company": "Inspire Leap",
    "ctc": "6.5 LPA",
    "ctcNum": 6.5
  },
  {
    "id": 133,
    "rollNo": "2200090237",
    "name": "Katuri Meghana",
    "gender": "Male",
    "company": "Hexaware BPS Ltd",
    "ctc": "3.2 LPA",
    "ctcNum": 3.2
  },
  {
    "id": 134,
    "rollNo": "2200090240",
    "name": "Putti Karthik",
    "gender": "Male",
    "company": "SLK Software",
    "ctc": "3.2 LPA",
    "ctcNum": 3.2
  },
  {
    "id": 135,
    "rollNo": "2200090241",
    "name": "Bande Sujan Venkat Nikhil",
    "gender": "Male",
    "company": "Inspire Leap",
    "ctc": "6.5 LPA",
    "ctcNum": 6.5
  },
  {
    "id": 136,
    "rollNo": "2200090242",
    "name": "Kushagra Singh",
    "gender": "Male",
    "company": "TCS Ninja",
    "ctc": "3.45 LPA",
    "ctcNum": 3.45
  },
  {
    "id": 137,
    "rollNo": "2200090244",
    "name": "Dasari Vivek",
    "gender": "Male",
    "company": "Alpha Innovation",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 138,
    "rollNo": "2200090246",
    "name": "Mekala Mahesh Gopi",
    "gender": "Male",
    "company": "CTS GenC",
    "ctc": "4 LPA",
    "ctcNum": 4
  },
  {
    "id": 139,
    "rollNo": "2200090247",
    "name": "Maddineni Viswa",
    "gender": "Male",
    "company": "CTS GenC",
    "ctc": "4 LPA",
    "ctcNum": 4
  },
  {
    "id": 140,
    "rollNo": "2200090250",
    "name": "Sai Charan Thummalapalli",
    "gender": "Male",
    "company": "TREKVERSE",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 141,
    "rollNo": "2200090254",
    "name": "Parth Mahesh Joshi",
    "gender": "Male",
    "company": "LearnBay",
    "ctc": "5 LPA",
    "ctcNum": 5
  },
  {
    "id": 142,
    "rollNo": "2200090256",
    "name": "Kamlesh Kumar Yadav",
    "gender": "Male",
    "company": "AllDigiTech Limited",
    "ctc": "3 LPA",
    "ctcNum": 3
  },
  {
    "id": 143,
    "rollNo": "2200099003",
    "name": "Gowra Ramakrishna Siva Sai",
    "gender": "Male",
    "company": "FISST Pvt Ltd",
    "ctc": "4 LPA",
    "ctcNum": 4
  },
  {
    "id": 144,
    "rollNo": "2200099005",
    "name": "Vusa Harikrishna",
    "gender": "Male",
    "company": "OneTeam Infotech Pvt Ltd",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 145,
    "rollNo": "2200090180",
    "name": "Nukireddy Ramalakshmi",
    "gender": "Female",
    "company": "Inspire Leap",
    "ctc": "6.5 LPA",
    "ctcNum": 6.5
  },
  {
    "id": 146,
    "rollNo": "2200090248",
    "name": "Vikash Kumar",
    "gender": "Male",
    "company": "Inspire Leap",
    "ctc": "6.5 LPA",
    "ctcNum": 6.5
  },
  {
    "id": 147,
    "rollNo": "2200090100",
    "name": "Danda Sai Hitesh",
    "gender": "Male",
    "company": "Alpha Innovation",
    "ctc": "8 LPA",
    "ctcNum": 8
  },
  {
    "id": 148,
    "rollNo": "2200090017",
    "name": "Pachava Hari Krishna",
    "gender": "Male",
    "company": "Alpha Innovation",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 149,
    "rollNo": "2200090153",
    "name": "Kanneganti Lakshmi Tejaswi",
    "gender": "Female",
    "company": "PURSUIT FUTURE TECHNOLOGIES",
    "ctc": "6 LPA",
    "ctcNum": 6
  },
  {
    "id": 150,
    "rollNo": "2200090149",
    "name": "Kasim Vivek",
    "gender": "Male",
    "company": "Datalogixs Technologies",
    "ctc": "2.4 LPA",
    "ctcNum": 2.4
  },
  {
    "id": 151,
    "rollNo": "2200090183",
    "name": "Patibandla Siva Sathvik",
    "gender": "Male",
    "company": "ESM Software Solutions",
    "ctc": "5 LPA",
    "ctcNum": 5
  },
  {
    "id": 152,
    "rollNo": "2200090188",
    "name": "Shaik Mohammad Saifulla",
    "gender": "Male",
    "company": "ESM Software Solutions",
    "ctc": "5 LPA",
    "ctcNum": 5
  },
  {
    "id": 153,
    "rollNo": "2200090105",
    "name": "Kagitala Vennela Kavya",
    "gender": "Female",
    "company": "TREKVERSE",
    "ctc": "6 LPA",
    "ctcNum": 6
  }
],
    y21: [
           

    { "id": 1, "rollNo": "2100090001", "name": "ALLA DHANYA", "gender": "Female", "company": "Taurus", "ctc": "2.4 LPA", "ctcNum": 2.4 },
    { "id": 2, "rollNo": "2100090003", "name": "ANDHAVARAPU RAKESH", "gender": "Male", "company": "TCS NINJA", "ctc": "3.36 to 3.6 LPA", "ctcNum": 3.6 },
    { "id": 3, "rollNo": "2100090004", "name": "CHEBROLU NANDAN", "gender": "Male", "company": "Tech Mahindra", "ctc": "3.25 LPA", "ctcNum": 3.25 },
    { "id": 4, "rollNo": "2100090006", "name": "CHINNAM LAKSHMI SAI SARAYU", "gender": "Female", "company": "Taurus (Altruist)", "ctc": "2.4 LPA", "ctcNum": 2.4 },
    { "id": 5, "rollNo": "2100090007", "name": "DHULIPUDI SARANYA", "gender": "Female", "company": "Inspire Leap", "ctc": "6.5 LPA", "ctcNum": 6.5 },
    { "id": 6, "rollNo": "2100090009", "name": "ELANJIPURATHU STABIN JAMES", "gender": "Male", "company": "Taurus", "ctc": "2.4 LPA", "ctcNum": 2.4 },
    { "id": 7, "rollNo": "2100090011", "name": "GORIJAVOLU SOHITH CHOWDARY", "gender": "Male", "company": "LearnFlu EduTech", "ctc": "4 to 6 LPA", "ctcNum": 6 },
    { "id": 8, "rollNo": "2100090012", "name": "JAVVADI VARUN RAJ", "gender": "Male", "company": "Capgemini", "ctc": "4.25 LPA", "ctcNum": 4.25 },
    { "id": 9, "rollNo": "2100090013", "name": "JAVVADI SANDEEP", "gender": "Male", "company": "Capgemini", "ctc": "4.25 LPA", "ctcNum": 4.25 },
    { "id": 10, "rollNo": "2100090015", "name": "KOTA NAGA VENKAT", "gender": "Male", "company": "Ulearn", "ctc": "3.5 to 4.5 LPA", "ctcNum": 4.5 },
    { "id": 11, "rollNo": "2100090016", "name": "KOTHAGUNDLA MIDHUN SAI", "gender": "Male", "company": "Capgemini", "ctc": "4.25 LPA", "ctcNum": 4.25 },
    { "id": 12, "rollNo": "2100090017", "name": "MANNE SUDHEER KUMAR", "gender": "Male", "company": "Wipro - Elite", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 13, "rollNo": "2100090019", "name": "YALAMANCHILI SAMEERA", "gender": "Female", "company": "Coforge", "ctc": "8.5 LPA", "ctcNum": 8.5 },
    { "id": 14, "rollNo": "2100090020", "name": "MUSUNURU HARI KIRAN", "gender": "Male", "company": "Ulearn", "ctc": "3.5 to 4.5 LPA", "ctcNum": 4.5 },
    { "id": 15, "rollNo": "2100090021", "name": "VARUN SAI NANDI", "gender": "Male", "company": "Taurus", "ctc": "2.4 LPA", "ctcNum": 2.4 },
    { "id": 16, "rollNo": "2100090022", "name": "PARUPALLI VENU SAINADH", "gender": "Male", "company": "NCR Alteos", "ctc": "3.3 LPA", "ctcNum": 3.3 },
    { "id": 17, "rollNo": "2100090023", "name": "PONNALURI VENKATA DURGA NAGASREE", "gender": "Female", "company": "Capgemini", "ctc": "4.25 LPA", "ctcNum": 4.25 },
    { "id": 18, "rollNo": "2100090024", "name": "PULLABHOTLA  YASASWINI", "gender": "Female", "company": "LearnFlu EduTech", "ctc": "4 to 6 LPA", "ctcNum": 6 },
    { "id": 19, "rollNo": "2100090025", "name": "SUBHASREE SIRAM", "gender": "Female", "company": "LearnFlu EduTech", "ctc": "4 to 6 LPA", "ctcNum": 6 },
    { "id": 20, "rollNo": "2100090026", "name": "ULLAMGUNTA  ARYA VARDHAN BHARATH", "gender": "Male", "company": "MediaMint", "ctc": "3.2 LPA", "ctcNum": 3.2 },
    { "id": 21, "rollNo": "2100090027", "name": "HEMA VARDHAN VELAGA", "gender": "Male", "company": "LearnFlu EduTech", "ctc": "4 to 6 LPA", "ctcNum": 6 },
    { "id": 22, "rollNo": "2100090028", "name": "VELAGALA  SUSMITHA", "gender": "Female", "company": "Taurus", "ctc": "2.4 LPA", "ctcNum": 2.4 },
    { "id": 23, "rollNo": "2100090029", "name": "VEMPARALA  REVATHI", "gender": "Female", "company": "LearnFlu EduTech", "ctc": "4 to 6 LPA", "ctcNum": 6 },
    { "id": 24, "rollNo": "2100090031", "name": "KAKANI VENKAT  RAMANA", "gender": "Male", "company": "Omega Healthcare", "ctc": "4.4 LPA", "ctcNum": 4.4 },
    { "id": 25, "rollNo": "2100090034", "name": "AISHWARYA  CHEBROLU", "gender": "Female", "company": "Capgemini", "ctc": "4.25 LPA", "ctcNum": 4.25 },
    { "id": 26, "rollNo": "2100090038", "name": "TADIBOINA SURYA DEV", "gender": "Male", "company": "Taurus", "ctc": "2.4 LPA", "ctcNum": 2.4 },
    { "id": 27, "rollNo": "2100090040", "name": "PUJYAM V S S N K DHEERAJ", "gender": "Male", "company": "NCR Alteos", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 28, "rollNo": "2100090043", "name": "YASASWI LAKSHMI  ELURI", "gender": "Female", "company": "LearnFlu EduTech", "ctc": "4 to 6 LPA", "ctcNum": 6 },
    { "id": 29, "rollNo": "2100090046", "name": "NARUKULLA  HEMANTH", "gender": "Male", "company": "LearnFlu EduTech", "ctc": "4 to 6 LPA", "ctcNum": 6 },
    { "id": 30, "rollNo": "2100090048", "name": "YALAMANENI PADMAVATHIDEVI", "gender": "Female", "company": "CTS (Cognizant)", "ctc": "6.75 LPA", "ctcNum": 6.75 },
    { "id": 31, "rollNo": "2100090049", "name": "IJJAROTU   JASHWANTH", "gender": "Male", "company": "Taurus", "ctc": "3 LPA", "ctcNum": 3 },
    { "id": 32, "rollNo": "2100090051", "name": "MORAM TEJASH KUMAR", "gender": "Male", "company": "NCR Alteos", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 33, "rollNo": "2100090053", "name": "KANUMURI VINAY VARMA", "gender": "Male", "company": "TCS NINJA", "ctc": "3.36 to 3.6 LPA", "ctcNum": 3.6 },
    { "id": 34, "rollNo": "2100090054", "name": "JALLEDA SUBHASH", "gender": "Male", "company": "NXTSYNC Pvt Ltd", "ctc": "5.5 LPA", "ctcNum": 5.5 },
    { "id": 35, "rollNo": "2100090055", "name": "CHIRUKURI SAHITHI", "gender": "Female", "company": "TCS NINJA", "ctc": "3.36 to 3.6 LPA", "ctcNum": 3.6 },
    { "id": 36, "rollNo": "2100090058", "name": "MIRIYALA JITENDRA SAI", "gender": "Male", "company": "NCR Alteos", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 37, "rollNo": "2100090059", "name": "SARANYA VADLAMUDI", "gender": "Female", "company": "Taurus", "ctc": "2.4 LPA", "ctcNum": 2.4 },
    { "id": 38, "rollNo": "2100090061", "name": "DODDAPANENI MEGHANA CHOUDHARY", "gender": "Female", "company": "TCS NINJA", "ctc": "3.6 LPA", "ctcNum": 3.6 },
    { "id": 39, "rollNo": "2100090062", "name": "SHAIK AMEEN", "gender": "Male", "company": "Capgemini", "ctc": "4.25 LPA", "ctcNum": 4.25 },
    { "id": 40, "rollNo": "2100090063", "name": "KONDAMUDI  TRIVIKRAM", "gender": "Male", "company": "Capgemini", "ctc": "4.25 LPA", "ctcNum": 4.25 },
    { "id": 41, "rollNo": "2100090065", "name": "NIJAMPUDI TANISH CHANDRA", "gender": "Male", "company": "Wipro - Elite", "ctc": "5.2 LPA", "ctcNum": 5.2 },
    { "id": 42, "rollNo": "2100090066", "name": "RASAGNA DEVI LEELA SAI KAVULURI", "gender": "Female", "company": "BNY MELLON", "ctc": "22 LPA", "ctcNum": 22 },
    { "id": 43, "rollNo": "2100090067", "name": "MURUKUTLA RAVALI", "gender": "Female", "company": "Cognizant GenC", "ctc": "7.6 LPA", "ctcNum": 7.6 },
    { "id": 44, "rollNo": "2100090070", "name": "YEGGINA CHARAN NAGA PANDARINADH", "gender": "Male", "company": "Sutherland Global Services", "ctc": "2.4 to 3 LPA", "ctcNum": 3 },
    { "id": 45, "rollNo": "2100090071", "name": "PRATHYODHAN  GORLE", "gender": "Male", "company": "Intellipaat Software Solutions Pvt Ltd", "ctc": "9 LPA", "ctcNum": 9 },
    { "id": 46, "rollNo": "2100090072", "name": "JAMPANI PALLAVI", "gender": "Female", "company": "HP Inc", "ctc": "8 LPA", "ctcNum": 8 },
    { "id": 47, "rollNo": "2100090073", "name": "GINJUPALLI AVINASH CHOWDARY", "gender": "Male", "company": "TCS DIGITAL", "ctc": "7 LPA", "ctcNum": 7 },
    { "id": 48, "rollNo": "2100090074", "name": "PASAM CHANDRA SEKHAR REDDY", "gender": "Male", "company": "Tech Mahindra", "ctc": "3.25 LPA", "ctcNum": 3.25 },
    { "id": 49, "rollNo": "2100090078", "name": "ROSHAN  VAKA", "gender": "Male", "company": "LTI Mindtree", "ctc": "4.05 LPA", "ctcNum": 4.05 },
    { "id": 50, "rollNo": "2100090082", "name": "CHINTHA  LOHITHA", "gender": "Female", "company": "Capgemini", "ctc": "4.25 LPA", "ctcNum": 4.25 },
    { "id": 51, "rollNo": "2100090083", "name": "BUDDI HARSHA VARDHAN", "gender": "Male", "company": "TCS NINJA", "ctc": "3.36 to 3.6 LPA", "ctcNum": 3.6 },
    { "id": 52, "rollNo": "2100090086", "name": "VALLABHANENI  VIVEK", "gender": "Male", "company": "TCS NINJA", "ctc": "4.05 LPA", "ctcNum": 4.05 },
    { "id": 53, "rollNo": "2100090087", "name": "GANGARAPU  NIKHILESH", "gender": "Male", "company": "CTS (Cognizant)", "ctc": "6.75 LPA", "ctcNum": 6.75 },
    { "id": 54, "rollNo": "2100090088", "name": "YADAVALLI  NIKHIL", "gender": "Male", "company": "TCS DIGITAL", "ctc": "7 LPA", "ctcNum": 7 },
    { "id": 55, "rollNo": "2100090089", "name": "GIRISH KUMAR PENDEM", "gender": "Male", "company": "LTI Mindtree", "ctc": "4.05 LPA", "ctcNum": 4.05 },
    { "id": 56, "rollNo": "2100090092", "name": "MOHAMMED JAVEED PASHA", "gender": "Male", "company": "Wipro - Elite", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 57, "rollNo": "2100090094", "name": "DANDU ABHISHEK", "gender": "Male", "company": "Taurus", "ctc": "3.6 LPA", "ctcNum": 3.6 },
    { "id": 58, "rollNo": "2100090095", "name": "MANKENA NARESH", "gender": "Male", "company": "Coforge", "ctc": "4.2 LPA", "ctcNum": 4.2 },
    { "id": 59, "rollNo": "2100090097", "name": "ASODI VAMSI KRISHNA REDDY", "gender": "Male", "company": "TCS DIGITAL", "ctc": "7 LPA", "ctcNum": 7 },
    { "id": 60, "rollNo": "2100090100", "name": "MUKKAMALA  SUMANTH", "gender": "Male", "company": "Oracle Solution Services (India) Private Limited", "ctc": "10.25 LPA", "ctcNum": 10.25 },
    { "id": 61, "rollNo": "2100090109", "name": "MUNDRA LAKSHMIPRASANNA", "gender": "Female", "company": "TCS NINJA", "ctc": "8 LPA", "ctcNum": 8 },
    { "id": 62, "rollNo": "2100090110", "name": "SATHI  SATWIK  REDDY", "gender": "Male", "company": "TCS NINJA", "ctc": "3.6 LPA", "ctcNum": 3.6 },
    { "id": 63, "rollNo": "2100090112", "name": "ANUMULA HEMANTH REDDY", "gender": "Male", "company": "Sutherland Global Services", "ctc": "2.4 to 3 LPA", "ctcNum": 3 },
    { "id": 64, "rollNo": "2100090113", "name": "SONTI VENKATA SURYA MAHESH", "gender": "Male", "company": "SLK Software", "ctc": "3.2 LPA", "ctcNum": 3.2 },
    { "id": 65, "rollNo": "2100090117", "name": "BRUNDA VEMULAPALLI", "gender": "Female", "company": "Taurus (Altruist)", "ctc": "2.4 LPA", "ctcNum": 2.4 },
    { "id": 66, "rollNo": "2100090118", "name": "MANDADAPU SAI UTTEJ", "gender": "Male", "company": "Capgemini", "ctc": "4.25 LPA", "ctcNum": 4.25 },
    { "id": 67, "rollNo": "2100090119", "name": "RUPESH VARDHAN GOWTHU", "gender": "Male", "company": "NCR Alteos", "ctc": "5.5 LPA", "ctcNum": 5.5 },
    { "id": 68, "rollNo": "2100090120", "name": "JAHNAVI  NADENDLA", "gender": "Female", "company": "Anasol Consultancy Services Pvt Ltd", "ctc": "5 LPA", "ctcNum": 5 },
    { "id": 69, "rollNo": "2100090121", "name": "GARNEPUDI NARASIMHA KUMAR", "gender": "Male", "company": "Wipro - Elite", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 70, "rollNo": "2100090122", "name": "KADIYALA  SRINIJA", "gender": "Female", "company": "Capgemini", "ctc": "4.25 LPA", "ctcNum": 4.25 },
    { "id": 71, "rollNo": "2100090123", "name": "BHAVYA  SRI KRUTHIVENTY", "gender": "Female", "company": "TCS NINJA", "ctc": "3.36 to 3.6 LPA", "ctcNum": 3.6 },
    { "id": 72, "rollNo": "2100090124", "name": "YAMINI  RAVULAPALLI", "gender": "Female", "company": "Ulearn", "ctc": "3.5 to 4.5 LPA", "ctcNum": 4.5 },
    { "id": 73, "rollNo": "2100090125", "name": "AVULA SANJAY BHARGAV", "gender": "Male", "company": "Capgemini", "ctc": "4.25 LPA", "ctcNum": 4.25 },
    { "id": 74, "rollNo": "2100090126", "name": "UPPULURI SAI VIVEK", "gender": "Male", "company": "Taurus", "ctc": "2.4 LPA", "ctcNum": 2.4 },
    { "id": 75, "rollNo": "2100090127", "name": "NAVULURI BRAHMINI CHOWDARY", "gender": "Female", "company": "NXTSYNC Pvt Ltd", "ctc": "5.5 LPA", "ctcNum": 5.5 },
    { "id": 76, "rollNo": "2100090128", "name": "NELAKUDITI NAGA VENKATESWARA PRAHLAD", "gender": "Male", "company": "LearnFlu EduTech", "ctc": "4 to 6 LPA", "ctcNum": 6 },
    { "id": 77, "rollNo": "2100090129", "name": "JAKKA  SHIRINI", "gender": "Female", "company": "TCS NINJA", "ctc": "3.36 to 3.6 LPA", "ctcNum": 3.6 },
    { "id": 78, "rollNo": "2100090131", "name": "SHAIK IRFAN", "gender": "Male", "company": "Wipro Elite", "ctc": "5.5 LPA", "ctcNum": 5.5 },
    { "id": 79, "rollNo": "2100090133", "name": "MD ZIYA AFREEN", "gender": "Female", "company": "EPAM Systems India Pvt Ltd", "ctc": "8 LPA", "ctcNum": 8 },
    { "id": 80, "rollNo": "2100090134", "name": "PUNNAVALLI   BHARGAV", "gender": "Male", "company": "Taurus", "ctc": "2.4 LPA", "ctcNum": 2.4 },
    { "id": 81, "rollNo": "2100090135", "name": "PALETI GANESH", "gender": "Male", "company": "TCS NINJA", "ctc": "3.36 to 3.6 LPA", "ctcNum": 3.6 },
    { "id": 82, "rollNo": "2100090136", "name": "KARNENA HEMANTH KUMAR", "gender": "Male", "company": "Ulearn", "ctc": "3.5 to 4.5 LPA", "ctcNum": 4.5 },
    { "id": 83, "rollNo": "2100090140", "name": "MOHAMMAD  KHAJA SHAIK", "gender": "Male", "company": "CTS (Cognizant)", "ctc": "6.75 LPA", "ctcNum": 6.75 },
    { "id": 84, "rollNo": "2100090142", "name": "MOHITH VARDHAN CHADARAJUPALLI", "gender": "Male", "company": "Wipro - Elite", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 85, "rollNo": "2100090143", "name": "POTTURI ASHOK NARAYANA", "gender": "Male", "company": "K12 Techno Services Pvt. Ltd", "ctc": "5 LPA", "ctcNum": 5 },
    { "id": 86, "rollNo": "2100090144", "name": "MD SAIF", "gender": "Male", "company": "Ediglobe", "ctc": "4 to 5.5 LPA", "ctcNum": 5.5 },
    { "id": 87, "rollNo": "2100090145", "name": "KESA SAHITHI SAI SUDHEERA", "gender": "Female", "company": "Tech Mahindra", "ctc": "3.25 LPA", "ctcNum": 3.25 },
    { "id": 88, "rollNo": "2100090146", "name": "AKASH  PONUGOTI", "gender": "Male", "company": "Taurus", "ctc": "2.4 LPA", "ctcNum": 2.4 },
    { "id": 89, "rollNo": "2100090147", "name": "KORLEPARA NEHA", "gender": "Female", "company": "Tech Mahindra", "ctc": "3.25 LPA", "ctcNum": 3.25 },
    { "id": 90, "rollNo": "2100090150", "name": "REVATHI  MURUKUTLA", "gender": "Female", "company": "Capgemini", "ctc": "4.25 LPA", "ctcNum": 4.25 },
    { "id": 91, "rollNo": "2100090151", "name": "YELLETI DURGA SAI DEEPAK", "gender": "Male", "company": "Oracle India Pvt. Ltd", "ctc": "10.54 LPA", "ctcNum": 10.54 },
    { "id": 92, "rollNo": "2100090153", "name": "TEDLAPU  SANJAY SWAMY", "gender": "Male", "company": "TCS NINJA", "ctc": "3.6 LPA", "ctcNum": 3.6 },
    { "id": 93, "rollNo": "2100090154", "name": "NAKKA HRUSHIKESH BHANU", "gender": "Male", "company": "NCR Alteos", "ctc": "3.3 LPA", "ctcNum": 3.3 },
    { "id": 94, "rollNo": "2100090155", "name": "SATUJODA SAI DEEPAK", "gender": "Male", "company": "Inspire Leap", "ctc": "6.5 LPA", "ctcNum": 6.5 },
    { "id": 95, "rollNo": "2100090156", "name": "KONA LAKSHMI PRAMEELA", "gender": "Female", "company": "Tech Mahindra", "ctc": "3.25 LPA", "ctcNum": 3.25 },
    { "id": 96, "rollNo": "2100090157", "name": "ANUMOLU VARSHITHA SATYA NAGU", "gender": "Female", "company": "Sutherland Global Services", "ctc": "2.4 to 3 LPA", "ctcNum": 3 },
    { "id": 97, "rollNo": "2100090158", "name": "VENKATA SAI TEJA TALAPANENI", "gender": "Male", "company": "Taurus", "ctc": "2.4 LPA", "ctcNum": 2.4 },
    { "id": 98, "rollNo": "2100090159", "name": "MITTA DINESH GOPI", "gender": "Male", "company": "TCS NINJA", "ctc": "3.36 to 3.6 LPA", "ctcNum": 3.6 },
    { "id": 99, "rollNo": "2100090162", "name": "GADDAM JAYA KRISHNA", "gender": "Male", "company": "Infosys", "ctc": "3.6 LPA", "ctcNum": 3.6 },
    { "id": 100, "rollNo": "2100090164", "name": "NEELA JAYANTH", "gender": "Male", "company": "Capgemini", "ctc": "4.25 LPA", "ctcNum": 4.25 },
    { "id": 101, "rollNo": "2100090166", "name": "JANAPATI   KASAIAH", "gender": "Male", "company": "Infosys", "ctc": "3.6 LPA", "ctcNum": 3.6 },
    { "id": 102, "rollNo": "2100090167", "name": "PENTAKOTA PAVAN KUMAR", "gender": "Male", "company": "Taurus", "ctc": "2.4 LPA", "ctcNum": 2.4 },
    { "id": 103, "rollNo": "2100090168", "name": "MAMIDALA BHAVYA SAI", "gender": "Female", "company": "Cognizant GenC", "ctc": "4 LPA", "ctcNum": 4 },
    { "id": 104, "rollNo": "2100090169", "name": "MYTHRAYIE   KALISETTY", "gender": "Female", "company": "TCS NINJA", "ctc": "3.36 to 3.6 LPA", "ctcNum": 3.6 },
    { "id": 105, "rollNo": "2100090170", "name": "ARIKATLA SAI VENKATA PRASANNA KUMAR", "gender": "Male", "company": "Ulearn", "ctc": "3.5 to 4.5 LPA", "ctcNum": 4.5 },
    { "id": 106, "rollNo": "2100090171", "name": "KARUMURI RAMA CHARITHA", "gender": "Female", "company": "YASH Technologies", "ctc": "4 LPA", "ctcNum": 4 },
    { "id": 107, "rollNo": "2100090172", "name": "SHAIK BAJI", "gender": "Male", "company": "NXTSYNC Pvt Ltd", "ctc": "6 LPA", "ctcNum": 6 },
    { "id": 108, "rollNo": "2100090173", "name": "VUTUKURI LAKSHMI PRASANNA", "gender": "Female", "company": "Tech Mahindra", "ctc": "3.25 LPA", "ctcNum": 3.25 },
    { "id": 109, "rollNo": "2100090174", "name": "SAIKRISHNA  KADAPATHRI", "gender": "Male", "company": "Taurus", "ctc": "2.4 LPA", "ctcNum": 2.4 },
    { "id": 110, "rollNo": "2100090176", "name": "UMA MAHESH CHANDU", "gender": "Male", "company": "NCR Alteos", "ctc": "5.5 LPA", "ctcNum": 5.5 },
    { "id": 111, "rollNo": "2100090178", "name": "MADDIREDDY DEVI SRI PRASAD", "gender": "Male", "company": "Ulearn", "ctc": "3.5 to 4.5 LPA", "ctcNum": 4.5 },
    { "id": 112, "rollNo": "2100090179", "name": "MEDISETTI DURGA PRASAD", "gender": "Male", "company": "SLK Software", "ctc": "3.2 LPA", "ctcNum": 3.2 },
    { "id": 113, "rollNo": "2100090180", "name": "PENTA CHAND KOWSIK", "gender": "Male", "company": "Inspire Leap", "ctc": "6.5 LPA", "ctcNum": 6.5 },
    { "id": 114, "rollNo": "2100090181", "name": "NEELAKANTHAM KUSUMA   CHANDRIKA", "gender": "Female", "company": "Capgemini", "ctc": "4.25 LPA", "ctcNum": 4.25 },
    { "id": 115, "rollNo": "2100090185", "name": "ROHIT KUMAR", "gender": "Male", "company": "Wipro - Elite", "ctc": "5.5 LPA", "ctcNum": 5.5 },
    { "id": 116, "rollNo": "2100090186", "name": "SNIGDHA SINDUSHA MANTHA", "gender": "Female", "company": "Plasmid Innovation Pvt Ltd.", "ctc": "4 to 6 LPA", "ctcNum": 6 },
    { "id": 117, "rollNo": "2100090187", "name": "NIRANJAN SAH", "gender": "Male", "company": "Digital Sangalo Pvt Ltd", "ctc": "5 LPA", "ctcNum": 5 },
    { "id": 118, "rollNo": "2100099001", "name": "L SAMBA SIVA RAO", "gender": "Male", "company": "Eduholic", "ctc": "5.5 LPA", "ctcNum": 5.5 },
    { "id": 119, "rollNo": "2100099002", "name": "MADDINENI SRI NAMRATHA", "gender": "Female", "company": "Inspire Leap", "ctc": "6.5 LPA", "ctcNum": 6.5 },
    { "id": 120, "rollNo": "2100099003", "name": "AREPALLI SAHITHI", "gender": "Female", "company": "Taurus", "ctc": "2.4 LPA", "ctcNum": 2.4 },
    { "id": 121, "rollNo": "2100099004", "name": "ALLAGADDA KARTHIK KUMAR REDDY", "gender": "Male", "company": "Dyooti", "ctc": "4 LPA", "ctcNum": 4 },
    { "id": 122, "rollNo": "2100099007", "name": "MEDAMDRAVU JAI SAI DATTA NIKHIL", "gender": "Male", "company": "Wipro - Elite", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 123, "rollNo": "2100099008", "name": "VADDI KIRAN SAI", "gender": "Male", "company": "Wipro - Elite", "ctc": "6 LPA", "ctcNum": 6 },
    { "id": 124, "rollNo": "2100099010", "name": "ATAUL MUSTAFA", "gender": "Male", "company": "NXTSYNC Pvt Ltd", "ctc": "6.5 LPA", "ctcNum": 6.5 },
    { "id": 125, "rollNo": "2100090052", "name": "MOHAMMED WAAJID ALI", "gender": "Male", "company": "Tech Mahindra", "ctc": "3.08 LPA", "ctcNum": 3.08 },
    { "id": 126, "rollNo": "2100090096", "name": "MATTAPALLI V  S C K KEDHAR NATH", "gender": "Male", "company": "SmartBrains", "ctc": "2.2 LPA", "ctcNum": 2.2 },
    { "id": 127, "rollNo": "2100090035", "name": "CHEKURI  GREESHMANTH", "gender": "Male", "company": "ATS Pvt Ltd", "ctc": "4 LPA", "ctcNum": 4 },
    { "id": 128, "rollNo": "2100090102", "name": "DONDAPATI RUPESH", "gender": "Male", "company": "GP Info Tech Pvt Ltd", "ctc": "5 LPA", "ctcNum": 5 },
    { "id": 129, "rollNo": "2100090085", "name": "VARUN  AVIRNENI", "gender": "Male", "company": "Axzora Private Limited", "ctc": "4.5 LPA", "ctcNum": 4.5 }

       ],

        /* ---------- y20 (kept as you provided; includes both curated and full set) ---------- */
        "y20": [
         

    { "id": 1, "rollNo": "2000050004", "name": "Nohith Borusu", "gender": "Male", "company": "Microland", "ctc": "7 LPA", "ctcNum": 7 },
    { "id": 2, "rollNo": "2000050008", "name": "vanapalli Durga Prasanth", "gender": "Male", "company": "Talent Serve", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 3, "rollNo": "2000050009", "name": "SAI NITHIN DINTAKURTHI", "gender": "Male", "company": "Barclays", "ctc": "13.5", "ctcNum": 13.5 },
    { "id": 4, "rollNo": "2000050015", "name": "Badampudi deekshitha sharma", "gender": "Female", "company": "Talent Serve", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 5, "rollNo": "2000090006", "name": "Gudibandi chaitanya simha reddy", "gender": "Male", "company": "Dexterity Edtech", "ctc": "4 LPA", "ctcNum": 4 },
    { "id": 6, "rollNo": "2000090007", "name": "Dushyanth Chalasani", "gender": "Male", "company": "INRY", "ctc": "8.51", "ctcNum": 8.51 },
    { "id": 7, "rollNo": "2000090011", "name": "Sri Lakshmi  Gunta", "gender": "Female", "company": "Tech Mahindra", "ctc": "4 LPA", "ctcNum": 4 },
    { "id": 8, "rollNo": "2000090012", "name": "J Apoorva", "gender": "Female", "company": "Acmegrade Phase 2", "ctc": "4 LPA", "ctcNum": 4 },
    { "id": 9, "rollNo": "2000090013", "name": "JAHNAVI DURGA TIRUMANI", "gender": "Female", "company": "Ulearn Phase 2", "ctc": "3.6 LPA", "ctcNum": 3.6 },
    { "id": 10, "rollNo": "2000090015", "name": "Dunti Sarath Sai Chowdary Kantamneni", "gender": "Male", "company": "Ulearn Phase 2", "ctc": "3.6", "ctcNum": 3.6 },
    { "id": 11, "rollNo": "2000090018", "name": "MEGHANA KANTHETI", "gender": "Female", "company": "TCS Digital", "ctc": "7 LPA", "ctcNum": 7 },
    { "id": 12, "rollNo": "2000090019", "name": "KHILJI ABU SUFIYAN HUSSAIN", "gender": "Male", "company": "Prolifics Corporation", "ctc": "4 LPA", "ctcNum": 4 },
    { "id": 13, "rollNo": "2000090021", "name": "Lalitha S N Satwika Bhogireddy", "gender": "Female", "company": "Accenture Hack Diva", "ctc": "5.5 LPA", "ctcNum": 5.5 },
    { "id": 14, "rollNo": "2000090022", "name": "Karthik Reddy Munnangi", "gender": "Male", "company": "Standard Chartered GBS", "ctc": "8.25", "ctcNum": 8.25 },
    { "id": 15, "rollNo": "2000090030", "name": "Venakta karthik Raparla", "gender": "Male", "company": "Altruist Technologies", "ctc": "3", "ctcNum": 3 },
    { "id": 16, "rollNo": "2000090032", "name": "SAKALA RAHUL", "gender": "Male", "company": "WIPRO", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 17, "rollNo": "2000090033", "name": "Patchigolla Sampath", "gender": "Male", "company": "Ulearn Phase 2", "ctc": "3.6", "ctcNum": 3.6 },
    { "id": 18, "rollNo": "2000090036", "name": "SHYAM CHOWDARY THAMMAREDDY", "gender": "Male", "company": "Academor", "ctc": "4", "ctcNum": 4 },
    { "id": 19, "rollNo": "2000090042", "name": "Vignesh B", "gender": "Male", "company": "Dexterity Edtech", "ctc": "4 LPA", "ctcNum": 4 },
    { "id": 20, "rollNo": "2000090043", "name": "Vijay Mylavarapu", "gender": "Male", "company": "Quantuva", "ctc": "3.6", "ctcNum": 3.6 },
    { "id": 21, "rollNo": "2000090045", "name": "Chithirala Harsha Vardhan", "gender": "Male", "company": "Skill Forge", "ctc": "4.32 LPA", "ctcNum": 4.32 },
    { "id": 22, "rollNo": "2000090049", "name": "Vahinipathi Surya Kumar", "gender": "Male", "company": "Analog Devices India Pvt. Ltd", "ctc": "28", "ctcNum": 28 },
    { "id": 23, "rollNo": "2000090052", "name": "PAVAN KUMAR PALAKAYALA", "gender": "Male", "company": "Talent Serve", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 24, "rollNo": "2000090053", "name": "SRI RAM CHITTURI", "gender": "Male", "company": "ULearn", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 25, "rollNo": "2000090054", "name": "Gutta Sai Avinash", "gender": "Male", "company": "Skill Forge", "ctc": "4.32 LPA", "ctcNum": 4.32 },
    { "id": 26, "rollNo": "2000090056", "name": "Kataru Bala Abishek", "gender": "Male", "company": "ULearn", "ctc": "3.6", "ctcNum": 3.6 },
    { "id": 27, "rollNo": "2000090057", "name": "Kolli Charan Naidu", "gender": "Male", "company": "Teachnook", "ctc": "4", "ctcNum": 4 },
    { "id": 28, "rollNo": "2000090058", "name": "BHAVANI POSANI", "gender": "Female", "company": "ULearn", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 29, "rollNo": "2000090060", "name": "SHAIK ELIYAZ", "gender": "Male", "company": "ULearn", "ctc": "3.6", "ctcNum": 3.6 },
    { "id": 30, "rollNo": "2000090061", "name": "Are Jaideep", "gender": "Male", "company": "Academor", "ctc": "4", "ctcNum": 4 },
    { "id": 31, "rollNo": "2000090062", "name": "Ranganadham Sivarama Krishna", "gender": "Male", "company": "Talent Serve", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 32, "rollNo": "2000090063", "name": "Karthik Reddy Veluru", "gender": "Male", "company": "JP Morgan", "ctc": "20", "ctcNum": 20 },
    { "id": 33, "rollNo": "2000090064", "name": "Darapureddy Veera Mounika", "gender": "Female", "company": "Ulearn Phase 2", "ctc": "3.6", "ctcNum": 3.6 },
    { "id": 34, "rollNo": "2000090065", "name": "Gayathri Kota", "gender": "Female", "company": "Barclays", "ctc": "13.5 LPA", "ctcNum": 13.5 },
    { "id": 35, "rollNo": "2000090074", "name": "PUJALA BHOGESWARA NARASIMHARAO", "gender": "Male", "company": "Ulearn Phase 2", "ctc": "3.6", "ctcNum": 3.6 },
    { "id": 36, "rollNo": "2000090076", "name": "SUNKARA TAGORE", "gender": "Male", "company": "Skill Intern", "ctc": "4.2 LPA", "ctcNum": 4.2 },
    { "id": 37, "rollNo": "2000090077", "name": "SRIRAMULA Mohan Siddardha", "gender": "Male", "company": "Talent Serve", "ctc": "4.5", "ctcNum": 4.5 },
    { "id": 38, "rollNo": "2000090078", "name": "Aravapalli Asritha", "gender": "Female", "company": "IBM", "ctc": "9 LPA", "ctcNum": 9 },
    { "id": 39, "rollNo": "2000090079", "name": "Pendurthi Sri Teja", "gender": "Male", "company": "Talent Serve", "ctc": "4.5", "ctcNum": 4.5 },
    { "id": 40, "rollNo": "2000090086", "name": "Dhanadeep Vankayalapati", "gender": "Male", "company": "Savantis", "ctc": "3.6 LPA", "ctcNum": 3.6 },
    { "id": 41, "rollNo": "2000090089", "name": "SHAIK NAZEERA KHAMAR", "gender": "Female", "company": "Pie Info Comm", "ctc": "6.5", "ctcNum": 6.5 },
    { "id": 42, "rollNo": "2000090091", "name": "Busanee Aditya", "gender": "Male", "company": "Skill Forge", "ctc": "4.32 LPA", "ctcNum": 4.32 },
    { "id": 43, "rollNo": "2000090092", "name": "Jaikesh madapati", "gender": "Male", "company": "Talent Serve", "ctc": "4.5", "ctcNum": 4.5 },
    { "id": 44, "rollNo": "2000090093", "name": "MODUGULA  NARASIMHULU ROYAL", "gender": "Male", "company": "Teachnook", "ctc": "4", "ctcNum": 4 },
    { "id": 45, "rollNo": "2000090094", "name": "Nikitha Bommineni", "gender": "Female", "company": "Accenture Hack Diva", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 46, "rollNo": "2000090099", "name": "Bhavitha Kola", "gender": "Female", "company": "Talent Serve", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 47, "rollNo": "2000090104", "name": "MAREDLA GOWSHIK", "gender": "Male", "company": "Talent Serve", "ctc": "4.5", "ctcNum": 4.5 },
    { "id": 48, "rollNo": "2000090109", "name": "sanjeet Rapaka", "gender": "Male", "company": "Talent Serve", "ctc": "4.5", "ctcNum": 4.5 },
    { "id": 49, "rollNo": "2000090113", "name": "Nadipineni karthikeya", "gender": "Male", "company": "Skill Forge", "ctc": "4.32 LPA", "ctcNum": 4.32 },
    { "id": 50, "rollNo": "2000090114", "name": "UNIKELA VENKAT", "gender": "Male", "company": "UST Global", "ctc": "4.25 LPA", "ctcNum": 4.25 },
    { "id": 51, "rollNo": "2000090115", "name": "Potru Chandu Kiran", "gender": "Male", "company": "TCS ServiceNow", "ctc": "7 LPA", "ctcNum": 7 },
    { "id": 52, "rollNo": "2000090116", "name": "V V SATYANARAYANA CHALLA", "gender": "Male", "company": "Talent Serve", "ctc": "4.5 LPA", "ctcNum": 4.5 },
    { "id": 53, "rollNo": "2000090118", "name": "NANDULA  SATYANARAYANA MURTHY", "gender": "Male", "company": "Standard Chartered GBS", "ctc": "8.25", "ctcNum": 8.25 },
    { "id": 54, "rollNo": "2000090119", "name": "Tonesh Kosanam", "gender": "Male", "company": "Collab Partnerz (Adaps Digital)", "ctc": "5", "ctcNum": 5 },
    { "id": 55, "rollNo": "2000090120", "name": "Kalipindi  Navya", "gender": "Female", "company": "Teachnook Phase 2", "ctc": "4", "ctcNum": 4 },
    { "id": 56, "rollNo": "2000090121", "name": "Diyyala  Sravani", "gender": "Female", "company": "TCS Digital", "ctc": "7 LPA", "ctcNum": 7 },
    { "id": 57, "rollNo": "2000090122", "name": "Vishwa Teja Goud Manda", "gender": "Male", "company": "Ulearn Phase 2", "ctc": "3.6", "ctcNum": 3.6 },
    { "id": 58, "rollNo": "2000090126", "name": "RAPARLA SOMANTH", "gender": "Male", "company": "Dexterity Edtech", "ctc": "4 LPA", "ctcNum": 4 },
    { "id": 59, "rollNo": "2000090131", "name": "Manas Ranjan Bishi", "gender": "Male", "company": "Pie Info Comm", "ctc": "6.5", "ctcNum": 6.5 },
    { "id": 60, "rollNo": "2000090134", "name": "Sai Pavan Jasti", "gender": "Male", "company": "ULearn", "ctc": "3.6", "ctcNum": 3.6 },
    { "id": 61, "rollNo": "2000090135", "name": "Harika Attanti", "gender": "Female", "company": "Barclays", "ctc": "13.32", "ctcNum": 13.32 },
    { "id": 62, "rollNo": "2000090136", "name": "Vishnu Nidamanuri", "gender": "Male", "company": "KPIT Phase 2", "ctc": "4.5", "ctcNum": 4.5 },
    { "id": 63, "rollNo": "2000090137", "name": "Meghanadh kolli", "gender": "Male", "company": "Altruist Technologies", "ctc": "3", "ctcNum": 3 },
    { "id": 64, "rollNo": "2000090139", "name": "Abhishek Chaudhary", "gender": "Male", "company": "Rinex Technologies Phase - 2", "ctc": "5.5", "ctcNum": 5.5 },
    { "id": 65, "rollNo": "2000090140", "name": "PAWAN JHA", "gender": "Male", "company": "Fire Campus", "ctc": "9", "ctcNum": 9 },
    { "id": 66, "rollNo": "2000090141", "name": "Kishan Kushwaha", "gender": "Male", "company": "Intellect Design", "ctc": "5", "ctcNum": 5 },
    { "id": 67, "rollNo": "2000090144", "name": "Janyavula Prabhu Kiran", "gender": "Male", "company": "Academor", "ctc": "4", "ctcNum": 4 },
    { "id": 68, "rollNo": "2000090145", "name": "Ramkrishna Mishra", "gender": "Male", "company": "Fire Campus", "ctc": "9", "ctcNum": 9 },
    { "id": 69, "rollNo": "2000099001", "name": "ABHILASH VAKA", "gender": "Male", "company": "ULearn", "ctc": "3.6", "ctcNum": 3.6 },
    { "id": 70, "rollNo": "2000099002", "name": "SHAIK HASEEB", "gender": "Male", "company": "HealthEdge", "ctc": "8 to 12", "ctcNum": 12 },
    { "id": 71, "rollNo": "2000099003", "name": "Tallapureddy Sai Bhargav Reddy", "gender": "Male", "company": "Talent Serve", "ctc": "4.5 LPA", "ctcNum": 4.5 }
  ]

  },

  awards: [
    { id:1, empId:"7367", name:"Dr. Bhaskar Marapelli", award:"Dr. A. P. J. Abdul Kalam Global Icon Award", agency:"WELRED Foundation",                           level:"International", date:"02.12.2025", ref:"WF/6460/2025",     academicYear:"2025-26" },
    { id:2, empId:"6059", name:"Dr. V.V.S Sasank",      award:"Yuva Acharya Award",                         agency:"Bharat Education Excellence Awards (Braino Vision)", level:"National",   date:"2025",       ref:"NOM-BEEA25-0212", academicYear:"2025-26" },
    { id:3, empId:"9024", name:"Dr. G. Sateesh",         award:"Yuva Acharya Award — Professor of the Year", agency:"Bharat Education Excellence Awards 2025",     level:"National",      date:"2025",       ref:"",                academicYear:"2025-26" },
    { id:4, empId:"6059", name:"Dr. V.V.S Sasank",      award:"Dr. A. P. J. Abdul Kalam Global Icon Award", agency:"WELRED Foundation",                           level:"International", date:"03.12.2025", ref:"WF/6474/2025",     academicYear:"2025-26" },
     ],


  conferences: [
    
    {
      "id": 2,
      "empId": "5291",
      "name": "Dr Amarendra K",
      "academicYear": "2022-2023",
      "title": "International Conference on Computing Methodologies and Communication (ICCMC 2023)",
      "paper": "Natural Language Processing Using Convolutional Neural Networks",
      "level": "International"
    },
    {
      "id": 3,
      "empId": "5291",
      "name": "Dr Amarendra K",
      "academicYear": "2022-2023",
      "title": "International Conference on Computing Methodologies and Communication (ICCMC 2023)",
      "paper": "Medical Model Built on Machine Learning to Evaluating the Relationship Between the Depression and Living Standards",
      "level": "International"
    },
    {
      "id": 4,
      "empId": "5291",
      "name": "Dr Amarendra K",
      "academicYear": "2022-2023",
      "title": "2nd International Conference on Sustainable Computing and Data Communication Systems (ICSCDS 2023)",
      "paper": "Comparative Study on Forecasting Techniques by Using Cloud Services",
      "level": "International"
    },
    {
      "id": 5,
      "empId": "5659",
      "name": "Dr PVVS Srinivas",
      "academicYear": "2022-2023",
      "title": "3rd International Conference on Smart Data Intelligence (ICSMDI 2023)",
      "paper": "Deep Learning Based Lumys Skin Disease (LSD) Detection",
      "level": "International"
    },
    {
      "id": 6,
      "empId": "6274",
      "name": "Dr Ganga Rama Koteswara Rao",
      "academicYear": "2022-2023",
      "title": "2nd International Conference on Sustainable Computing and Data Communication Systems (ICSCDS 2023)",
      "paper": "Application of Blockchain Technology in the Healthcare Systems",
      "level": "International"
    },
    {
      "id": 7,
      "empId": "6332",
      "name": "Dr Jyothi NM",
      "academicYear": "2022-2023",
      "title": "IEEE WISSCON 2023",
      "paper": "AI Model for Bird Species Prediction with Detection of Rare, Migratory and Extinction Birds Using ELM Boosted by OBS",
      "level": "International"
    },
    {
      "id": 8,
      "empId": "7367",
      "name": "Dr M Bhaskar Marapelli",
      "academicYear": "2023-2024",
      "title": "ICDSNE 2023 - International Conference on Data Science and Network Engineering",
      "paper": "Enhancing Agricultural Decision Making Through Machine Learning Based Crop Yield Predictions",
      "level": "International"
    },
    {
      "id": 9,
      "empId": "5291",
      "name": "Dr Amarendra K",
      "academicYear": "2023-2024",
      "title": "5th International Conference on Inventive Research in Computing Applications (ICIRCA 2023)",
      "paper": "Enhanced Texture Analysis to Detect Fabric Stain Using Deep Learning and Gabor Filter",
      "level": "International"
    },
    {
      "id": 10,
      "empId": "7946",
      "name": "N Praveena",
      "academicYear": "2023-2024",
      "title": "7th International Conference on Electronics, Communication and Aerospace Technology (ICECA 2023)",
      "paper": "Novel Method for Attendance Marking System Using Hybrid LSTM and RNN Based Networks",
      "level": "International"
    },
    {
      "id": 11,
      "empId": "5291",
      "name": "Dr Amarendra K",
      "academicYear": "2023-2024",
      "title": "2nd International Conference on Communication, Security and Artificial Intelligence (ICCSAI 2023)",
      "paper": "Automated Leukaemia Prediction and Classification Using Deep Learning Techniques",
      "level": "International"
    },
    {
      "id": 12,
      "empId": "7937",
      "name": "Dr G Kadiravan",
      "academicYear": "2024-2025",
      "title": "International Conference on Contemporary Computing and Informatics (IC3I 2023)",
      "paper": "Research and Innovation in Next Generation Security and Privacy in Industry 5.0",
      "level": "International"
    },
    {
      "id": 13,
      "empId": "7937",
      "name": "Dr G Kadiravan",
      "academicYear": "2024-2025",
      "title": "International Conference on System, Computation, Automation and Networking (ICSCAN 2023)",
      "paper": "Dynamic Network Intrusion Detection System for Virtual Machine Environment",
      "level": "International"
    },
    {
      "id": 14,
      "empId": "8932",
      "name": "Ms Lavanya Susanna",
      "academicYear": "2024-2025",
      "title": "4th International Conference on Ubiquitous Computing and Intelligent Information Systems (ICUIS 2024)",
      "paper": "Adaptive Federated Learning for Efficient Network Traffic Management in Edge Computing",
      "level": "International"
    },
    {
      "id": 15,
      "empId": "7142",
      "name": "Dr Ashish",
      "academicYear": "2024-2025",
      "title": "3rd International Conference on Optimization Techniques in the Field of Engineering (ICOFE 2024)",
      "paper": "Next‑Gen Optimization of IoT‑Powered Smart Infrastructure in Industry 4.0",
      "level": "International"
    },
    {
      "id": 16,
      "empId": "9469",
      "name": "G Muni Nagamani",
      "academicYear": "2025-2026",
      "title": "International Conference on Innovative Emerging Technologies (ICIET 2025)",
      "paper": "Development of an Intuitive Model Integrating Dynamic Socio‑Linguistic Quantification and Escalation Mapping for Real‑Time Hate Speech Mitigation in Low‑Resource Languages",
      "level": "International"
    }
  ],

books: [
    
  { id: 1,  empId: "7367", name: "Dr M Bhaskar",              title: "Explainable Artificial Intelligence (XAI) for Transparent Decision-Making",              dates: "April 2026",          cat: "Name of the publisher",       academicYear: "2025-26" },
  { id: 2,  empId: "7367", name: "Dr M Bhaskar",              title: "Big Data Analytics",                                         dates: "23-06-2025 to 27-06-2025",       cat: "Data Science",        academicYear: "2025-26" },
  { id: 3,  empId: "7367", name: "Dr M Bhaskar",              title: "AI Agent in Action: Design, Decision Making & Deployment",   dates: "23-06-2025 to 27-06-2025",       cat: "AI / ML",             academicYear: "2025-26" },

],

  fdps: [
    
  { id: 1,  empId: "7367", name: "Dr M Bhaskar",              title: "Research Methods and Data Analysis Using SPSS",              dates: "26th to 30th May 2025",          cat: "Data Analysis",       academicYear: "2025-26" },
  { id: 2,  empId: "7367", name: "Dr M Bhaskar",              title: "Big Data Analytics",                                         dates: "23-06-2025 to 27-06-2025",       cat: "Data Science",        academicYear: "2025-26" },
  { id: 3,  empId: "7367", name: "Dr M Bhaskar",              title: "AI Agent in Action: Design, Decision Making & Deployment",   dates: "23-06-2025 to 27-06-2025",       cat: "AI / ML",             academicYear: "2025-26" },


{ id: 1,  empId: "7367", name: "Dr M Bhaskar",              title: "Research Methods and Data Analysis Using SPSS",              dates: "26th to 30th May 2025",          cat: "Data Analysis",       academicYear: "2024-25" },
  { id: 2,  empId: "7367", name: "Dr M Bhaskar",              title: "Big Data Analytics",                                         dates: "23-06-2025 to 27-06-2025",       cat: "Data Science",        academicYear: "2024-25" },
  { id: 3,  empId: "7367", name: "Dr M Bhaskar",              title: "AI Agent in Action: Design, Decision Making & Deployment",   dates: "23-06-2025 to 27-06-2025",       cat: "AI / ML",             academicYear: "2024-25" },


  { id: 4,  empId: "7442", name: "Dr B Keerthi Samhitha",     title: "Big Data Analytics",                                         dates: "23-06-2025 to 27-06-2025",       cat: "Data Science",        academicYear: "2025-26" },
  { id: 5,  empId: "7442", name: "Dr B Keerthi Samhitha",     title: "NEP 2020 Orientation and Sensitization Programme",           dates: "21-05-2025 to 29-05-2025",       cat: "NEP",                 academicYear: "2025-26" },
  { id: 6,  empId: "7442", name: "Dr B Keerthi Samhitha",     title: "Role of AI and Modern Technology in Research & Learning",   dates: "28-05-2025 to 03-06-2025",       cat: "AI / EdTech",         academicYear: "2025-26" },
  { id: 7,  empId: "7442", name: "Dr B Keerthi Samhitha",     title: "Recent Trends in Advanced Computing and Intelligent Systems",dates: "02-06-2025 to 06-06-2025",       cat: "Advanced Computing",  academicYear: "2025-26" },
  { id: 8,  empId: "7442", name: "Dr B Keerthi Samhitha",     title: "Mastering Deep Learning: Theory, Techniques and Applications",dates: "12-05-2025 to 16-05-2025",      cat: "AI / ML",             academicYear: "2025-26" },

  { id: 9,  empId: "7832", name: "Mr N Rajender",             title: "NEP 2020 Orientation & Sensitization Programme",             dates: "24-03-2025 to 01-04-2025",       cat: "NEP",                 academicYear: "2024-25" },
  { id:10,  empId: "7832", name: "Mr N Rajender",             title: "NEP 2020 Orientation & Sensitization Programme",             dates: "02-01-2025 to 10-01-2025",       cat: "NEP",                 academicYear: "2024-25" },

  { id:11,  empId: "8031", name: "G N Sowjanya",              title: "Advanced AI Tools for Preparing Research Papers",            dates: "2023-11 to 2024-09",             cat: "AI / Research",       academicYear: "2023-24" },
  { id:12,  empId: "8031", name: "G N Sowjanya",              title: "NEP 2020 Orientation under Malavya Mission",                 dates: "17-02-2025 to 25-02-2025",       cat: "NEP",                 academicYear: "2024-25" },
  { id:13,  empId: "8031", name: "G N Sowjanya",              title: "Revolutionizing Education with Generative AI",               dates: "2023-11 to 2024-09",             cat: "Generative AI",       academicYear: "2023-24" },

      {
    id: 31,
    empId: "7937",
    name: "Dr G Kadiravan",
    title: "eYantra – Introduction to Embedded Systems and Robotics",
    dates: "22nd & 23rd September 2023",
    cat: "Robotics",
    academicYear: "2023-24"
  },
  {
    id: 32,
    empId: "7981",
    name: "Dr Srinivas Kumar Palvadi",
    title: "eYantra – Introduction to Embedded Systems and Robotics",
    dates: "22nd & 23rd September 2023",
    cat: "Robotics",
    academicYear: "2023-24"
  },

  { id:14,  empId: "8053", name: "V Jasmine Sowmya",          title: "Faculty Development Program on Big Data Analytics",          dates: "23-06-2025 to 27-06-2025",       cat: "Data Science",        academicYear: "2025-26" },
  { id:15,  empId: "8053", name: "V Jasmine Sowmya",          title: "DeepLearn for Good: AI Solutions for Social Impact",         dates: "02-09-2024 to 06-09-2024",       cat: "AI / Social Impact",  academicYear: "2024-25" },
  { id:16,  empId: "8053", name: "V Jasmine Sowmya",          title: "NEP 2020 Orientation & Sensitization Programme",             dates: "21-05-2025 to 29-05-2025",       cat: "NEP",                 academicYear: "2025-26" },

  { id:17,  empId: "8095", name: "G Komali",                  title: "Big Data Analytics",                                         dates: "23-06-2025 to 27-06-2025",       cat: "Data Science",        academicYear: "2025-26" },
  { id:18,  empId: "8095", name: "G Komali",                  title: "Role of AI and Modern Technology in Research & Learning",   dates: "28-05-2025 to 03-06-2025",       cat: "AI / EdTech",         academicYear: "2025-26" },
  { id:19,  empId: "8095", name: "G Komali",                  title: "NEP 2020 Orientation & Sensitization Programme",             dates: "21-05-2025 to 29-05-2025",       cat: "NEP",                 academicYear: "2025-26" },

  { id:20,  empId: "8869", name: "Dr Kunchanapalli Rama Krishna", title: "Cyber Security Using AI",                               dates: "24-09-2025",                     cat: "Cybersecurity",       academicYear: "2025-26" },
  { id:21,  empId: "8869", name: "Dr Kunchanapalli Rama Krishna", title: "Computing with SOAP",                                   dates: "23-06-2025 to 27-06-2025",       cat: "Computing",           academicYear: "2025-26" },
  { id:22,  empId: "8869", name: "Dr Kunchanapalli Rama Krishna", title: "Toy Based Experiential Pedagogy",                       dates: "2024-02 to 2024-12",             cat: "Pedagogy",            academicYear: "2024-25" },

  { id:23,  empId: "8890", name: "Dr N Neelima",              title: "Artificial Intelligence and Generative Models",              dates: "02-12-2024 to 06-12-2024",       cat: "AI / ML",             academicYear: "2024-25" },
  { id:24,  empId: "8890", name: "Dr N Neelima",              title: "Building Web Development Solutions with Cloud Computing",    dates: "02-09-2024 to 06-09-2024",       cat: "Cloud Computing",     academicYear: "2024-25" },
  { id:25,  empId: "8890", name: "Dr N Neelima",              title: "Gen‑AI and Prompt Engineering Using Microsoft Copilot",     dates: "16-09-2024 to 20-09-2024",       cat: "Generative AI",       academicYear: "2024-25" },
  { id:26,  empId: "8890", name: "Dr N Neelima",              title: "GSDC Global Agentic AI Master Class",                        dates: "05-05-2025 to 09-05-2025",       cat: "AI / ML",             academicYear: "2025-26" },

  { id:27,  empId: "8927", name: "Dr Athmakuri Satish Kumar", title: "Faculty Induction Program (KLEF)",                          dates: "06-08-2024 to 10-08-2024",       cat: "Faculty Development", academicYear: "2024-25" },
  { id:28,  empId: "8927", name: "Dr Athmakuri Satish Kumar", title: "Design Thinking & Innovation",                              dates: "19-08-2024 to 23-08-2024",       cat: "Innovation",          academicYear: "2024-25" },

  { id:29,  empId: "9388", name: "Dr Praneetha Surapaneni",   title: "Blockchain & Web3",                                          dates: "10-03-2025 to 17-03-2025",       cat: "Blockchain",          academicYear: "2024-25" },
  { id:30,  empId: "9388", name: "Dr Praneetha Surapaneni",   title: "Integrating AI and Emerging Technologies in Networks",       dates: "22-04-2025 to 02-05-2025",       cat: "AI / Networks",       academicYear: "2024-25" },



  {
    id: 33,
    empId: "7236",
    name: "Dr Madhusudhana Subhramanyam",
    title: "AI Tools Workshop conducted by be10X",
    dates: "25th February 2024",
    cat:  "AI Tools",
    academicYear: "2024-25"
  },
  {
    id: 34,
    empId: "7236",
    name: "Dr Madhusudhana Subhramanyam",
    title: "5 Days Virtual Workshop on One-Week International Workshop on Technical Writing Using LaTeX (Online)",
    dates: "30th March to 5th April 2024",
    cat: "Technical Writing",
    academicYear: "2024-25"
  }



],

sports: [
        // New entries from PDF data (National & Inter-University level)
    { 
      id:7, 
      year:"2025-26", 
      event:"Vignan Mahotsav – National Level Youth Festival", 
      category:"Multi-Sport", 
      achievement:"CS&IT students participated", 
      level:"National",
      icon:"🎉"
    },
    { 
      id:8, 
      year:"2025-26", 
      event:"Vitopia 2026 – National Level Sports Fest", 
      category:"Multi-Sport", 
      achievement:"Active participation by CS&IT team", 
      level:"National",
      icon:"🏅"
    },
    { 
      id:9, 
      year:"2025-26", 
      event:"South Zone Inter University Kho Kho Men Tournament", 
      category:"Kho Kho", 
      achievement:"Participated", 
      level:"South Zone Inter University",
      icon:"🥋"
    },
    { 
      id:10, 
      year:"2025-26", 
      event:"All India Inter University Chess (Men) Tournament", 
      category:"Chess", 
      achievement:"Participated", 
      level:"All India Inter University",
      icon:"♟️"
    },
    { 
      id:11, 
      year:"2025-26", 
      event:"1st Karate India National Karate Championship", 
      category:"Karate", 
      achievement:"Participated", 
      level:"National Championship",
      icon:"🥋"
    }
  ],

// Sports Participation Data (from PDFs)
sportsParticipation: [
    { 
      id: 1, 
      regNo: "2200080174", 
      name: "Swaraj", 
      program: "CSIT", 
      sport: "Badminton", 
      level: "Inter University / South Zone",
      year: "2025-26"
    },
    { 
      id: 2, 
      regNo: "2200080211", 
      name: "G. Narayana", 
      program: "AIDS", 
      sport: "Kho Kho", 
      level: "National",
      year: "2025-26"
    },
    { 
      id: 3, 
      regNo: "2200080223", 
      name: "Akhil", 
      program: "AIDS", 
      sport: "Basketball", 
      level: "National & All India Inter University",
      year: "2025-26"
    },
    { 
      id: 4, 
      regNo: "2200090007", 
      name: "K. Bhargavi", 
      program: "CSIT", 
      sport: "Kho Kho", 
      level: "National & South Zone",
      year: "2025-26"
    },
    { 
      id: 5, 
      regNo: "2200090036", 
      name: "Ch. Damodhar", 
      program: "CSIT", 
      sport: "Kho Kho", 
      level: "National",
      year: "2025-26"
    },
    { 
      id: 6, 
      regNo: "2200090098", 
      name: "B. Vignesh Sai Ashok", 
      program: "CSIT", 
      sport: "Karate", 
      level: "National Championship",
      year: "2025-26"
    },
    { 
      id: 7, 
      regNo: "2200090185", 
      name: "G. Chandu", 
      program: "CSIT", 
      sport: "Kho Kho", 
      level: "National & South Zone",
      year: "2025-26"
    },
    { 
      id: 8, 
      regNo: "2200090210", 
      name: "Sd. Naseera", 
      program: "CSIT", 
      sport: "Kho Kho", 
      level: "National",
      year: "2025-26"
    },
    { 
      id: 9, 
      regNo: "2300090058", 
      name: "K. Shyam Prasad Reddy", 
      program: "CSIT", 
      sport: "Chess", 
      level: "All India Inter University",
      year: "2025-26"
    },
    { 
      id: 10, 
      regNo: "2300090192", 
      name: "Somesh", 
      program: "CSIT", 
      sport: "Basketball", 
      level: "National",
      year: "2025-26"
    },
    { 
      id: 11, 
      regNo: "2300090194", 
      name: "Sk. Sabeer", 
      program: "CSIT", 
      sport: "Volleyball", 
      level: "National",
      year: "2025-26"
    },
    { 
      id: 12, 
      regNo: "2300090298", 
      name: "T. Rajesh", 
      program: "CSIT", 
      sport: "Kabaddi", 
      level: "National",
      year: "2025-26"
    },
    { 
      id: 13, 
      regNo: "2300090411", 
      name: "Saidu Sorie Kamara", 
      program: "CSIT", 
      sport: "Football", 
      level: "National",
      year: "2025-26"
    }
  ],


 // ================== Clubs Data (Achievements + EFIT Upcoming Events) ==================
clubs: [
  {
    id: 1,
    club: "Rubix",
    title: "SQL for Placements",
    date: "2026-02-12",
    time: "3:50 PM – 5:30 PM",
    venue: "R201C",
    category: "Tech",
    points: 60,
    presenter: "Rakesh"
  },
  {
    id: 2,
    club: "Rubix",
    title: "Tech Event",
    date: "2026-02-17",
    time: "3:50 PM – 5:20 PM",
    venue: "R201C",
    category: "Tech",
    points: 60
  },
  {
    id: 3,
    club: "Rubix",
    title: "ForensiXplore",
    date: "2026-02-19",
    time: "3:50 PM – 5:30 PM",
    venue: "R201C",
    category: "ESO",
    points: 60
  },
  {
    id: 4,
    club: "Rubix",
    title: "Skill to Hire: Computer Networks",
    date: "2026-02-24",
    time: "3:30 PM – 5:30 PM",
    venue: "R201C",
    category: "IIE"
  },
  {
    id: 5,
    club: "Rubix",
    title: "GitHub Boost",
    date: "2026-02-26",
    time: "3:50 PM – 5:30 PM",
    venue: "R201C",
    category: "LCH",
    points: 60,
    presenter: "Vikram"
  },
  {
    id: 6,
    club: "Rubix",
    title: "Housie Havoc",
    date: "2026-03-06",
    time: "9:30 AM – 11:10 AM",
    venue: "R201B",
    category: "LCH",
    points: 100
  },
  {
    id: 7,
    club: "ForensiXplore",
    title: "ForensiXplore (Event Edition)",
    date: "2026-03-06",
    time: "9:30 AM – 11:10 AM",
    venue: "R201B",
    category: "LCH"
  },
  {
    id: 8,
    club: "ForensiXplore",
    title: "Dumb Charades",
    date: "2026-03-06",
    time: "11:30 AM – 12:30 PM",
    venue: "R201D",
    category: "IIE",
    points: 100
  },
  {
    id: 9,
    club: "ForensiXplore",
    title: "Mystery Event",
    date: "2026-03-06",
    time: "11:30 AM – 12:30 PM",
    venue: "OAT",
    category: "ESO",
    points: 100
  },
  {
    id: 10,
    club: "ForensiXplore",
    title: "IPL Mega Auction",
    date: "2026-03-06",
    time: "9:30 AM – 11:10 AM",
    category: "ESO",
    points: 100
  },
  {
    id: 11,
    club: "ForensiXplore",
    title: "Treasure Hunt",
    date: "2026-03-07",
    category: "LCH",
    points: 120
  },
  {
    id: 12,
    club: "ForensiXplore",
    title: "VidZense",
    date: "2026-03-07",
    time: "~11:10 AM – 12:30 PM",
    venue: "R201D",
    category: "Tech",
    points: 100
  },
  {
    id: 13,
    club: "ForensiXplore",
    title: "Operating Systems Paradox",
    date: "2026-03-10",
    time: "3:50 PM – 5:20 PM",
    venue: "R201C",
    category: "IIE",
    points: 80,
    presenters: ["Sahasra", "Sk Fayaz"]
  }
],
  

  videos: [
    {
  id: 1,
    youtubeId: "Ru6g4I8geP8",
    title: "From CS&IT to Siemens — Anjaneya Aravind's Journey",
    student: "Chowta NVSSM Anjaneya Aravind, Y22",
    company: "Siemens · 20 LPA",
    desc: "Anjaneya Aravind shares his preparation strategy, technical interview experience, and how CS&IT coursework helped him secure a 20 LPA offer at Siemens."
  },
  
/*{
    id: 2,
    youtubeId: "Zenoti115LPA02",
    title: "Cracking Zenoti at 11.5 LPA",
    student: "Battula Venkata Chaitanya Reddy, Y22",
    company: "Zenoti · 11.5 LPA",
    desc: "Chaitanya Reddy discusses his coding preparation, interview rounds, and placement journey that led to an 11.5 LPA offer from Zenoti."
  },*/

  { id:3, youtubeId:"JUcL67xLibc", title:"Cracking Analog Devices at 28 LPA",              student:"Vahinipathi Surya Kumar, Y20", company:"Analog Devices · 28 LPA",  desc:"Surya Kumar talks about his internship journey, global certifications, and how practice school prepared him for the highest package in the batch." },
    
 /*{
    id: 3,
    youtubeId: "RealPage10LPA03",
    title: "Landing a 10 LPA Role at RealPage",
    student: "Akhil Gajula, Y22",
    company: "RealPage · 10 LPA",
    desc: "Akhil Gajula explains how core CS fundamentals, projects, and mock interviews helped him secure a 10 LPA package at RealPage."
  }*/
 
{
    id: 4,
    youtubeId: "X6N67dp_h6s",
    title: "Admissions 2026-2027 Academic Year",
    student: "KL CSIT",
    company: "Computer Science and Information Technology",
    desc: "KL CSIT"
  }


 ],

  
  "publications": [
    {
      "id": 1,
      "empId": "9024",
      "name": "Dr Sateesh G",
      "title": "Leaf disease detection and classification in food crops with efficient feature dimensionality reduction",
      "journal": "PLOS ONE",
      "volume": "20",
      "year": "2025",
      "indexing": "SCOPUS,SCI,Web of Science - Science citation Index Expanded (SCIE)",
      "impactFactor": "2.6",
      "quartile": "Q2",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 2,
      "empId": "7998",
      "name": "Dr Vuda Sreenivasa Rao",
      "title": "Object detection in real-time video surveillance using attention-based transformer-YOLOv8 model",
      "journal": "Alexandria Engineering Journal",
      "volume": "118",
      "year": "2025",
      "indexing": "SCOPUS,Web of Science - Science citation Index Expanded (SCIE)",
      "impactFactor": "5.9",
      "quartile": "Q1",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 3,
      "empId": "7442",
      "name": "Dr Keerthi Samhitha Babu",
      "title": "Enhancing waste classification accuracy with Channel and Spatial Attention-Based Multiblock Convolutional Network",
      "journal": "Environmental Monitoring and Assessment",
      "volume": "197",
      "year": "2025",
      "indexing": "SCOPUS,Web of Science - Science citation Index Expanded (SCIE)",
      "impactFactor": "2.9",
      "quartile": "Q3",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 4,
      "empId": "8869",
      "name": "Dr Kunchanapalli Rama Krishna",
      "title": "Comparative Analysis of Different Approaches for Cyber Forensics",
      "journal": "Proceedings - 4th International Conference on Technological Advancements in Computational Sciences, ICTACS 2024",
      "volume": "6",
      "year": "2025",
      "indexing": "SCOPUS,IEEE Journal",
      "impactFactor": "2.3",
      "quartile": "",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 5,
      "empId": "7442",
      "name": "Dr Keerthi Samhitha Babu",
      "title": "The Role of Agricultural Cooperatives in Enhancing Credit Access, Market Information, and Smart Farming among Rural Farmers",
      "journal": "Research on World Agricultural Economy",
      "volume": "6",
      "year": "2025",
      "indexing": "SCOPUS,Web of Science - Emerging Source Citation Index (ESCI)",
      "impactFactor": "1",
      "quartile": "Q3",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 6,
      "empId": "8869",
      "name": "Dr Kunchanapalli Rama Krishna",
      "title": "Deep learning-based analysis of functional MRI and diffusion tensor imaging for Parkinson's disease diagnosis and progression monitoring",
      "journal": "Intelligent Decision Technologies",
      "volume": "19",
      "year": "2025",
      "indexing": "SCOPUS,Web of Science - Emerging Source Citation Index (ESCI)",
      "impactFactor": "1.4",
      "quartile": "Q4",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 7,
      "empId": "8890",
      "name": "Dr Naralasetti Neelima",
      "title": "Cross-Platform Acceleration of Holographic Rendering in IOT Devices Using Open CL-Based Heterogeneous Computing",
      "journal": "IEEE Transactions on Consumer Electronics",
      "volume": "1",
      "year": "2025",
      "indexing": "SCOPUS,IEEE Journal",
      "impactFactor": "10.9",
      "quartile": "Q1",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 8,
      "empId": "7998",
      "name": "Dr Vuda Sreenivasa Rao",
      "title": "A Scalable Machine Learning Framework for Predictive Analytics and Employee Performance Enhancement in Large Enterprises",
      "journal": "International Journal of Advanced Computer Science and Applications",
      "volume": "16",
      "year": "2025",
      "indexing": "SCOPUS,Web of Science - Emerging Source Citation Index (ESCI)",
      "impactFactor": "2.7",
      "quartile": "Q3",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 9,
      "empId": "7998",
      "name": "Dr Vuda Sreenivasa Rao",
      "title": "Deep learning-optimized carbon quantum dot biosensors for emerging contaminant monitoring",
      "journal": "Microchemical Journal",
      "volume": "218",
      "year": "2025",
      "indexing": "SCOPUS,Web of Science - Science citation Index Expanded (SCIE)",
      "impactFactor": "7.2",
      "quartile": "Q1",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 10,
      "empId": "7367",
      "name": "Dr Bhaskar Marapelli",
      "title": "An enterprise blockchain model: A reliable cryptography-based cyber-physical systems for securing user data",
      "journal": "Journal of Discrete Mathematical Sciences and Cryptography",
      "volume": "28",
      "year": "2025",
      "indexing": "SCOPUS,Web of Science - Emerging Source Citation Index (ESCI)",
      "impactFactor": "1.3",
      "quartile": "Q2",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 11,
      "empId": "7367",
      "name": "Dr Bhaskar Marapelli",
      "title": "Data Visualisation Models for Analytics use Artificial Intelligence to Predict Diabetes in Women",
      "journal": "Journal of Machine and Computing",
      "volume": "5",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "1.8",
      "quartile": "Q3",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 12,
      "empId": "8998",
      "name": "Dr Cherukupalli Ramesh Kumar",
      "title": "EFFICIENT OBJECT DETECTION IN AGRICULTURAL ENVIRONMENTS IMPLEMENTING COLOR FEATURES EXTREME LEARNING MACHINE",
      "journal": "Journal of Theoretical and Applied Information Technology",
      "volume": "103",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0.8",
      "quartile": "Q4",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 13,
      "empId": "7442",
      "name": "Dr Keerthi Samhitha Babu",
      "title": "DISSOLVED OXYGEN LEVEL MEASUREMENT IN WATER USING IOT AND MACHINE LEARNING",
      "journal": "Journal of Theoretical and Applied Information Technology",
      "volume": "103",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "1",
      "quartile": "Q4",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 14,
      "empId": "6276",
      "name": "Dr Vijaya Krishna Sonthi",
      "title": "Fractal image compression using digital cone metric space",
      "journal": "Journal of Interdisciplinary Mathematics",
      "volume": "28",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "1.35",
      "quartile": "Q2",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 15,
      "empId": "8927",
      "name": "Dr Satish Kumar Athmakuri",
      "title": "BUILDING ROBUST IOT NETWORKS WITH DYNAMIC LAYER PRIORITIZATION AND PREDICTIVE FAULT MANAGEMENT PROCESS",
      "journal": "Journal of Theoretical and Applied Information Technology",
      "volume": "103",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0.174",
      "quartile": "Q4",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 16,
      "empId": "8053",
      "name": "Dr Jasmine Sowmya Vemula",
      "title": "STRENGTHENING SECURITY PROTOCOL TO COMBAT FINANCIAL FRAUD ADVANCES IN AUTHENTICATION AND ACCESS CONTROL",
      "journal": "Journal of Theoretical and Applied Information Technology",
      "volume": "103",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "1.2",
      "quartile": "Q4",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 17,
      "empId": "8932",
      "name": "Dr Lavanya Susanna Choutupalli",
      "title": "INTEGRATING MULTIAGENT SYSTEMS AND AIOT FOR EFFICIENT HOME ENERGY MANAGEMENT: CHALLENGES AND SOLUTIONS",
      "journal": "Journal of Theoretical and Applied Information Technology",
      "volume": "103",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0.76",
      "quartile": "Q4",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 18,
      "empId": "8597",
      "name": "Dr Badde Praveen Prakash",
      "title": "An Ensemble Cognitive Model for Stroke Prediction Using Unstructured Health Information Powered by Machine Learning",
      "journal": "Journal of Machine and Computing",
      "volume": "5",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "9.24",
      "quartile": "Q2",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 19,
      "empId": "8053",
      "name": "Dr Jasmine Sowmya Vemula",
      "title": "Multimodal lightweight neural network for Alzheimer’s disease diagnosis integrating neuroimaging and cognitive scores",
      "journal": "Neuroscience Informatics",
      "volume": "5",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0.9",
      "quartile": "Q1",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 20,
      "empId": "8053",
      "name": "Dr Jasmine Sowmya Vemula",
      "title": "AI-DRIVEN FRAUD DETECTION AND SECURITY SOLUTIONS: ENHANCING ACCURACY IN FINANCIAL SYSTEMS",
      "journal": "Journal of Theoretical and Applied Information Technology",
      "volume": "103",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0.3",
      "quartile": "Q3",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 21,
      "empId": "8053",
      "name": "Dr Jasmine Sowmya Vemula",
      "title": "Blockchain and AI Powered Smart Grids A Secure and Efficient Energy Management Framework",
      "journal": "Journal of Machine and Computing",
      "volume": "5",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0.5",
      "quartile": "Q2",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 22,
      "empId": "8968",
      "name": "Dr Chaitanya Kumari Mosuganti",
      "title": "EXPLORING THE TRANSFORMATIVE ROLE OF ARTIFICIAL INTELLIGENCE IN HEALTHCARE",
      "journal": "Journal of Theoretical and Applied Information Technology",
      "volume": "3",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0.756",
      "quartile": "Q3",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 23,
      "empId": "8031",
      "name": "Dr Ganugapati Naga Sowjanya",
      "title": "REAL-TIME RESPIRATORY SOUND CLASSIFICATION FOR REMOTE DIAGNOSTIC SYSTEMS UTILIZING DEEP LEARNING AND SPECTRUM ANALYSIS",
      "journal": "Journal of Theoretical and Applied Information Technology",
      "volume": "103",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0.594",
      "quartile": "Q3",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 24,
      "empId": "7367",
      "name": "Dr Bhaskar Marapelli",
      "title": "Nonlinear Analysis And Processing Of Software Development, Financial Data, And Marketing Insights Under Internet Of Things Monitoring System",
      "journal": "International Journal of Environmental Sciences",
      "volume": "11",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0.166",
      "quartile": "Q3",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 25,
      "empId": "8869",
      "name": "Dr Kunchanapalli Rama Krishna",
      "title": "Green Computing: Advancing Energy-Efficient Data Centers With AI",
      "journal": "International Journal of Environmental Sciences",
      "volume": "11",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0.166",
      "quartile": "Q3",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 26,
      "empId": "8869",
      "name": "Dr Kunchanapalli Rama Krishna",
      "title": "Contextfuse: Advanced Container Security with Contextual Intelligence",
      "journal": "International Journal of Basic and Applied Sciences",
      "volume": "14",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0.24",
      "quartile": "Q4",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 27,
      "empId": "8892",
      "name": "Dr Swathi Sri Buradagunta",
      "title": "Optimizing Resource Allocation and Link Reliability in IoT–Fog–Cloud Networks Using Machine Learning and Multi-Objective Algorithms",
      "journal": "Journal of Robotics and Control (JRC)",
      "volume": "6",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0.435",
      "quartile": "Q1",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 28,
      "empId": "8031",
      "name": "Dr Ganugapati Naga Sowjanya",
      "title": "DIFFERENTIAL GENETIC ALGORITHM (DGA) BASED OPTIMAL DIRECTED RANDOM TESTING FOR REDUCING INTERACTIVE FAULTS",
      "journal": "Journal of Theoretical and Applied Information Technology",
      "volume": "103",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0.594",
      "quartile": "Q3",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 29,
      "empId": "6276",
      "name": "Dr Vijaya Krishna Sonthi",
      "title": "The secured authentication system: Integrated cyber security end-toend based cyber-physical systems for improved DevOps resilience with authentication",
      "journal": "Journal of Discrete Mathematical Sciences and Cryptography",
      "volume": "28",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "1.1",
      "quartile": "Q1",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 30,
      "empId": "7998",
      "name": "Dr Vuda Sreenivasa Rao",
      "title": "Enhancing Automated English Speaking Tests: The Integration of Natural Language Processing and Machine Learning",
      "journal": "2025 Global Conference in Emerging Technology, GINOTECH 2025",
      "volume": "1",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0",
      "quartile": "",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 31,
      "empId": "7998",
      "name": "Dr Vuda Sreenivasa Rao",
      "title": "Enhancing Real-Time Threat Detection with YOLOv8 and LSTM Integration for Intelligent Surveillance Systems",
      "journal": "2025 5th International Conference on Advances in Electrical, Computing, Communication and Sustainable Technologies, ICAECT 2025",
      "volume": "1",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0",
      "quartile": "",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 32,
      "empId": "7998",
      "name": "Dr Vuda Sreenivasa Rao",
      "title": "Improving Artificial English Academic Paper Summarization employing Cutting-Edge Transformer Models",
      "journal": "2025 International Conference on Emerging Smart Computing and Informatics, ESCI 2025",
      "volume": "1",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0",
      "quartile": "",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 33,
      "empId": "7998",
      "name": "Dr Vuda Sreenivasa Rao",
      "title": "A Deep CNN Self-Attention Model for Multidimensional Speech Quality Prediction Using Crowdsourced Datasets",
      "journal": "2025 5th International Conference on Advances in Electrical, Computing, Communication and Sustainable Technologies, ICAECT 2025",
      "volume": "1",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0",
      "quartile": "",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 34,
      "empId": "7998",
      "name": "Dr Vuda Sreenivasa Rao",
      "title": "Hybrid CNN-LSTM Approach for Predicting and Analyzing Customer Churn in the Banking Sector",
      "journal": "2025 5th International Conference on Advances in Electrical, Computing, Communication and Sustainable Technologies, ICAECT 2025",
      "volume": "1",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0",
      "quartile": "",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 35,
      "empId": "7998",
      "name": "Dr Vuda Sreenivasa Rao",
      "title": "Leveraging AI to Personalize HR Marketing Campaigns: A Data-Driven Approach",
      "journal": "Proceedings of 2025 3rd International Conference on Intelligent Systems, Advanced Computing, and Communication, ISACC 2025",
      "volume": "1",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0",
      "quartile": "",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 36,
      "empId": "8890",
      "name": "Dr Naralasetti Neelima",
      "title": "ADVANCING POST QUANTUM CRYPTOGRAPHY DEVELOPING SECURE ENCRYPTION METHODS RESISTANT TO QUANTUM ATTACKS",
      "journal": "Journal of Theoretical and Applied Information Technology",
      "volume": "103",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0.16",
      "quartile": "Q3",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 37,
      "empId": "7998",
      "name": "Dr Vuda Sreenivasa Rao",
      "title": "Enhanced Brain Tumor Classification Using Optimized U-Net Segmentation by EPO and Hybrid Feature Extraction Using FO",
      "journal": "Journal of Information Hiding and Multimedia Signal Processing",
      "volume": "16",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "2.2",
      "quartile": "Q3",
      "doi": "",
      "academicYear": "2024-2025"
    },
    {
      "id": 38,
      "empId": "8869",
      "name": "Dr Kunchanapalli Rama Krishna",
      "title": "AI-POWERED INTRUSION RESPONSE FOR INTELLIGENT VEHICULAR ECOSYSTEMS",
      "journal": "Journal of Theoretical and Applied Information Technology",
      "volume": "103",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "1.4",
      "quartile": "Q3",
      "doi": "",
      "academicYear": "2024-2025"
    },
       {
      "id": 39,
      "empId": "7367",
      "name": "Dr M Bhaskar Marapelli",
      "title": "Nonlinear Analysis And Processing Of Software Development, Financial Data, And Marketing Insights Under Internet Of Things Monitoring System",
      "journal": "International Journal of Environmental Sciences",
      "volume": "11",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0.166",
      "quartile": "Q3",
      "doi": "",
      "academicYear": "2025-2026"
    },
     {
      "id": 40,
      "empId": "7367",
      "name": "Dr M Bhaskar Marapelli",
      "title": "Deep SEM: Integrating deep neural networks into structural equation modelling with the SEMdeep package in R",
      "journal": "Methodological Innovations",
      "volume": "23",
      "year": "2026",
      "indexing": "SCOPUS",
      "impactFactor": "0.71",
      "quartile": "Q1",
      "doi": "",
      "academicYear": "2025-2026"
    },
       {
      "id": 41,
      "empId": "7367",
      "name": "Dr M Bhaskar Marapelli",
      "title": "An enterprise blockchain model: A reliable cryptography-based cyber-physical systems for securing user data",
      "journal": "Journal of Discrete Mathematical Sciences and Cryptography",
      "volume": "28",
      "year": "2025",
      "indexing": "SCOPUS, Web of Science - ESCI",
      "impactFactor": "1.3",
      "quartile": "Q2",
      "doi": "",
      "academicYear": "2025-2026"
    },
        {
      "id": 42,
      "empId": "7367",
      "name": "Dr M Bhaskar Marapelli",
      "title": "Data Visualisation Models for Analytics use Artificial Intelligence to Predict Diabetes in Women",
      "journal": "Journal of Machine and Computing",
      "volume": "5",
      "year": "2025",
      "indexing": "SCOPUS",
      "impactFactor": "0.15",
      "quartile": "Q2",
      "doi": "",
      "academicYear": "2025-2026"
    },

  ],

  books: [
    { id:1,  empId:"7367", name:"Dr M Bhaskar Marapelli",      title:"Explainable Artificial Intelligence (XAI) for Transparent Decision-Making", publisher:"Springer Nature", type:"Book Chapter", isbn:"", year:"2026", academicYear:"2025-2026" },
    { id:2,  empId:"7937", name:"Dr G Kadiravan",               title:"Cybersecurity in the Age of AI: Threats, Defences and Future Directions", publisher:"Wiley India", type:"Edited Book", isbn:"", year:"2025", academicYear:"2025-2026" },
    { id:3,  empId:"5291", name:"Dr Amarendra K",               title:"Deep Learning for Medical Image Analysis: Architectures and Applications", publisher:"Elsevier", type:"Book Chapter", isbn:"", year:"2024", academicYear:"2024-2025" },
    { id:4,  empId:"5659", name:"Dr PVVS Srinivas",             title:"Internet of Things: Security Challenges and Blockchain Solutions", publisher:"IGI Global", type:"Book Chapter", isbn:"", year:"2024", academicYear:"2023-2024" },
    { id:5,  empId:"7367", name:"Dr M Bhaskar Marapelli",      title:"Introduction to Cloud Computing and DevOps for Engineers", publisher:"Wiley India", type:"Textbook", isbn:"978-93-895-XXXX-X", year:"2023", academicYear:"2022-2023" }
  ],

  patents: [
    { id:1, empId:"7367", name:"Dr M Bhaskar Marapelli", title:"System and Method for Real-Time Anomaly Detection in IoT Networks Using Edge Neural Networks", applicationNo:"202441012XXX", office:"Indian Patent Office", status:"Granted", filedDate:"Feb 2024", grantedDate:"Jan 2025", academicYear:"2024-2025" },
    { id:2, empId:"7937", name:"Dr G Kadiravan",          title:"An Intelligent Framework for Automated Code Review and Bug Prediction Using Ensemble Learning", applicationNo:"202341038XXX", office:"Indian Patent Office", status:"Published", filedDate:"Aug 2023", grantedDate:"", academicYear:"2023-2024" },
    { id:3, empId:"5291", name:"Dr Amarendra K",          title:"Deep Neural Network-Based Fabric Defect Detection System for Smart Textile Manufacturing", applicationNo:"202241057XXX", office:"Indian Patent Office", status:"Published", filedDate:"Dec 2022", grantedDate:"", academicYear:"2022-2023" }
  ]

};

// ─── Data Engine ────────────────────────────────────────────────
const DB = {
  PREFIX: 'csit_',

  init() {
    // Full init for new visitors
    if (!localStorage.getItem(this.PREFIX + '__initialized_v2')) {
      Object.keys(DEFAULT_DATA).forEach(key => {
        localStorage.setItem(this.PREFIX + key, JSON.stringify(DEFAULT_DATA[key]));
      });
      localStorage.setItem(this.PREFIX + '__initialized_v2', '1');
    }
    // Seed newly added keys (publications, books, patents) for returning visitors
    ['publications', 'books', 'patents'].forEach(key => {
      if (!localStorage.getItem(this.PREFIX + key)) {
        localStorage.setItem(this.PREFIX + key, JSON.stringify(DEFAULT_DATA[key] || []));
      }
    });
  },

  get(key) {
    try {
      const raw = localStorage.getItem(this.PREFIX + key);
      return raw ? JSON.parse(raw) : DEFAULT_DATA[key];
    } catch(e) { return DEFAULT_DATA[key]; }
  },

  set(key, val) { localStorage.setItem(this.PREFIX + key, JSON.stringify(val)); },

  push(key, item) {
    const arr = this.get(key);
    if (!Array.isArray(arr)) return;
    item.id = Date.now();
    arr.unshift(item);
    this.set(key, arr);
    return item;
  },

  pushPlacement(batch, item) {
    const data = this.get('placements');
    if (!data[batch]) data[batch] = [];
    item.id = Date.now();
    data[batch].unshift(item);
    this.set('placements', data);
  },

  remove(key, id) {
    const arr = this.get(key);
    if (!Array.isArray(arr)) return;
    this.set(key, arr.filter(i => i.id !== id));
  },

  removePlacement(batch, id) {
    const data = this.get('placements');
    if (data[batch]) {
      data[batch] = data[batch].filter(i => i.id !== id);
      this.set('placements', data);
    }
  },

  addBatch(batch) {
    const data = this.get('placements');
    if (!data[batch]) { data[batch] = []; this.set('placements', data); }
  },

  getBatches() {
    return Object.keys(this.get('placements')).sort().reverse();
  },

  /* ── Placement Analytics Helpers ─────────────────────── */
  getCompanyStats(batch) {
    const rows = (this.get('placements')[batch]) || [];
    const map = {};
    rows.forEach(r => {
      const co = r.company;
      if (!map[co]) map[co] = { company: co, count: 0, highest: 0 };
      map[co].count++;
      if ((r.ctcNum||0) > map[co].highest) map[co].highest = r.ctcNum||0;
    });
    return Object.values(map).sort((a,b) => b.count - a.count);
  },

  getYearTrend() {
    const data = this.get('placements');
    return Object.keys(data).sort().map(b => ({
      batch: b.toUpperCase(),
      total: (data[b]||[]).length,
      highest: Math.max(0, ...(data[b]||[]).map(r => r.ctcNum||0)),
      avgCtc: (() => {
        const nums = (data[b]||[]).map(r=>r.ctcNum||0).filter(n=>n>0);
        return nums.length ? (nums.reduce((s,n)=>s+n,0)/nums.length).toFixed(2) : 0;
      })()
    }));
  },

  getGenderSplit(batch) {
    const rows = (this.get('placements')[batch]) || [];
    const m = rows.filter(r=>r.gender==='Male').length;
    const f = rows.filter(r=>r.gender==='Female').length;
    return { male: m, female: f };
  },

  /* Get all unique companies from all placement batches */
  getAllCompanies() {
    const data = this.get('placements');
    const companies = new Set();
    Object.keys(data).forEach(batch => {
      (data[batch] || []).forEach(r => {
        if (r.company) companies.add(r.company);
      });
    });
    return Array.from(companies).sort();
  },

  reset(key) { localStorage.setItem(this.PREFIX + key, JSON.stringify(DEFAULT_DATA[key])); },

  resetAll() {
    localStorage.removeItem(this.PREFIX + '__initialized_v2');
    this.init();
  }
};

DB.init();
DB.resetAll();   // Force reload all latest data from DEFAULT_DATA
