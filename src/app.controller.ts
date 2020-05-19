import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

interface ILocationListDto {
  locations: string [];
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('list.hbs')
  listLocations(): ILocationListDto {
    return this.appService.listLocations();
  }
}
