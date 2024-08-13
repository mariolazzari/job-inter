import { useEffect, useLayoutEffect } from "react";

export function UseEffect() {
  useEffect(() => {
    console.log("useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  return (
    <div>
      <h6 className="title">UseEffect & UseLayoutEffect</h6>
    </div>
  );
}
