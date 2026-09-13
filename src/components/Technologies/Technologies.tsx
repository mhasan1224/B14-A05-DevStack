import { use, useState } from "react";
import type { TechCard } from "../../Dev/DevType";
import Technology from "../Technology/Technology";
import { toast } from "react-toastify";

export type TechnologiesProps = {
  technologiesPromise: Promise<TechCard[]>;
};

export default function Technologies({
  technologiesPromise,
}: TechnologiesProps) {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<TechCard[]>(
    [],
  );

  const handleAddToStack = (technology: TechCard) => {
    if (selectedTechnologies.length >= 6) {
      toast.warning("You can select maximum 6 technologies.");
      return;
    }

    if (
      selectedTechnologies.some((selected) => selected.id === technology.id)
    ) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    if (
      selectedTechnologies.some((selected) => selected.category === technology.category)
    ) {
      toast.warning(`${technology.category} is already in your stack.`);
      return;
    }

    setSelectedTechnologies([...selectedTechnologies, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const technology = selectedTechnologies.find(
      (technology) => technology.id === id,
    );
    setSelectedTechnologies(
      selectedTechnologies.filter((technology) => technology.id !== id),
    );
    if (technology) {
      toast.success(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.success("All technologies removed from your stack.");
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      {/* Section Header */}
      <div className="mb-7">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-1 text-sm text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        {/* Technologies Card */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <Technology
                key={technology.id}
                technology={technology}
                isInStack={selectedTechnologies.some(
                  (selected) => selected.id === technology.id,
                )}
                onAddToStack={handleAddToStack}
              />
            ))}
          </div>
        </div>

        {/* Your Stack Card */}
        <div className="lg:col-span-1">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-base font-bold text-gray-900">Your Stack</h3>

            {selectedTechnologies.length === 0 ? (
              <>
                <p className="mt-1 text-xs text-gray-400">
                  No technologies selected yet.
                </p>

                <div className="mt-4 flex h-16 items-center justify-center rounded-xl border border-dashed border-gray-200">
                  <span className="text-xs text-gray-400">
                    Your stack is empty.
                  </span>
                </div>
              </>
            ) : (
              <>
                <p className="mt-1 text-xs text-gray-400">
                  {" "}
                  {selectedTechnologies.length}{" "}
                  {selectedTechnologies.length === 1
                    ? "Technology"
                    : "Technologies"}{" "}
                  Selected
                </p>

                <div className="mt-4 space-y-2">
                  {selectedTechnologies.map((technology) => (
                    <div
                      key={technology.id}
                      className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          className="h-8 w-8 object-contain"
                        />

                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {technology.name}
                          </p>

                          <p className="text-[10px] text-gray-400">
                            {technology.category}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleRemoveFromStack(technology.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleRemoveAll}
                  className="mt-5 w-full rounded-md border border-red-200 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
                >
                  Remove All
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
