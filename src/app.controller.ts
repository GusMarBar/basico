import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('products')
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    return `products: limit=> ${limit} offset=> ${offset} brand=>${brand}`;
  }
  @Get()
  getHello(): string {
    return 'hola mundo1';
  }
  @Get('nuevo')
  newEndpoint() {
    return 'hola !!';
  }

  @Get('/ruta/')
  newEndponit2() {
    return 'hola mundo 2';
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
}
