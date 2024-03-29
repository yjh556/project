import { useState, useEffect } from "react";

const TitleUpdate = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle); 
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title"); 
    htmlTitle.innerText = title; 
  };
  useEffect(updateTitle, [title]); 
  return setTitle; 
};

export default TitleUpdate;
