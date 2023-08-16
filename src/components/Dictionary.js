import React from "react";
import DictionaryItem from "./DictionaryItem";
import { useParams } from "react-router-dom";
import DictionaryItemDetail from "./DictionaryItemDetail";

const Dictionary = ({ dict }) => {
  const { id } = useParams();

  return id === undefined ? (
    <div>
      {dict.map((word) => (
        <DictionaryItem
          key={word.id}
          id={word.id}
          title={word.title}
          description={word.description}
          date={word.date}
          author={word.author}
          like={word.like}
        />
      ))}
    </div>
  ) : (
    <DictionaryItemDetail dict={dict} id={id} />
  );
};

export default Dictionary;
