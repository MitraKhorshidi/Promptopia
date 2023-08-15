import React from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, changeTagHandler }) => {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3 my-10">
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          post={prompt}
          changeTagHandler={changeTagHandler}
        />
      ))}
    </div>
  );
};

export default PromptCardList;
