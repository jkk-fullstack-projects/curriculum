const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const Part = ({ part }) => {
    return (
      <p>{part.name} {part.exercises}</p>
    );
  };

  const Content = ({ parts }) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
      <div>
        {parts.map(part=>
          <Part key={part.id} part={part} />
        )}
          <p>Total of {totalExercises} exercises.</p>
      </div>
    );
  };

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

return (
    <div>
      <Curriculum courses={courses} />
    </div>
  );
};

export default App