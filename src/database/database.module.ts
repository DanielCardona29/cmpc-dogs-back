import { Module } from '@nestjs/common';
import { DatabaseProvaiders } from './database.providers';

@Module({
    providers: [...DatabaseProvaiders],
    exports: [...DatabaseProvaiders]
})
export class DatabaseModule { }
