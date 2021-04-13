import React, { useState } from 'react'
import './style.scss'

import demo_01 from '../../assets/img/demo_01.png'
import demo_02 from '../../assets/img/demo_02.png'

function Products() {

    const [imageState, setImageState] = useState(demo_01);

    function mouseOver() {
        setImageState(demo_02);
    }
    function mouseOut() {
        setImageState(demo_01);
    }

    return (
        <div className="cardCollection">
            <div className="productCard" onMouseOver={mouseOver} onMouseOut={mouseOut}>
                <img src={imageState} className="imgonProductCard" alt="v-neck" />
                <div className="nameonproductCard">SHEIN COllared V-neck Rib-knit Tee</div>
                <div className="priceonproductCard">US$8.00</div>
            </div>
            <div className="productCard">
                <img src={demo_01} className="imgonProductCard" alt="v-neck" />
                <div className="nameonproductCard">SHEIN COllared V-neck Rib-knit Tee</div>
                <div className="priceonproductCard">US$8.00</div>
            </div>
            <div className="productCard">
                <img src={demo_01} className="imgonProductCard" alt="v-neck" />
                <div className="nameonproductCard">SHEIN COllared V-neck Rib-knit Tee</div>
                <div className="priceonproductCard">US$8.00</div>
            </div>
            <div className="productCard">
                <img src={demo_01} className="imgonProductCard" alt="v-neck" />
                <div className="nameonproductCard">SHEIN COllared V-neck Rib-knit Tee</div>
                <div className="priceonproductCard">US$8.00</div>
            </div>
        </div>
    )
}

export default Products
