import React from "react";
import DictionaryItem from "./DictionaryItem";
import { useSearchParams } from "react-router-dom";
import DictionaryItemDetail from "./DictionaryItemDetail";

const Dictionary = ({ dict }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("keyword");

  return query === null ? (
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
  ) : (
    <DictionaryItemDetail dict={dict} keyword={query} />
  );
};

export default Dictionary;
