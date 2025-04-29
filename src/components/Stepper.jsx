const Stepper = ({ number, isActive, title }) => {
  return (
    <div className="justifz-center flex flex-col items-center gap-2">
      <div
        className={`flex h-6 w-6 items-center justify-center rounded-full p-6 text-lg font-semibold text-blue-100 ${isActive ? 'bg-blue-900' : 'bg-stone-500'} transition-colors duration-300`}
      >
        {number}
      </div>
      {isActive && (
        <span className="text-sm capitalize italic text-stone-500">
          {title}
        </span>
      )}
    </div>
  );
};

export default Stepper;
