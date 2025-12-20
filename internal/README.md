# Internal instructions

This guide explains how to edit the website content via `content.json`, either on GitHub or locally. The site is content-driven: changes in `content.json` populate the page without editing HTML.

## Quick edits in GitHub
1. Open the repo: https://github.com/Adithiyan/prefiguration-lab-website
2. Navigate to `content.json` and click the pencil icon to edit.
3. Update the text inside the section you need (`hero`, `projects`, `team`, `podcast`, `resources`, `contact`).
4. Keep commas, quotes, braces, and brackets intact so the JSON stays valid.
5. Click **Preview changes** to check for errors.
6. Add a brief commit message (example: `Update team bios`) and click **Commit changes**.
7. Wait 1-2 minutes for GitHub Pages to rebuild, then refresh the live site.

## Content schema (what each section expects)
Use this as a checklist when editing or adding content.

### hero
- `title` (string)
- `tagline` (string)
- `body` (string)
- `ctaLabel` (string)
- `ctaHref` (string, usually a section ID like `#projects`)
- `focus` (array of strings; each item becomes a bullet)

### projects
- `projectsCopy` (string)
- `projects` (array of objects)
  - `title` (string)
  - `blurb` (string)
  - `lead` (string)
  - `status` (string)
  - `pdf` (string; URL or `#` for coming soon)
  - `pdfLabel` (string; link label or empty)

### team
- `teamCopy` (string)
- `team` (array of objects)
  - `id` (string; unique slug like `mathieu`)
  - `name` (string)
  - `role` (string)
  - `bio` (string)
  - `photo` (string; path like `images/filename.jpg`)
  - `linkedin` (string; full URL, optional)
  - `email` (string; email address, optional)

Notes:
- The first team member shows as the default active card.
- If `photo` is missing, the card shows a letter placeholder.

### podcast
- `podcastCopy` (string)
- `podcastMeta` (string)
- `podcast.embed` (string; embed URL)
- `podcast.links` (array of objects)
  - `label` (string)
  - `href` (string; use `#` for coming soon)

### resources
- `resourcesCopy` (string)
- `resources` (array of objects)
  - `title` (string)
  - `pdf` (string; URL or `#`)
  - `label` (string; link text or "Coming soon")

### contact
- `contactCopy` (string)
- `contact.email` (string)
- `contact.institution` (string; use `\n` for line breaks)

## Images
- Place files in `images/`.
- Reference them from `content.json` like `images/filename.jpg`.
- Use .jpg/.jpeg/.png formats.

## Working locally (optional)
### Prerequisites
- A text editor (VS Code recommended).
- Git installed (`git --version` should return a version).
- Python for a quick local server (optional).

### Steps
1. Clone: `git clone https://github.com/Adithiyan/prefiguration-lab-website.git`
2. Enter the folder: `cd prefiguration-lab-website`
3. Create a branch: `git checkout -b update-content`
4. Edit `content.json`.
5. Preview locally: `python -m http.server 8000` and open http://localhost:8000
6. Stage: `git add content.json`
7. Commit: `git commit -m "Update content"`
8. Pull latest: `git pull origin master` (replace `master` with `main` if needed)
9. Push: `git push origin HEAD`
10. Open a Pull Request and merge.

## Troubleshooting JSON errors
- Missing comma between fields.
- Trailing comma after the last field in an object/array.
- Missing quote around a string.
- Unmatched `{ }` or `[ ]`.

Tip: if the page looks empty after editing, validate the JSON and check for typos in section keys.
