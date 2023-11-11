// @ts-nocheck
import Product from "App/Models/Product";

export default class ProductQuery {
  public async createProductQuery(payload) {
    return Product.create(payload);
  }
}
