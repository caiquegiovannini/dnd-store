import { useEffect, useRef, useState } from 'react'

import { api } from '../../lib/axios';
import { Card } from '../../components/Card/indext'
import { ProductsList } from '../../components/ProductsList'

import './styles.scss'

export interface Product {
    id: number;
    title: string;
    slug: string;
    image: string;
    price: number;
    "promotion-price": number;
    amount: number;
}

export function DayOffers() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        async function fetchProducts() {
            const response = await api.get('/day-offers')
            setProducts(response.data)
        }
        
        fetchProducts()
    }, [])

    return (
        <main className="container day-offers" aria-labelledby="main-section-title">
            <h2 id="main-section-title" className="day-offers__title">Produtos em promoção</h2>

           <ProductsList>
                {products.length === 0 ? (
                    <div>
                        Carregando...
                    </div>
                ) : (
                    products.map((product: Product) => (
                        <Card key={product.id} product={product} />
                    ))
                )}
           </ProductsList>
        </main>
    )
}