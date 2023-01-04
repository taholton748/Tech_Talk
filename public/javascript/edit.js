var editBtn = document.getElementById("editPostBtn");
var deleteBtn = document.getElementById("deletePostBtn");

const newPostHandler = async function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const post = document.getElementById("link").value;
  const id = document.getElementById("postId").value;

  await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, post }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/dashboard");
};

const deletePostHandler = async function (event) {
  event.preventDefault();

  // const title = document.getElementById("title").value;
  // const post = document.getElementById("link").value;
  const id = document.getElementById("postId").value;

  await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/dashboard");
};

editBtn.addEventListener("click", newPostHandler);
deleteBtn.addEventListener("click", deletePostHandler);
