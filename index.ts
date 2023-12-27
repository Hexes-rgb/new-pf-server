import RouterV1 from "src/http/routes";
import App from "./app";

// const { app: appConfig } = config;

const start = async () => {
  const app = new App(3000);

  app.applyRoute('/', new RouterV1().getRouter());

  app.listen();
};

start();
