import addJestHbsExtension from 'jest-hbs-extension';
import { join } from 'path';

addJestHbsExtension(join(__dirname, '..', 'views'));