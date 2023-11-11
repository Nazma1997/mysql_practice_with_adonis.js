// @ts-ignore
import ProductQuery from "./ProductQuery";

export default class ProductService {
  private productQuery: ProductQuery;

  constructor() {
    this.productQuery = new ProductQuery();
  }

  public async createProduct(payload) {
    this.productQuery.createProductQuery(payload);
  }
}
