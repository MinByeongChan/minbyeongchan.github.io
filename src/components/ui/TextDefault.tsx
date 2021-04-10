import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { color as fontColor, fontSize, fontWeight } from '../../utils/StyleTheme';

const TextDefault = (props: ITextDefault) => {
    const {children, size, color, weight} = props;

    return (
        <Text
            size={size ? fontSize[`${size}`] : fontSize[`${fontSize.md}`]}
            color={color ? fontColor[`${color}`] : ''}
            weight={weight ? fontWeight[`${weight}`] : fontWeight[`${fontWeight.normal}`]}
        >
            {children}
        </Text>
    );
};

interface ITextDefault {
    size?: string;
    color?: string;
    weight?: string;
    children?: ReactNode;
}

const Text = styled.span`
    font-size: ${(props: ITextDefault) => props.size};
    color: ${(props: ITextDefault) => props.color};
    font-weight: ${(props: ITextDefault) => props.weight};
    @media (min-width: 500px) and (max-width: 820px) {
        font-size:${(props: ITextDefault) => (
            (props.size === 'h1' && fontSize.xxg) ||
            (props.size === 'xxg' && fontSize.xg) ||
            (props.size === 'xg' && fontSize.lg) ||
            (props.size === 'lg' && fontSize.lg) ||
            (props.size === 'md' && fontSize.md)
        )};
    };
    @media  (min-width: 0px) and (max-width: 499px) {
        font-size:${(props: ITextDefault) => (
            (props.size === 'h1' && fontSize.xxg) ||
            (props.size === 'xxg' && fontSize.xg) ||
            (props.size === 'xg' && fontSize.lg) ||
            (props.size === 'lg' && fontSize.md) ||
            (props.size === 'md' && fontSize.sm))
        };
    };
`;

export default TextDefault;