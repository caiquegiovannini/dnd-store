import loupe from '../../../../../../assets/search-loupe.svg'

import './styles.scss'

export function SearchForm() {
    return (
        <form className="search-form" onSubmit={e => e.preventDefault()}>
            <img src={loupe} alt="" />
            <input
                type="text"
                placeholder="Busque aqui"
            />
        </form>
    )
}