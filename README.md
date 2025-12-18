# Prefiguration Lab website

Static, single-page site hosted on GitHub Pages. All editable content lives in `content.json` (with the same defaults mirrored in `script.js` for offline fallback). No build step required.

## How to edit (non-technical)
1) Open `content.json` in GitHub’s web editor (replace `<org>/<repo>`):  
   `https://github.com/<org>/<repo>/edit/main/content.json`
2) Make your text changes. Keep quotes and commas as-is; do not rename keys.
3) Click **Preview** to spot mistakes, then **Commit changes**.

Tips:
- Use the templates below to add items; copy/paste one block and edit values.
- Set links you don’t have yet to `"#"` and adjust the label to “(coming soon)”. The site will show a badge instead of a broken link.

### Templates
**Add a project**
```json
{
  "title": "Project title",
  "blurb": "2–3 sentence summary.",
  "lead": "Name(s)",
  "status": "Planned | In progress | Published",
  "pdf": "#",                // real URL or "#" for coming soon
  "pdfLabel": "Project overview (coming soon)"
}
```

**Add a team member**
```json
{
  "name": "Full name",
  "role": "Role/title",
  "bio": "1–2 sentence bio.",
  "email": "person@example.com",
  "affiliation": "Department, Institution"
}
```

## Local preview (optional)
1) Install Python (already on most systems).  
2) From the repo folder run: `python -m http.server 8000`  
3) Open `http://localhost:8000` in a browser to preview changes.

## Quality checks
- A GitHub Action (`.github/workflows/validate-content.yml`) parses `content.json` to catch syntax errors and lightly checks links/placeholders.
- Placeholders (`"#"` or `coming-soon`) show “Coming soon” badges on the site; replace with real URLs when ready.
