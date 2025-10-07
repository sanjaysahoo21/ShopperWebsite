import React, { useContext } from 'react';
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();

    const product = Array.isArray(all_product)
        ? all_product.find((item) => String(item.id) === String(productId))
        : null;

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div>
            <Breadcrums product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    );
}

export default Product;