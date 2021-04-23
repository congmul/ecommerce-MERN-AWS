import React, { useState, useRef } from 'react'

import './style.scss';

function PostProduct() {
    const [productInfo, setProductInfo] = useState({ "category": "women", "title": "", "price": "" })
    const [titleNotice, setTitleNotice] = useState("none");
    const [priceNotice, setPriceNotice] = useState("none");

    const [fillAllNotice, setFillAllNotice] = useState("none");

    const fileInput = useRef(null);

    const handleFocusOut = e => {
        // console.log(e.target.value);
        // console.log(e.target.name);

        if(e.target.value === ""){
            // console.log("Not empty!!")
            if(e.target.name==="title"){
                setTitleNotice("block");
            }else if(e.target.name==="price"){
                setPriceNotice("block");
            }
        }else{
            if(e.target.name==="title"){
                setTitleNotice("none");
            }else if(e.target.name==="price"){
                setPriceNotice("none");
            }
        }
    }

    const onChange = (e) => {
        let attribute = e.target.name;
        let value = e.target.value;
        setProductInfo({ ...productInfo, [attribute]: value });
        // console.log(value);
    }


    const postBtn = (e) => {
        e.preventDefault()

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

        console.log(productInfo);
        if(productInfo.title === "" || productInfo.price === ""){
            // console.log("Warning notice");

            setFillAllNotice("block");
            setInterval(() => {
                setFillAllNotice("none");
            }, 3000)

        }else{
            postData();
        }

        setProductInfo({ "category": "women", "title": "", "price": "", "image": "" });
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
            <div className="posting-warning-notice" style={{"display": fillAllNotice}}>Please fill out all blank</div>
            <div className="posting-header">Listing details</div>
            <div className="posting-left-menu">
                <div>CATEGORY </div>
                <div>TITLE </div>
                <div>PRICE </div>
                <div>IMAGES </div>
            </div>
            <div className="posting-content">
                <div className="input-form">
                    <select name="category" onChange={onChange}>
                        <option value='women'>WOMEN</option>
                        <option value='men'>MEN</option>
                        <option value='kids'>KIDS</option>
                    </select>
                </div>
                <div className="input-form">
                    <input type="text" name="title" onChange={onChange} onBlur={handleFocusOut} />
                    <span style={{ "color": "red", "display": titleNotice }}>Please enter title.</span>
                </div>
                <div className="input-form">
                    <input type="text" name="price" onChange={onChange} onBlur={handleFocusOut} />
                    <span style={{ "color": "red", "display": priceNotice }}>Please enter price.</span>
                </div>
                <div className="input-form">
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
