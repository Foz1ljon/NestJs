import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Company } from "./models/company.model";
import { CreateCompanyDTo } from "./dto/create-company-dto";
import { UpdateCompanyDTo } from "./dto/update-company-dto";

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company) private companyRepo: typeof Company) {}

  async createCompany(createCompany: CreateCompanyDTo): Promise<Company> {
    const company = await this.companyRepo.create(createCompany);
    return company;
  }

  async findAllCompany(): Promise<Company[]> {
    return this.companyRepo.findAll();
  }
  async findById(id: number): Promise<Company> {
    return this.companyRepo.findByPk(id);
  }
  async findByName(name: string): Promise<Company> {
    return this.companyRepo.findOne({ where: { name } });
  }
  async deleteById(id: number): Promise<number> {
    return this.companyRepo.destroy({ where: { id } });
  }

  async updateByID(id: number, updateCompanyDTo: UpdateCompanyDTo) {
    const company = await this.companyRepo.update(updateCompanyDTo, {
      where: { id },
      returning: true,
    });

    return company[1][0];
  }
}
