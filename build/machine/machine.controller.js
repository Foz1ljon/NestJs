"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineController = void 0;
const common_1 = require("@nestjs/common");
const machine_service_1 = require("./machine.service");
const create_machine_dto_1 = require("./dto/create-machine.dto");
const update_machine_dto_1 = require("./dto/update-machine.dto");
let MachineController = class MachineController {
    constructor(machineService) {
        this.machineService = machineService;
    }
    async createMachine(createMachineDto) {
        return this.machineService.createMachine(createMachineDto);
    }
    async findAllMachine() {
        return this.machineService.findAllMachine();
    }
    async findById(id) {
        return this.machineService.findById(Number(id));
    }
    async deleteById(id) {
        return this.machineService.deleteById(+id);
    }
    async updateById(id, updateMachineDto) {
        return this.machineService.updateByID(+id, updateMachineDto);
    }
};
exports.MachineController = MachineController;
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_machine_dto_1.CreateMachineDto]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "createMachine", null);
__decorate([
    (0, common_1.Get)("all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "findAllMachine", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "findById", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "deleteById", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_machine_dto_1.UpdateMachineDto]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "updateById", null);
exports.MachineController = MachineController = __decorate([
    (0, common_1.Controller)("machine"),
    __metadata("design:paramtypes", [machine_service_1.MachineService])
], MachineController);
//# sourceMappingURL=machine.controller.js.map