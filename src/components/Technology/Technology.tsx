import type { TechCard } from "../../Dev/DevType";

export interface TechnologyProps {
  technology: TechCard;
  isInStack: boolean;
  onAddToStack: (technology: TechCard) => void;
}

export default function Technology({
  technology,
  isInStack,
  onAddToStack,
}: TechnologyProps) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* icon $ badge */}
      <div className="mb-4 flex items-center justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 object-contain"
        />
        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-500">
          {technology.badge}
        </span>
      </div>
      {/* name */}
      <h3 className="text-base font-bold text-gray-900">{technology.name}</h3>
      {/* description */}
      <p className="mt-2 flex-grow text-xs leading-5 text-gray-500">
        {technology.description}
      </p>
      {/* category, level, rating */}
      <div className="mt-4 flex items-center justify-between gap-2 text-[10px]">
        <span className="rounded bg-gray-50 px-2 py-1 text-gray-500">
          {technology.category}
        </span>
        <span className="text-gray-400">{technology.difficulty}</span>
        <span className="text-yellow-500">⭐ {technology.rating}</span>
      </div>
      {/* button */}
      <button
        onClick={() => onAddToStack(technology)}
        disabled={isInStack}
        className={`mt-4 w-full rounded-md py-2 text-xs font-medium transition ${
          isInStack
            ? "cursor-not-allowed bg-gray-200 text-gray-500"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}>
        {isInStack ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
