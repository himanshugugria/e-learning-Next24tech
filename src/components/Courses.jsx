// src/components/Courses.js
import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: 'React for Beginners',
    description: 'Learn the basics of React.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png'
  },
  {
    title: 'Advanced JavaScript',
    description: 'Deep dive into JavaScript.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg'
  },
  {
    title: 'MERN stack',
    description: 'Deep dive into MongoDB,Express.js,React.js,Node.js.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png'
  },
  // Add more courses as needed
];

const Courses = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
