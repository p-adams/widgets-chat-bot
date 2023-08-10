interface Message {
  id: string;
  text: string;
  timestamp: Date;
  sender: string;
  receiver: string;
}

function $el<T extends HTMLElement = HTMLElement>(selector: string): T | null {
  return document.querySelector<T>(selector)!;
}

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
      id: "1",
      text: "foo",
      timestamp: new Date(),
      sender: "user",
      receiver: "bot",
    },
    {
      id: "2",
      text: "bar",
      timestamp: new Date(),
      sender: "bot",
      receiver: "user",
    },
    {
      id: "3",
      text: "baz",
      timestamp: new Date(),
      sender: "user",
      receiver: "bot",
    },
  ];

  for (const message of messages) {
    const msg = document.createElement("div");
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
