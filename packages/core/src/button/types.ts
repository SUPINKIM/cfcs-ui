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

// eslint-disable-next-line no-unused-vars
type GetColorClass = (section: string, name: typeof Color[keyof typeof Color], code?: number) => string;

interface IButton {
    variant: TVaraint;
    shape: TShape;
    color: TColor;
    getColorClass: GetColorClass;
    render(): string;
}

class Button implements IButton {
  private _variant;
  private _shape;
  private _color;

  constructor (variant: TVaraint, shape: TShape, color: TColor) {
    this._variant = variant;
    this._shape = shape;
    this._color = color;
  }

  get variant () {
    return this._variant;
  }

  get shape () {
    return this._shape;
  }

  get color () {
    return this._color;
  }

  getColorClass = (section : string, name: typeof Color[keyof typeof Color], code?: number): string => {
    return code ? `${section}-${name}-${code}` : `${section}-${name}`;
  };

  render () {
    return '';
  }
}

export default Button;
