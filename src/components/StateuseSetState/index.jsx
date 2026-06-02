import React from "react";
import { useSetState } from "ahooks";

export default function StateuseSetState() {
  const [state, setState] = useSetState({ name: "", age: 0 });

  const updateName = (name) => {
    setState({ name }); //接收部分对象，自动拼接
  };

  return (
    <div>
      <input
        type="text"
        value={state.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <p>Name: {state.name}</p>
      <p>Age: {state.age}</p>
    </div>
  );
}
