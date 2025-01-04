import { useTransition } from "react";

function UseTransition() {
  const [isPending, startTransition] = useTransition();

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  return (
    <div>
      <h2>Use Transition</h2>
      <h3>{isPending ? "Pending" : "Not Pending"}</h3>
      <button
        onClick={() =>
          startTransition(async () => {
            await delay(5000);
          })
        }
      >
        Start
      </button>
    </div>
  );
}

export default UseTransition;
