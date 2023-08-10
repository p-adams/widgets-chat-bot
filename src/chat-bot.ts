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
  const msgInput = $el<HTMLInputElement>(".input-outer > input");

  let isOpen = false;
  let inputTarget: HTMLInputElement;
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

  function displayAllMessages() {
    for (const message of messages) {
      createWindowMessage(message);
    }
  }

  function createWindowMessage(newMessage: Message) {
    const msg = document.createElement("div");
    msg.classList.add(
      "chat-text",
      newMessage.sender === "user" ? "user" : "bot"
    );
    msg.innerHTML = newMessage.text;
    chatWin?.appendChild(msg);
    chatWin?.scrollTo(0, chatWin.scrollHeight);
  }

  displayAllMessages();

  msgInput?.focus();

  chatBot?.addEventListener("click", () => {
    isOpen = !isOpen;
    chatBotWin?.classList.add(isOpen ? "open" : "closed");
    chatBotWin?.classList.remove(isOpen ? "closed" : "open");
  });

  sendMsgBtn?.addEventListener("click", () => {
    if (message.trim() !== "") {
      const newMessage: Message = {
        id: generateUUID(),
        text: message,
        timestamp: new Date(),
        sender: "user",
        receiver: "bot",
      };
      messages.push(newMessage);
      createWindowMessage(newMessage);
      inputTarget.value = "";
      message = "";
    }
  });
  msgInput?.addEventListener("input", (e) => {
    inputTarget = e.target as HTMLInputElement;
    message = inputTarget?.value;
  });
}
