import { DataTypes } from "sequelize";
import { Table, Model, Column } from "sequelize-typescript";
interface CompanyCreationAttr {
  name: string;
  address: string;
  phone: string;
}

@Table({ tableName: "company" })
export class Company extends Model<Company, CompanyCreationAttr> {
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataTypes.STRING, allowNull: false, unique: true })
  name: string;

  @Column({ type: DataTypes.STRING })
  address: string;

  @Column({ type: DataTypes.STRING, allowNull: false, unique: true })
  phone: string;
}
