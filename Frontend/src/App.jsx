import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="container">
      <h1>🛍 Добро пожаловать в онлайн-магазин!</h1>
      <p>Здесь вы можете купить стильные вещи.</p>
      <input
        type="text"
        placeholder="Напишите нам..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={() => alert(`Ваше сообщение: ${message}`)}>Отправить</button>
    </div>
  );
}

export default App;
