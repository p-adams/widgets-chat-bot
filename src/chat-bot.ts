function getEl<T extends HTMLElement = HTMLElement>(
  selector: string
): T | null {
  return document.querySelector<T>(selector)!;
}

export function setupChatBot(element: HTMLDivElement) {
  element.innerHTML = `<div class="chat-bot-inner">
        <div class="chat-bot-window closed">
          <div class="window">
          a
          b
          c
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

  const chatBotWin = getEl<HTMLDivElement>(".chat-bot-window");
  const chatBot = getEl<HTMLDivElement>(".chat-bot-cog-wrapper");
  const sendMsgBtn = getEl<HTMLButtonElement>(".input-outer > button");
  const msgInput = getEl<HTMLButtonElement>(".input-outer > input");

  let isOpen = false;
  let message = "";

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
