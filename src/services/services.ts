import create from "zustand";

import {
  createGrpcWebClientImpl,
  CreateGrpcWebClientImplConfig,
} from "@pbkit/grpc-web-client";
import { createServiceClient as createPingPongService } from "../generated/services/pbkit/pingpong/PingPongService";
import { createServiceClient as createThrowService } from "../generated/services/pbkit/pingpong/ThrowService";

export const useGrpcServices = create(() => {
  const config: CreateGrpcWebClientImplConfig = {
    host: "http://localhost:8080",
  };
  const pingPongService = createPingPongService(
    createGrpcWebClientImpl(config),
    { devtools: true },
  );
  const throwService = createThrowService(
    createGrpcWebClientImpl(config),
    { devtools: true },
  );
  console.log("pbkit: PingPongService, ThrowService initialized!");
  return { pingPongService, throwService };
});
