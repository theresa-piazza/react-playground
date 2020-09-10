import React from 'react';
import './DemonymApp.css';
import Demonym from './Demonym';
import CountrySelector from './CountrySelector';

export default class DemonymApp extends React.Component {
    
constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selected: null
    };
  }

  componentDidMount() {
    fetch('https://country.register.gov.uk/records.json?page-size=5000')
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong! Please try again later')
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        const countries = Object.keys(data)
              .map(key => data[key].item[0]);
        this.setState({
          countries,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      })
  }

  setSelected(selected) {
    this.setState({
      selected
    });
  }



  render() {
    const demon = this.state.selected
          ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name}/>
          : <div className="demonym_app__placeholder">Select a country above</div>;

    return (
      <div className="demonym_app">
        <CountrySelector 
          countries={this.state.countries}
          changeHandler={selected => this.setSelected(selected)}/>
        {demon}
      </div>
    );
  }
}
