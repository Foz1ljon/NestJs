import { CompanyService } from "./company.service";
import { CreateCompanyDTo } from "./dto/create-company-dto";
import { Company } from "./models/company.model";
import { UpdateCompanyDTo } from "./dto/update-company-dto";
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    createCompany(createCompanyDTo: CreateCompanyDTo): Promise<Company>;
    findAllCompany(): Promise<Company[]>;
    findById(id: string): Promise<Company>;
    findByName(name: string): Promise<Company>;
    deleteById(id: string): Promise<number>;
    updateById(id: string, updateCompanyDTo: UpdateCompanyDTo): Promise<Company>;
}
