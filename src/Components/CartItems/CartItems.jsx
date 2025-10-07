import {React, useContext} from 'react';
import './CartItems.css'
import {ShopContext} from "../../Context/ShopContext";
import remove_icon from '../../assets/cart_cross_icon.png'

function CartItems(props) {
    const {all_product,cartItem, removeFromCart, getTotalCartAmount} = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((item) => {
                if(cartItem[item.id] > 0) {
                    return (
                        <div className='cartitems-format cartItems-format-main' key={item.id}>
                            <img className='carticon-product-icon' src={item.image} alt={item.name}/>
                            <p>{item.name}</p>
                            <p>${item.new_price}</p>
                            <button className='cartitems-quantity'>{cartItem[item.id]}</button>
                            <p>${item.new_price * cartItem[item.id]}</p>
                            <img  className='cartitems-remove-icon' onClick={() => removeFromCart(item.id)} src={remove_icon} alt=''/>
                        </div>
                    )
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
                <div className='cartitems-promocode'>
                    <p>If you have promo code, Enter here</p>
                    <div className='cartitems-promobox'>
                        <input type='text' placeholder='Enter promo code'/>
                        <button>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;