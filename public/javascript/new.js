var submitBtn = document.getElementById("newPostBtn");

const newPostHandler = async function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const post = document.getElementById("link").value;

  await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({ title, post }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/dashboard");
};

submitBtn.addEventListener("click", newPostHandler);
