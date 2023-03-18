const Variant = {
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
  TEXT: 'text'
} as const; // 'contained' | 'outlined' | 'text'

type TVaraint = typeof Variant[keyof typeof Variant];

const Shape = {
  ROUND: 'round',
  SQUARE: 'square'
} as const; // round'|'square'

type TShape = typeof Shape[keyof typeof Shape];

const Color = {
  GRAY: 'gray',
  PINK: 'pink',
  BLUE: 'blue'
} as const;

type TColor = typeof Color[keyof typeof Color];

interface IButton {
    variant: TVaraint;
    shape: TShape;
    color: TColor;
    code: number; // color 숫자
    disabled: boolean;
    // eslint-disable-next-line no-unused-vars
    getVariantClass(): string;
    getShapeClass(): string;
    render(): string;
}

export {
  TVaraint, TShape, TColor, IButton
};
