import { UseState } from "./components/UseState";
import { UseFetch } from "./components/UseFetch";
import { UseStorage } from "./components/UseStorage";
import { UseMutation } from "./components/UseMutation";
import { UseId } from "./components/UseId";
import { UseRef } from "./components/UseRef";
import { UseEffect } from "./components/UseEffect";
import UseTransition from "./components/UseTransition";

function App() {
  return (
    <div className="container">
      <h1>React Hooks</h1>
      <UseState />
      <UseFetch />
      <UseStorage />
      <UseMutation />
      <UseId />
      <UseRef />
      <UseEffect />
      <UseTransition />
    </div>
  );
}

export default App;
