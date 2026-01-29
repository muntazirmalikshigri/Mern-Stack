import './App.css';
function Hello(){
    const name = "Malik";
    const headingStyle = {
        color: 'blue',
        backgroundColor: 'yellow',
        border: '5px solid gray',
        pading: '10px',
        textAlign: 'center',
        fontFamily: 'Arial',
        fontSize: '24px',
        alignItems: 'center',
        marginTop: '0'
    };
    return (
        <>
        <h1 style={headingStyle}>Hello {name}</h1>
        <p className='test'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fuga officia quas sit ab! Aperiam itaque ullam, eum dolores dicta placeat tempore, exercitationem aspernatur totam repudiandae nam maiores culpa porro.</p>
        </>
    )
     
   
}

export default Hello;