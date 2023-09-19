import { Model } from "sequelize-typescript";
interface machineCreationAttr {
    name: string;
    companyid: number;
}
export declare class Machine extends Model<Machine, machineCreationAttr> {
    id: number;
    name: string;
    companyid: number;
}
export {};
