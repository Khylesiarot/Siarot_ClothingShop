import { Product } from "../../models";

export type ShopState = {
    saved: Product[];
    products: Product[],
    total: number,
    addToCart: any,
    removeItem: any,
    addToWL: any,
    removeToWL:any,
}

export const initialState = {
    saved: [],
    products: [],
    total: 0,
    addToCart: null,
    removeItem: null,
    addToWL: null,
    removeToWL:null,
}