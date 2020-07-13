import { Injectable } from '@nestjs/common';
import * as config from 'config';

@Injectable()
export class ConfigService {
  // significa que vou pegar um tipo genérico de dado <T>
  public get<T>(key: string): T {
    // aqui eu retorno config.get<tipo(string, number, object, etc)>
    // (<nome do que eu quero ou o que eu quero que ele traga de maneira genérica>)
    return config.get<T>(key);
  }
}
