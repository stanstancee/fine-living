import React from 'react';

import { Link } from "react-router-dom"




function Page404({ location, history, id }) {
    return (

        <div className="error">
            <h1>Error 404</h1>
            <div>
                <h4>Could not find matching URL</h4>
                {id ? <p>
                    No match found for <code>{window.location.href}</code>.
                    Poll id {`"${id}" is incorrect`}
                </p> : <p>
                    No match found for <code>{location.pathname}</code>
                </p>}

                {id ? <Link to="/">  <button className="btn-primary"  >Go Home</button></Link> :
                    <button className="btn-primary" onClick={() => history.push("/")} >Go Home</button>}
            </div>

        </div>

    );
}

export default Page404;