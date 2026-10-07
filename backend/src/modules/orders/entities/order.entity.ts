import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { OrderItemEntity } from './order-items.entity.js';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp without time zone' })
  date: Date;

  @Column({ type: 'decimal' })
  total: number;

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order)
  orderItems: Relation<OrderItemEntity[]>;
  /*buscar um pedido com os itens dele (relations: ['orderItems']) para mostrar o detalhe do pedido. Além disso, com cascade: true no @OneToMany, dá para salvar o pedido e todos os itens de uma vez num único save, o que deixa a criação do pedido bem mais simples. */
}
