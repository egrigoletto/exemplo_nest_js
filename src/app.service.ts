import { Injectable } from '@nestjs/common';

interface ILocationListDto {
  locations: string[];
}

@Injectable()
export class AppService {
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
