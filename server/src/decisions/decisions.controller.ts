import { Controller, Get } from '@nestjs/common';
import { DecisionsService } from './decisions.service';

@Controller('decisions')
export class DecisionsController {
  constructor(private decisionsService: DecisionsService) {}

  @Get()
  getAllDecisions(): Decision[] {
    return this.decisionsService.getAllDecisions();
  }
}
