import {TypeOrmModule} from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { IdeaModule } from './idea/idea.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-blog', { useNewUrlParser: true }),
    TypeOrmModule.forRoot(),
    IdeaModule,
    // GraphQLModule.forRoot({
    //   debug: true,
    //   playground: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
