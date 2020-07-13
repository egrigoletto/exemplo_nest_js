import addJestHbsExtension from 'jest-hbs-extension';
import { ConfigService } from '../src/config/config.service';


const config = new ConfigService();
  // pega a config  lá do arquivo defualt.ts na pasta config do app
  const viewsPath = config.get<string>('templates.path');

addJestHbsExtension(viewsPath);