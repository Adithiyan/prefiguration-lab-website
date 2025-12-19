# Internal instructions

This guide explains how to edit the website content directly through GitHub, without touching any code beyond the JSON file.

1. Open `content.json` in the GitHub repo using the **"Edit"** button (https://github.com/<org>/<repo>/edit/main/content.json). Replace `<org>/<repo>` with the actual organization/user and repository name.
2. The file is organized into sections (`hero`, `projects`, `team`, `podcast`, `resources`, `contact`). Scroll to the section you want to update and change the text in plain English. Keep the JSON structure intact—don’t remove the braces or commas.
3. For lists (like `projects`, `team`, `resources`), copy an existing item block and adjust the values. Remove the whole block if you want to delete an entry.
4. After editing, use the **"Preview changes"** tab to make sure GitHub highlights no red/green warnings. Fix any stray quotation mark or comma if there are formatting issues.
5. When ready, add a short commit message (for example, “Update project descriptions”) and click **"Commit changes"** into the `main` branch.
6. GitHub automatically runs the validation workflow (`.github/workflows/validate-content.yml`). If there are errors, GitHub will show them in the Pull Request / commit status; fix any reported issues and commit again.
7. Wait a few moments after the commit—GitHub Pages will redeploy and the live site will show the new content.

To test locally before committing, run `python -m http.server 8000` inside the repo and open http://localhost:8000 in your browser. Any time you want to preview an edit, save the file locally, refresh the page, and repeat until it looks right.
