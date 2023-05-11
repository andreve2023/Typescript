import {Product} from '../products/product.model';
import { User } from '../user/user.model';
import {BaseModel} from "../base.model";
interface Order extends BaseModel{
    products: Product[]
    user: User
}