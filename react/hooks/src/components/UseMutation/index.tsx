import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useMutation } from "../../hooks/useMutation";
import { Post } from "../../types/Post";

export function UseMutation() {
  const [title, setTitle] = useState("");

  const {
    mutation: uptedaPost,
    isLoading,
    isSuccess,
    data,
  } = useMutation<Post>({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "PATCH",
    body: { title },
  });
  const {
    mutation: deletePost,
    isLoading: isLoadingDelete,
    isSuccess: isSuccessDelete,
  } = useMutation<Post>({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "DELETE",
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    uptedaPost();
  };

  const onTitleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setTitle(e.target.value);
  };

  const onDeleteClick = () => {
    deletePost();
  };

  return (
    <div>
      <h2>UseMutation</h2>

      <form onSubmit={onSubmit}>
        <input value={title} onChange={onTitleChange} />
        <button type="submit" disabled={title === ""}>
          Update
        </button>
        <button type="button" onClick={onDeleteClick}>
          Delete
        </button>
      </form>

      {isLoading && <p> Update loading</p>}
      {isSuccess && <p>{JSON.stringify(data)}</p>}

      {isLoadingDelete && <p> Delete loading</p>}
      {isSuccessDelete && <p>Post deleted</p>}
    </div>
  );
}
