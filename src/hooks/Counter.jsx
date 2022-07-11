import React, { useEffect, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} counted ${count} times`);
  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} counted {count}
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
