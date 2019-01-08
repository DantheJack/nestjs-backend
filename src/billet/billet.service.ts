import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { BilletEntity } from './billet.entity';

@Injectable()
export class BilletService extends RepositoryService<BilletEntity> {
  constructor(@InjectRepository(BilletEntity) repo) {
    super(repo);
  }
}