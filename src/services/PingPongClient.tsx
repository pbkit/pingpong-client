import { useCallback, useState } from "preact/hooks";
import { useGrpcServices } from "./services";
import { Ping, Pong } from "../generated/messages/pbkit/pingpong/mod";
import "./client.css";

interface Result {
  request: Ping;
  response: Pong | Error;
}

const PingPongClient = () => {
  const pingPongService = useGrpcServices((state) => state.pingPongService);
  const [pingValue, setPingValue] = useState("");
  const [results, setResults] = useState<Result[]>([]);

  const handleSendButtonClick = useCallback(async () => {
    const request = { hello: pingValue };
    setPingValue("");

    try {
      const response = await pingPongService.pingPong(request);
      setResults((res) => [...res, { request, response }]);
    } catch (_err) {
      if (_err instanceof Error) {
        const err = _err;
        setResults((res) => [...res, { request, response: err }]);
      }
    }
  }, [pingValue]);

  const handleInitializeButtonClick = useCallback(() => {
    setResults([]);
  }, []);

  return (
    <div id="client">
      <h1>Client</h1>
      <input
        id="client--input"
        placeholder="Enter ping or smth here!"
        value={pingValue}
        onChange={(e) => setPingValue(e.currentTarget.value)}
      />
      <button id="client--button-send" onClick={handleSendButtonClick}>
        Send!
      </button>
      <button id="client--button-remove" onClick={handleInitializeButtonClick}>
        Remove Log
      </button>
      <div id="client--container-list">
        {results.map((result, index) => (
          <div id="client--container-card" key={index}>
            <div id="client--container-request">
              Request
              <pre>
                <div>{JSON.stringify(result.request, null, 2)}</div>
              </pre>
            </div>
            <div id="client--container-response">
              Response
              <pre>
                <div>{JSON.stringify(result.response, null, 2)}</div>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PingPongClient;
