"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const start = async () => {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        let port = process.env.port || 4000;
        await app.listen(port, () => {
            console.log("Running on " + port);
        });
    }
    catch (error) {
        console.log(error);
    }
};
start();
//# sourceMappingURL=main.js.map