export type CardDirection = 'column' | 'row';
export type CardTextAlignment = 'left' | 'center' | 'right';
export type CardProps =  {
    /** Card Image */
    src?:string;
    /** Card Title */
    title: string;
    /** Card Description */
    description: string;
    /** Card Direction */
    direction: CardDirection;
    /** Card Text Alignment */
    align: CardTextAlignment;
};
