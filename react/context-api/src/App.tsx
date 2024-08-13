import "./App.css";
import { useThemeContext } from "./context/ThemeContext";
import { Theme } from "./types/Theme";

function App() {
  const { theme, themes, setTheme } = useThemeContext();

  return (
    <div>
      <h1 className="title">Context API</h1>

      <h5>Selected theme: {theme}</h5>

      <h6>Available themes</h6>
      <ul>
        {themes.map(theme => (
          <li key={theme} onClick={() => setTheme(theme as Theme)}>
            {theme}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
