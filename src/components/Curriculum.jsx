import Content from "./Content";

const Curriculum = ({ courses }) => {
    return (
      <>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Web dev curriculum</h3>
        {courses.map(course => (
          <div key={course.id} className="mb-2">
            <h4 className="text-xl font-semibold text-gray-800">{course.name}</h4>
            <Content parts={course.parts} />
          </div>
          ))
        }
      </>
    );
  };

  export default Curriculum;