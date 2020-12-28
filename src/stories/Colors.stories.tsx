/* eslint-disable no-param-reassign */
import Text from '../core/Text/Text';
import { colorsTheme } from '../theme/core/colors';
import React from 'react';
import styled from 'styled-components';

const contrastingColor = (hex: string) => {
    hex = hex.indexOf('#') === 0 ? hex.slice(1) : hex;
    hex = hex.length === 3 ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] : hex;

    const r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);

    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
};

const Grid = styled.div`
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(3, 1fr);
`;

const Color: React.FC<{ hex: string }> = styled.div<{ hex: string }>`
    height: 40px;
    background-color: ${props => props.hex};
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ColorLine: React.FC<{ shade: number | string; hex: string }> = ({ shade, hex }) => (
    <Color hex={hex} key={hex}>
        <Text textSize="XS" textColor={contrastingColor(hex)} hoverColor={contrastingColor(hex)}>{shade}</Text>
        <Text textSize="XS" textColor={contrastingColor(hex)} hoverColor={contrastingColor(hex)}>
            <code>{hex}</code>
        </Text>
    </Color>
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const SingleShadeColors = () => {
    return (
        <Grid>
            {Object.entries(colorsTheme)
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                .filter(([_, color]) => typeof color === 'string')
                .map(([name, color]: Array<string>) => (
                    <div key={name}>
                        <Text textSize="XS" uppercase>
                            {name}
                        </Text>
                        <ColorLine hex={color} shade="" />
                    </div>
                ))}
        </Grid>
    );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const MultiShadeColors = () => {
    return (
        <Grid>
            {Object.entries(colorsTheme)
                .filter(([name, color]) => typeof color !== 'string' && name)
                .map(([name, color]: Array<string>) => (
                    <div key={name}>
                        <Text textSize="XS" uppercase>
                            {name}
                        </Text>
                        {Object.entries(color).map(([shade, hex]) => (
                            <ColorLine key={hex} hex={hex} shade={shade} />
                        ))}
                    </div>
                ))}
        </Grid>
    );
};