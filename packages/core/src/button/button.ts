import type {
  IButton, TColor, TShape, TVaraint
} from './types';

class Button implements IButton {
  private _variant: TVaraint;
  private _shape: TShape;
  private _color: TColor;
  private _code: number;
  private _disabled: boolean;

  constructor (variant: TVaraint, shape: TShape, color: TColor, code = 0, disabled = false) {
    this._variant = variant;
    this._shape = shape;
    this._color = color;
    this._code = code;
    this._disabled = disabled;
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

  get code () {
    return this._code;
  }

  get disabled () {
    return this._disabled;
  }

  getVariantClass (): string {
    switch (this._variant) {
    case 'contained':
      const backgroundColor = `bg-${this._color}${this._code && `-${this._code}` }`;
      return `${backgroundColor} text-white text-[14px]`;
    case 'outlined':
      return 'bg-white text-gray-100 border border-gray-30';
    case 'text':
      return 'text-gray-100';
    default:
      return '';
    }
  }

  getShapeClass (): string {
    return this._shape === 'square' ? 'rounded-[4px]' : 'rounded-[20px]';
  }

  render () {
    return `
        <button class="${this.getShapeClass()} ${this.getVariantClass()} w-[56px] h-[32px]">
            Button!
        </button>
    `;
  }
}

export default Button;
