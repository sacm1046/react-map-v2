import React from 'react';
import Button from './Button';

const Card = ({buttonClassName, productName='Sin Producto', price, description}) => {

    return (
        <div className="card">
            <div className="card-header">
                <img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/08/hamburguesa-2028707.jpg?itok=ujl3qgM9" alt="Not Found" />
            </div>

            <div className="card-body">

                <h2>{productName}</h2>
                <h4>{price}</h4>
                <div className="line"></div>
                <p>{description}</p>
                <div className="line"></div>

            </div>

            <div className="card-footer">
                <Button className={buttonClassName}/>
            </div>
        </div>
    )
}

export default Card;