import { DataTypes } from "sequelize";
import { Table, Model, Column } from "sequelize-typescript";

interface driverCreationAttr {
  first_name: string;
  last_name: string;
}

@Table({ tableName: "driver" })
export class Driver extends Model<Driver, driverCreationAttr> {
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataTypes.STRING, allowNull: false })
  first_name: string;

  @Column({ type: DataTypes.STRING, allowNull: false })
  last_name: string;
}
