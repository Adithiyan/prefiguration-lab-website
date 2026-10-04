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
Working locally lets you preview your changes in the browser **before** they go live.

### One-time setup (Windows)
Run these in PowerShell. Close and reopen PowerShell (or restart VS Code) after installing, so the new commands are recognized.

1. Install the tools:
   ```powershell
   winget install -e --id Microsoft.VisualStudioCode
   winget install -e --id Git.Git
   winget install -e --id OpenJS.NodeJS.LTS
   ```
2. Tell Git who you are:
   ```powershell
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
   ```
3. Allow PowerShell to run tools such as `npx` (only needed once):
   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
   ```
   If this is blocked on your computer, use `npx.cmd` instead of `npx` in the steps below.
4. Download the site to your computer and open it in VS Code:
   ```powershell
   cd ~\Documents
   git clone https://github.com/Adithiyan/prefiguration-lab-website.git
   cd prefiguration-lab-website
   code .
   ```

### Every time you edit
Open the project in VS Code, then open a terminal with **Terminal → New Terminal**. It starts in the project folder.

1. **Get the latest version** (in case someone else changed the site):
   ```powershell
   git pull
   ```
2. **Start the local server:**
   ```powershell
   npx serve
   ```
   Open the address it prints (usually http://localhost:3000) in your browser.
   - Why a server? The page loads its text from `content.json`, and browsers block that when you just double-click `index.html`. The page then shows built-in default text instead of your edits.
   - The server keeps running in that terminal. Open a second terminal (**+** icon in the terminal panel) for the Git commands below.
   - Alternative: install the VS Code extension **Live Server** and press `Alt+L` then `Alt+O`. It refreshes the browser automatically every time you save.
3. **Edit and check:** edit `content.json`, save (`Ctrl+S`), then refresh the browser.
   If the page looks empty or shows default text, the JSON has an error. See *Troubleshooting* below.
4. **Stop the server** when finished: click in its terminal and press `Ctrl+C`.

### Save your changes to GitHub
Run these three commands in the terminal, in this order:

1. **`git add`**: choose which changed files to include.
   ```powershell
   git add content.json
   ```
   Use `git add .` to include every changed file (for example, new photos in `images/`).
   Run `git status` at any time to see what has changed and what is included.
2. **`git commit -m "..."`**: save a snapshot with a short message describing the change.
   ```powershell
   git commit -m "Update team bios"
   ```
   Write the message between the quotes. Keep it short and specific.
3. **`git push`**: send your commits to GitHub.
   ```powershell
   git push
   ```
   The first time, a window asks you to sign in to GitHub. Choose **Sign in with your browser**.

GitHub Pages republishes the live site 1–2 minutes after the push.

You can do the same three steps without commands from VS Code's **Source Control** panel (left bar): click **+** next to a file (add), type a message and click **Commit**, then click **Sync Changes** (push).

### Undo the last commit (if something breaks)
```powershell
git revert --no-edit HEAD
git push
```
This adds a new commit that cancels the previous one. Nothing is deleted from history.

## Troubleshooting JSON errors
- Missing comma between fields.
- Trailing comma after the last field in an object/array.
- Missing quote around a string.
- Unmatched `{ }` or `[ ]`.

Tip: if the page looks empty after editing, validate the JSON and check for typos in section keys.
