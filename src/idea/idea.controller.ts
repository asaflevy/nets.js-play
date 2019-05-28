import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDto } from './idea.dto';

@Controller('idea')
export class IdeaController {

  constructor(private ideaSrv: IdeaService) {
  }

  @Get()
  showAllIdeas() {
    return this.ideaSrv.showAll();
  }

  @Post()
  createIdea(@Body() data: IdeaDto) {

    return this.ideaSrv.create(data);
  }

  @Get(':id')
  readIdea(@Param('id') id: string) {
    return this.ideaSrv.read(id);

  }

  @Put(':id')
  updateIdea(@Param('id') id: string, @Body() data: Partial<IdeaDto>) {
    this.ideaSrv.update(id, data);
  }

  @Delete(':id')
  deleteIdea(@Param('id') id: string) {
    return this.ideaSrv.delete(id);
  }

}
