import React, { useState } from 'react'
import './Receipt.css'


function Receipt (props) {
    const { name, main, protein, rice, sauce, drink, cost, paid } = props

// const markPaid = () => {
//     setFormState({...formState, paid: true})

// }
    
    return (
        <>
            <ul className='receipt'>
                <li className='person'>{name}</li>
                <li className='main'>{main}</li>
                <li className='protein'>{protein}</li>
                <li className='rice'>{rice}</li>
                <li className='sauce'>{sauce}</li>
                <li className='drink'>{drink}</li>
                <li className='cost'>{cost}</li>
                {/* <button className='paid' onClick={ markPaid }>Paid</button> */}
            </ul>
        </>
        
    )
}


export default Receipt