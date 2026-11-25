import { useState } from "react";
import "./App.css";

function App() {
  const [marks, setMarks] = useState(["", "", "", "", ""]);
  const [average, setAverage] = useState("");

  function calculate() {
    let total = 0;

    for (let i = 0; i < 5; i++) {
      if (marks[i] === "") {
        alert("Enter all subject marks");
        return;
      }
      total += Number(marks[i]);
    }

    setAverage(total / 5);
  }

  return (
    <div>
      <h2>Student Marks Dashboard</h2>

      <input
        type="number"
        placeholder="Subject 1"
        onChange={(e) =>
          setMarks([...marks.slice(0, 0), e.target.value, ...marks.slice(1)])
        }
      />

      <input
        type="number"
        placeholder="Subject 2"
        onChange={(e) =>
          setMarks(marks.map((m, i) => (i === 1 ? e.target.value : m)))
        }
      />

      <input
        type="number"
        placeholder="Subject 3"
        onChange={(e) =>
          setMarks(marks.map((m, i) => (i === 2 ? e.target.value : m)))
        }
      />

      <input
        type="number"
        placeholder="Subject 4"
        onChange={(e) =>
          setMarks(marks.map((m, i) => (i === 3 ? e.target.value : m)))
        }
      />

      <input
        type="number"
        placeholder="Subject 5"
        onChange={(e) =>
          setMarks(marks.map((m, i) => (i === 4 ? e.target.value : m)))
        }
      />

      <br />
      <br />

      <button onClick={calculate}>Calculate Average</button>

      <h3>Average: {average}</h3>
    </div>
  );
}

export default App;
