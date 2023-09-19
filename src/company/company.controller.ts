import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { CompanyService } from "./company.service";
import { CreateCompanyDTo } from "./dto/create-company-dto";
import { Company } from "./models/company.model";
import { UpdateCompanyDTo } from "./dto/update-company-dto";

@Controller("company")
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post("create")
  async createCompany(
    @Body() createCompanyDTo: CreateCompanyDTo,
  ): Promise<Company> {
    return this.companyService.createCompany(createCompanyDTo);
  }
  @Get("all")
  async findAllCompany(): Promise<Company[]> {
    return this.companyService.findAllCompany();
  }
  @Get(":id")
  async findById(@Param("id") id: string): Promise<Company> {
    return this.companyService.findById(Number(id));
  }
  @Get("name/:name")
  async findByName(@Param("name") name: string): Promise<Company> {
    return this.companyService.findByName(name);
  }
  @Delete(":id")
  async deleteById(@Param("id") id: string): Promise<number> {
    return this.companyService.deleteById(+id);
  }
  @Put(":id")
  async updateById(
    @Param("id") id: string,
    @Body()
    updateCompanyDTo: UpdateCompanyDTo,
  ) {
    return this.companyService.updateByID(+id, updateCompanyDTo);
  }
}
