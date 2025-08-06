import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post()
  async create(@Body() createDecDto: CreateDecisionDto): Promise<void> {
    await this.decisionsService.create(createDecDto.title);
  }
}
