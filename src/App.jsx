import React,{useState} from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import NavBar from './Components/NavBar'


import Home from './Pages/Home'
import Courses from "./Components/Courses.jsx"
import Teacher from "./Components/Teacher.jsx"
import Students from "./Components/Students.jsx"



export default function App() {


  // !==================States=======================

  // ? ----Courses:
   let [AllCourses, setAllCourses] = useState([
        // Brain-Machine Interface Courses
        {
            CourseId: 1,
            name: "Anatomy Of Brain For AI",
            desc: "Understanding brain anatomy is crucial for developing effective AI systems inspired by the human brain. This course covers cortex structure, neural pathways, and how brain regions inspire modern AI architectures and cognitive processing systems.",
            price: 500000,
            duration: "3 months",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
            category: "Brain-Machine Interface",
            featured: true
        },
        {
            CourseId: 2,
            name: "EEG Signal Processing & Analysis",
            desc: "Master the fundamentals of electroencephalogram signal processing for brain-computer interfaces. Learn to extract meaningful patterns from brain waves using advanced signal processing techniques and machine learning algorithms.",
            price: 450000,
            duration: "4 months",
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=250&fit=crop",
            category: "Brain-Machine Interface",
            featured: false
        },
        {
            CourseId: 3,
            name: "Neural Networks & Deep Learning for BCI",
            desc: "Implement deep learning models for brain-computer interface applications. Cover CNN, RNN, and transformer architectures for processing neural signals and translating thoughts into digital commands.",
            price: 550000,
            duration: "5 months",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
            category: "Brain-Machine Interface",
            featured: true
        },
        {
            CourseId: 4,
            name: "Neurofeedback Systems Design",
            desc: "Design and implement real-time neurofeedback systems for therapeutic and enhancement applications. Learn hardware integration, signal conditioning, and user interface design for BCI applications.",
            price: 420000,
            duration: "3 months",
            image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop",
            category: "Brain-Machine Interface",
            featured: false
        },
        {
            CourseId: 5,
            name: "Invasive vs Non-Invasive BCI Technologies",
            desc: "Comprehensive comparison of invasive and non-invasive brain-computer interface technologies. Explore implantable electrodes, surface electrodes, and emerging wireless neural recording systems.",
            price: 380000,
            duration: "2 months",
            image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=250&fit=crop",
            category: "Brain-Machine Interface",
            featured: false
        },

        // Mathematics Courses
        {
            CourseId: 6,
            name: "Math Behind The Neurons",
            desc: "Explore the mathematical foundations of neural computation including differential equations, linear algebra, and probability theory that govern how neurons process and transmit information in biological and artificial systems.",
            price: 350000,
            duration: "4 months",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
            category: "Mathematics",
            featured: false
        },
        {
            CourseId: 7,
            name: "Advanced Calculus for AI Systems",
            desc: "Master multivariable calculus, vector calculus, and differential equations essential for understanding gradient descent, backpropagation, and optimization algorithms in machine learning and neural networks.",
            price: 300000,
            duration: "3 months",
            image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&h=250&fit=crop",
            category: "Mathematics",
            featured: false
        },
        {
            CourseId: 8,
            name: "Linear Algebra for Machine Learning",
            desc: "Comprehensive coverage of linear algebra concepts crucial for ML including eigenvalues, eigenvectors, matrix decomposition, and vector spaces. Applications in dimensionality reduction and neural network architectures.",
            price: 280000,
            duration: "3 months",
            image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=250&fit=crop",
            category: "Mathematics",
            featured: false
        },
        {
            CourseId: 9,
            name: "Statistical Methods in Data Science",
            desc: "Advanced statistical techniques including Bayesian inference, hypothesis testing, regression analysis, and probability distributions for analyzing complex datasets in AI and research applications.",
            price: 320000,
            duration: "4 months",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
            category: "Mathematics",
            featured: false
        },
        {
            CourseId: 10,
            name: "Mathematical Optimization Theory",
            desc: "Deep dive into optimization algorithms including gradient methods, convex optimization, and constrained optimization. Essential for understanding AI training algorithms and parameter tuning.",
            price: 400000,
            duration: "3 months",
            image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
            category: "Mathematics",
            featured: true
        },

        // Cosmos & Astrophysics Courses
        {
            CourseId: 11,
            name: "Entropy In Nature",
            desc: "Explore the fundamental concept of entropy across cosmic scales, from thermodynamics to information theory. Understand how entropy drives stellar evolution, galaxy formation, and the ultimate fate of the universe.",
            price: 450000,
            duration: "4 months",
            image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=250&fit=crop",
            category: "Cosmos & Astrophysics",
            featured: false
        },
        {
            CourseId: 12,
            name: "The Particle Accelerator Physics",
            desc: "Understanding particle accelerator design, beam dynamics, and the physics of high-energy collisions. Explore how accelerators probe fundamental particles and contribute to our understanding of the universe's building blocks.",
            price: 520000,
            duration: "5 months",
            image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&h=250&fit=crop",
            category: "Cosmos & Astrophysics",
            featured: false
        },
        {
            CourseId: 13,
            name: "Cosmological Models & Dark Matter",
            desc: "Advanced study of cosmological models including Lambda-CDM, inflation theory, and dark matter physics. Analyze observational evidence and theoretical frameworks that describe our universe's structure and evolution.",
            price: 480000,
            duration: "4 months",
            image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=250&fit=crop",
            category: "Cosmos & Astrophysics",
            featured: false
        },
        {
            CourseId: 14,
            name: "Stellar Evolution & Nucleosynthesis",
            desc: "Comprehensive study of stellar lifecycles from main sequence to supernovae. Learn how stars forge elements and distribute them throughout the cosmos, creating the building blocks of planets and life.",
            price: 420000,
            duration: "3 months",
            image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=250&fit=crop",
            category: "Cosmos & Astrophysics",
            featured: false
        },
        {
            CourseId: 15,
            name: "Exoplanet Detection & Analysis", 
            desc: "Master techniques for discovering and characterizing exoplanets including transit photometry, radial velocity measurements, and direct imaging. Analyze atmospheric compositions and assess habitability.",
            price: 390000,
            duration: "3 months",
            image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=250&fit=crop",
            category: "Cosmos & Astrophysics",
            featured: false
        },

        // Advanced Technology Courses
        {
            CourseId: 16,
            name: "Quantum Computing Fundamentals",
            desc: "Introduction to quantum mechanics principles applied to computing. Learn quantum gates, algorithms, and programming languages like Qiskit for solving complex computational problems exponentially faster.",
            price: 600000,
            duration: "6 months",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
            category: "Advanced Technology",
            featured: true
        },
        {
            CourseId: 17,
            name: "Advanced AI & Machine Learning",
            desc: "Cutting-edge AI techniques including transformers, GANs, reinforcement learning, and few-shot learning. Implement state-of-the-art models for computer vision, NLP, and autonomous systems.",
            price: 550000,
            duration: "5 months",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
            category: "Advanced Technology",
            featured: false
        },
        {
            CourseId: 18,
            name: "Nanotechnology & Molecular Engineering",
            desc: "Explore nanoscale engineering principles, molecular self-assembly, and applications in medicine, electronics, and materials science. Design and simulate molecular machines and nanodevices.",
            price: 470000,
            duration: "4 months",
            image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=250&fit=crop",
            category: "Advanced Technology",
            featured: false
        },
        {
            CourseId: 19,
            name: "Robotics & Autonomous Systems",
            desc: "Advanced robotics covering sensor fusion, path planning, SLAM, and autonomous navigation. Integrate AI algorithms with robotic hardware for real-world applications in manufacturing and exploration.",
            price: 510000,
            duration: "5 months",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
            category: "Advanced Technology",
            featured: false
        },
        {
            CourseId: 20,
            name: "Blockchain & Cryptographic Systems",
            desc: "Deep dive into blockchain technology, consensus mechanisms, smart contracts, and cryptographic protocols. Build secure decentralized applications and understand the mathematics behind modern cryptography.",
            price: 380000,
            duration: "3 months",
            image: "https://images.unsplash.com/photo-1639762681485-074b7a938d0b?w=400&h=250&fit=crop",
            category: "Advanced Technology",
            featured: false
        },

        // Interdisciplinary & Advanced Courses
        {
            CourseId: 21,
            name: "Bioinformatics & Computational Biology",
            desc: "Apply computational methods to biological problems including genome analysis, protein folding prediction, and drug discovery. Use machine learning for analyzing biological big data and molecular interactions.",
            price: 460000,
            duration: "4 months",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
            category: "Interdisciplinary",
            featured: false
        },
        {
            CourseId: 22,
            name: "Complex Systems & Network Theory",
            desc: "Study emergent behavior in complex systems from neural networks to economic markets. Learn graph theory, network analysis, and modeling techniques for understanding interconnected systems.",
            price: 400000,
            duration: "3 months",
            image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
            category: "Interdisciplinary",
            featured: false
        },
        {
            CourseId: 23,
            name: "Computational Neuroscience",
            desc: "Mathematical modeling of neural circuits, synaptic plasticity, and information processing in the brain. Implement compartmental models and analyze neural network dynamics using advanced simulation tools.",
            price: 520000,
            duration: "5 months",
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=250&fit=crop",
            category: "Interdisciplinary",
            featured: false
        },
        {
            CourseId: 24,
            name: "Artificial General Intelligence Theory",
            desc: "Explore theoretical foundations of AGI including cognitive architectures, reasoning systems, and consciousness models. Study current limitations and future pathways toward human-level artificial intelligence.",
            price: 580000,
            duration: "6 months",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
            category: "Interdisciplinary",
            featured: true
        },
        {
            CourseId: 25,
            name: "Space Mission Design & Engineering",
            desc: "Comprehensive course on spacecraft design, orbital mechanics, and mission planning. Learn trajectory optimization, life support systems, and the engineering challenges of deep space exploration.",
            price: 490000,
            duration: "4 months",  
            image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=250&fit=crop",
            category: "Interdisciplinary",
            featured: false
        },

        // Specialized Advanced Topics
        {
            CourseId: 26,
            name: "Theoretical Physics & String Theory",
            desc: "Advanced theoretical physics including general relativity, quantum field theory, and string theory. Explore unified field theories and the fundamental nature of spacetime and matter.",
            price: 650000,
            duration: "6 months",
            image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&h=250&fit=crop",
            category: "Specialized Advanced",
            featured: false
        },
        {
            CourseId: 27,
            name: "Bioengineering & Synthetic Biology",
            desc: "Design biological systems using engineering principles. Learn genetic circuits, metabolic engineering, and how to program living cells for applications in medicine, manufacturing, and environmental solutions.",
            price: 540000,
            duration: "5 months",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
            category: "Specialized Advanced",
            featured: false
        },
        {
            CourseId: 28,
            name: "Advanced Signal Processing & Control Systems",
            desc: "Master digital signal processing, adaptive filters, and modern control theory. Applications in autonomous vehicles, aerospace systems, and real-time embedded systems for critical applications.",
            price: 430000,
            duration: "4 months",
            image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
            category: "Specialized Advanced",
            featured: false
        },
        {
            CourseId: 29,
            name: "Virtual & Augmented Reality Systems",
            desc: "Develop immersive VR/AR applications using advanced computer graphics, spatial computing, and human-computer interaction principles. Create next-generation interfaces for education and training.",
            price: 410000,
            duration: "3 months",
            image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=250&fit=crop",
            category: "Specialized Advanced",
            featured: false
        },
        {
            CourseId: 30,
            name: "Climate Modeling & Environmental Physics",
            desc: "Apply physics and mathematics to understand climate systems, atmospheric dynamics, and environmental changes. Use computational models to predict climate patterns and assess environmental impacts.",
            price: 450000,
            duration: "4 months",
            image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=400&h=250&fit=crop",
            category: "Specialized Advanced",
            featured: false
        },
        {
            CourseId: 31,
            name: "Advanced Materials Science",
            desc: "Study novel materials including metamaterials, superconductors, and smart materials. Learn synthesis techniques, characterization methods, and applications in next-generation technologies.",
            price: 480000,
            duration: "4 months",
            image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=250&fit=crop",
            category: "Specialized Advanced",
            featured: false
        },
        {
            CourseId: 32,
            name: "Cybersecurity & Ethical Hacking",
            desc: "Comprehensive cybersecurity training including penetration testing, network security, and digital forensics. Learn to protect systems against advanced threats and understand ethical hacking methodologies.",
            price: 390000,
            duration: "3 months",
            image: "https://images.unsplash.com/photo-1639762681485-074b7a938d0b?w=400&h=250&fit=crop",
            category: "Specialized Advanced",
            featured: false
        },
        {
            CourseId: 33,
            name: "Energy Systems & Renewable Technologies",
            desc: "Advanced study of renewable energy systems including solar, wind, and fusion technologies. Learn grid integration, energy storage, and the physics behind next-generation power systems.",
            price: 420000,
            duration: "4 months",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop",
            category: "Specialized Advanced",
            featured: false
        },
        {
            CourseId: 34,
            name: "Advanced Data Structures & Algorithms",
            desc: "Master complex algorithms, graph theory, and advanced data structures for high-performance computing. Optimize code for large-scale distributed systems and real-time applications.",
            price: 350000,
            duration: "3 months",
            image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=250&fit=crop",
            category: "Specialized Advanced",
            featured: false
        }
    ]);

 // ? -----Teachers:
   let [allTeachers, setAllTeachers] = useState([
        {
            id: 101,
            courses: [1, 4],
            name: "Dr. Sikandar Sir",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
            age: 29,
            rating: 4.9,
            reviews: 1000,
            exp: 12,
            qualification: "PHD",
            specialization: "Brain-Machine Interface",
            description: "Leading expert in brain-computer interfaces with extensive research in neural signal processing and cognitive neuroscience applications.",
        },
        {
            id: 102,
            courses: [2, 4, 5, 6, 7],
            name: "Raza Sir",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
            age: 25,
            rating: 4.8,
            reviews: 850,
            exp: 8,
            qualification: "B.Tech",
            specialization: "Signal Processing & Mathematics",
            description: "Passionate educator specializing in EEG signal analysis and mathematical foundations of AI systems with hands-on industry experience.",
        },
        {
            id: 103,
            courses: [3, 4, 5, 6],
            name: "Deepak Sir",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
            age: 24,
            rating: 4.7,
            reviews: 720,
            exp: 6,
            qualification: "B.Tech",
            specialization: "Deep Learning & Neural Networks",
            description: "Young and dynamic instructor with expertise in deep learning architectures and their applications in brain-computer interface systems.",
        },
        {
            id: 104,
            courses: [3, 4, 5, 6, 8, 9, 10],
            name: "Satyam Rana",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
            age: 31,
            rating: 4.9,
            reviews: 1200,
            exp: 12,
            qualification: "M.Tech, MSC AI",
            specialization: "Advanced Mathematics & AI",
            description: "Senior researcher with dual expertise in advanced mathematics and artificial intelligence, focusing on optimization algorithms and machine learning.",
        },
        {
            id: 105,
            courses: [1, 2, 3],
            name: "Dr. Priya Sharma",
            image: "https://images.unsplash.com/photo-1494790108755-2616b332c524?w=400&h=400&fit=crop&crop=face",
            age: 34,
            rating: 4.8,
            reviews: 950,
            exp: 15,
            qualification: "PHD Neuroscience",
            specialization: "Computational Neuroscience",
            description: "Renowned neuroscientist with extensive experience in brain anatomy and neural signal processing for AI applications.",
        },
        {
            id: 106,
            courses: [6, 7, 8, 9, 10],
            name: "Prof. Ankit Kumar",
            image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
            age: 38,
            rating: 4.9,
            reviews: 1500,
            exp: 18,
            qualification: "PHD Mathematics",
            specialization: "Applied Mathematics",
            description: "Distinguished professor of mathematics with focus on optimization theory, linear algebra, and statistical methods in AI research.",
        }
    ]);




  // !==========================================


  return (
    <div>
        <BrowserRouter>
            <NavBar/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/courses" element={<Courses AllCourses = {AllCourses}/>}/>
                <Route path="/teacher" element={<Teacher AllTeachers = {allTeachers} AllCourses = {AllCourses}/>}/> 
                <Route path="/students" element={<Students AllCourses = {AllCourses} AllTeachers = {allTeachers} />}/>
            </Routes>

        </BrowserRouter>
    </div>
  )
}
