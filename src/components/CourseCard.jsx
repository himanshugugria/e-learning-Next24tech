// src/components/CourseCard.js
import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-700 mb-4">{course.description}</p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseCard;
