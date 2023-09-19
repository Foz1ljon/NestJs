import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from "@nestjs/common";
import { DriverService } from "./driver.service";
import { CreateDriverDto } from "./dto/create-driver.dto";
import { UpdateDriverDto } from "./dto/update-driver.dto";
import { Driver } from "./models/driver.model";


@Controller("driver")
export class DriverController {
  constructor(private readonly driverService: DriverService) {}
  @Post("create")
  async createBuilder(
    @Body() createDriverDto: CreateDriverDto,
  ): Promise<Driver> {
    return this.driverService.createDriver(createDriverDto);
  }
  @Get("all")
  async findAllBuilder(): Promise<Driver[]> {
    return this.driverService.findAllDriver();
  }
  @Get(":id")
  async findById(@Param("id") id: string): Promise<Driver> {
    return this.driverService.findById(Number(id));
  }
  @Delete(":id")
  async deleteById(@Param("id") id: string): Promise<number> {
    return this.driverService.deleteById(+id);
  }
  @Put(":id")
  async updateById(
    @Param("id") id: string,
    @Body()
    updateDriverDto: UpdateDriverDto,
  ) {
    return this.driverService.updateByID(+id, updateDriverDto);
  }
}
