import React, { useState } from 'react'
import './Courses.css'

export default function Courses({AllCourses}) {
   

    // Format price to currency
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    // Get unique categories
    const getCategories = () => {
        const categories = [...new Set(AllCourses.map(course => course.category))];
        return ['All', ...categories];
    };

    const [selectedCategory, setSelectedCategory] = useState('All');

    // Filter courses by category
    const filteredCourses = selectedCategory === 'All' 
        ? AllCourses 
        : AllCourses.filter(course => course.category === selectedCategory);

    return (
        <div className="courses-page">
            {/* Page Header */}
            <div className="page-header">
                <div className="container">
                    <h1>Our Advanced Courses</h1>
                    <p>Master cutting-edge technologies and advance your career</p>
                    <div className="course-count">
                        Total Courses: {AllCourses.length}
                    </div>
                </div>
            </div>

            <div className="container">
                {/* Course Categories */}
                <div className="course-categories">
                    {getCategories().map((category) => (
                        <button
                            key={category}
                            className={`category-tag ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Courses Container */}
                <div className="courses-container">
                    <div className="courses-grid">
                        {filteredCourses.map((course) => (
                            <div 
                                key={course.CourseId} 
                                className={`course-card ${course.featured ? 'featured' : ''}`}
                            >
                                {/* Course Image */}
                                <div className="course-image">
                                    <img src={course.image} alt={course.name} />
                                    <div className="course-overlay">
                                        <span>View Details</span>
                                    </div>
                                </div>

                                {/* Course Content */}
                                <div className="course-content">
                                    {/* Course Tags */}
                                    <div className="course-tags">
                                        <span className="course-tag">{course.category}</span>
                                        {course.featured && <span className="course-tag">Featured</span>}
                                    </div>

                                    {/* Course Title */}
                                    <h2 className="course-title">{course.name}</h2>

                                    {/* Course Description */}
                                    <p className="course-description">{course.desc}</p>

                                    {/* Course Meta */}
                                    <div className="course-meta">
                                        <div className="course-price">
                                            <span className="price-label">Price</span>
                                            <span className="price-value">{formatPrice(course.price)}</span>
                                        </div>
                                        <div className="course-duration">
                                            <span className="duration-label">Duration</span>
                                            <span className="duration-value">{course.duration}</span>
                                        </div>
                                    </div>

                                    {/* Course Action */}
                                    <div className="course-action">
                                        <button className="btn-enroll">
                                            Enroll Now
                                        </button>
                                        <button className="btn-preview">
                                            Preview
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