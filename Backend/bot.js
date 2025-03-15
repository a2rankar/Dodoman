import TelegramBot from "node-telegram-bot-api";
import express from "express";
import cors from "cors";
import "dotenv/config";

console.log("BOT_TOKEN:", process.env.BOT_TOKEN); // Проверяем загрузку токена

const app = express();
app.use(express.json());
app.use(cors());

const bot = new TelegramBot(process.env.BOT_TOKEN, { webHook: true });

const WEBHOOK_URL = process.env.WEBHOOK_URL || "https://your-vercel-deployment.vercel.app/api/bot";


bot.setWebHook(WEBHOOK_URL)
  .then(() => console.log(`Webhook set to ${WEBHOOK_URL}`))
  .catch(err => console.error("Error setting webhook:", err));


app.post("/api/bot", (req, res) => {
    console.log("🔥 Получен запрос от Telegram:", req.body);
    
    if (!req.body) {
      console.log("❌ Ошибка: Пустой запрос");
      return res.status(400).send("Bad Request");
    }
  
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
  

bot.onText(/\/hello/, (msg) => {
  bot.sendMessage(msg.chat.id, "hello!");
});

bot.onText(/\/shop/, (msg) => {
    const chatId = msg.chat.id;
    const shopUrl = "https://frontend-dodo-8q1iv8r1v-umars-projects-fa2018ce.vercel.app";
    bot.sendMessage(chatId, `🛍 Перейдите в магазин: [Открыть магазин](${shopUrl})`, { parse_mode: "Markdown" });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

export default app;
