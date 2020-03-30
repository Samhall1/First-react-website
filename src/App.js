import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Accessories from './components/Accessories';


class App extends React.Component {

  state = {
    basket: 0
  }

  addToBasket = () => {
    console.log("Adding to basket");

    this.setState({
      basket: this.state.basket + 1
    })
  }

  render() {
    return(
      <div>
        <BrowserRouter>
           <Navbar basketNumbers={this.state.basket}/>
          
            <Switch>
                <Route exact path="/" render={ () => <Home myFunc={this.addToBasket}/>}  />
                <Route exact path="/about" component={About} />
                <Route exact path="/accessories" render = { () =><Accessories myFunc={this.addToBasket} />} />
           </Switch>

        </BrowserRouter>
      </div>
    )
  }
}


export default App;
