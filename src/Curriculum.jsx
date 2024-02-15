import Content from "./components/Content";

const Curriculum = ({ courses }) => {
    return (
      <>
        <h3>Web dev curriculum</h3>
        {courses.map(course => (
          <div key={course.id}>
            <h4>{course.name}</h4>
            <Content parts={course.parts} />
          </div>
          ))
        }
      </>
    );
  };

  export default Curriculum;