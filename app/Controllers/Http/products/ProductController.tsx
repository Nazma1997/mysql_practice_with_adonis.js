// @ts-nocheck
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ProductService from "./ProductService";
import ProductValidator from "./ProductValidator";

export default class ProductController {
  private productService: ProductService;
  private productValidator: ProductValidator;

  constructor() {
    this.productService = new ProductService();
    this.productValidator = new ProductValidator();
  }

  public async createProduct(ctx: HttpContextContract) {
    const payload = this.productValidator.validateProduct(ctx);
    return this.productService.createProduct(payload)
  }
}
