import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly AuthorService: AuthorService) {}

  @Post()
  create(@Body() createAuthorto: CreateAuthorDto) {
    return this.AuthorService.create(createAuthorto);
  }

  @Get()
  findAll() {
    return this.AuthorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.AuthorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorto: UpdateAuthorDto) {
    return this.AuthorService.update(id, updateAuthorto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.AuthorService.remove(id);
  }
}
