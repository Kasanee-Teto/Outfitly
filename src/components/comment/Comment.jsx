import React, { useState } from "react";

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setComments([...comments, input]);
      setInput(""); // reset input
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }} className="card-header container mt-4">
      <input
        type="text"
        value={input}
        className="form-control mb-3 align-items"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Tulis komentar lalu tekan Enter..."
        style={{ width: "100%", padding: "8px" }}
      />
      <ul className="card-body list-group">
        {comments.map((c, i) => (
          <li key={i} className="list-group-item">{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommentSection;
