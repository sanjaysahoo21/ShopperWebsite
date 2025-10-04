import React from 'react';
import './Breadcrums.css'
import arrow_icon from '../../assets/breadcrum_arrow.png';

function Breadcrums(props) {
    const { product } = props;
    const category = product?.category || '';
    const name = product?.name || '';
    return (
        <div className='breadcrum'>
            HOME<img src={arrow_icon} alt='' />
            SHOP<img src={arrow_icon} alt='' />
            {category || name}
        </div>
    );
}

export default Breadcrums;