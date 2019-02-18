import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './supplier.entity';

@Injectable()
export class SupplierService extends RepositoryService<Supplier> {
  constructor(@InjectRepository(Supplier) repo,
              @InjectRepository(Supplier) private readonly supplierRepository: Repository<Supplier>) {
    super(repo);
  }
  async findOrderById(id): Promise<Supplier[]> {
    return await this.supplierRepository.createQueryBuilder('supplier')
      .leftJoinAndSelect('supplier.orders', 'order')
      .where('supplier.id = :supplierId', { supplierId: id})
      .getMany();
  }

  async findDetailById(id, orderId): Promise<Supplier[]> {
    return await this.supplierRepository.createQueryBuilder('supplier')
      .leftJoinAndSelect('supplier.orders', 'order')
      .leftJoinAndSelect('order.orderDetails', 'orderDetail')
      .where('supplier.id = :supplierId', { supplierId: id})
      .andWhere('order.id = :orderid', { orderid : orderId})
      .getMany();
  }
}
