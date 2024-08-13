import { useId } from "react";

export function UseId() {
  const labelId = useId();

  return (
    <div>
      <h2 className="title">UseId</h2>
      <div className="input-label">
        <label htmlFor={labelId}> Label ID {labelId}</label>
        <input type="text" id={labelId} />
      </div>
    </div>
  );
}
