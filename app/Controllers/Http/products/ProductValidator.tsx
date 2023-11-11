
import { schema } from '@ioc:Adonis/Core/Validator';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class ProductValidator {
    public async validateProduct(ctx: HttpContextContract) {
      const productScheam = schema.create({
        productCode: schema.number.optional(),
        productName: schema.string.optional(),
      });
      

      const msg = {
        'productCode.number': 'productCode should be a number',
        'productName.string': 'productName should be string'
      };
      return await ctx.request.validate({ schema: productScheam, messages: msg });
    }
   
  }
  

