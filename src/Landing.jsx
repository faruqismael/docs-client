import { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [code, setCode] = useState("");

  function copyText(id) {
    const target = document.getElementById(id);
    target.select();

    document.execCommand("copy");
    alert("text-copied");
  }
  return (
    <div>
      <h1>HELLO WELCOME TO OUR PAGE</h1>
      <button>
        <Link to={`/documents/${"shortid"}`}>OPEN DOC</Link>
      </button>
      <h2>or</h2>

      <p>paste ur code here</p>
      <input
        type="text"
        id="myCode"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={() => copyText("myCode")}>
        <Link to={`/documents/${code}`}>OPEN DOC</Link>
      </button>
    </div>
  );
};

export default Landing;
