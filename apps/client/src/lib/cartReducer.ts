import { Product, ProductItem } from "@/types";

//Cart actions
export type CartActions =
  | { type: "add-to-cart"; payload: { item: Product } }
  | { type: "remove-from-cart"; payload: { id: Product["idProduct"] } }
  | { type: "clear-cart" }
  | { type: "increasequantity"; payload: { id: Product["idProduct"] } }
  | { type: "decreasequantity"; payload: { id: Product["idProduct"] } };

//state cart
export type Cartstate = {
  data: Product[];
  cart: ProductItem[];
};

//Shopping Cart State
export const initialState: Cartstate = {
  data: [],
  cart: [],
};

//Shopping Cart Reducer
export const comprasReducer = (
  state: Cartstate = initialState,
  action: CartActions,
) => {
  const MIN_ITEM = 1; //Minimum quantity allowed
  if (action.type === "add-to-cart") {
    const itemExist = state.cart.find(
      (products) => products.idProduct === action.payload.item.idProduct,
    );

    const MAX_ITEM = action.payload.item.stock; //Maximum quantity allowed, the quantity available in stock
    let updateCart: ProductItem[] = [];

    //If the product already exists in the cart, just increase the quantity

    if (itemExist) {
      updateCart = state.cart.map((item) => {
        if (item.idProduct === action.payload.item.idProduct) {
          //We define the maximum number of elements
          if (item.quantity === MAX_ITEM) {
            return { ...action.payload.item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
    } else {
      //Returns the new product and updates the cart
      const newItem: ProductItem = { ...action.payload.item, quantity: 1 };
      updateCart = [...state.cart, newItem];
    }

    return {
      ...state,
      cart: updateCart,
    };
  }

  //Removing Products from the Cart
  if (action.type === "remove-from-cart") {
    const updateCart = state.cart.filter(
      (item) => item.idProduct !== action.payload.id,
    );
    return {
      ...state,
      cart: updateCart,
    };
  }
  //Emptying the entire cart
  if (action.type === "clear-cart") {
    return {
      ...state,
      cart: [],
    };
  }

  //Decreasing the quantity of a product in the cart
  if (action.type === "decreasequantity") {
    const updateCart = state.cart.map((item) => {
      if (item.idProduct === action.payload.id && item.quantity > MIN_ITEM) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    return {
      ...state,
      cart: updateCart,
    };
  }

  //Increasing the quantity of a product in the cart
  if (action.type === "increasequantity") {
    const updateCart = state.cart.map((item) => {
      if (item.idProduct === action.payload.id && item.quantity < item.stock) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    return {
      ...state,
      cart: updateCart,
    };
  }

  return state;
};
