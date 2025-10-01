import anomaly_detection from '../assets/images/project_photos/AnomalyApp.png';
import unikrewapp from '../assets/images/project_photos/UnikrewApp_Dash.png';
import chat_to_your_database from '../assets/images/project_photos/chat_to_your_database.png';
import travel_camp from "../assets/images/project_photos/TravelCamp.png"

export const projects = [
    {
        title: "Anomaly Detection System",
        description: "Anomaly Detection System for identifying corruption cases at hospital, using data streams from inpatient and outpatient to detect management-related anomalies.",
        image: anomaly_detection,
        skills: ["ML", "Python", "Jupyter Notebook", "NodeJS", "SQL","Express","Vercel"],
        github: "https://github.com/MaryamRaheemKhan/AnomXplorer",
    },
     {
        title: "Tourist Automated Guide",
        description: "Built a Next.js tourist guide platform, enabling clients to explore Germany through automated query handling and retrieval of the most relevant tourist data.",
        image: travel_camp,
        skills:   ["Next.js","OpenCV","Langchain","Superbase","RAG"],
        github: "https://github.com/MaryamRaheemKhan/Tourist-Automated-Guide",
    },
        {
        title: "Chat to Your Database",
        description: "Created an NLP-based application for database interaction via natural language, utilizing LangChain, SQL Agents, and LLMs for intuitive read/write operations.",
        image: chat_to_your_database,
        skills: ["React", "Node.js", "SQL", "NLP", "LangChain"],
        github: "https://github.com/MaryamRaheemKhan/Talk2Data",
    },
    {
        title: "HR Portal System",
        description: "Built an HR Salary Slip Portal with React.js and Flask to process Excel payrolls, generate/email PDF slips, log activities in real time, and deployed on AWS EC2.",
        image:unikrewapp,
        skills: ["React", "Flask","Docker","AWS EC2", "Smtp Server"],
        github: "https://github.com/MaryamRaheemKhan/UnikrewApp",
    },
];