import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { CompanyModule } from "./company/company.module";
import { Company } from "./company/models/company.model";
import { BuilderModule } from "./builder/builder.module";
import { Builder } from "./builder/models/builder.model";
import { MachineModule } from "./machine/machine.module";
import { Machine } from "./machine/models/machine.model";
import { DriverModule } from './driver/driver.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.db_host,
      port: Number(process.env.db_port),
      username: process.env.db_user,
      password: String(process.env.db_password),
      database: process.env.db_dbname,
      models: [Company, Builder, Machine],
      autoLoadModels: true,
      logging: true,
    }),
    CompanyModule,
    BuilderModule,
    MachineModule,
    DriverModule,
  ],
})
export class AppModule {}
