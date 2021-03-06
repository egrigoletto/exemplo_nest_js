import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';

describe('AppController', () => {
  let locationController: LocationController;
  let locationService: LocationService; 

  beforeEach(async () => {
    locationService = new LocationService();
    locationController = new LocationController(locationService)
  });

  describe('root', () => {
    it('should return locations array', () => {
      expect(locationController.listLocations()).toMatchObject({
        locations : [
          'Location 1',
          'Location 2',
          'Location 3'
        ]
      });
    });
  });
});
