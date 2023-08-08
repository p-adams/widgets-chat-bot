export function setupChatBot(element: HTMLDivElement) {
  let isOpen = false;

  element.innerHTML = `<div class="chat-bot-inner closed">
        bot
    </div>`;

  const chatBot = document.querySelector<HTMLDivElement>(".chat-bot-inner")!;

  function toggleChatBot() {
    isOpen = !isOpen;
    chatBot.classList.add(isOpen ? "open" : "closed");
    chatBot.classList.remove(isOpen ? "closed" : "open");
  }

  chatBot?.addEventListener("click", toggleChatBot);
}
