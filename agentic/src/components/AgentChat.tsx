import { FormEvent, useEffect, useRef, useState } from "react";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type AgentChatProps = {
  messages: ChatMessage[];
  onSend: (message: string) => void;
  isGenerating?: boolean;
};

export function AgentChat({ messages, onSend, isGenerating }: AgentChatProps) {
  const [draft, setDraft] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = draft.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setDraft("");
  };

  return (
    <section className="flex h-full min-h-[28rem] flex-col rounded-3xl border border-white/10 bg-[#060713]/90 p-6 shadow-xl shadow-violet-600/20">
      <header className="mb-4 space-y-2">
        <p className="text-xs uppercase tracking-[0.4em] text-violet-200/80">
          Chat Agent
        </p>
        <h2 className="text-2xl font-semibold text-white">
          Hinglish scripting saathi
        </h2>
        <p className="text-sm text-violet-100/70">
          Jo bhi tweak chahiye drop karo – agent turant hook, beats, ya CTA
          revise karega.
        </p>
      </header>

      <div className="flex-1 space-y-4 overflow-y-auto rounded-2xl border border-white/5 bg-black/20 p-4">
        {messages.map((message, index) => (
          <article
            key={`${message.role}-${index}`}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                message.role === "user"
                  ? "bg-violet-600 text-white"
                  : "bg-white/10 text-violet-50"
              }`}
            >
              {message.content}
            </div>
          </article>
        ))}
        <div ref={bottomRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3"
      >
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Example: 'Make the hook more dramatic and CTA: comment your fav tool'"
          className="h-20 flex-1 resize-none bg-transparent text-sm text-violet-50 placeholder:text-violet-100/30 focus:outline-none"
        />
        <button
          type="submit"
          disabled={isGenerating || draft.trim().length === 0}
          className="rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:bg-violet-500/50"
        >
          {isGenerating ? "Thinking..." : "Send"}
        </button>
      </form>
    </section>
  );
}
