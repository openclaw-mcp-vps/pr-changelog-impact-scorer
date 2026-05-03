export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Score PR Impact &amp;<br />
          <span className="text-[#58a6ff]">Auto-Generate Changelogs</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Connect GitHub via webhooks. AI scores every pull request by impact level and writes categorized changelog entries — so your team ships faster without the manual overhead.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $39/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: "1", title: "Connect GitHub", desc: "Authenticate with GitHub OAuth and configure which repos to watch." },
          { step: "2", title: "AI Scores PRs", desc: "Every merged PR is analyzed and scored: patch, minor, or major impact." },
          { step: "3", title: "Changelog Ready", desc: "Formatted entries appear in your dashboard or via API — ready to publish." }
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="w-9 h-9 rounded-full bg-[#58a6ff] text-[#0d1117] font-bold flex items-center justify-center mx-auto mb-3 text-sm">{step}</div>
            <h3 className="text-white font-semibold mb-2">{title}</h3>
            <p className="text-[#8b949e] text-sm">{desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-[#8b949e] text-sm mb-6">/month per workspace</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited repositories",
              "AI impact scoring (OpenAI / Anthropic)",
              "Auto-generated changelog entries",
              "Dashboard + REST API access",
              "GitHub OAuth integration",
              "Email digest of weekly changes"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which AI models are used to score PRs?",
              a: "We support both OpenAI (GPT-4o) and Anthropic (Claude). You can configure your preferred model in workspace settings."
            },
            {
              q: "How does the impact scoring work?",
              a: "The AI reads the PR title, description, diff summary, and labels to classify each PR as patch, minor, or major — following semantic versioning conventions."
            },
            {
              q: "Can I export or customize the changelog format?",
              a: "Yes. Changelog entries are available via REST API in JSON or Markdown. You can also define custom templates per repository."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} PR Changelog Impact Scorer. All rights reserved.
      </footer>
    </main>
  );
}
