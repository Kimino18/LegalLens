# LegalLens

LegalLens is a lightweight legal document analysis prototype designed to help users quickly locate relevant provisions in English patent acts.

## Features

- Upload legal documents in PDF, DOCX, or TXT format
- Detect section-based legal structures
- Search predefined legal topics:
  - Protection
  - Duration
  - Enforcement
- Rank relevant sections based on keyword relevance
- Display extracted legal provisions for user review

## Supported Documents

Currently optimized for:

- English patent Acts
- Section-based legal documents

Example:
- UK Patents Act
- Indian Patents Act

## How It Works

1. User uploads a legal document
2. The system detects sections and headings
3. User enters a query keyword
4. Relevant sections are ranked and displayed

## Limitations

- Best performance on structured English legal Acts
- Not designed for scanned PDFs or non-section-based documents
- Results provide retrieval assistance and require user verification

## Tech Stack

- JavaScript
- React
- Tailwind CSS
- Browser-based document processing
