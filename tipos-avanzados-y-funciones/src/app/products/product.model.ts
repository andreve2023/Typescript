import {Category} from '../categories/categories.model';
import {BaseModel} from '../base.model';

export type Sizes = 'S' |'M' | 'L' | 'XL'
export interface Product extends BaseModel {
    title: string;
    image: string;
    description: string;
    color: string;
    price: number;
    stock: number;
    isNew: boolean;
    size?: Sizes;
    category: Category;
    tags: string[];
}
// type CreateProductDto = Omit<Product, 'id' | 'creadAt' | 'updateAt'>
