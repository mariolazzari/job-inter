import { UseState } from "./components/UseState";
import { UseFetch } from "./components/UseFetch";
import { UseStorage } from "./components/UseStorage";
import { UseMutation } from "./components/UseMutation";

function App() {
  return (
    <div className="container">
      <h1>React Hooks</h1>

      <UseState />
      <UseFetch />
      <UseStorage />
      <UseMutation />
    </div>
  );
}

export default App;
