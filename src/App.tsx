import { ThemeSwitch, Input, Button } from "./components";

const App = () => {
  const keys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "0",
    "/",
    "+",
    "-",
    "*",
    "DEL",
    "=",
    "RESET",
  ];
  return (
    <div>
      <h1>calc</h1>
      <ThemeSwitch />
      <Input />
      <div>
        {keys.map((key) => (
          <Button key={key} value={key} />
        ))}
      </div>
    </div>
  );
};

export default App;
