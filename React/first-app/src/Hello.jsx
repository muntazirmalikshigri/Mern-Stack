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
    //  function getName(){
    //         return "Malik";
    //     }

        let name2 = 'Munna';
        function getName(yourname){
            return yourname;
        }

        function handclick(){
            alert("Button Clicked");
        }


        
    return (
       
        <>
        <h1>Hello {getName(name2)}</h1>
        <button onClick={handclick}>Click Me</button>
        <button onClick={() => alert("Hello World")}>Click Me Too</button>

        </>
    )
     
   
}

export default Hello;