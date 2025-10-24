import { ScriptConfig } from "@/lib/scriptEngine";

type HookConfiguratorProps = {
  config: ScriptConfig;
  onChange: (config: ScriptConfig) => void;
};

const vibeOptions = [
  "street-smart storyteller",
  "aesthetic creator coach",
  "premium launch mentor",
];

const hookFocusOptions: ScriptConfig["hookFocus"][] = [
  "FOMO Punch",
  "Story Spark",
  "Problem Solver",
];

const paceOptions: ScriptConfig["pace"][] = ["fast", "balanced", "laid-back"];

export function HookConfigurator({ config, onChange }: HookConfiguratorProps) {
  const update = <Key extends keyof ScriptConfig>(
    key: Key,
    value: ScriptConfig[Key]
  ) => {
    onChange({ ...config, [key]: value });
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-indigo-500/10 backdrop-blur">
      <header className="mb-6 space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">
          Hook Designer
        </p>
        <h2 className="text-2xl font-semibold text-white">
          Personalize your Hinglish intro
        </h2>
        <p className="text-sm text-indigo-100/70">
          Set the vibe, audience, aur CTA – agent turant script reshape karega.
        </p>
      </header>

      <div className="space-y-5">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-200">
            Audience Persona
          </span>
          <input
            value={config.persona}
            onChange={(event) => update("persona", event.target.value)}
            placeholder="creator fam, startup founders, design gang..."
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-indigo-100 placeholder:text-indigo-200/40 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
          />
        </label>

        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-200">
            Vibe Tag
          </span>
          <select
            value={config.vibe}
            onChange={(event) => update("vibe", event.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-indigo-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
          >
            {vibeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-200">
              Hook Focus
            </span>
            <select
              value={config.hookFocus}
              onChange={(event) =>
                update("hookFocus", event.target.value as ScriptConfig["hookFocus"])
              }
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-indigo-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
            >
              {hookFocusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-200">
              Pace
            </span>
            <select
              value={config.pace}
              onChange={(event) =>
                update("pace", event.target.value as ScriptConfig["pace"])
              }
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-indigo-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
            >
              {paceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-200">
              Energy Level: {config.energy}/10
            </span>
            <input
              type="range"
              min={1}
              max={10}
              value={config.energy}
              onChange={(event) => update("energy", Number(event.target.value))}
              className="mt-2 w-full accent-indigo-400"
            />
          </label>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-200">
              Hindi Mix: {(config.languageBlend * 100).toFixed(0)}%
            </span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.1}
              value={config.languageBlend}
              onChange={(event) =>
                update("languageBlend", Number(event.target.value))
              }
              className="mt-2 w-full accent-indigo-400"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-200">
            Call To Action
          </span>
          <textarea
            value={config.callToAction}
            onChange={(event) => update("callToAction", event.target.value)}
            rows={3}
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-indigo-100 placeholder:text-indigo-200/40 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
            placeholder="Bell icon bajao, newsletter join karo..."
          />
        </label>
      </div>
    </section>
  );
}
