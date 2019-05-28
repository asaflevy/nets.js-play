import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IdeaEntity } from './idea.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IdeaDto } from './idea.dto';

@Injectable()
export class IdeaService {
  constructor(@InjectRepository(IdeaEntity)
              private ideaRepo: Repository<IdeaEntity>) {
  }

  async showAll() {
    return await this.ideaRepo.find();
  }

  async create(data: Partial<IdeaDto>) {
    const idea = await this.ideaRepo.create(data);
    await this.ideaRepo.save(idea);
    return idea;
  }

  async read(id: string) {
    return await this.ideaRepo.findOne({ where: { id } });
  }

  async update(id: string, data) {
    await this.ideaRepo.update({ id }, data);
    return await this.ideaRepo.findOne({ id });
  }

  async delete(id: string) {
    await this.ideaRepo.delete({ id });
    return { delete: true, id };
  }
}
