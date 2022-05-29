import GitList from "./components/GitList/GitList";
import {gitList} from "./data"

function App() {
  return (
    <div className="h-screen py-5 text-center text-teal-200 bg-gray-900">
      <h1 className="font-serif text-3xl">Git Cheat Sheet</h1>
      <GitList list={gitList}/>
    </div>
    
  );
}

export default App;
