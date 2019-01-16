// Import react from package.json file
import React from 'react';
//import components
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = '0e7f746f2a8c8d2a2934a70312c2f43f';

class App extends React.Component{          //Using the 'async - await' method
    state = {                             //Starting state
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    getWeather =  async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value
//ES6 requires backquotes, not single quotes to make the ${ } work!
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if  (city && country){
        this.setState({   //Todo: add clouds?? clouds: data.clouds,
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity ,
            description: data.weather[0].description,
            error: ''
        });
    } else {
        this.setState({   //Error if city and country is not typed in
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: 'Please enter city and country!'
        });
    }
  }

  render(){
     return(
         <div>
             <div className="wrapper">
                 <div className="main">
                     <div className="container">
                         <div className="row">
                             <div className="col-sm-7 title-container">
                                 <Titles />
                             </div>
                             <div className="col-sm-5 form-container">
                                 <Form getWeather = {this.getWeather} />
                                 <Weather
                                     temperature={this.state.temperature}
                                     city={this.state.city}
                                     country={this.state.country}
                                     humidity={this.state.humidity}
                                     description={this.state.description}
                                     error={this.state.error}
                                 />
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     );
  }
};

export default App;

/*TODO: Handle rejection misspelling. ADD CLOOUDS, ALIGNE H1 AT THE TOP AND SUBTEXT AT THE BOTTOM, MAKE SURE VW AND VH HAVE MIN AND MAX VALUE, AND MORE? */

