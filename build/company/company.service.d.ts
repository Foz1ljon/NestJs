import { Company } from "./models/company.model";
import { CreateCompanyDTo } from "./dto/create-company-dto";
import { UpdateCompanyDTo } from "./dto/update-company-dto";
export declare class CompanyService {
    private companyRepo;
    constructor(companyRepo: typeof Company);
    createCompany(createCompany: CreateCompanyDTo): Promise<Company>;
    findAllCompany(): Promise<Company[]>;
    findById(id: number): Promise<Company>;
    findByName(name: string): Promise<Company>;
    deleteById(id: number): Promise<number>;
    updateByID(id: number, updateCompanyDTo: UpdateCompanyDTo): Promise<Company>;
}
