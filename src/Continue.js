import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Continue = (props) => {
    return (
        <div className="row continue">
            {props.show
                ? <div className="col-11">
                    <button className="btn btn-primary btn-lg float-right">
                        Continue
                    </button>
                </div>
                : null}
        </div>
    )
}

export default Continue