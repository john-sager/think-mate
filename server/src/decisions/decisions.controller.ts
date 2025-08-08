import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  async create(@Body() createDecDto: CreateDecisionDto): Promise<void> {
    await this.decisionsService.create(createDecDto.title);
  }
}
