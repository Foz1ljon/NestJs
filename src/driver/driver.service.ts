import { Injectable } from "@nestjs/common";
import { CreateDriverDto } from "./dto/create-driver.dto";
import { UpdateDriverDto } from "./dto/update-driver.dto";
import { Driver } from "./models/driver.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class DriverService {
  constructor(@InjectModel(Driver) private driverRepo: typeof Driver) {}

  async createDriver(createDriverDto: CreateDriverDto): Promise<Driver> {
    const driver = await this.driverRepo.create(createDriverDto);
    return driver;
  }
  async findAllDriver(): Promise<Driver[]> {
    return this.driverRepo.findAll();
  }
  async findById(id: number): Promise<Driver> {
    return this.driverRepo.findByPk(id);
  }
  async deleteById(id: number): Promise<number> {
    return this.driverRepo.destroy({ where: { id } });
  }

  async updateByID(id: number, updateDriverDto: UpdateDriverDto) {
    const driver = await this.driverRepo.update(updateDriverDto, {
      where: { id },
      returning: true,
    });
    return driver[1][0];
  }
}
