import React, { useState } from 'react'

import './style.scss';

function PostProduct() {
    const [productInfo, setProductInfo] = useState({"category":"women", "title":"", "price":""})

    const onChange = (e) => {
        let attribute = e.target.name;
        let value = e.target.value;
        setProductInfo({ ...productInfo, [attribute]: value });
    }


    const postBtn = (e) => {
        e.preventDefault()
        console.log(productInfo);
    }

    return (
        <div className="container-post-product">
            <div className="input-form">
            <label className="label-left" for="category">Choose a category : </label>
            <select value='Category' name="category" onChange={onChange}>
                <option value='women'>WOMEN</option>
                <option value='men'>MEN</option>
                <option value='kids'>KIDS</option>
            </select>
            </div>
            <div className="input-form">
            <label className="label-left">Title : </label>
            <input type="text" name="title" onChange={onChange} />
            </div>
            <div className="input-form">
            <label className="label-left">Price : </label>
            <input type="text" name="price" onChange={onChange} />
            </div>
            <div className="input-form">
                <label className="label-left">Images : </label>
                <input id="" type="file" name="files" multiple />
                <img id="" src="" />
            </div>
            <button className="" onClick={postBtn}>Post the Product</button>
        </div>
    )
}

export default PostProduct
