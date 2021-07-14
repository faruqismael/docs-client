import { useParams } from "react-router-dom";

const DisplayURL = () => {
  const { id } = useParams();
  const url = "http://localhost:3001/documents/";
  const style = {
    backgroundColor: "black",
    color: "white",
    overflow: "visible",
    textAlign: "center",
  };
  return (
    <div>
      copy url
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
