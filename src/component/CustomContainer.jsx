import React from "react";
import { useState } from "react";

const CustomContainer = (props) => {
  const { id, question, answer, checkState, index, checked } = props;

  return (
    <div>
      <p>{id}</p>
      <h1 className="questContain" onClick={() => checkState(index)}>
        {question}
      </h1>
      {checked === index && <p>{answer}</p>}
    </div>
  );
};

export default CustomContainer;
