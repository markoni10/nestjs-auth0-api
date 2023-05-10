import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/dog')
  getDog(): string {
    return this.appService.getDog();
  }

  @Get('/cat')
  getCat(): string {
    return this.appService.getCat();
  }
}
