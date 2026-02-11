import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Model } from 'mongoose';
import { Library } from './schemas/library.schemas';

@Injectable()
export class LibraryService {
    constructor(
        // this injectmodel specific for books 
        @InjectModel(Book.name) private bookModel: Model<Book>,
        // this injectmodel specific for library
        @InjectModel(Library.name) private LibreryModel: Model<Library>,
){}
    

    // this method help to create the detial...
    async createLibrarydetial(): Promise<Library>{
        const book = await this.bookModel.create({
            title: 'Freedom at might night',
            author: 'J. calvin',
        })
        const book2 = await this.bookModel.create({
            title: 'Machine Learning',
            author: 'Hooker willam',
        })
        const library = new this.LibreryModel({
           name: 'Central library',
           books: [book._id, book2._id]
        })
        return library.save();
    }

    // this method help to fetch the detials....
    async findAlllibrarydetial(): Promise<Library[]>{
        return this.LibreryModel.find().populate('books').exec();
    }
}
