import React, { useState } from 'react';
import './Students.css';

export default function Students({ AllCourses, AllTeachers }) {
    let [allStudents, setAllStudents] = useState([
        {
            id: 1001,
            Name: "Aditya Dubey",
            Age: 19,
            Bio: "I Am Awesome Man with a passion for learning and exploring new technologies. Always eager to take on challenges and grow both personally and professionally.",
            Profile: "https://m.media-amazon.com/images/M/MV5BOGNhOTg1Y2UtZDg3ZS00MjNmLTk4MGMtMGE4ZDc2MjRjNDk0XkEyXkFqcGc@._V1_CR306,88,668,1001_FMjpg_UX1000_.jpg",
            Courses: [1, 3, 5],
            Teachers: [102, 103]
        },
        {
            id: 1002,
            Name: "Anjali Sadafal",
            Age: 20,
            Bio: "Dedicated computer science student with expertise in web development and data structures. Love solving complex problems and building innovative solutions.",
            Profile: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            Courses: [2, 4],
            Teachers: [101, 104]
        },
        {
            id: 1003,
            Name: "Mayank Verma",
            Age: 21,
            Bio: "Aspiring software engineer with strong analytical skills and a keen interest in artificial intelligence and machine learning technologies.",
            Profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            Courses: [1, 2, 3],
            Teachers: [101, 102, 105]
        }
    ]);

    // Function to render star rating
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="rating-star">★</span>);
        }
        
        if (hasHalfStar) {
            stars.push(<span key="half" className="rating-star">★</span>);
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="rating-star" style={{color: '#ddd'}}>★</span>);
        }
        
        return stars;
    };

    return (
        <div className="students-page">
            {/* Page Header */}
            <div className="page-header">
                <div className="container">
                    <h1>Our Amazing Students</h1>
                    <p>Meet our talented learners and their academic journey</p>
                    <div className="student-count">
                        Total Students: {allStudents.length}
                    </div>
                </div>
            </div>

            <div className="container">
                {/* Students Container */}
                <div className="students-container">
                    <div className="students-grid">
                        {allStudents.length > 0 ? (
                            allStudents.map((student, index) => (
                                <div key={student.id} className="StudentCard">
                                    {/* Student Profile Image */}
                                    <img 
                                        src={student.Profile} 
                                        alt={student.Name}
                                        onError={(e) => {
                                            e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
                                        }}
                                    />
                                    
                                    {/* Student Name */}
                                    <h2>{student.Name}</h2>
                                    
                                    {/* Student Age */}
                                    <div className="student-age">
                                        {student.Age} years old
                                    </div>
                                    
                                    {/* Student Bio */}
                                    <p>{student.Bio}</p>
                                    
                                    {/* Courses Enrolled Section */}
                                    <div className="student-courses-section">
                                        <h2>Courses Enrolled</h2>
                                        {AllCourses && AllCourses.filter((course) => student.Courses.includes(course.CourseId)).length > 0 ? (
                                            AllCourses.filter((course) => student.Courses.includes(course.CourseId)).map((course) => (
                                                <div key={course.CourseId} className="course-card">
                                                    <h3>{course.name}</h3>
                                                    <p>{course.desc}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="empty-state">
                                                <p>No courses enrolled yet</p>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Teachers Assigned Section */}
                                    <div className="student-teachers-section">
                                        <h2>Assigned Teachers</h2>
                                        {AllTeachers && AllTeachers.filter((teacher) => student.Teachers.includes(teacher.id)).length > 0 ? (
                                            AllTeachers.filter((teacher) => student.Teachers.includes(teacher.id)).map((teacher) => (
                                                <div key={teacher.id} className="teacher-mini-card">
                                                    <img 
                                                        src={teacher.image} 
                                                        alt={teacher.name}
                                                        onError={(e) => {
                                                            e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
                                                        }}
                                                    />
                                                    <div className="teacher-info">
                                                        <h3>{teacher.name}</h3>
                                                        <p className="teacher-description">{teacher.description}</p>
                                                        <div className="teacher-stats">
                                                            <div className="teacher-experience">
                                                                {teacher.exp} years exp
                                                            </div>
                                                            <div className="teacher-rating">
                                                                {renderStars(teacher.rating)}
                                                                <span>{teacher.rating}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="empty-state">
                                                <p>No teachers assigned yet</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="empty-state">
                                <h3>No Students Found</h3>
                                <p>There are currently no students enrolled in the system.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}