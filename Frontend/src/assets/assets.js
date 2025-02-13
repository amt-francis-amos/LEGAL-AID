import heroImg from './hero-img.jpg';
import handImg from './hand-img.png';   
import telImg   from './tel-img.png';   
import arrowImg from './arrow-img.png';   
import aboutPic  from './about-pic.jpg';
import serviceImg from './services-img.jpg';
import teamImg1 from './team-1.jpg';
import teamImg2 from './team-2.jpg';


export const assets = {
    heroImg,
    handImg,  
    telImg,
    arrowImg,
    aboutPic,
    serviceImg,
    teamImg1,
    teamImg2
}



import { FaGavel, FaGlobe, FaBuilding, FaLeaf, FaHandshake, FaBriefcase, FaUsers, FaHeart, FaFutbol, FaLaptopCode, FaLightbulb, FaBalanceScale, FaUniversity } from "react-icons/fa";

export const servicesData = [
  { icon: FaGavel, title: "Litigation", description: "Expert litigation services, fighting for clients' interests with strategic planning and courtroom expertise." },
  { icon: FaGlobe, title: "Immigration", description: "Comprehensive immigration services, guiding clients through complex legal processes with expertise." },
  { icon: FaBuilding, title: "Real Estate & Commercial", description: "Facilitating smooth transactions in commercial and real estate conveyance." },
  { icon: FaLeaf, title: "Environmental Law", description: "Navigating regulations and advocating for sustainable solutions." },
  { icon: FaHandshake, title: "Mediation", description: "Facilitating constructive dialogue and resolution between parties." },
  { icon: FaBriefcase, title: "Corporate Law", description: "Providing tailored legal solutions for governance, compliance, and transactions." },
  { icon: FaUsers, title: "Employment & Labour", description: "Ensuring fair treatment and compliance for employers and employees." },
  { icon: FaHeart, title: "Family Law", description: "Compassionate support for divorce, child custody, and domestic legal matters." },
  { icon: FaFutbol, title: "Sports Law", description: "Comprehensive legal counsel for athletes, teams, and sports organizations." },
  { icon: FaLaptopCode, title: "ICT Law", description: "Navigating technology-related legal issues to ensure compliance and innovation." },
  { icon: FaLightbulb, title: "Intellectual Property", description: "Safeguarding innovations, creations, and brands through legal protection." },
  { icon: FaBalanceScale, title: "Public Interest Litigation", description: "Advocating for justice through strategic legal action for societal welfare." },
  { icon: FaUniversity, title: "Regulatory & Constitutional Compliance", description: "Providing guidance on legal frameworks to ensure adherence and sustainability." },
];





export const teamMembers = [
  {
    name: "John Jackson",
    image: assets.teamImg1,
    details: {
      title: "Partner",
      name: "Rachael Waweru",
      qualifications: "LL.B [Hons] University of Nairobi | Dip. Law [KSL]",
      expertise: `Ms. Waweru is an Advocate of the High Court of Kenya...`,
      areasOfPractice: [
        "Conveyancing & Commercial Law",
        "Successfully handled transactions worth USD 1,000,000.",
      ],
    },
  },
  {
    name: "Michael Johnson",
    image: assets.teamImg2,
    details: {
      title: "Partner",
      name: "Jolline Katama",
      qualifications: "LL.B (Hons) | Dip. Law (KSL)",
      expertise: `Jolline is currently the Managing Partner...`,
      areasOfPractice: [
        "Corporate Governance",
        "Handles contracts, compliance, and governance matters.",
      ],
    },
  },
];