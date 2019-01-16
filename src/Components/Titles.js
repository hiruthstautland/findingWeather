import React from 'react';

/* class Titles extends React.Component{
    render() {
        return (
            <div>
                <h1>Weather finder</h1>
                <p>Find out temperature, conditions and more..</p>
            </div>
        );
    }
};  */
//SF-Comp
const Titles = () => (
    <div>
        <h1 className="title-container__title" >Været</h1>
        <h3 className="title-container__subtitle">Finn temperaturen, forhold og mer..</h3>
        /*<h5 className="title-container__photo">Kariann Mæland</h5> */
    </div>
);

export default Titles;