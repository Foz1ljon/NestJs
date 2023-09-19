import { MachineService } from "./machine.service";
import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { Machine } from "./models/machine.model";
export declare class MachineController {
    private readonly machineService;
    constructor(machineService: MachineService);
    createMachine(createMachineDto: CreateMachineDto): Promise<Machine>;
    findAllMachine(): Promise<Machine[]>;
    findById(id: string): Promise<Machine>;
    deleteById(id: string): Promise<number>;
    updateById(id: string, updateMachineDto: UpdateMachineDto): Promise<Machine>;
}
