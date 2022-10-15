import { ReactElement } from 'react'
import './styles.scss'

interface ProductsListProps {
    children: ReactElement | ReactElement[];
}

export function ProductsList({children}: ProductsListProps) {
    return (
        <div className="products-list">
            {children}
        </div>
    )
}