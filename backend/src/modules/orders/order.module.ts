import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity.js';
import { OrderItemEntity } from './entities/order-items.entity.js';
import { OrderService } from './services/order.service.js';

@Module({
    imports: [TypeOrmModule.forFeature([OrderEntity, OrderItemEntity])],
    controllers: [],
    providers: [],
})
export class OrderModule {}
