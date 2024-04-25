import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { Cats } from './cats.entity';

@UseGuards(RolesGuard)
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @Roles(['admin'])
  async create(@Body() createCatDto: CreateCatDto) {
    //this.catsService.create(createCatDto);
  } //TODO

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  //mine
  @Get()
    index(): Promise<Cat[]> {
      return this.catsService.findAll();
    }    

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe())
    id: number,
  ) {
    // get by ID logic
  }
}
