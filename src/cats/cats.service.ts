import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './interfaces/cat.interface';
import { Cats } from './cats.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cats)
    private contactRepository: Repository<Cats>,
) { }

async  findAll(): Promise<Cats[]> {
  return await this.contactRepository.find();
}

async  create(contact: Cats): Promise<Cats> {
  return await this.contactRepository.save(contact);
}

/*async update(contact: Cats): Promise<UpdateResult> {
  return await this.contactRepository.update(cats.id, cats);
}*/

async delete(id): Promise<DeleteResult> {
  return await this.contactRepository.delete(id);
}
  private readonly cats: Cat[] = [];

  /*create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }*/
}
