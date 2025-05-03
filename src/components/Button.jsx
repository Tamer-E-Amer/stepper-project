const Button = ({ children, handlePervious, step, length }) => {
  return (
    <button
      className={`flex w-full items-center justify-center rounded-md px-12 py-1 text-sm font-semibold transition-colors duration-300 focus:outline-none sm:w-32 ${step == length && children === 'submit' ? 'bg-orange-800 text-orange-100 hover:bg-orange-700' : 'bg-stone-400 hover:bg-stone-200'} capitalize`}
      onClick={handlePervious}
    >
      {children}
    </button>
  );
};

export default Button;
