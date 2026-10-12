interface EmptyStateProps {
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function EmptyState({
  title,
  description,
  buttonText,
  onButtonClick,
}: EmptyStateProps) {
  return (
    <div className="rounded-lg border-2 border-dashed border-slate-300 bg-white p-12 text-center">
      <p className="text-slate-500">{title}</p>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
      {buttonText && onButtonClick && (
        <button
          onClick={onButtonClick}
          className="mt-4 cursor-pointer border-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-colors duration-200 hover:bg-indigo-700 hover:text-white"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
