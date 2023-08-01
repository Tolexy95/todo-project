import React from "react";
import { useState } from "react";

const CustomContainer = (props) => {
  const { id, question, answer, completed, checkState} = props;

  return (
    <div>
      <p>{id}</p>
      <h1 className="questContain" onClick={() => checkState(id)}>
        {question}
      </h1>

      {completed && <p>{answer}</p>}
    </div>
  );
};

export default CustomContainer;
