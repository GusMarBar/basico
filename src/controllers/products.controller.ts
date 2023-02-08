import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

import { ProductsService } from './../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private ProductsService: ProductsService) {}
  @Get()
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    //return {
    //  message: `products: limit=> ${limit} offset=> ${offset} brand=>${brand} `,
    //};
    return this.ProductsService.findAll();
  }

  @Get('filter')
  getProductsFilter() {
    return 'filtro';
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId') productId: string) {
    //return {
    //  message: `products ${productId} `,
    //};
    return this.ProductsService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: any) {
    //return {
    //  message: 'estoy en create',
    //  payload,
    //};
    return this.ProductsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return this.ProductsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.ProductsService.remove(id);
  }
}
