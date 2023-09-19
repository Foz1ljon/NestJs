import { Model } from "sequelize-typescript";
interface driverCreationAttr {
    first_name: string;
    last_name: string;
}
export declare class Driver extends Model<Driver, driverCreationAttr> {
    id: number;
    first_name: string;
    last_name: string;
}
export {};
