# pingpong Example

## pingpong-client

**web client for testing pbkit-codegen + interface-pingpong-server + pbkit-devtools**

## Before Start

The pingpong server must be running.  
Go to [pingpong-server](https://github.com/pbkit/pingpong-server) and follow the instruction

## How to start?

1. Clone pingpong-client project.

```sh
git clone https://github.com/pbkit/pingpong-client.git
cd pingpong-client
```

2. Require installing pollapo

```sh
pollapo install
```

3. Install packages

```sh
npm install
```

4. Excute gen

```sh
npm gen
```

5. Run client develop server

```sh
npm dev
```

## Compatibility

- pbkit@^0.0.41
- pbkit/grpc-web-client@^0.1.2
- pbkit/interface-pingpong-server@58425678c6284305dd09130075cecb54a3a3d32c
