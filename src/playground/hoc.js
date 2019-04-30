// HOC : High ORder Component => is a component that render another component
import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info Is: {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info don't share it</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please Login to view the info</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="there are the details"/>,document.getElementById("app"))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="there are the details"/>,document.getElementById("app"))