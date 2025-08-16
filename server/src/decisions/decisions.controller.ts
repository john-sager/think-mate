import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DecisionsService } from './decisions.service';

class CreateDecisionDto {
  title: string;
}

@Controller('decisions')
export class DecisionsController {
  constructor(private decisionsService: DecisionsService) {}

  @Get()
  async findAll(): Promise<Decision[]> {
    return await this.decisionsService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Decision | null> {
    return await this.decisionsService.findOne(id);
  }

  @Post()
  async create(@Body() dec: CreateDecisionDto): Promise<void> {
    await this.decisionsService.create(dec.title);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dec: UpdateDecisionDto,
  ): Promise<void> {
    await this.decisionsService.update(id, dec);
  }
}
