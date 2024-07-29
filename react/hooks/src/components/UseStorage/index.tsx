import { ChangeEventHandler, useState } from "react";
import useStorage from "../../hooks/useStorage";

export function UseStorage() {
  const [value, setValue] = useState("");
  const [itemVal, setItemVal] = useState("");
  const { error, getItem, setItem, removeItem } = useStorage("test");

  const onValueChange: ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value);
  };

  const onSetClick = () => {
    setItem(value);
  };

  const onGetClick = () => {
    const item = getItem();
    if (!item) {
      return setItemVal("");
    }
    setItemVal(item);
  };

  const onRemoveClick = () => {
    removeItem();
    setItemVal("");
  };

  return (
    <div className="container">
      <input type="text" value={value} onChange={onValueChange} />

      <div className="buttons">
        <button onClick={onSetClick}>Set</button>
        <button onClick={onGetClick}>Get</button>
        <button onClick={onRemoveClick}>Remove</button>
      </div>
      <h6></h6>

      {itemVal && <p>{itemVal}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default UseStorage;
