import React from "react";


const Layout = (props) => {
    const { tipo_usuario, children } = props;
    return (
        <div>
            <header>
                <h1>{tipo_usuario}</h1>
            </header>
            {children}
        </div>
    );

    }
export default Layout;
