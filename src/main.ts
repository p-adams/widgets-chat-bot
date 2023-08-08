import "./style.css";

import { setupChatBot } from "./chat-bot.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main>
    <h1>Chat Bot Widget Demo</h1>
    <div id="chat-bot"/>
  </main>
`;

setupChatBot(document.querySelector<HTMLDivElement>("#chat-bot")!);
