import './styles.scss'

export function Banner() {
    return (
        <section className="container banner" aria-labelledby="banner__title">
            <h2 id="banner__title" className="banner__title">
                Outubro mágico
            </h2>
            <p className="banner__description">
                Tudo com 40% de desconto
            </p>
            <button className="banner__take-a-look">
                Confira
            </button>
        </section>
    )
}