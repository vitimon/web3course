import ReactDOM from "react-dom";
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.authFunc = this.authFunc.bind(this)
    }
    authFunc() {
        const authData = { data: "Autenticar conta WAVES"};
        if (WavesKeeper){
            WavesKeeper.( authData )
            .then(auth => {
                console.log( auth );
            }).catch(error => {
                console.error( error );
            })
        }else{
            alert("para entrar waves keeper precisa estar instalado");
        }
    }
    render() {
        return (
            <div className="container">
    		    <input className="btn btn-primary" type="submit" value="Auth" onClick={this.authFunc}/>
    	    </div>
        )
    }
}

const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app);
}
