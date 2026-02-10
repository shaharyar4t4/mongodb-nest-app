import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private ProductModel: Model<Product>){}

    async createProduct(): Promise<Product>{
        const product = new this.ProductModel({
            title: 'Gaming mobile',
            // this is basically one to many relationship like one mobile phone and they have a multiple category where phone is lies on that..
            tags:[
            {name: 'Electronice'},
            {name: 'Mobile Phone'},
            {name: 'Gaming style'}
            ]
        })
        return product.save();
    }

    async getAllProduct(): Promise<Product[]>{
        return this.ProductModel.find();
    }
}
