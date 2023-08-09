export function setupChatBot(element: HTMLDivElement) {
  let isOpen = false;

  element.innerHTML = `<div class="chat-bot-inner">
        <div class="chat-bot-window closed">
          a
          b
          c
        </div>
        <div class="chat-bot-cog-wrapper">
          <div class="chat-bot-cog-inner">
            bot
          </div>
        </div>
    </div>`;

  const chatBotWin =
    document.querySelector<HTMLDivElement>(".chat-bot-window")!;
  const chatBot = document.querySelector<HTMLDivElement>(".chat-bot-inner")!;
  function toggleChatBot() {
    isOpen = !isOpen;
    chatBotWin.classList.add(isOpen ? "open" : "closed");
    chatBotWin.classList.remove(isOpen ? "closed" : "open");
  }

  chatBot?.addEventListener("click", toggleChatBot);
}
