import { Link } from 'react-router-dom'

import cartIcon from '../../assets/shopping-cart.svg'

import { priceFormatter } from '../../utils/priceFormatter';
import { Product } from '../../pages/DayOffers';

import './styles.scss'

interface CardProps {
    product: Product;
}

export function Card ({ product }: CardProps) {
    const disabled = product.amount <= 0;

    return (
        <div className={`card ${disabled && 'inactive'}`}>
            <img src={product.image} alt={product.title} />
            <div className="card__body">
                <h3 className="card__title">
                    <Link to={`/products/${product.slug}`}>
                        {product.title}
                    </Link>
                </h3>
                <div className="card__price">
                    <span className="card__price__old-price">{priceFormatter.format(product.price)}</span>
                    <span className="card__price__current-price">{priceFormatter.format(product['promotion-price'])}</span>
                    <span className="card__price__description">à vista no PIX</span>
                </div>
                <button className="card__add-to-cart" disabled={disabled}>
                    {!disabled ? (
                        <>
                            <img src={cartIcon} alt="" />
                            Adicionar ao carrinho
                        </>
                    ) : (
                        'Esgotado'
                    )
                }
                </button>
            </div>
        </div>
    )
}