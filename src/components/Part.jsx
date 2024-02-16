const Part = ({ part }) => {
    return (
      <p className="font-semibold">{part.name} {part.exercises}</p>
    );
  };

  export default Part;