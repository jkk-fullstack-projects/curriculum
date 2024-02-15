import Part from "./Part";

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

  export default Content;