import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { Machine } from "./models/machine.model";
export declare class MachineService {
    private machineRepo;
    constructor(machineRepo: typeof Machine);
    createMachine(createMachineDto: CreateMachineDto): Promise<Machine>;
    findAllMachine(): Promise<Machine[]>;
    findById(id: number): Promise<Machine>;
    deleteById(id: number): Promise<number>;
    updateByID(id: number, updateMachineDto: UpdateMachineDto): Promise<Machine>;
}
