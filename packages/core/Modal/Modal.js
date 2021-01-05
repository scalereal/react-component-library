import React from 'react';
import * as Styled from './Modal.styled';
import Text from '../Text/Text';
var Toast = function (_a) {
    var title = _a.title, description = _a.description, borderColor = _a.borderColor, shadowColor = _a.shadowColor, titleSize = _a.titleSize, titleColor = _a.titleColor, descriptionSize = _a.descriptionSize, descriptionColor = _a.descriptionColor;
    return (React.createElement(Styled.Modal, { title: title, description: description, shadowColor: shadowColor, borderColor: borderColor, titleSize: titleSize, descriptionSize: descriptionSize },
        React.createElement(Styled.ModalHeader, { title: title, description: description, shadowColor: shadowColor, borderColor: borderColor, titleSize: titleSize, descriptionSize: descriptionSize },
            React.createElement(Styled.ModalTitle, null,
                React.createElement(Text, { textSize: titleSize, lineHeight: "1.5", textColor: titleColor }, title))),
        React.createElement(Styled.ModalBody, { title: title, description: description, shadowColor: shadowColor, borderColor: borderColor, titleSize: titleSize, descriptionSize: descriptionSize },
            React.createElement(Styled.ModalDescription, null,
                React.createElement(Text, { textSize: descriptionSize, textColor: descriptionColor }, description))),
        React.createElement(Styled.ModalFooter, { title: title, description: description, shadowColor: shadowColor, borderColor: borderColor, titleSize: titleSize, descriptionSize: descriptionSize })));
};
export default Toast;
