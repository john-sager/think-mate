import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { DecisionsModule } from '@/server/decisions/decisions.module';
import { DecisionEntity } from '@/server/decisions/decision.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactorEntity } from '../factors/factors.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      entities: [DecisionEntity, FactorEntity],
      database: 'db/database.db',
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
    DecisionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
