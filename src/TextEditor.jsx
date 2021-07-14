import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "unordered" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

const TextEditor = () => {
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();

  const { id: documentId } = useParams();

  useEffect(() => {
    if (socket === undefined || quill === undefined) return;

    socket.once("load-document", (document) => {
      quill.setContents(document);
      quill.enable();
    });

    socket.emit("get-document", documentId);
  }, [socket, quill, documentId]);

  useEffect(() => {
    // if (socket == undefined) return;
    const s = io("http://localhost:5003");
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (quill == null || socket == null) return;

    const interval = setInterval(() => {
      socket.emit("save-document", quill.getContents());
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (quill === undefined || socket === undefined) return;
    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return;
      socket.emit("send-changes", delta);
    };
    quill.on("text-change", handler);

    return () => {
      quill.off("text-change", handler);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (quill === undefined || socket === undefined) return;

    const handler = (delta) => {
      quill.updateContents(delta);
    };
    socket.on("recieve-changes", handler);

    return () => {
      socket.off("recieve-changes", handler);
    };
  }, [socket, quill]);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("main");

    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: {
        toolbar: TOOLBAR_OPTIONS,
      },
    });
    q.disable();
    q.setText("Loading ... ");
    setQuill(q);
  }, []);

  return (
    <div>
      <div className="container" ref={wrapperRef}></div>
    </div>
  );
};

export default TextEditor;
