import {Product} from "./product.model";

//omito atributos
export interface CreateProductDto extends Omit<Product, 'id' | 'creadAt' | 'updateAt'> {
    categoryId: string
}

//lo deja como opcional los campos
export interface UpdateProduct extends Partial<CreateProductDto>{}

//lo deja como requerido
//type example2 = Required<Product>
//Escojo que atributos
// type example = Pick<Product, 'color' | 'description'>

export interface FindProductDto extends Readonly<Partial<Product>>{}
//type example3 = Readonly<Product>