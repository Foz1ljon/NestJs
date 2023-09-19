import { Model } from "sequelize-typescript";
interface builderCreationAttr {
    full_name: string;
    birty_date: Date;
    salary: number;
    companyid: number;
}
export declare class Builder extends Model<Builder, builderCreationAttr> {
    id: number;
    full_name: string;
    birth_date: Date;
    salary: number;
    companyid: number;
}
export {};
