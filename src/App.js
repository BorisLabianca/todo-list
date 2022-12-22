import "./App.css";

import Header from "./components/Header";
import ToolBar from "./components/ToolBar";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Header />
      <ToolBar />
      <Todos />
    </div>
  );
}

export default App;
