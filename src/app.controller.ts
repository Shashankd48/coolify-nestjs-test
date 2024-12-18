import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('status')
  async getStatus() {
    return {
      name: 'Shashank Dubey',
      age: 24,
    };
  }

  @Get('vikas')
  async getVikas() {
    return {
      name: 'Vikas Panday',
      age: 28,
    };
  }
}
