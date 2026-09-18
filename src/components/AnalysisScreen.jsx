// ═══════════════════════════════════════════
// LegalLens — Analysis Screen (2-col layout + tabs)
// ═══════════════════════════════════════════

window.AnalysisScreen = function AnalysisScreen({
  docName, docText, clauses, summary, score, riskInfo,
  activeTab, setActiveTab, summaryLang, setSummaryLang, onReanalyze
}) {
  
  
  const [searchResults, setSearchResults] = React.useState([]);

  const [question, setQuestion] = React.useState("");


  const tabs = [
    { id: "clauses", label: "Clause Analysis", badge: clauses.length },
    { id: "summary", label: "Plain Summary" },
    { id: "fulltext", label: "Full Text" }
  ];

  return (
    <main id="analysis-screen" className="max-w-7xl mx-auto px-4 sm:px-6 py-6 anim-fade-in">
      <div
        className="analysis-grid grid gap-5"
        style={{ gridTemplateColumns: "minmax(280px, 30%) 1fr" }}
      >
        {/* Sidebar */}
        <window.Sidebar
          docName={docName}
          score={score}
          riskInfo={riskInfo}
          summary={summary}
          onReanalyze={onReanalyze}
        />

        {/* Main content */}
        <section id="analysis-main" className="min-w-0">
          {/* Tab bar + export */}
          <div className="ll-card mb-5 flex items-center justify-between flex-wrap" style={{ borderRadius: "12px 12px 12px 12px" }}>
            <nav className="flex flex-wrap" role="tablist" aria-label="Analysis sections">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={activeTab === t.id}
                  className={`tab-btn ${activeTab === t.id ? "active" : ""}`}
                  onClick={() => setActiveTab(t.id)}
                >
                  {t.label}
                  {t.badge !== undefined && (
                    <span
                      className="ml-1.5 text-[11px] font-bold px-1.5 py-0.5 rounded-full"
                      style={{ background: activeTab === t.id ? "#0F2342" : "#E2E8F0", color: activeTab === t.id ? "#fff" : "#64748B" }}
                    >
                      {t.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab panels */}
          {activeTab === "clauses" && (
  <>
<div className="ll-card p-4 mb-4 flex gap-3">
<input
 type="text"
 value={question}
 onChange={(e)=>setQuestion(e.target.value)}
 placeholder="请输入检索关键词，例如：duration / enforcement / protection"
 className="w-full p-3 border rounded-lg"
/>

<div className="mt-2 text-xs" style={{color:"#64748B"}}>
  <p className="font-semibold mb-1">
    Example Query:
  </p>
  <p>
    protected subject matter · duration · protection mechanism· enforcement 
  </p>
</div>

<button 
  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
  onClick={() => {

    // 先清空旧结果
    setSearchResults([]);

    const results = window.detectClauses(
      docText,
      question
    );

    console.log(
      "NEW SEARCH RESULTS:",
      results
    );

    setTimeout(()=>{
      setSearchResults(results);
    },0);

  }}
>
Search
</button>
</div>
    <window.ClauseList 
  key={searchResults.length + JSON.stringify(searchResults)}
  clauses={searchResults}
/>
  </>
)}
          {activeTab === "summary" && (
            <window.SummaryPanel summary={summary} summaryLang={summaryLang} setSummaryLang={setSummaryLang} />
          )}
          {activeTab === "fulltext" && <window.FullTextPanel docText={docText} clauses={clauses} />}
        </section>
      </div>
    </main>
  );
};
