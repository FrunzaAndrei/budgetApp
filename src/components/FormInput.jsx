import React, { useState } from "react";

const FormInput = ({ handleAddButton }) => {
  const [name, setName] = useState("Add Name");
  const [value, setValue] = useState(0);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => handleAddButton(name, value)}>Add money</button>
    </div>
  );
};

export default FormInput;
