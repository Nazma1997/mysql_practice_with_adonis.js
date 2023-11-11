import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  public customerNumber: number;

  @column()
  public customerName: string;
}
