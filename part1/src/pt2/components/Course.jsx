import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = ({ courses }) => {
  console.log(courses);
  return (
    <div>
      {courses.map((course) => (
        <div key={course.name}>
          <Header Title={course.name} />
          <Content parts={course.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;
