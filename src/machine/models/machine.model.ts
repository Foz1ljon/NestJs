import { DataTypes } from "sequelize";
import { Table, Model, Column } from "sequelize-typescript";

interface machineCreationAttr {
  name: string;
  companyid: number;
}

@Table({ tableName: "machine" })
export class Machine extends Model<Machine, machineCreationAttr> {
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataTypes.STRING, allowNull: false })
  name: string;

  @Column({ type: DataTypes.INTEGER, allowNull: false })
  companyid: number;
}
