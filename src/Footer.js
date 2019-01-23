import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Footer = (props) => {
    return (
        <div id="footer" className="row">
            <div className="col-12">
                <p className="text-muted credit">
                    All images are from <a href="https://commons.wikimedia.org/wiki/Strona_g%C5%82%C3%B3wna">Wikimedia Commons</a> and are in the public domain
                </p>
            </div>
        </div>
    )
}

export default Footer