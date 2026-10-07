import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity.js';

@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity])],
    controllers: [],
    providers: [],
})
export class ProductModule {}
