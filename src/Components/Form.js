import React from 'react';
// We dont need state, as such we make it into a stateless function.
/*
class Form extends React.Component{
    render() {
        return (
            <div>
               <form onSubmit={this.props.getWeather}>
                   <input type='text' name='city' placeholder='City...' />
                   <input type='text' name='country' placeholder='Country...' />
                   <button>Get Weather </button>
               </form>
            </div>
        );
    }
};
*/

//Stateless functional component
const Form = props => (
            <form onSubmit={props.getWeather}>
                <input type='text' name='city' placeholder='Sted' />
                <input type='text' name='country' placeholder='Land' />
                <button>Søk</button>
            </form>
    );
export default Form;