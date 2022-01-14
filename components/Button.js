const FillButton = ({ className, text, ...props }) => {
  return (
    <button
      className={`bg-primary-100 shadow-lg shadow-primary-100/50 hover:scale-105 active:scale-100 transition-all rounded-full min-h-[44px] min-w-[44px] px-4 py-2 ${
        className || ''
      }`}
      {...props}
    >
      {text}
    </button>
  );
};

const TextButton = ({ className, text, ...props }) => {
  return (
    <button className={`hover:underline px-4 min-h-[44px] min-w-[44px] ${className || ''}`} {...props}>
      {text}
    </button>
  );
};

export { FillButton, TextButton };
