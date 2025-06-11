import React, { useState } from 'react';
import './Teachers.css';

export default function Teacher({AllTeachers,AllCourses}) {
    // Course data to map teacher courses
  
   

    // Function to render star rating
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="star filled">★</span>);
        }
        
        if (hasHalfStar) {
            stars.push(<span key="half" className="star half">★</span>);
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
        }
        
        return stars;
    };

    return (
        <div className="teachers-page">
            {/* Page Header */}
            <div className="page-header">
                <div className="container">
                    <h1>Our Expert Teachers</h1>
                    <p>Learn from industry leaders and academic experts</p>
                    <div className="teacher-count">
                        Total Teachers: {AllTeachers.length}
                    </div>
                </div>
            </div>

            <div className="container">
                {/* Teachers Container */}
                <div className="teachers-container">
                    <div className="teachers-grid">
                        {AllTeachers.map((teacher) => (
                            <div key={teacher.id} className="teacher-card">
                                {/* Teacher Image */}
                                <div className="teacher-image">
                                    <img src={teacher.image} alt={teacher.name} />
                                    <div className="teacher-overlay">
                                        <span>View Profile</span>
                                    </div>
                                </div>

                                {/* Teacher Content */}
                                <div className="teacher-content">
                                    {/* Teacher Header */}
                                    <div className="teacher-header">
                                        <h2 className="teacher-name">{teacher.name}</h2>
                                        <div className="teacher-qualification">
                                            {teacher.qualification}
                                        </div>
                                    </div>

                                    {/* Teacher Specialization */}
                                    <div className="teacher-specialization">
                                        <span className="specialization-tag">
                                            {teacher.specialization}
                                        </span>
                                    </div>

                                    {/* Teacher Description */}
                                    <p className="teacher-description">
                                        {teacher.description}
                                    </p>

                                    {/* Teacher Stats */}
                                    <div className="teacher-stats">
                                        <div className="stat-item">
                                            <span className="stat-label">Experience</span>
                                            <span className="stat-value">{teacher.exp} years</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-label">Age</span>
                                            <span className="stat-value">{teacher.age} years</span>
                                        </div>
                                    </div>

                                    {/* Teacher Rating */}
                                    <div className="teacher-rating">
                                        <div className="rating-stars">
                                            {renderStars(teacher.rating)}
                                        </div>
                                        <div className="rating-info">
                                            <span className="rating-value">{teacher.rating}</span>
                                            <span className="rating-reviews">({teacher.reviews} reviews)</span>
                                        </div>
                                    </div>

                                    {/* Teacher Courses */}
                                    <div className="teacher-courses">
                                        <h4>Courses Teaching:</h4>
                                        <ul className="courses-list">
                                            {
                                                AllCourses.filter((Course)=>teacher.courses.includes(Course.CourseId)).map((C)=>(
                                                    <li key={C.CourseId}>{C.name}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    {/* Teacher Actions */}
                                    <div className="teacher-actions">
                                        <button className="btn-contact">
                                            Contact Teacher
                                        </button>
                                        <button className="btn-courses">
                                            View Courses
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}