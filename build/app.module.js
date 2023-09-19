"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const company_module_1 = require("./company/company.module");
const company_model_1 = require("./company/models/company.model");
const builder_module_1 = require("./builder/builder.module");
const builder_model_1 = require("./builder/models/builder.model");
const machine_module_1 = require("./machine/machine.module");
const machine_model_1 = require("./machine/models/machine.model");
const driver_module_1 = require("./driver/driver.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: ".env",
                isGlobal: true,
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: "postgres",
                host: process.env.db_host,
                port: Number(process.env.db_port),
                username: process.env.db_user,
                password: String(process.env.db_password),
                database: process.env.db_dbname,
                models: [company_model_1.Company, builder_model_1.Builder, machine_model_1.Machine],
                autoLoadModels: true,
                logging: true,
            }),
            company_module_1.CompanyModule,
            builder_module_1.BuilderModule,
            machine_module_1.MachineModule,
            driver_module_1.DriverModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map