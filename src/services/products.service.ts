import { Injectable } from '@nestjs/common';
import { product } from 'src/entities/products.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: product[] = [
    {
      id: 1,
      name: 'product 1',
      description: 'echo en china',
      price: 150,
      image: '',
      stock: 10,
    },
  ];
  // Retornar todos los productos //
  findAll() {
    return this.products;
  }
  // reornar 1 producto en especifico //
  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }
  // crear un producto y guardarlo en memoria//
  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  // Delete one product//
  delete(id: number) {
    const find = this.findOne(id).id - 1;
    this.products.slice(find, 1);
    return {
      Message: 'removed product ',
    };
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }
}
