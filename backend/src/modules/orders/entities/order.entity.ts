import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class OrderEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'varchar', name: 'image_url'})
  imageUrl: string;
}
