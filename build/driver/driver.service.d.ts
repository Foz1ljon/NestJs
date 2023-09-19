import { CreateDriverDto } from "./dto/create-driver.dto";
import { UpdateDriverDto } from "./dto/update-driver.dto";
import { Driver } from "./models/driver.model";
export declare class DriverService {
    private driverRepo;
    constructor(driverRepo: typeof Driver);
    createDriver(createDriverDto: CreateDriverDto): Promise<Driver>;
    findAllDriver(): Promise<Driver[]>;
    findById(id: number): Promise<Driver>;
    deleteById(id: number): Promise<number>;
    updateByID(id: number, updateDriverDto: UpdateDriverDto): Promise<Driver>;
}
