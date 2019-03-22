import React, { Component } from 'react';
import axios from 'axios';
import Voo from './voo';

class VooControler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aeroportos: [],
      voos: [],
    };
  }
  componentDidMount() {
    axios.get('https://api-voadora.dev.tegra.com.br/flight/companies')
      .then((response) => {
        debugger;
        this.setState({
          aeroportos: response.data,
        });
        console.log(response.data);
      });

       axios.post('https://api-voadora.dev.tegra.com.br/flight')
         .then((response) => {
           debugger;
           this.setState({
             voos: response.data,
           });
           console.log(response.data);
         });

    this.getFiltredList();
  }


  getFiltredList() {
    axios.post('https://api-voadora.dev.tegra.com.br/flight')
    .then((response) => {
      debugger;
      this.setState({
        voos: response.data,
      });
      console.log(response.data);
    });
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return ( <Voo aeroportos={this.state.aeroportos} > </Voo>
    );
  }
}

export default (VooControler);
