import { Module } from '@nestjs/common';
import { OrderService } from './services/order.service.js';

@Module({
    imports: [],
    controllers: [],
    providers: [OrderService],
})
export class OrderModule {}
