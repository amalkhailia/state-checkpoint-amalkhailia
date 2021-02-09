import React from 'react'
import propTypes from 'prop-types';
import "./Person.css";



const Profession = ({profession}) => {
    return (
        <div>
            <h3>{profession} </h3>
        </div>
    )
}

export default Profession
Profession.defaultProps = {profession: "inconnu"};
Profession.defaultProps = {profession: "inconnu"};
Profession.propTypes={
    profession:propTypes.string
}
