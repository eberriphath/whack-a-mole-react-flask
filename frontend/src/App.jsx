import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return <h1>Whack-a-Mole Frontend</h1>;
}

export default App;
