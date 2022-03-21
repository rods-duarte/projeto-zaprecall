import "./style.css";

export default function ScreenOne({setInitiation}) {
    return (
        <main className="screenOne">
            <div>
                <img src="Assets/logo.svg" alt="LOGO" />
                <h1>ZapRecall</h1>
            </div>
            <button onClick={() => setInitiation(false)}>Iniciar Recall!</button>
        </main>
    )
}