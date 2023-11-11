import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public productCode: number;

  @column()
  public productname: string;
}
