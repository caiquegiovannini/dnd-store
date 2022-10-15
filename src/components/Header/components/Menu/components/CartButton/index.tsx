import cart from '../../../../../../assets/shopping-cart.svg'

import './styles.scss'

export function CartButton() {
    return (
        <div className="cart-button">
            <img src={cart} alt="Imagem de um carrinho de compras" />
            <span className="cart-button__items-amount">2</span>
        </div>
    )
}