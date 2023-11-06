import Card from "./components/Card"
import { v4 as uuidv4 } from "uuid"


export const clubMembers = [
  {
    name: "Sanjeev",
    img: "/team/sanjeev.jpg",
    batch: "2020",
    linkedIn: "https://www.linkedin.com/in/sanjeev-sde",
    domain: "Web3 Full Stack Developer",
  },
  {
    name: "Pabitra",
    img: "/team/Pabitra.jpeg",
    batch: "2020",
    linkedIn: "https://www.linkedin.com/in/pabitra-ranjan-rout/",
    domain: "Full Stack Developer",
  },
  {
    name: "Varsha ",
    img: "/team/varsha.jpg",
    batch: "2020",
    linkedIn: "https://www.linkedin.com/in/varsha-beeraka-951b19202/",
    domain: "Frontend Developer",
  },

  {
    name: "Biswamohan",
    img: "/team/Biswa bhiya.jpg",
    batch: "2020",
    linkedIn: "https://www.linkedin.com/in/chbiswamohanpatra",
    domain: "iOS Application Development",
  },
  {
    name: "Faizan",
    img: "/team/faizan bhiya.jpg",
    batch: "2020",
    linkedIn: "https://www.linkedin.com/in/md-faizan-alam-35374922a",
    domain: "Full Stack Web Development",
  },
  {
    name: "Kishlay",
    img: "/team/kishlay bhiya.png",
    batch: "2020",
    linkedIn: "https://www.linkedin.com/in/kishlaykumar-22",
    domain: "Full Stack Development",
  },
  {
    name: "Richa",
    img: "/team/richa di.jpg",
    Batch: "2020",
    linkedIn: "https://www.linkedin.com/in/richa-75826322b/",
    domain: "Full Stack Development",
  },
  {
    name: "Ankit",
    img: "/team/Ankit bhiya.jpg",
    batch: "2020",
    linkedIn: "https://www.linkedin.com/in/ankitkumar2454/",
    domain: "Flutter Developer",
  },
  {
    name: "Srikant",
    img: "/team/srikant.jpg",
    batch: "2020",
    linkedIn: "https://www.linkedin.com/in/srikant-mahanty-a9329322b/",
    domain: "Android Developer  ",
  },
  {
    name: "Sanket ",
    img: "/team/sanket.jpeg",
    batch: "2020",
    linkedIn: "https://www.linkedin.com/in/sanket-kumar-48ba23162/",
    domain: "Full Stack Developer",
  },
  {
    name: "samrat",
    img: "/team/samrat.jpeg",
    batch: "2020",
    linkedIn: "https://www.linkedin.com/in/samrat-singh-18941a22b/",
    domain: "Web Developer",
  },
  {
    name: "Rupa",
    img: "/team/rupa.jpg",
    batch: "2020",
    linkedIn: "https://www.linkedin.com/in/rupa-mohanty/",
    domain: "Machine Learning",
  },
  {
    name: "Abhinav",
    img: "/team/abhinav.jpg",
    batch: "2021",
    linkedIn: "https://www.linkedin.com/in/abhinav-kumar-038529227/",
    domain: "Full Stack Development",
  },
  {
    name: "Rahul Kumar",
    img: "/team/rahul.JPG",
    batch: "2021",
    linkedIn: "https://www.linkedin.com/in/rahul-kumar-4878a61ab/",
    domain: "Android Development",
  },

  {
    name: "Gourav",
    img: "/team/gourav.jpg",
    batch: 2021,
    linkedIn: "https://www.linkedin.com/in/bgourav2287",
    domain: "Full Stack Development and Cybersecurity ",
  },
  {
    name: "Asutosh",
    img: "/team/ashutosh.png",
    batch: "2021",
    linkedIn: "https://www.linkedin.com/in/asutosh-panigrahi/",
    domain: "UI/UX Development",
  },
  {
    name: "Anwesh",
    img: "/team/anwesh .jpg",
    batch: "2021",
    linkedIn: "https://www.linkedin.com/in/anwesh-mohanty-03426a240/",
    domain: "UI/UX Development",
  },
  {
    name: "Mayank",
    img: "/team/mayank.jpg",
    batch: "2021",
    linkedIn: "https://www.linkedin.com/in/mayank-raj-a82446258/",
    domain: "Data Analyst",
  },
  {
    name: "SOUMIK BERA",
    img: "/team/soumik.jpg",
    batch: "2021",
    linkedIn: "https://www.linkedin.com/in/soumik-bera-a42723238",
    domain: "Full Stack Web Developer",
  },
  {
    name: "Bishal",
    img: "/team/bishal.jpg",
    batch: "2021",
    linkedIn:
      "https://www.linkedin.com/in/bishal-kumar-saw-35b918257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    domain: "Full Stack Developer",
  },
  {
    name: "Akshat",
    img: "/team/akshat.jpg",
    batch: "2021",
    linkedIn:
      "https://www.linkedin.com/in/akshat-anand-7ba987249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    domain: "Full Stack Developer",
  },
  {
    name: "Naveen",
    img: "/team/naveen.jpg",
    batch: "2021",
    linkedIn: "",
    domain: "Full Stack Developer",
  },
  {
    name: "Payal",
    img: "/team/payal jr.jpg",
    batch: "2022",
    linkedIn: "https://www.linkedin.com/in/payal-bhattamisra-5a1117253/",
    domain: "Web Development",
  },
  {
    name: "Govinda",
    img: "/team/Govinda jr.jpg",
    batch: "2022",
    linkedIn: "https://www.linkedin.com/in/govinda-mahanti-314754251",
    domain: "Web Development",
  },
  {
    name: "Rudransh",
    img: "/team/rudransh jr.jpg",
    batch: "2022",
    linkedIn: "www.linkedin.com/in/rudransh-dash-96b9b6259",
    domain: "Web Development",
  },
  {
    name: "Gaurav Tiwari",
    img: "/team/gaurav jr.jpg",
    batch: "2022",
    LinkedIn: "https://www.linkedin.com/in/gaurav-tiwari-121a77258/ ",
    domain: "Blockchain Development",
  },
  {
    name: "Amrita",
    img: "/team/amrita jr.jpg",
    batch: "2022",
    linkedIn: "https://www.linkedin.com/in/amrita-choudhury-50a487254/",
    domain: "Web development",
  },
  {
    name: "Abhijeet",
    img: "/team/Abhijeet jr.jpg",
    batch: "2022",
    linkedIn: "https://www.linkedin.com/in/abhijeet-panigrahi-174872239/",
    domain: "Web development",
  },
  {
    name: "Abhimanyu",
    img: "/team/Abhimanyu jr.jpg",
    batch: "2022",
    linkedIn: "https://www.linkedin.com/in/abhimanyu-kumar-4b6716242",
    domain: "Full Stack Web Development",
  },
  {
    name: "Sriya",
    img: "/team/u sriya reddy jr.jpg",
    batch: "2022",
    linkedIn: "https://www.linkedin.com/in/sriya-reddy-564607258",
    domain: "web development",
  },
  {
    name: "Sruti",
    img: "/team/sruti prusty jr.jpg",
    batch: "2022",
    linkedIn: "https://www.linkedin.com/in/sruti-prusty-995882258",
    domain: "Web Development",
  },
  {
    name: "Bidya",
    img: "/team/bidya jr.jpg",
    batch: "2022",
    linkedIn: "https://www.linkedin.com/in/bidya-sahu-72b80a258",
    domain: "Cybersecurity ",
  },
  {
    name: "Priya",
    img: "/team/Priya patra jr.jpg",
    batch: "2022",
    Linkedln: "https://www.linkedin.com/in/priya-patra-a7b370259",
    domain: "Web development",
  },
  {
    name: "Sudip",
    img: "/team/Sudip das jr.jpg",
    batch: "2022",
    LinkedIn: "https://www.linkedin.com/in/sudip-dash-3b4419259",
    domain: "Full Stack Development ",
  },
  {
    name: "Rudra",
    img: "/team/Rudra jr.jpg",
    batch: "2022",
    Linkedln: "https://www.linkedin.com/in/rudra-narayan-nayak-61939925b",
    domain: "Data science",
  },
  {
    name: "Aman",
    img: "/team/Aman jr.jpg",
    batch: "2022",
    linkedin: "https://www.linkedin.com/in/aman-kumar-b12085253",
    domain: "Android development",
  },
  {
    name: "Srikant",
    img: "/team/srikant jr.jpg",
    batch: "2022",
    linkedIn: "https://www.linkedin.com/in/srikant-jena-09b106273",
    domain: "Machine Learning ",
  },
  {
    name: "Mohammad Ehsan",
    img: "/team/eshan jr.jpg",
    batch: "2022",
    linkedIn:
      "https://www.linkedin.com/in/mohammad-ehsan-23aaba290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    domain: "Web Development",
  },
  {
    name: "Sai Kalyan",
    img: "/team/K sai kalyan jr.jpg",
    batch: "2022",
    linkedIn: "https://www.linkedin.com/in/k-sai-kalyan-1a7249262",
    domain: " Data Science ",
  },
  {
    name: "Deepti Manjari Nayak",
    img: "/team/deepti jr.png",
    batch: "2022",
    linkedIn: "https://www.linkedin.com/in/k-sai-kalyan-1a7249262",
    domain: " Data Science ",
  },
]

export const AlumunaiMembers = [
  {
    name: "Ashutosh Biswal",
    img: "/team/ashutosh biswal.jpg",
    batch: "2018",
    linkedIn: "https://www.linkedin.com/in/ashutosh-biswal-41328a174/",
    domain: "DevOps",
  },
  {
    name: "Adil Zamal",
    img: "/team/adil.jpg",
    batch: "2018",
    linkedIn: "https://www.linkedin.com/in/adil-zamal-40b5aa155/",
    domain: "Web Development",
  },
  {
    name: "Rishav Kumar",
    img: "/team/Rishav Kumar.jpg",
    batch: "2018",
    linkedIn: "https://www.linkedin.com/in/rishav-kumar-075ba517b/",
    domain: "Software Developer",
  },

  {
    name: "Asish Patnaik",
    img: "/team/asish patnaik.jpg",
    batch: "2018",
    linkedIn: "https://www.linkedin.com/in/asish-patnaik-3917a7193/",
    domain: "Full stack developer",
  },
  {
    name: "Aryan Asgar",
    img: "/team/aryan.jpg",
    batch: "2018",
    linkedIn: "https://www.linkedin.com/in/aryan-asgar-840825106",
    domain: "Backend",
  },

  {
    name: "Chiranjeeb Nayak",
    img: "/team/chiranjeeb.jpg",
    batch: "2018",
    linkedIn: "https://www.linkedin.com/in/chiranjeeb-nayak-b6218b182/",
    domain: "Software Engineer",
  },
  {
    name: "K Nandini Dora",
    img: "/team/nandini.jpg",
    batch: "2018",
    linkedIn: "https://www.linkedin.com/in/knandinidora/",
    domain: "Flutter Developer",
  },
  {
    name: "Nikhil Kumar Singh",
    img: "/team/nikhil.jpg",
    batch: "2018",
    linkedIn: "https://www.linkedin.com/in/kumar-nikhil-b10024194/",
    domain: "Software Development",
  },
  {
    name: "Ritik Kumar Kapsime",
    img: "/team/ritik.jpg",
    batch: "2018",
    linkedIn: "https://www.linkedin.com/in/ritik126/",
    domain: "Software Development",
  },
  {
    name: "Sanat Dash",
    img: "/team/sanat.jpg",
    batch: "2018",
    linkedIn: "https://www.linkedin.com/in/sanat-dash-aa5876193/",
    domain: "Product Development Engineer",
  },
  {
    name: "Sushovan Paul",
    img: "/team/sushovan.jpg",
    batch: "2019",
    linkedIn: "https://www.linkedin.com/in/sushovan07",
    domain: "Full Stack Developer",
  },
  {
    name: "Sunny Kumar",
    img: "/team/sunny.jpg",
    batch: "2019",
    linkedIn: "https://www.linkedin.com/in/sunny52525",
    domain: "Android, Backend",
  },
  {
    name: "Ashu Sharma",
    img: "/team/ashu.jpg",
    batch: "2019",
    linkedIn: "https://www.linkedin.com/in/a-shu",
    domain: "Backend",
  },
  {
    name: "Akarsh Agarwal",
    img: "/team/akarsh.jpg",
    batch: "2019",
    linkedIn: "https://www.linkedin.com/in/akarshagrawal09/",
    domain: "Backend",
  },
  {
    name: "Dipti Mishra",
    img: "/team/deepti.jpg",
    batch: "2019",
    linkedIn: "https://www.linkedin.com/in/dipti-mishra-724928202/",
    domain: "Cyber security",
  },
  {
    name: "Hritvik Ranjan",
    img: "/team/hritvik.jpg",
    batch: "2019",
    linkedIn: "https://www.linkedin.com/in/hritvik-ranjan-b290a71a9/",
    domain: "Android development",
  },
  {
    name: "Laxmi Narayan",
    img: "/team/narayan.jpg",
    batch: "2019",
    linkedIn: "https://www.linkedin.com/in/naryann/",
    domain: "Software Developer",
  },
  {
    name: "Rupesh Raj Tripathy",
    img: "/team/rupesh.jpg",
    batch: "2019",
    linkedIn: "https://www.linkedin.com/in/rupesh-raj-tripathy-86497b1ab/",
    domain: "Software Developer",
  },
  {
    name: "Shradha Kyal",
    img: "/team/sradha.jpg",
    batch: "2019",
    linkedIn: "https://www.linkedin.com/in/shradha-kyal-a268331b1/",
    domain: "Web development, Data Analyst",
  },
  {
    name: "Sonali Sahu",
    img: "/team/sonali.jpg",
    batch: "2019",
    linkedIn: "https://www.linkedin.com/in/sonali-sahu-/",
    domain: "Data Science",
  },
  {
    name: "Niharika Kumari",
    img: "/team/Niharika.jpg",
    batch: "2019",
    linkedIn: "https://www.linkedin.com/in/niharika-kumari-23b3a6213/",
    domain: "Web development",
  },
  {
    name: "Suraj Kumar Sahu",
    img: "/team/suraj.jpg",
    batch: "2019",
    linkedIn: "https://www.linkedin.com/in/suraj-kumar-sahu-7348231aa/",
    domain: "Software Engineering",
  },
  {
    name: "Sarbajit Mohanty",
    img: "/team/sarbajit.jpg",
    batch: "2019",
    linkedIn: "https://www.linkedin.com/in/sarbajitmohanty/",
    domain: "Programmer Analyst",
  },
]



export const cards = [
  {
    key: uuidv4(),
    content: <Card imagen="/p1.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p2.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p3.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p4.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p6.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p7.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p8.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p9.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p10.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p11.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p36.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p12.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p13.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p14.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p15.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p16.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p17.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p30.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p31.jpg" />,
  },

  {
    key: uuidv4(),
    content: <Card imagen="/p20.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p21.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p22.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p23.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p24.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p25.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p26.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p27.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p28.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p29.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p32.jpg" />,
  },
  
  {
    key: uuidv4(),
    content: <Card imagen="/p33.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p34.jpg" />,
  },
  {
    key: uuidv4(),
    content: <Card imagen="/p35.jpg" />,
  }
  
]