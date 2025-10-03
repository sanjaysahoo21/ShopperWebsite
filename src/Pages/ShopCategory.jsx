import React from 'react'
import {useContext} from 'react';
import './Styles/ShopCategory.css'
import {ShopContext} from "../Context/ShopContext";
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);

    const targetCategory = (props.category || '').toLowerCase().trim();

    const filtered = all_product.filter((item) =>
        (item.category || '').toLowerCase().trim() === targetCategory
    )

    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner}/>
            <div className='shopcategory-indexSort'>
                <p>
                    <span>Showing {filtered.length}</span> out of {all_product.length} products
                </p>
                <div className='shopcategory-sort'>
                    Sort by <img src={dropdown_icon}/>
                </div>
            </div>
            <div className='shopcategory-products'>
                {filtered.length > 0 ? (
                    filtered.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    })
                ) : (
                    <p>No products in this category</p>
                )}
            </div>
            <div className='shopcategory-loadmore'>
                Explore More
            </div>
        </div>
     )
}

export default ShopCategory