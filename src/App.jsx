import Curriculum from "./Curriculum";
import courses from "./data/courses";

const App = () => {

return (
    <div>
      <Curriculum courses={courses} />
    </div>
  );
};

export default App