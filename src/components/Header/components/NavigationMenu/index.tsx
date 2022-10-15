import { NavLink } from "react-router-dom"

import './styles.scss'

export function NavigationMenu() {
    return (
        <nav className="container navigation-menu">
            <ul className="navigation-menu__links">
                <li>
                    <NavLink to="departments">
                        Departamentos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="releases">
                        Lançamentos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="players-handbook">
                        Livro do jogador
                    </NavLink>
                </li>
                <li>
                    <NavLink to="day-offers">
                        Ofertas do dia
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}