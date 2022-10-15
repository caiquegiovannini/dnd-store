import { Menu } from './components/Menu'
import { NavigationMenu } from './components/NavigationMenu'

import './styles.scss'

export function Header() {
    return (
        <header className="header">
            <Menu />
            <NavigationMenu />
        </header>
    )
}