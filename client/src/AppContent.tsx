import React, { useState } from "react";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const AppContent = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const onClickFetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  };

  const onMouseEnterText = () => {
    console.log("entered the text");
  };

  const onMouseLeaveText = () => {
    console.log("Left the text");
  };

  return (
    <div>
      <p onMouseEnter={onMouseEnterText} onMouseLeave={onMouseLeaveText}>
        This is some text
      </p>
      <p>This is the content.</p>
      <button
        onClick={onClickFetchData}
        className="bg-cyan-500 rounded-full text-slate-50 px-3 w-fit h-auto"
      >
        Click Me
      </button>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AppContent;
