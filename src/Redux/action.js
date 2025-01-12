import Swal from 'sweetalert2';
import { CART_ADD, CART_FETCH, DATA, SINGLE} from "./action_type";

export const product_action = () => (dispatch) => {
    fetch('https://ecommerce-backend-zlrs.onrender.com/product')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          
            dispatch({
                type: DATA,
                payload: data
            });
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        });
};

export const single_action = (id) => (dispatch) => {
    fetch(`https://ecommerce-backend-zlrs.onrender.com/single/${id}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: SINGLE,
                payload: data
            });
        })
        .catch((error) => {
            console.error("Error fetching single product:", error);
        });
};

export const addToCart = (product, id) => async (dispatch) => {
  try {
    const Token = localStorage.getItem("Token"); 
    const response = await fetch(`https://ecommerce-backend-zlrs.onrender.com/cart/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${Token}`
      },
      body: JSON.stringify(product)
    });

    const data = await response.json();

    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Added to Cart!',
        text: `${product.name} has been added to your cart.`,
        confirmButtonText: 'Okay'
      });
      
      dispatch({
        type: CART_ADD,
        payload: data
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'There was an error adding the item to the cart. Please try again.',
        confirmButtonText: 'Retry'
      });
    }
  } catch (error) {
    console.error("Error sending product to cart:", error.message);
    Swal.fire({
      icon: 'error',
      title: 'Network Error',
      text: 'Could not connect to the server. Please try again later.',
      confirmButtonText: 'Retry'
    });
  }
};

export const fetchCartData = () => (dispatch) => {
    fetch(`https://ecommerce-backend-zlrs.onrender.com/cart`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      
        dispatch({
          type: CART_FETCH,
          payload: data.cartItems,
        })
    })
    .catch((error) => {
        console.error("Error fetching cart data:", error);
        Swal.fire({
          icon: 'error',
          title: 'Network Error',
          text: 'Could not connect to the server. Please try again later.',
          confirmButtonText: 'Retry'
        });
    });
};

export const remove_action = (id) => (dispatch) => {
  console.log(id);
  
  fetch(`https://ecommerce-backend-zlrs.onrender.com/cart/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        console.log(data);
        
        Swal.fire({
          icon: 'success',
          title: 'Item Removed!',
          text: 'The item has been removed from your cart.',
          confirmButtonText: 'Okay'
        });

        dispatch({
          type: "REMOVE_FROM_CART",
          payload: id,
        });
      }
    })
    .catch((error) => {
      console.error("Error removing product from cart:", error);
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Could not connect to the server. Please try again later.',
        confirmButtonText: 'Retry'
      });
    });
};

