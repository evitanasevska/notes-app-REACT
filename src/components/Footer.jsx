import React from "react"

function Footer(){
    const year = new Date().getFullYear()
    return (<div>
        <footer>
            <p>Evita Nasevska &copy; {year}</p>
        </footer>
    </div>)
}

export default Footer