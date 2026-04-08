import classNames from 'classnames';
import type { ResponsiveImage } from '../../types/responsiveImage.ts';
type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ternary'
  | 'add'
  | 'arrowLeft'
  | 'arrowRight';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: boolean;
  outline?: boolean;
  active?: boolean;
  type?: ButtonType;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  backgroundImage?: string | ResponsiveImage;
}

function Button({
  children,
  variant = 'primary',
  rounded,
  outline,
  active,
  type = 'button',
  disabled,
  className,
  onClick,
  backgroundImage,
}: ButtonProps) {
  const toImageSetX = (srcSet: string, mimeType: string, baseWidth = 400) => {
    const entries = srcSet
      .split(',')
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const [url, descriptor] = part.split(/\s+/);
        const width = descriptor?.endsWith('w') ? Number(descriptor.slice(0, -1)) : NaN;
        if (!url || !Number.isFinite(width) || width <= 0) return null;

        const x = width / baseWidth;
        if (!Number.isFinite(x) || x <= 0) return null;

        // CSS image-set() supports resolution descriptors (1x, 2x...). We map widths to x
        // using a fixed baseWidth that matches our generation (400/800/1200/1600/2400...).
        return `url(${url}) type("${mimeType}") ${x}x`;
      })
      .filter((v): v is string => Boolean(v));

    return entries.length ? `image-set(${entries.join(', ')})` : null;
  };

  const buttonClasses = classNames(
    'flex justify-center items-center text-center font-inter',
    {
      'flex justify-center items-center py-6 px-26 w-auto h-auto text-center rounded-sm bg-[#EA5D5D] text-white font-bold hover:bg-[#8658F1] whitespace-nowrap':
        variant === 'primary' && !backgroundImage,
      'flex justify-center items-center py-6 px-26 w-auto h-auto text-center rounded-sm bg-[#FFDC5C] text-[#8658F1] font-bold hover:bg-[#EA5D5D] whitespace-nowrap hover:text-white':
        variant === 'secondary' && !active && !backgroundImage,
      'flex justify-center items-center py-4 px-8 w-auto min-w-[80px] sm:min-w-[100px] h-auto aspect-[4/1] text-center rounded-sm bg-gray-50 text-black hover:bg-[#EA5D5D] whitespace-nowrap hover:text-white':
        variant === 'ternary' && !active && !backgroundImage,
      'py-4 px-6 border bg-[#e93448] text-white hover:bg-white hover:text-black':
        variant === 'add' && !backgroundImage,
      'p-4 px-12 w-[8%] sm:w-[16%] h-auto bg-transparent':
        variant === 'arrowLeft' || variant === 'arrowRight',
      'rounded-[1vw]': rounded,
      'bg-white': outline && !backgroundImage,
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  );

  const backgroundStyle = backgroundImage
    ? {
        backgroundImage:
          typeof backgroundImage === 'string'
            ? `url(${backgroundImage})`
            : toImageSetX(backgroundImage.avifSrcSet, 'image/avif') ??
              toImageSetX(backgroundImage.webpSrcSet, 'image/webp') ??
              `url(${backgroundImage.fallbackSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {};

  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClasses}
      style={backgroundStyle}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

export default Button;
