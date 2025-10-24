"use client";

import { useState } from "react";
import { AgentChat, ChatMessage } from "@/components/AgentChat";
import { HookConfigurator } from "@/components/HookConfigurator";
import { ScriptPreview } from "@/components/ScriptPreview";
import {
  ScriptConfig,
  buildScript,
  defaultConfig,
  generateAgentReply,
} from "@/lib/scriptEngine";

export default function Home() {
  const [config, setConfig] = useState<ScriptConfig>(defaultConfig);
  const [script, setScript] = useState(() => buildScript(defaultConfig));
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Namaste creator fam! Main tumhara Hinglish scripting agent hoon. Bol kaunsi vibe chahiye, main turant hook aur beats polish kar deta hoon.",
    },
  ]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleConfigChange = (next: ScriptConfig) => {
    setConfig(next);
    setScript(buildScript(next));
  };

  const handleSend = (message: string) => {
    setIsGenerating(true);
    const result = generateAgentReply(message, config);

    if (result.updatedConfig) {
      const merged = { ...config, ...result.updatedConfig };
      setConfig(merged);
      setScript(buildScript(merged));
    } else {
      setScript(buildScript(config));
    }

    setMessages((prev) => [
      ...prev,
      { role: "user", content: message },
      { role: "assistant", content: result.reply },
    ]);
    setIsGenerating(false);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#050B1B] via-[#0E1433] to-[#341154] text-white">
      <div className="absolute left-1/2 top-0 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="absolute -left-20 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-y-1/2 rotate-12 rounded-full bg-purple-700/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 -z-10 h-[28rem] w-[28rem] translate-x-1/3 translate-y-1/3 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:px-12">
        <header className="mb-10 space-y-4">
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-indigo-200">
            Underrated AI Gems
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Build ek{" "}
            <span className="bg-gradient-to-r from-indigo-200 via-white to-violet-200 bg-clip-text text-transparent">
              Hinglish hook
            </span>{" "}
            jo Lover Art se leke Prommpt AI tak poori stack ko tease kare.
          </h1>
          <p className="max-w-3xl text-lg text-indigo-100/80">
            Yeh agent tumhe intro script, segment beats aur creator-ready
            delivery deta hai. Bas vibe samjhaao, baaki main hook, structure aur
            CTA polish karke de dunga.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <HookConfigurator config={config} onChange={handleConfigChange} />
            <ScriptPreview script={script} />
          </div>
          <AgentChat
            messages={messages}
            onSend={handleSend}
            isGenerating={isGenerating}
          />
        </div>
      </div>
    </main>
  );
}
