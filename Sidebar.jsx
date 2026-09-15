// ═══════════════════════════════════════════
// LegalLens — Analysis Sidebar
// ═══════════════════════════════════════════

window.Sidebar = function Sidebar({ docName, score, riskInfo, summary, onReanalyze }) {
  const { FileText, RefreshCw, Users, IndianRupee, MapPin } = window.LLIcons;
  const analyzedDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric"
  });

  return (
    <aside id="analysis-sidebar" className="analysis-sidebar flex flex-col gap-4 stagger">

      {/* Card 1 — Document info */}
      <div className="ll-card p-5" id="doc-info-card">
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center rounded-lg shrink-0" style={{ width: 40, height: 40, background: "#EFF4FB", color: "#0F2342" }}>
            <FileText size={20} />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-navy truncate m-0" title={docName}>{docName}</p>
            <p className="text-xs mt-0.5 m-0" style={{ color: "#64748B" }}>Analyzed on {analyzedDate}</p>
          </div>
        </div>
        <button
          onClick={onReanalyze}
          className="btn-outline flex items-center gap-1.5 text-xs px-3 py-1.5 mt-3.5"
        >
          <RefreshCw size={13} />
          Re-analyze
        </button>
      </div>



    </aside>
  );
};
