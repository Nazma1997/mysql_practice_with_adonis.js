import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public orderNumber: number;

  @column()
  public status: string;

  @column()
  public comments: string;

  @column()
  public customerNumber: number;
}
