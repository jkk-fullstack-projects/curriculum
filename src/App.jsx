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
    }
  ]

  const Part = ({ name, exercises }) => {
    return <p>{name} {exercises}</p>;
  };

  const Content = ({ parts }) => {
    console.log(parts)
    return (
      <div>
        {parts.map(part => 
          <Part 
            key={part.id} 
            name={part.name} 
            exercises={part.exercises} 
            />
          )}
      </div>
    );
  };

 
  const Header = ({ name }) => {
    return <h4>{name}</h4>;
  };
  
  const Course = ({ course }) => {
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
      </div>
    );
  };

  return (
    <div>
      <h3>Web dev curriculum</h3>
      {courses.map(course => 
        <Course key={course.id} course={course} />
      )}
    </div>
  );
};

export default App
