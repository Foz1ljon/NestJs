import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { Machine } from "./models/machine.model";

@Injectable()
export class MachineService {
  constructor(@InjectModel(Machine) private machineRepo: typeof Machine) {}

  async createMachine(createMachineDto: CreateMachineDto): Promise<Machine> {
    const machine = await this.machineRepo.create(createMachineDto);
    return machine;
  }
  async findAllMachine(): Promise<Machine[]> {
    return this.machineRepo.findAll();
  }
  async findById(id: number): Promise<Machine> {
    return this.machineRepo.findByPk(id);
  }
  async deleteById(id: number): Promise<number> {
    return this.machineRepo.destroy({ where: { id } });
  }

  async updateByID(id: number, updateMachineDto: UpdateMachineDto) {
    const machine = await this.machineRepo.update(updateMachineDto, {
      where: { id },
      returning: true,
    });
    return machine[1][0];
  }
}
