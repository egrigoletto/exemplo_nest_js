import { Controller, Get, Render } from '@nestjs/common';
import { LocationService } from './location.service';

interface ILocationListDto {
  locations: string [];
}

@Controller()
export class LocationController {
  constructor(private readonly loacationService: LocationService) {}

  @Get()
  @Render('list.hbs')
  listLocations(): ILocationListDto {
    const locations = this.loacationService.list();
    return { locations };
  }
}
