import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    let port = process.env.port || 4000;
    await app.listen(port, () => {
      console.log("Running on " + port);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
