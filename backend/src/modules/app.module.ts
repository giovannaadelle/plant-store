import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './orders/order.module.js';
import { ProductModule } from './products/product.module.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databaseConfig } from '../config/database.config.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: databaseConfig,
    }),  
    OrderModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
