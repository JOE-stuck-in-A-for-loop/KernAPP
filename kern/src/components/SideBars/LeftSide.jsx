

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
    maxWidth: '450px',
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',   
    flexshrink:'0',
    
    position:'relative',
    };

function LeftSide() {



  return (
    <div className="left-side"  style={styles}>
        <div id="logo" style={{
            width: '100%',
            height: '8%',
            display: 'flex',
            justifyContent: 'center',}}>
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
          
        }}>
          ⚙️Setting
        </div>
    </div>
  );
}

export default LeftSide;