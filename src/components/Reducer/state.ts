import { Product } from "../../models";

export type ShopState = {
    saved: Product[];
    products: Product[],
    total: number,
    priceProd: number,
    addToCart: any,
    removeItem: any,
    addToWL: any,
    removeToWL:any,
    updatePrice: any,
    updateCart: any,
   
}

export const initialState = {
    saved: [],
    products: [],
    total: 0,
    priceProd : 0,
    addToCart: null,
    removeItem: null,
    addToWL: null,
    removeToWL:null,
    updatePrice: null,
    updateCart: null,
}