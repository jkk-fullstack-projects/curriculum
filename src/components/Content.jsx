import Part from "./Part";

const Content = ({ parts }) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
      <div className="bg-blue-200 rounded-md p-4">
        {/* Parts list */}
        <div className="divide-y divide-blue-300">
          {parts.map(part =>
            <Part key={part.id} part={part} />
          )}
        </div>
        {/* Total line with a top border */}
        <div className="pt-4 mt-4 border-t border-blue-500">
          <p>Total of {totalExercises} exercises.</p>
        </div>        
      </div>
    );
  };

  export default Content;