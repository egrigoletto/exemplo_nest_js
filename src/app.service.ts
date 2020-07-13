import { Injectable } from '@nestjs/common';

interface ILocationListDto {
  locations: string[];
}

@Injectable()
export class AppService {
  listLocations(): ILocationListDto {
    return {
      locations: [
        'Location 1',
        'Location 2',
        'Location 3'
      ]
    };
  }
}
