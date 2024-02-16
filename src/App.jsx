import Curriculum from "./components/Curriculum";
import courses from "./data/courses";

const App = () => {

return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-blue-100 rounded-lg p-6 m-4 shadow-lg">
        <Curriculum courses={courses} />
      </div>
    </div>
  );
};

export default App