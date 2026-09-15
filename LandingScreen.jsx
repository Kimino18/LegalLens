// ═══════════════════════════════════════════
// LegalLens — Landing Screen
// ═══════════════════════════════════════════

window.LandingScreen = function LandingScreen({ onFileSelected, onTryDemo, error }) {
  return (
    <main id="landing-screen" className="legal-texture min-h-[calc(100vh-64px)] py-10 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto stagger">

        {/* Hero */}
        <section id="hero-section" className="text-center mb-10">
          <h1
            className="font-display text-navy leading-tight"
            style={{ fontSize: "clamp(30px, 5vw, 42px)", fontWeight: 700 }}
          >
            Understand Intellectual Property Laws<br className="hidden sm:block" /> with AI Assistance
          </h1>
          <p className="mt-4 text-base sm:text-lg" style={{ color: "#64748B" }}>
            AI-assisted analysis for intellectual property laws. Upload legal documents and find relevant provisions.
          </p>

          {/* Feature pills */}
          <ul className="flex flex-wrap items-center justify-center gap-2.5 mt-6 list-none p-0">
            {[
  "📄 IP Law Document Analysis",
  "🔍 Relevant Provision Search",
  "⚖️ Legal Structure Detection"
].map((pill) => (
              <li
                key={pill}
                className="text-[13px] font-medium px-4 py-2 rounded-full bg-white"
                style={{ border: "1px solid #E2E8F0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", color: "#1E3A5F" }}
              >
                {pill}
              </li>
            ))}
          </ul>
        </section>

        {/* Upload zone */}
        <section aria-label="Upload document">
          <window.UploadZone onFileSelected={onFileSelected} onTryDemo={onTryDemo} error={error} />
        </section>

       
      </div>
    </main>
  );
};
