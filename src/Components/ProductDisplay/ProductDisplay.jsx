import React from 'react';
import './ProductDisplay.css'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'

function ProductDisplay(props) {
    const { product } = props;
    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-star'>
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_dull_icon} alt=''/>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-price-old'>
                        ${product.old_price}
                    </div>
                    <div className='productdisplay-right-price-new'>
                        ${product.new_price}
                    </div>
                </div>
                <div className='productdisplay-right-description'>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt congue, nisl nisl tincidunt nisl, eget tincidunt congue nisl nisl nisl.
                </div>
                <div className='productdisplay-right-size'>
                    <h1>Select Size</h1>
                    <div className='productdisplay-right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>Add to Cart</button>
                <p className='productdisplay-right-category'><span>Category :</span>Women, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest, Crop Top</p>
            </div>
        </div>
    );
}

export default ProductDisplay;