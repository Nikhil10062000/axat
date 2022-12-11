import { PRODUCT_LIST, SEARCH_PRODUCT, SMART_PHONE , HOME, GROSS , CREATE } from "./constant"

export const productList = () => {
  
    return {
        type: PRODUCT_LIST,
    }
}

export const productSearch = (query) => {
  
    return {
        type: SEARCH_PRODUCT,
        query
    }
}

export const productSmart = () => {
  
    return {
        type: SMART_PHONE,
        
    }
}

export const productHome = () => {
  
    return {
        type: HOME,
        
    }
}
export const gross =()=>{
    return {
        type :GROSS
    }
}

export const create =()=>{
    return {
        type :CREATE
    }
}