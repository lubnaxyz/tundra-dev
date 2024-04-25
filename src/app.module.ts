import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [CoreModule, 
    CatsModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'lubnamirza',
      entities: [],
      database: 'lubnamirza',
      synchronize: true,
      logging: true,
    }),],
    controllers: [AppController],
    providers: [AppService], 
})
export class AppModule {}
