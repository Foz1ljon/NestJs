import { DataTypes } from "sequelize";
import { Table, Model, Column } from "sequelize-typescript";

interface builderCreationAttr {
  full_name: string;
  birty_date: Date;
  salary: number;
  companyid: number;
}

@Table({ tableName: "builder" })
export class Builder extends Model<Builder, builderCreationAttr> {
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataTypes.STRING, allowNull: false })
  full_name: string;

  @Column({ type: DataTypes.STRING })
  birth_date: Date;

  @Column({ type: DataTypes.FLOAT, allowNull: false })
  salary: number;

  @Column({ type: DataTypes.INTEGER, allowNull: false })
  companyid: number;
}
