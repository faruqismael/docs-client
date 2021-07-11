import { useParams } from "react-router-dom";

const DisplayURL = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/documents/";
  const style = {
    backgroundColor: "black",
    color: "white",
    overflow: "visible",
    textAlign: "center",
  };
  return (
    <div>
      <pre class="ql-syntax" style={style} spellcheck="false">
        <center>
          {url}
          {id}
        </center>
      </pre>
    </div>
  );
};

export default DisplayURL;
