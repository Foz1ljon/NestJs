import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from "@nestjs/common";
import { MachineService } from "./machine.service";
import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { Machine } from "./models/machine.model";

@Controller("machine")
export class MachineController {
  constructor(private readonly machineService: MachineService) {}

  @Post("create")
  async createMachine(
    @Body() createMachineDto: CreateMachineDto,
  ): Promise<Machine> {
    return this.machineService.createMachine(createMachineDto);
  }
  @Get("all")
  async findAllMachine(): Promise<Machine[]> {
    return this.machineService.findAllMachine();
  }
  @Get(":id")
  async findById(@Param("id") id: string): Promise<Machine> {
    return this.machineService.findById(Number(id));
  }
  @Delete(":id")
  async deleteById(@Param("id") id: string): Promise<number> {
    return this.machineService.deleteById(+id);
  }
  @Put(":id")
  async updateById(
    @Param("id") id: string,
    @Body()
    updateMachineDto: UpdateMachineDto,
  ) {
    return this.machineService.updateByID(+id, updateMachineDto);
  }
}
