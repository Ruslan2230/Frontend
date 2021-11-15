import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const tags = ["tag1", "tag2", "tag3"];

  const formCount = () => {
    return count === 0 ? "ноль" : count;
  };

  const getBadgeClass = () => {
    return `badge m-2 bg-${count === 0 ? "danger" : "primary"}`;
  };

  const renderTegs = () => {
    if (tags.length === 0) return "Теги не найдены";
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  };

  const handleIncrement = (obj) => {
    console.log(obj);
    setCount(count + 1);
  };

  const handleDecrement = (obj) => {
    console.log(obj);
    count && setCount(count - 1);
  };

  return (
    <>
      {tags.length === 0 && "Теги не найдены"}
      {renderTegs()}
      <h1 className={getBadgeClass()}>{formCount()}</h1>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => {
          handleIncrement({ id: 1 });
        }}
      >
        increment
      </button>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => {
          handleDecrement({ id: 1 });
        }}
      >
        decrement
      </button>
    </>
  );
};

export default Counter;
