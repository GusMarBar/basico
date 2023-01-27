import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('product')
  createProducto(@Body() body: any): any {
    return {
      name: body.name,
      price: body.price,
    };
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
}
