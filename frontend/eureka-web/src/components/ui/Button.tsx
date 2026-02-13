import classNames from 'classnames';
type ButtonVariant = 'primary' | 'secondary' | 'ternary' | 'add' | 'arrowLeft' | 'arrowRight';
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
  backgroundImage?: string;
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
  const buttonClasses = classNames(
    'text-center font-inter',
    {
      'py-6 px-14 w-64 text-center rounded-sm bg-[#EA5D5D] text-white font-bold hover:bg-[#FFDC5C] whitespace-nowrap hover:text-[#8658F1]':
        variant === 'primary' && !backgroundImage,
      'py-6 px-12 w-64 text-center rounded-sm bg-[#FFDC5C] text-[#8658F1] font-bold hover:bg-[#EA5D5D] whitespace-nowrap hover:text-white':
        variant === 'secondary' && !active && !backgroundImage,
      'py-6 px-8 bg-[#3b3c5e] text-white':
        variant === 'secondary' && active && !backgroundImage,
      'py-1 px-6 border bg-[#e93448] text-white hover:bg-white hover:text-black':
        variant === 'add' && !backgroundImage,
      'p-2 w-32 h-12 bg-transparent':
        variant === 'arrowLeft' || variant === 'arrowRight',
      'rounded-[1vw]': rounded,
      'bg-white': outline && !backgroundImage,
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  );

  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
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
