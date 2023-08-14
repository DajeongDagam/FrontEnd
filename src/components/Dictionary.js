import React from "react";
import DictionaryItem from "./DictionaryItem";

const Dictionary = ({ dict }) => {
  return (
    <div>
      {dict.map((word) => (
        <DictionaryItem
          key={word.id}
          title={word.title}
          description={word.description}
          date={word.date}
          author={word.author}
          like={word.like}
        />
      ))}
    </div>
  );
};

export default Dictionary;
