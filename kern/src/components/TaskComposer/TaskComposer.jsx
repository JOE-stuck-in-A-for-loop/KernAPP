
const styles = {
    height: '100vh',
    width: '82vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    flex: 1,

    userSelect:'none',
}

function TaskComposer() {

    return(
        <div  style={styles}>
            <style>{`
                button {
                    transition: background-color 0.3s ease;
                }
                button:hover {
                    background-color: #adcac5;
                }
             `}</style>
            <h1 style={{textAlign: 'center', marginTop: '20px'}}>
                What would you like to track?
            </h1>
            <div
                style={{
                    width:'80%',
                    padding:'14px 18px',
                    border:'1px solid #a4a4a4',
                    borderRadius:'8px',
                    backgroundColor:'#fff',
                    boxSizing:'border-box',
                    boxShadow:'5px 5px 10px gray',

                    position:'relative',
                    paddingBottom:'56px', // Space for the button
                }}
            >
                <textarea
                    rows={1}
                    aria-label="Describe your tracking task"
                    placeholder="Tell KERN what you want to stay updated on..."
                    onInput={(event) => {
                        const textarea = event.currentTarget;

                        textarea.style.height = 'auto';
                        textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
                    }}     
                    style={{
                        display:'block',
                        width:'100%',
                        height:'24px',
                        maxHeight:'160px',
                        padding:0,
                        border:'none',
                        outline:'none',
                        resize:'none',
                        overflowY:'auto',
                        backgroundColor:'transparent',
                        fontFamily:'inherit',
                        fontSize:'16px',
                        lineHeight:'24px',
                        boxSizing:'border-box',
                        
                    }}           
                  />
                  <button
                    type="button"
                    style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                        padding: '8px 16px',
                        border: 'none',
                        borderRadius: '20px',
                        color: '#000000',
                        cursor: 'pointer',
                    }}
                    >
                    Send
                    </button>
                </div>    

        </div>
    )
}

export default TaskComposer;