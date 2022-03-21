import { useCallback, useState } from "preact/hooks";
import { useGrpcServices } from "./services";
import { ThrowRequest } from "../generated/messages/pbkit/pingpong/mod";
import { GrpcWebError } from "@pbkit/grpc-web-client";
import "./client.css";

interface Result {
  request: ThrowRequest;
  error: GrpcWebError;
}

const statusCodes = [
  "OK",
  "CANCELLED",
  "UNKNOWN",
  "INVALID_ARGUMENT",
  "DEADLINE_EXCEEDED",
  "NOT_FOUND",
  "ALREADY_EXISTS",
  "PERMISSION_DENIED",
  "RESOURCE_EXHAUSTED",
  "FAILED_PRECONDITION",
  "ABORTED",
  "OUT_OF_RANGE",
  "UNIMPLEMENTED",
  "INTERNAL",
  "UNAVAILABLE",
  "DATA_LOSS",
  "UNAUTHENTICATED",
] as const;

const ThrowClient = () => {
  const throwService = useGrpcServices((state) => state.throwService);
  const [selectedCodeIndex, setSelectedCodeIndex] = useState(0);
  const [results, setResults] = useState<Result[]>([]);

  const handleSendButtonClick = useCallback(async () => {
    const request = { code: statusCodes[selectedCodeIndex] };

    try {
      await throwService.throw(request);
      alert("Why Success?");
    } catch (_error) {
      if (_error instanceof GrpcWebError) {
        const error = _error as GrpcWebError;
        setResults((res) => [...res, { request, error }]);
      }
    }
  }, [selectedCodeIndex]);

  const handleInitializeButtonClick = useCallback(() => {
    setResults([]);
  }, []);

  return (
    <div id="client">
      <h1>ThrowService</h1>
      <select
        value={statusCodes[selectedCodeIndex]}
        onChange={(e) => {
          setSelectedCodeIndex(e.currentTarget.selectedIndex);
        }}
      >
        {statusCodes.map((code) => <option value={code}>{code}</option>)}
      </select>
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
              Error
              <pre>
                <div>{statusCodes[result.error.status]}</div>
                <div>{JSON.stringify(result.error, null, 2)}</div>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThrowClient;
