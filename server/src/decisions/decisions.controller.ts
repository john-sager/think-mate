import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DecisionsService } from './decisions.service';
import { FactorsService } from '../factors/factors.service';

class CreateDecisionDto {
  title: string;
}

@Controller('decisions')
export class DecisionsController {
  constructor(
    private decisionsService: DecisionsService,
    private factorsService: FactorsService,
  ) {}

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

  @Put(':id/createFactor')
  async createFactor(
    @Param('id') id: string,
    @Body() factor: CreateFactorDto,
  ): Promise<void> {
    await this.factorsService.create(id, factor.title, factor.type);
  }

  @Put(':id')
  async updateFactor(
    @Param('id') id: string,
    @Body() factor: UpdateFactorDto,
  ): Promise<void> {
    await this.factorsService.update(id, factor);
  }
}
