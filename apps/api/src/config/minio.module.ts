import { Module, Global } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Minio from 'minio';

export const MINIO_CLIENT = 'MINIO_CLIENT';

@Global()
@Module({
  providers: [
    {
      provide: MINIO_CLIENT,
      useFactory: (configService: ConfigService) => {
        const useSSL = configService.get<string>('MINIO_USE_SSL', 'false');
        const client = new Minio.Client({
          endPoint: configService.get<string>('MINIO_ENDPOINT', 'localhost'),
          port: configService.get<number>('MINIO_PORT', 9000),
          useSSL: useSSL === 'true',
          accessKey: configService.get<string>('MINIO_ROOT_USER', 'minioadmin'),
          secretKey: configService.get<string>('MINIO_ROOT_PASSWORD', 'minioadmin'),
        });

        return client;
      },
      inject: [ConfigService],
    },
  ],
  exports: [MINIO_CLIENT],
})
export class MinioModule {}
