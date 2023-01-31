import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
