import React, {createContext, useEffect,useState} from 'react';
import CartItem from '../components/CartItem';

//create context
export const CartContext=createContext()

const CartProvider = ({children}) => {
 //cart state
const [cart, setCart] = useState([]);
//item amount state
const [itemAmount, setItemAmount ]  = useState(0);
//total price state
const [total, setTotal ]  = useState(0);



// useEffect to update local storage when cart changes
 useEffect(() => {
  // Load initial data from local storage on component mount
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    setCart(JSON.parse(savedCart));
  }
}, []);

// Update local storage when cart changes
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);


useEffect(() =>{
  const total = cart.reduce((accumulator, currentItem)=> {
    return accumulator + currentItem.price * currentItem.amount;
},0);
setTotal(total);
});

  //update item amount
  useEffect(()=>{
    if(cart){
      const amount = cart.reduce((accumulator, currentItem)=> {
        return accumulator + currentItem.amount;
      },0);
     setItemAmount(amount);
    }
  }, [cart]); 

  //add to cart
    const addToCart =(product ,id)=>{
    const newItem = {...product, amount: 1}
 //check if the item is already  in the cart
    const cartItem = cart.find ((item) =>{
      return item.id ===id;
    });

    //if the item is already  in the cart
    if(cartItem ){
      const newCart = [...cart].map( (item) =>{
        if(item.id === id){
          return {...item, amount: cartItem.amount + 1};
        }else{
          return item;
        }
      });
      setCart(newCart);
    } else{
      setCart([...cart, newItem])
    }

  };

  //remove from cart
  const removeFromCart = (id) =>{
    const newCart = cart.filter(item =>{
      return item.id !==id;
    });
    setCart(newCart);
  }

  //clear entire cart
  const clearCart =() => {
    setCart([]);
  };


  //increase amount
  const increaseAmount = (id) =>{
    const cartItem = cart.find(item =>item.id ===id);
    addToCart(cartItem, id);

  };

   //decrease amount
   const decreaseAmount = (id) =>{
    const cartItem = cart.find(item =>{
      return item.id ===id
    });
    if(cartItem){
      const newCart = cart.map(item =>{
        if(item.id ===id){
          return {...item, amount: cartItem.amount - 1};
        } else{
          return item;
        }
      });
      setCart(newCart);
    }
      if(cartItem.amount < 2){
        removeFromCart(id);
      }
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart, 
      clearCart, 
      increaseAmount ,
      decreaseAmount,
      itemAmount,
      total,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
