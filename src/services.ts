import create from 'zustand';

import {createGrpcWebClientImpl, CreateGrpcWebClientImplConfig} from '@pbkit/grpc-web-client';
import {createServiceClient as createPingPongService} from './generated/services/pbkit/pingpong/PingPongService';

export const useGrpcServices = create(() => {
  const config: CreateGrpcWebClientImplConfig = {
    host: 'http://localhost:8080',
  };
  const pingPongService = createPingPongService(createGrpcWebClientImpl(config), {devtools: true});
  console.log("pbkit: PingPongService initialized!");
  return {
    pingPongService,
  };
})