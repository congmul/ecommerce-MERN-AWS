import React, { useState, useRef } from 'react'

import './style.scss';

function PostProduct() {
    const [productInfo, setProductInfo] = useState({ "category": "women", "title": "", "price": "" })

    const fileInput = useRef(null);

    const onChange = (e) => {
        let attribute = e.target.name;
        let value = e.target.value;
        setProductInfo({ ...productInfo, [attribute]: value });
    }


    const postBtn = (e) => {
        e.preventDefault()
        console.log(productInfo);

        const postData = async () => {
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productInfo)
            });
            const data = await res.json();
            console.log(data);
        }

        postData();

        setProductInfo({ "category": "women", "title": "", "price": "" });
    }

    const handleImageUpload = e => {
        e.preventDefault();

        //FormData makes it easy to construct a set of key-value pairs, mirroring the format of a form with the type set to "multipart/form-data".
        const data = new FormData();
        data.append('image', fileInput.current.files[0]);
        console.log(data)

        // send image file to endpoint with the postImage function
    const postImage = async () => {
        try {
          const res = await fetch('/api/image-upload', {
            mode: 'cors',
            method: 'POST',
            body: data
          })
          if (!res.ok) throw new Error(res.statusText);
          const postResponse = await res.json();
          // This new key-value pair is { image: postResponse.Location }, which is the public URL of the image.
          setProductInfo({...productInfo, image: postResponse.Location})
          
          return postResponse.Location;
        } catch (error) {
          console.log(error);
        }
      };
      postImage();

    }

    return (
        <div className="container-post-product">
            <div className="posting-header">Listing details</div>
            <div className="posting-left-menu">
                {/* <div className="subHead">Listing details</div> */}
                <div>CATEGORY </div>
                <div>TITLE </div>
                <div>PRICE </div>
                <div>IMAGES </div>
            </div>
            <div className="posting-content">
                <div className="input-form">
                    {/* <label className="label-left" for="category">Choose a category : </label> */}
                    <select value='Category' name="category" onChange={onChange}>
                        <option value='women'>WOMEN</option>
                        <option value='men'>MEN</option>
                        <option value='kids'>KIDS</option>
                    </select>
                </div>
                <div className="input-form">
                    {/* <label className="label-left">Title : </label> */}
                    <input type="text" name="title" onChange={onChange} />
                </div>
                <div className="input-form">
                    {/* <label className="label-left">Price : </label> */}
                    <input type="text" name="price" onChange={onChange} />
                </div>
                <div className="input-form">
                    {/* <label className="label-left">Images : </label> */}
                    <input type="file" ref={fileInput} />
                    <button
                        className="image-upload-button"
                        onClick={handleImageUpload} // This function will send the image to the image upload endpoint we created.
                    >
                        Image Upload
                    </button>
                </div>
                <button onClick={postBtn}>Post the Product</button>
                <button className="cancel-button">Cancel</button>
            </div>

        </div>
    )
}

export default PostProduct
