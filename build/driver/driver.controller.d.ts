import { DriverService } from "./driver.service";
import { CreateDriverDto } from "./dto/create-driver.dto";
import { UpdateDriverDto } from "./dto/update-driver.dto";
import { Driver } from "./models/driver.model";
export declare class DriverController {
    private readonly driverService;
    constructor(driverService: DriverService);
    createBuilder(createDriverDto: CreateDriverDto): Promise<Driver>;
    findAllBuilder(): Promise<Driver[]>;
    findById(id: string): Promise<Driver>;
    deleteById(id: string): Promise<number>;
    updateById(id: string, updateDriverDto: UpdateDriverDto): Promise<Driver>;
}
