var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import Text from '../Text/Text';
import * as Styled from './Card.styled';
export var variants = ['horizontal', 'vertical'];
export var textAlignments = ['left', 'center', 'right'];
export var textSizes = ['XS', 'S', 'M', 'L', 'XL'];
export var descriptionSizes = ['XS', 'S', 'M', 'L', 'XL'];
var Card = React.memo(React.forwardRef(function (props, ref) {
    var title = props.title, description = props.description, imgSrc = props.imgSrc, titleSize = props.titleSize, descriptionSize = props.descriptionSize, titleColor = props.titleColor, descriptionColor = props.descriptionColor;
    return (React.createElement(Styled.Card, __assign({ ref: ref }, props),
        imgSrc && React.createElement(Styled.CardHeader, __assign({}, props),
            React.createElement(Styled.CardImage, { src: imgSrc })),
        React.createElement(Styled.CardBody, __assign({}, props),
            React.createElement(Styled.CardTitle, null,
                React.createElement(Text, { textColor: titleColor, textSize: titleSize }, title)),
            React.createElement(Styled.CardDescription, null,
                React.createElement(Text, { textColor: descriptionColor, textSize: descriptionSize }, description)))));
}));
Card.defaultProps = {
    textAlignment: 'left',
    variant: 'vertical'
};
Card.displayName = 'Card';
Card.Style = Styled.Card;
export default Card;
