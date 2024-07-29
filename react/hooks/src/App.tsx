import { UseState } from "./components/UseState";
import { UseFetch } from "./components/UseFetch";
import { UseStorage } from "./components/UseStorage";

function App() {
  return (
    <div className="container">
      <h1>React Hooks</h1>

      <UseState />
      <UseFetch />
      <UseStorage />
    </div>
  );
}

export default App;
