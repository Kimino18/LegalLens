// ═══════════════════════════════════════════
// LegalLens — Clause List
// ═══════════════════════════════════════════

window.ClauseList = function ClauseList({ clauses, searched }) {
  console.log("CLAUSE LIST DATA:", clauses);
  console.log("FIRST CLAUSE:", clauses[0]);
  

if (clauses.length === 0) {

  return (
    <div className="ll-card p-10 text-center anim-fade-up">

      <p 
        className="text-sm font-semibold m-0 mb-2"
        style={{ color: "#334155" }}
      >
        {searched
          ? "No relevant provisions found."
          : "Enter a query to retrieve relevant legal provisions."
        }
      </p>


      {searched && (
        <p 
          className="text-xs m-0"
          style={{ color: "#64748B" }}
        >
          Try different legal concepts or check whether the uploaded document contains the relevant provisions.
        </p>
      )}

    </div>
  );

}
return (
<section id="clause-list" aria-label="Relevant legal provisions">
  <p className="text-sm font-medium mb-4" style={{ color: "#64748B" }}>
    <strong className="text-navy">{clauses.length} relevant provisions found</strong>
  </p>

  <div className="flex flex-col gap-4 stagger">
    {clauses.map((clause, index) => (
      <window.ClauseCard
        key={clause.ruleId + "-" + index}
        clause={clause}
      />
    ))}
  </div>
</section>
  );
};
