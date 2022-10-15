import { SearchForm } from './components/SearchForm';
import { UserButton } from './components/UserButton';
import { CartButton } from './components/CartButton';

import dndLogo from '../../../../assets/dnd-logo.svg';

import './styles.scss'

export function Menu() {
    return (
        <div className="container menu">
            <img src={dndLogo} alt="D e D logo" />
            <SearchForm />
            <div className="menu__actions">
                <UserButton />
                <CartButton />
            </div>
        </div>
    )
}