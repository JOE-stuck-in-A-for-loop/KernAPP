

const styles = {
    background: 'linear-gradient(to right, #1e3c72, #ffffff)',
    
    width: '18vw',
    height: '100vh',
    margin: '0',
    padding: '0',
    borderRadius: '0px 20px 20px 0px',

    resize: 'horizontal',
    overflow: 'auto',
    minWidth: '180px',
    maxWidth: '400px',
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',   
    flexShrink:'0',
    
    position:'relative',

    userSelect: 'none',
    };

function LeftSide({onOpenSettings}) {



  return (
    <div className="left-side"  style={styles}>
        <div id="logo" style={{
            width: '100%',
            height: '8%',
            display: 'flex',
            justifyContent: 'center',
            userSelect:'none',}}>
            <h1>Kern</h1>
            
        </div>

        <div id="features" >

        </div>

        <div id="tracks">

        </div>

        <div id="setting" style={{
          position:'absolute',
          bottom: '10px',
          left: '10px',
          width: 'calc(100% - 20px)',
          
        }}>
          <style>{`
            #setting-button {
              background-color: transparent;
              border: none;
              border-radius: 4px;
              box-sizing: border-box;
              cursor: pointer;
              font-size: 16px;
              transition: background-color 0.2s ease;
              
              text-align: left;
              width: 100%;
            }

            #setting-button:hover {
              background-color: #c0fff5;
              border-radius: 4px;
              
            }
          `}</style>
          <button id='setting-button' style={{
            border:'none',
            cursor:'pointer',
            fontSize:'16px',
          }}
          onClick={onOpenSettings}
          >⚙️Setting</button>
        </div>
    </div>
  );
}

export default LeftSide;