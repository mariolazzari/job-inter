import { useRef } from "react";

export function UseRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  const onFocusClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="container">
      <h2 className="title">UseRef</h2>
      <input ref={inputRef} />
      <button onClick={onFocusClick}>Focus</button>
    </div>
  );
}
