import React, { useState, useEffect } from 'react'
import './style.scss'

import demo_01 from '../../assets/img/demo_01.png'
import demo_02 from '../../assets/img/demo_02.png'

function Products() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    const [imageState, setImageState] = useState(demo_01);

    function mouseOver() {
        setImageState(demo_02);
    }
    function mouseOut() {
        setImageState(demo_01);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/products');
                const jsonData = await res.json();
                console.log(jsonData);
                // sort the array by createdAt property ordered by descending values
                const data = jsonData.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1);
                setProducts([...data]);
                setIsLoaded(true);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])


    return (
        <div className="cardCollection">
            {!isLoaded ? (<div>Loading...</div>) : (
                products.map(product => {
                    return (<div className="productCard" key={product.title} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        <img src={imageState} className="imgonProductCard" alt="v-neck" />
                        <div className="nameonproductCard">{product.title}</div>
                        <div className="priceonproductCard">US${product.price}</div>
                    </div>)
                })
            )}

        </div>
    )
}

export default Products
