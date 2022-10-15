import './styles.scss'

export function UserButton() {
    return (
        <div className="user-button">
            <img src="https://github.com/caiquegiovannini.png" alt="Imagem do avatar do usuário" />
            <p className="user-button__username">Caique</p>
        </div>
    )
}