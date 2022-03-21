import Header from "./Header";
import PingPongClient from "./services/PingPongClient";
import ThrowClient from "./services/ThrowClient";
import { useMemo, useState } from "preact/hooks";
import "./app.css";

export function App() {
  const [clientIndex, setClientIndex] = useState(0);
  const clients = useMemo(
    () => [
      ["PingPongClient", <PingPongClient />],
      ["ThrowClient", <ThrowClient />],
    ],
    [],
  );

  return (
    <>
      <Header />
      <div>
        {clients.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setClientIndex(index);
            }}
          >
            {category[0]}
          </button>
        ))}
      </div>
      {clients[clientIndex][1]}
    </>
  );
}
