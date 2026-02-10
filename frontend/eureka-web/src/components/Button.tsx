import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ternary' | 'add';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  outline?: boolean;
  active?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  backgroundImage?: string;
}


function Button({ children, variant = 'primary', rounded, outline, active, type = 'button', disabled, className, onClick, backgroundImage }: ButtonProps) {
  const buttonClasses = classNames(
    'text-center font-inter',
    {
      'py-3 px-24 rounded-md bg-white text-black text-sm hover:bg-[#e93448] hover:text-white': variant === 'primary'  && !backgroundImage,
      'py-6 px-8 bg-gray-100 text-[#3b3c5e] font-bold hover:bg-[#e93448] hover:text-white': variant === 'secondary' && !active  && !backgroundImage,
      'py-6 px-8 bg-[#3b3c5e] text-white': variant === 'secondary' && active  && !backgroundImage,
      'py-1 px-6 border bg-[#e93448] text-white hover:bg-white hover:text-black': variant === 'add' && !backgroundImage,
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