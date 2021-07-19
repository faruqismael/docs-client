import { useState } from "react";
import { useParams } from "react-router-dom";

const DisplayURL = () => {
  const [btn, setBtn] = useState("COPY TEXT");
  const { id } = useParams();
  const url = "http://localhost:3001/documents/";

  function copyText(id) {
    const target = document.getElementById(id);
    target.select();

    document.execCommand("copy");
  }
  return (
    <div className="absolute">
      <div className="fixed bottom-10 right-10">
        <button
          className="bg-green-500 text-white p-2"
          onClick={() => {
            copyText("token");
            setBtn("COPIED");
          }}
        >
          {btn}
          <input
            className="hidden"
            type="text"
            id="token"
            value={`${url}${id}`}
          />
        </button>
      </div>
    </div>
  );
};

export default DisplayURL;
