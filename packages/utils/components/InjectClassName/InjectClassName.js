import React from 'react';
var InjectClassName = function (props) {
    var className = props.className, children = props.children;
    return (React.createElement(React.Fragment, null, React.Children.map(children, function (child) {
        return React.cloneElement(child, {
            className: className
        });
    })));
};
export default InjectClassName;
