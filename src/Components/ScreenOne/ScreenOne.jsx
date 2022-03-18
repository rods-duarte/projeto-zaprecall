export default function ScreenOne({func}) {
    return (
        <main className="screenOne">
            <div>
                <img src="Assets/logo.png" alt="LOGO" />
                <h1>ZapRecall</h1>
            </div>
            <button onClick={func}>Iniciar Recall!</button>
        </main>
    )
}