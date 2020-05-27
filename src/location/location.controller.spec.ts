import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';

describe('AppController', () => {
  let locationController: LocationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LocationController],
    }).compile();

    locationController = app.get<LocationController>(LocationController);
  });

  describe('root', () => {
    it('should return locations array', () => {
      expect(locationController.listLocations()).toMatchObject({
        locations : [
          'location 1',
          'location 2',
          'location 3'
        ]
      });
    });
  });
});
