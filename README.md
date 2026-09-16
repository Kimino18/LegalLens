# LegalLens

AI-assisted Intellectual Property (IP) Law Document Analysis Tool

## Overview

LegalLens is an AI-assisted legal document analysis tool designed for Intellectual Property (IP) law documents.

The project helps users quickly locate relevant legal provisions from long and complex legal texts by combining document structure analysis and query-based relevance ranking.

Instead of providing automatic legal conclusions, LegalLens assists users by identifying potentially relevant sections and allowing users to review the original legal text for further analysis.

---

## Features

### 📄 Legal Document Upload

Supports uploading legal documents in:

- PDF
- DOCX
- TXT

Users can upload intellectual property law documents and analyze the content directly in the browser.

---

### 🔎 Query-Based Clause Retrieval

Users can enter legal questions or keywords, such as:

- protection duration
- enforcement
- protected subject matter
- protection mechanism

The system searches the uploaded document and returns relevant legal sections based on keyword relevance.

---

### 📚 Section-Based Legal Text Analysis

Legal documents are analyzed according to their internal structure.

The system identifies relevant sections and ranks results based on the relationship between the user's query and the document content.

---

### ⚖️ Intellectual Property Law Focus

The tool is designed for IP law documents, including:

- Patent Acts
- Trademark Acts
- Copyright Acts
- Other intellectual property-related legislation

---

## How It Works

```text
Upload Legal Document
          ↓
Extract Document Text
          ↓
Identify Legal Sections
          ↓
Enter User Query
          ↓
Calculate Relevance Score
          ↓
Rank Related Legal Provisions
          ↓
Review Original Legal Text
## Supported Documents

Recommended input documents:

- English legal Acts
- Section-based legal documents
- Structured legal texts with clear chapters and sections

Examples:

- Patent Acts
- Trademark Acts
- Copyright Acts

### Recommended Format

For better analysis results:

✅ Original English legal text  
✅ Official Acts rather than procedural rules or regulations  
✅ Documents with clear section numbering and structure  

---

## Technology Stack

Frontend:

- HTML
- CSS
- JavaScript
- React JSX Components

Document Processing:

- PDF text extraction
- DOCX/TXT parsing
- Rule-based section detection
- Keyword-based relevance ranking

Deployment:

- GitHub Pages / Vercel

---

## Project Structure

```text
LegalLens
│
├── index.html
├── README.md
├── favicon.svg
├── vercel.json
│
├── css
│   └── style.css
│
├── src
│   │
│   ├── App.jsx
│   │
│   ├── components
│   │   ├── AnalysisScreen.jsx
│   │   ├── ClauseCard.jsx
│   │   ├── ClauseList.jsx
│   │   ├── FullTextPanel.jsx
│   │   ├── Header.jsx
│   │   ├── Icons.jsx
│   │   ├── LandingScreen.jsx
│   │   ├── LoadingOverlay.jsx
│   │   ├── RiskDonut.jsx
│   │   ├── RiskGauge.jsx
│   │   ├── Sidebar.jsx
│   │   ├── SummaryPanel.jsx
│   │   └── UploadZone.jsx
│   │
│   ├── data
│   │   └── sampleDoc.js
│   │
│   └── utils
│       ├── clauseEngine.js
│       ├── exportReport.js
│       ├── pdfParser.js
│       └── summarizer.js
│
└── .gitignore

---

## Limitations

- The system does not provide legal advice or legal conclusions.
- Retrieval accuracy depends on document structure and terminology.
- The current version is optimized for English intellectual property law documents.
- Documents with unclear formatting, scanned images, or inconsistent structures may reduce extraction accuracy.
- Users should verify retrieved provisions against the original legal text.

---

## Future Improvements

Possible improvements include:

- More advanced semantic search methods
- Better support for scanned PDF documents through OCR
- Multilingual legal document analysis
- Improved legal terminology recognition
- Automated comparison between different jurisdictions

---

## Disclaimer

LegalLens is an experimental research project for assisting legal document analysis.

It is not a substitute for professional legal advice.

Users should always consult the original legislation and qualified legal professionals when making legal decisions.
