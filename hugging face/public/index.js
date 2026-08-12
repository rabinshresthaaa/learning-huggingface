document.getElementById("generate-btn").addEventListener("click", async () => {
  const res = await fetch("/summarize");

  if (!res.ok) {
    console.error("Failed to get chat response");
    return;
  }

  const { text } = await res.json();
  console.log(text);
});

document.getElementById("chat-btn").addEventListener("click", async () => {
  const res = await fetch("/chat");

  if (!res.ok) {
    console.error("Failed to get chat response");
    return;
  }

  const { text } = await res.json();
  console.log(text);
});

document.getElementById("generate-img").addEventListener("click", async () => {
  const res = await fetch("/image");

  if (!res.ok) {
    console.error("Failed to get image response");
    return;
  }

  const imageBlob = await res.blob();
  const imageUrl = URL.createObjectURL(imageBlob);
  document.getElementById("new-image").src = imageUrl;
});