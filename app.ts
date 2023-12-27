import http from 'node:http';
import express, { Router, type Application } from 'express';

class App {
  #port: number;
  #app: Application;
  #server: http.Server;

  public constructor(port: number) {
    this.#port = port;
    this.#app = express();

    this.#server = http.createServer(this.#app);
  }

  public applyRoute(path: string, router: Router) {
    this.#app.use(path, router);
  }

  public listen() {
    this.#server.listen(this.#port, () => {
      console.log(`App started on ${this.#port} port`);
    });
  }
}

export default App;
