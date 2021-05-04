import React, { useState } from 'react'
import PostProduct from '../../components/PostProduct'
import Orders from '../../components/Orders'
import './style.scss';

function Admin() {

    const [rightMenuToggle, setRightMenuToggle] = useState("post");

    const onClick = (e) =>{
        console.log(e.target.dataset.name);
        setRightMenuToggle(e.target.dataset.name);
    }


    return (
        <div className="container-admin">
            <div className="admin-left">
                <div className="admin-left-menu" data-name="post" onClick={onClick}>Post</div>
                <div className="admin-left-menu" data-name="orders" onClick={onClick}>Orders</div>
            </div>
            <div className="admin-right">
                {rightMenuToggle === "post" ? (<PostProduct />):(<Orders />)}
                
            </div>
        </div>
    )
}

export default Admin
