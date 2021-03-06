let button = document.querySelector("button");
let nameInput = document.querySelector("#name");
let messageInput = document.querySelector("#message");
let colorInput = document.querySelector("#color");
button.addEventListener("mousedown", function () {
  //   console.log(nameInput.value);
  //   console.log(messageInput.value);
  //   console.log(colorInput.value);

  let spanName = document.createElement("span");
  let spanMessage = document.createElement("span");
  let div = document.createElement("div");

  document.body.append(div);
  div.append(spanName, spanMessage);
  spanName.innerText = nameInput.value + ": ";
  spanMessage.innerText = messageInput.value;
  spanName.style.color = colorInput.value;

  fetch("https://live-chat-a9241-default-rtdb.firebaseio.com/chat.json", {
    method: "POST",
    body: JSON.stringify({
      nameInput: nameInput.value,
      messageInput: messageInput.value,
      colorInput: colorInput.value,
    }),
  });
});
