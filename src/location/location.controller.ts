import { Controller, Get, Render } from '@nestjs/common';

interface ILocationListDto {
  locations: string [];
}

@Controller()
export class LocationController {
  @Get()
  @Render('list.hbs')
  listLocations(): ILocationListDto {
    return {
      locations: [
        'location 1',
        'location 2',
        'location 3'
      ]
    };
  }
}
