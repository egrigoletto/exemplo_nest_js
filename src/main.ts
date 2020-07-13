import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '../src/config/config.service';



async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  //configura uma view engine como no express
  app.setViewEngine('hbs');
  // injeta a configuração
  const config = app.get(ConfigService);
  // pega a config  lá do arquivo defualt.ts na pasta config do app
  const viewsDirectory = config.get<string>('templates.path');
  const publicDirectory = config.get<string>('public.path');
  app.setBaseViewsDir(viewsDirectory);
  app.useStaticAssets(publicDirectory);
  await app.listen(3000);
}
bootstrap();
