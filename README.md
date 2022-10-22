# pingpong Example

### pingpong-client

**web client for testing pbkit-codegen + interface-pingpong-server + pbkit-devtools**

1. Clone pingpong-client project.

```
git clone https://github.com/pbkit/pingpong-client.git
cd pingpong-client
```

2. The pingpong server must be running.  
   Go to [pingpong-server](https://github.com/pbkit/pingpong-server) and follow the instruction

3. Require installing pollapo

```
pollapo install
```

4. Install packages

```
npm install
```

5. Excute gen

```
npm gen
```

6. Run client develop server

```
npm dev
```

## Compatibility

- pbkit@^0.0.41
- pbkit/grpc-web-client@^0.1.2
- pbkit/interface-pingpong-server@58425678c6284305dd09130075cecb54a3a3d32c
