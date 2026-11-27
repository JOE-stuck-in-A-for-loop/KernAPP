import './Settings.css';

export default function Settings( {dialogRef} ) {
    return (
        <dialog ref={dialogRef} className="settings-dialog" //ref = settingsRef
            aria-labelledby="settings-title">
            <header className="settings-header">
                <h1 id="settings-title">Settings</h1>

                <button
                    type="button"
                    aria-label="close"
                    onClick={() => dialogRef.current.close()}
                    >
                        X
                    </button>
            </header>
        </dialog>
    )
}