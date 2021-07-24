import { ADD_PRODUCT_TO_CART,REMOVE_PRODUCT_FROM_CART, INCREMENT_CART_COUNT,DECREMENT_CART_COUNT  } from "../actions/actionType";

const updateQuantity = p =>
  p.quantity ? { ...p, quantity: p.quantity + 1 } : { ...p, quantity: 2 };
  const reduceQuantity = p =>
  p.quantity > 2 ? { ...p, quantity: p.quantity - 1 } : { ...p,quantity:""};



export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const productInCart = state.find(p => p.id === action.payload.product.id);
      if (!productInCart) return [...state, action.payload.product];
      return state.map(p => {
        if (p.id === action.payload.product.id) {
          return updateQuantity(p);
        }
        return p;
      });



    case REMOVE_PRODUCT_FROM_CART:
      return [   ...state.slice(0, action.index), ...state.slice(action.index + 1)
      ];


      case INCREMENT_CART_COUNT:
        return  state.map((p)=> {
          if(p.id === action.index){
            return updateQuantity(p);
          }
           return p;
         });






      case DECREMENT_CART_COUNT:
        return state.map((p)=>{
          if(p.id === action.index){
          return reduceQuantity(p)
          }
          return p;
        });







    default:
      return state;
  }
};
