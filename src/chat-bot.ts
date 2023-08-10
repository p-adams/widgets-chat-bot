import { $el, generateUUID } from "./common";

export function setupChatBot(element: HTMLDivElement) {
  element.innerHTML = `<div class="chat-bot-outer">
        <div class="chat-bot-inner closed">
          <div class="window">
          </div>
         <div class="input-outer">
          <input placeholder="type message"/>
          <button>send</button>
         </div>
        </div>
        <div class="chat-bot-cog-wrapper">
          <div class="chat-bot-cog-inner">
            bot
          </div>
        </div>
    </div>`;

  const chatBotWin = $el<HTMLDivElement>(".chat-bot-inner");
  const chatWin = $el<HTMLDivElement>(".chat-bot-inner > .window");
  const chatBot = $el<HTMLDivElement>(".chat-bot-cog-wrapper");
  const sendMsgBtn = $el<HTMLButtonElement>(".input-outer > button");
  const msgInput = $el<HTMLButtonElement>(".input-outer > input");

  let isOpen = false;
  let message = "";
  let messages: Message[] = [
    {
      id: generateUUID(),
      text: "foo",
      timestamp: new Date(),
      sender: "user",
      receiver: "bot",
    },
    {
      id: generateUUID(),
      text: "bar",
      timestamp: new Date(),
      sender: "bot",
      receiver: "user",
    },
    {
      id: generateUUID(),
      text: "baz",
      timestamp: new Date(),
      sender: "user",
      receiver: "bot",
    },
  ];

  for (const message of messages) {
    const msg = document.createElement("div");
    msg.classList.add("chat-text", message.sender === "user" ? "user" : "bot");
    msg.innerHTML = message.text;
    chatWin?.appendChild(msg);
  }

  function toggleChatBot() {
    isOpen = !isOpen;
    chatBotWin?.classList.add(isOpen ? "open" : "closed");
    chatBotWin?.classList.remove(isOpen ? "closed" : "open");
  }

  chatBot?.addEventListener("click", toggleChatBot);
  sendMsgBtn?.addEventListener("click", () => {
    // TODO: handle send message
    console.log("send", message);
  });
  msgInput?.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    message = target?.value;
  });
}
