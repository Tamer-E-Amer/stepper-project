const Stepper = ({ number, isActive, title }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-blue-100 ${isActive ? 'bg-blue-900' : 'bg-stone-500'} transition-colors duration-300`}
      >
        {number}
      </div>
      {isActive && (
        <span className="text-center text-xs capitalize italic text-stone-500">
          {title}
        </span>
      )}
    </div>
  );
};

export default Stepper;
