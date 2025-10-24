import { ScriptResult } from "@/lib/scriptEngine";

type ScriptPreviewProps = {
  script: ScriptResult;
};

export function ScriptPreview({ script }: ScriptPreviewProps) {
  return (
    <section className="space-y-6 rounded-3xl border border-indigo-200/20 bg-[#080A1A]/80 p-6 shadow-xl shadow-indigo-500/20">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.4em] text-indigo-200/80">
          Script Blueprint
        </p>
        <h2 className="text-2xl font-semibold text-white">
          Ready-to-drop intro outline
        </h2>
        <p className="text-sm text-indigo-100/70">
          In hooks ko mirror karo, apne b-roll cues add karo, aur poora video
          stack shining ho jayega.
        </p>
      </header>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200">
          Hook Options
        </h3>
        <div className="grid gap-3 lg:grid-cols-3">
          {script.hooks.map((hook) => (
            <article
              key={hook.label}
              className="rounded-2xl border border-indigo-300/20 bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200/80">
                {hook.label}
              </p>
              <p className="mt-2 text-sm text-indigo-50/90">{hook.line}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200">
          Segment Beats
        </h3>
        <div className="space-y-4">
          {script.segments.map((segment, index) => (
            <article
              key={segment.id}
              className="rounded-2xl border border-white/5 bg-white/5 p-5"
            >
              <header className="mb-3 flex items-center justify-between gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/30 text-sm font-semibold text-indigo-50">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h4 className="flex-1 text-lg font-semibold text-white">
                  {segment.title}
                </h4>
              </header>
              <ul className="space-y-2">
                {segment.beats.map((beat, idx) => (
                  <li
                    key={`${segment.id}-${idx}`}
                    className="rounded-xl border border-indigo-300/10 bg-indigo-500/5 px-3 py-2 text-sm text-indigo-50/90"
                  >
                    {beat}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
