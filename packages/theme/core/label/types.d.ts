export declare type LabelSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';
export declare type LabelWeights = 'light' | 'regular' | 'medium' | 'strong' | 'extraStrong';
export interface LabelTheme {
    sizes: {
        [key in LabelSizes]: {
            fontSize: string;
        };
    };
    weights: {
        [key in LabelWeights]: {
            weight: string;
        };
    };
    fontFamily: string;
    defaults: {
        labelColor: string;
        lineHeight: string;
        labelWeight: string;
    };
}
