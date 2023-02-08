import { Injectable, NotFoundException } from '@nestjs/common';

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
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} Not found`);
    }
    return product;
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
  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
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
