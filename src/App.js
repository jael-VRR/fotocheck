import "./App.css";
import Navbar1 from "./components/Navbar.jsx";
import Content from "./components/Content.jsx";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar1 />
      </header>
      <main>
        <Content />
      </main>
    </div>
  );
}

export default App;
