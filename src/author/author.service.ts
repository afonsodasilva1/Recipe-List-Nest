import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthorService {
  
  constructor(
    @InjectRepository(Author)
    private readonly repository: Repository<Author>
  ) {}

  create(dto: CreateAuthorDto) {
    const developer = this.repository.create(dto);
    return this.repository.save(developer);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({id});
  }

  async update(id: string, dto: UpdateAuthorDto) {
    const developer = await  this.repository.findOneBy({id});
    if(!developer) return null;
    this.repository.merge(developer, dto);
    return this.repository.save(developer);
  }

  async remove(id: string) {
    const developer = await  this.repository.findOneBy({id});
    if(!developer) return null;
    return this.repository.remove(developer);
  }
}
