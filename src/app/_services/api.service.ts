import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Code } from '../_models/code';
import { InjectModel } from "@nestjs/mongoose";



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = " http://localhost:3000/Continents"

  
  
  constructor(private http: HttpClient) { }

  getCodes(){
    return this.http.get<Code[]>(this.baseUrl)
  }




}



// import { Product, ProductDocument } from "./product.entity";
// import { Seeder, DataFactory } from "nestjs-seeder";
// import { Model } from 'mongoose';

// @Injectable()
// export class ProductSeeder implements Seeder {
//     constructor(@InjectModel(Product.name) private ProductModel: Model<ProductDocument>) 
//     {

//     }

//     drop(): Promise<any> {
//     return this.ProductModel.deleteMany({}) as any;
//     }

//     seed(): Promise<any> {
//         // Generate 50 users.
//         const products: any = DataFactory.createForClass(Product).generate(50);
    
//         // Insert into the database.
//         return this.ProductModel.insertMany(products);
//         }
// }