import { useFetch } from "../../hooks/useFetch";
import { User } from "../../types/User";

export function UseFetch() {
  const {
    isLoading,
    isError,
    isSuccess,
    data = [],
    error,
    refetch,
  } = useFetch<User[]>({
    url: "https://jsonplaceholder.typicode.com/users",
  });

  return (
    <div className="section">
      <h2 className="title">useFetch</h2>
      <button onClick={refetch} disabled={isLoading}>
        Fetch
      </button>

      {isError && <h6 className="error">{error}</h6>}

      {isLoading && <h6>Loading users...</h6>}

      {!isLoading && isSuccess && data.map(d => <p key={d.id}>{d.name}</p>)}
    </div>
  );
}
