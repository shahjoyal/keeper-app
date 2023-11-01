import React from 'react'

function Footer(){
    const currentdate = new Date().getFullYear();
    return(
        <footer>
        
            <p>copyright © {currentdate}</p>
            </footer>
    )
}
export default Footer