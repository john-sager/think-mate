import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DecisionsModule } from '../decisions/decisions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { DecisionEntity } from 'src/decisions/decision.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      entities: [DecisionEntity],
      database: 'db/database.db',
      // host: 'localhost',
      // port: 3306,
      // username: 'root',
      // password: 'root',
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
