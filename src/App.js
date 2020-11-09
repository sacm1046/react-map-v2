import React from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';

const App = () => {

    const products = [
        {
            name: "Hamburguesa",
            price: 2000,
            description: "Descrición de Hamburguesa"
        },
        {
            name: "Papas Fritas",
            price: 800,
            description: "Descrición de Papas Fritas"
        },
        {
            name: "Completo",
            price: 1000,
            description: "Descrición de Completo"
        },
        {
            name: "Churrasco",
            price: 2500,
            description: "Descrición de Churrasco"
        }
    ]

    const links = ["Link1", "Link2", "Link3"]

    return (
        <>
            <Navbar links={links} />
            <div className='cards'>
                {
                    products.map((product, i) => (
                        <Card
                            key={i}
                            buttonClassName='btn btn-dark'
                            productName={product.name}
                            price={product.price}
                            description={product.description}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default App;