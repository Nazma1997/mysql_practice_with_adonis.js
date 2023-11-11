import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class OrderDetail extends BaseModel {
  @column({ isPrimary: true })
  public orderNumber: number;

  @column()
  public productCode: number;

  @column()
  public priceEach: number;

  @column()
  public quantityOrder: number;

  @column()
  public orederLineNumber: number;
}
