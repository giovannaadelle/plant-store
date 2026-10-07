import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { ProductEntity } from '../../products/entities/product.entity.js';
import { OrderEntity } from './order.entity.js';

@Entity('order_items')
export class OrderItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', name: 'product_id' })
  productId: string;

  @Column({ type: 'uuid', name: 'order_id' })
  orderId: string;

  @Column({ type: 'int'})
  amount: number;

  @Column({ type: 'decimal', name: 'unit_price', precision: 10, scale: 2})
  unitPrice: number;

  @ManyToOne(() => ProductEntity)
  @JoinColumn({ name: 'product_id'})
  product: Relation<ProductEntity>;

  // Possui a relação OneToMany na OrderEntity, indicada pelo 2° parâmetro
  @ManyToOne(() => OrderEntity, (order) => order.orderItems)
  @JoinColumn({ name: 'order_id'})
  order: Relation<OrderEntity>;
}
