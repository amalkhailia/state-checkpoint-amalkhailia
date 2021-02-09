import React from 'react'
import "./Person.css";


const Bio = ({mybio}) => {
    return (
        <div>
            <p>{mybio}</p>
        </div>
    )
}

export default Bio
Bio.defaultProps = {mybio: "inconnu"};
