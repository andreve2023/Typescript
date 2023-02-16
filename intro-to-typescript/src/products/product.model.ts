
export type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: ShirtSize
}
export type ShirtSize = 'S'|'M'|'L';

