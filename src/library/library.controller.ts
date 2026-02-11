import { Controller, Get, Post } from '@nestjs/common';
import { LibraryService } from './library.service';

@Controller('library')
export class LibraryController {
    constructor(private readonly libraryService: LibraryService){}

    @Post()
    createLibrary(){
        return this.libraryService.createLibrarydetial();

    }

    @Get()
    getlibrarydetial(){
        return this.libraryService.findAlllibrarydetial();
    }

}
