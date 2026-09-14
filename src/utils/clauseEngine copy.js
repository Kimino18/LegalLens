// ═══════════════════════════════════════════
// LegalLens — Clause Detection Engine
// ═══════════════════════════════════════════
window.CLAUSE_RULES = [

  // ── TRADEMARK ─────────────────────────────────────────────

  {
    id: "trademark_definition",
    name: "Trademark Definition",
    severity: "info",
    keywords: [
      "trade mark",
      "trade-mark",
      "trademark"
    ],
    explanation: "This provision defines or describes the concept of a trade mark.",
    recommendation: "Record the legal definition and compare the scope of protected subject matter across jurisdictions.",
    hindiExplanation: "यह प्रावधान ट्रेड मार्क की परिभाषा या अवधारणा से संबंधित है।",
    hindiRecommendation: "कानूनी परिभाषा को दर्ज करें और विभिन्न देशों के बीच तुलना करें।"
  },

  {
    id: "trademark_registration",
    name: "Trademark Registration",
    severity: "info",
    keywords: [
      "application for registration",
      "registration of trade marks",
      "register a trade mark",
      "registration"
    ],
    explanation: "This provision concerns the registration procedure or conditions for registering a trade mark.",
    recommendation: "Extract the application requirements, examination procedure and registration conditions.",
    hindiExplanation: "यह प्रावधान ट्रेड मार्क के पंजीकरण की प्रक्रिया या शर्तों से संबंधित है।",
    hindiRecommendation: "आवेदन आवश्यकताओं और पंजीकरण शर्तों को दर्ज करें।"
  },

  {
    id: "trademark_refusal",
    name: "Trademark Refusal Grounds",
    severity: "info",
    keywords: [
      "absolute grounds for refusal",
      "relative grounds for refusal",
      "grounds for refusal",
      "refuse to register"
    ],
    explanation: "This provision concerns the grounds on which a trade mark application may be refused.",
    recommendation: "Classify the refusal grounds and compare them with other jurisdictions.",
    hindiExplanation: "यह प्रावधान ट्रेड मार्क आवेदन को अस्वीकार करने के आधार से संबंधित है।",
    hindiRecommendation: "अस्वीकृति के आधारों को वर्गीकृत करें और अन्य देशों से तुलना करें।"
  },

  {
    id: "trademark_classification",
    name: "Goods and Services Classification",
    severity: "info",
    keywords: [
      "classification of goods and services",
      "classification of goods",
      "classification of services",
      "international classification"
    ],
    explanation: "This provision concerns the classification of goods and services for trademark registration.",
    recommendation: "Record the classification system and examine whether it follows an international classification framework.",
    hindiExplanation: "यह प्रावधान वस्तुओं और सेवाओं के वर्गीकरण से संबंधित है।",
    hindiRecommendation: "वर्गीकरण प्रणाली को दर्ज करें और अंतरराष्ट्रीय वर्गीकरण से तुलना करें।"
  },

  {
    id: "trademark_opposition",
    name: "Trademark Opposition",
    severity: "info",
    keywords: [
      "notice of opposition",
      "opposition to the registration",
      "opposition proceedings",
      "opposition"
    ],
    explanation: "This provision concerns opposition to a trademark registration.",
    recommendation: "Extract who may file an opposition, the procedure and applicable time limits.",
    hindiExplanation: "यह प्रावधान ट्रेड मार्क पंजीकरण के विरोध से संबंधित है।",
    hindiRecommendation: "विरोध दाखिल करने वाले पक्ष, प्रक्रिया और समय सीमा को दर्ज करें।"
  },

  {
    id: "trademark_duration",
    name: "Trademark Protection Duration",
    severity: "info",
    keywords: [
      "duration of registration",
      "registration for a period of ten years",
      "ten years",
      "renewal of registration"
    ],
    explanation: "This provision concerns the duration and renewal of trademark registration.",
    recommendation: "Extract the initial protection period and renewal period for cross-country comparison.",
    hindiExplanation: "यह प्रावधान ट्रेड मार्क पंजीकरण की अवधि और नवीनीकरण से संबंधित है।",
    hindiRecommendation: "प्रारंभिक सुरक्षा अवधि और नवीनीकरण अवधि को दर्ज करें।"
  },

  {
    id: "trademark_rights",
    name: "Trademark Rights",
    severity: "info",
    keywords: [
      "rights conferred by registration",
      "exclusive right",
      "registered proprietor"
    ],
    explanation: "This provision concerns the rights granted to the owner of a registered trademark.",
    recommendation: "Extract the scope of exclusive rights granted by registration.",
    hindiExplanation: "यह प्रावधान पंजीकृत ट्रेड मार्क के स्वामी को दिए गए अधिकारों से संबंधित है।",
    hindiRecommendation: "पंजीकरण से मिलने वाले विशेष अधिकारों का दायरा दर्ज करें।"
  },

  {
    id: "trademark_infringement",
    name: "Trademark Infringement",
    severity: "info",
    keywords: [
      "infringement of registered trade marks",
      "infringement of trade mark",
      "infringement"
    ],
    explanation: "This provision concerns infringement of trademark rights.",
    recommendation: "Extract the conduct considered infringement and compare enforcement standards across jurisdictions.",
    hindiExplanation: "यह प्रावधान ट्रेड मार्क अधिकारों के उल्लंघन से संबंधित है।",
    hindiRecommendation: "उल्लंघन माने जाने वाले आचरण को दर्ज करें।"
  },

  {
    id: "trademark_limitations",
    name: "Limitations on Trademark Rights",
    severity: "info",
    keywords: [
      "limits on effect of registration",
      "limitations on effect of registration",
      "effect of registration",
      "limits on the effect"
    ],
    explanation: "This provision concerns limitations or exceptions to the rights granted by trademark registration.",
    recommendation: "Extract statutory limitations and exceptions for cross-jurisdiction comparison.",
    hindiExplanation: "यह प्रावधान ट्रेड मार्क पंजीकरण अधिकारों की सीमाओं या अपवादों से संबंधित है।",
    hindiRecommendation: "कानूनी सीमाओं और अपवादों को दर्ज करें।"
  },


  // ── PATENT ────────────────────────────────────────────────

  {
    id: "patent_definition",
    name: "Patent Definition",
    severity: "info",
    keywords: [
      "patent",
      "invention",
      "patentee"
    ],
    explanation: "This provision concerns patents or inventions.",
    recommendation: "Extract the legal definition and scope of patent protection.",
    hindiExplanation: "यह प्रावधान पेटेंट या आविष्कार से संबंधित है।",
    hindiRecommendation: "पेटेंट सुरक्षा की परिभाषा और दायरा दर्ज करें।"
  },

  {
    id: "patent_application",
    name: "Patent Application",
    severity: "info",
    keywords: [
      "application for a patent",
      "application for grant of patent",
      "patent application"
    ],
    explanation: "This provision concerns the patent application procedure.",
    recommendation: "Extract application requirements and procedural steps.",
    hindiExplanation: "यह प्रावधान पेटेंट आवेदन प्रक्रिया से संबंधित है।",
    hindiRecommendation: "आवेदन आवश्यकताओं और प्रक्रिया चरणों को दर्ज करें।"
  },

  {
    id: "patent_term",
    name: "Patent Protection Term",
    severity: "info",
    keywords: [
      "term of patent",
      "term of a patent",
      "duration of patent"
    ],
    explanation: "This provision concerns the duration of patent protection.",
    recommendation: "Extract the statutory patent term for cross-country comparison.",
    hindiExplanation: "यह प्रावधान पेटेंट सुरक्षा अवधि से संबंधित है।",
    hindiRecommendation: "पेटेंट की कानूनी सुरक्षा अवधि दर्ज करें।"
  },


  // ── COPYRIGHT ─────────────────────────────────────────────

  {
    id: "copyright_definition",
    name: "Copyright Protection",
    severity: "info",
    keywords: [
      "copyright",
      "author",
      "literary work",
      "artistic work"
    ],
    explanation: "This provision concerns copyright or protected works.",
    recommendation: "Extract the categories of works protected by copyright.",
    hindiExplanation: "यह प्रावधान कॉपीराइट या संरक्षित कृतियों से संबंधित है।",
    hindiRecommendation: "कॉपीराइट द्वारा संरक्षित कृतियों की श्रेणियां दर्ज करें।"
  },

  {
    id: "copyright_duration",
    name: "Copyright Protection Duration",
    severity: "info",
    keywords: [
      "term of copyright",
      "duration of copyright",
      "copyright shall subsist"
    ],
    explanation: "This provision concerns the duration of copyright protection.",
    recommendation: "Extract the duration of copyright protection for comparison.",
    hindiExplanation: "यह प्रावधान कॉपीराइट सुरक्षा अवधि से संबंधित है।",
    hindiRecommendation: "कॉपीराइट की सुरक्षा अवधि दर्ज करें।"
  },


  // ── INDUSTRIAL DESIGN ────────────────────────────────────

  {
    id: "design_definition",
    name: "Industrial Design Protection",
    severity: "info",
    keywords: [
      "industrial design",
      "design",
      "registered design"
    ],
    explanation: "This provision concerns industrial design protection.",
    recommendation: "Extract the definition and scope of industrial design protection.",
    hindiExplanation: "यह प्रावधान औद्योगिक डिजाइन सुरक्षा से संबंधित है।",
    hindiRecommendation: "औद्योगिक डिजाइन सुरक्षा की परिभाषा और दायरा दर्ज करें।"
  },

  {
    id: "design_registration",
    name: "Industrial Design Registration",
    severity: "info",
    keywords: [
      "registration of designs",
      "application for registration of a design",
      "register of designs"
    ],
    explanation: "This provision concerns the registration procedure for industrial designs.",
    recommendation: "Extract application and registration requirements.",
    hindiExplanation: "यह प्रावधान औद्योगिक डिजाइन पंजीकरण प्रक्रिया से संबंधित है।",
    hindiRecommendation: "申请和注册要求を记录 करें।"
  }

];
// ── Detection ───────────────────────────────────────────────
// 1. Lowercase the full document text
// 2. For each rule, check if ANY keyword exists in the text
// 3. If found, capture the surrounding context (150 chars before/after)
// 4. Return only FIRST match per rule (no duplicates)
window.detectClauses = function detectClauses(docText) {
  // 1. 先清理文本
  const text = String(docText || '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n');

  // 2. 尝试找到目录区域
  // 常见法律文件会出现 CONTENTS / TABLE OF CONTENTS
  const tocPatterns = [
    /^\s*CONTENTS\s*$/im,
    /^\s*TABLE\s+OF\s+CONTENTS\s*$/im
  ];

  let bodyText = text;

  for (const pattern of tocPatterns) {
    const tocMatch = pattern.exec(text);

    if (tocMatch) {
      const tocStart = tocMatch.index;

      // 找目录之后再次出现的正式法律标题。
      // 以本次测试的 Trade Marks Act, 1999 为例，
      // 正文会再次出现 THE TRADE MARKS ACT, 1999。
      const afterToc = text.slice(tocStart + tocMatch[0].length);

      const bodyStartMatch = afterToc.match(
        /^\s*THE\s+TRADE\s+MARKS\s+ACT,\s+1999\s*$/im
      );

      if (bodyStartMatch) {
        const bodyStart =
          tocStart +
          tocMatch[0].length +
          bodyStartMatch.index;

        bodyText = text.slice(bodyStart);
      }

      break;
    }
  }

  // 3. 继续使用原来的规则，但搜索范围改成“正文”
  const lowerText = bodyText.toLowerCase();
  const results = [];

 for (const rule of window.CLAUSE_RULES) {
  let matched = false;
  let keyword = '';
  let snippetText = '';

  for (const keyword of rule.keywords || []) {
    const index = lowerText.indexOf(keyword.toLowerCase());

    if (index !== -1) {
       keyword= keyword;

      const start = Math.max(0, index - 150);
      const end = Math.min(
        bodyText.length,
        index + keyword.length + 150
      );

      snippetText = bodyText.slice(start, end).trim();
      matched = true;
      break;
    }
  }

  if (matched) {
  results.push({
    id: rule.id,
    title: rule.title,
    category: rule.category,
    severity: rule.severity,
    keyword: keyword,
    snippetText: snippetText
  });
}
} 

  return results;
};

// ── Risk Scoring ────────────────────────────────────────────
// score = (high × 28) + (medium × 12) + (info × 3), clamped to 100
window.calculateRiskScore = function calculateRiskScore(clauses) {
  const high = clauses.filter(c => c.severity === "high").length;
  const medium = clauses.filter(c => c.severity === "medium").length;
  const info = clauses.filter(c => c.severity === "info").length;
  const score = Math.min(100, high * 28 + medium * 12 + info * 3);

  let riskLevel, label, color, labelBg;
  if (score <= 30) {
    riskLevel = "low"; label = "LOW RISK"; color = "#059669"; labelBg = "#ECFDF5";
  } else if (score <= 65) {
    riskLevel = "medium"; label = "MEDIUM RISK"; color = "#D97706"; labelBg = "#FFFBEB";
  } else {
    riskLevel = "high"; label = "HIGH RISK"; color = "#DC2626"; labelBg = "#FEF2F2";
  }
  return { score, riskLevel, label, color, labelBg, counts: { high, medium, info } };
};
