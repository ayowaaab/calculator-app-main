import { ThemeSwitch, Input } from "./components";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontWeight: 800 }}>calc</h1>
        <ThemeSwitch />
      </div>
      <Input />
      <Calculator />
    </div>
  );
};

export default App;
