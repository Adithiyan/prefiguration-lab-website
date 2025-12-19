# Internal instructions

This guide explains how to edit the website content through GitHub, and how to work locally if you need to edit the JSON, HTML, CSS, or JS.


## Editing through GitHub
1. Open the repo page: https://github.com/Adithiyan/prefiguration-lab-website, navigate to `content.json`, and click the pencil icon in the top-right corner to edit.
2. Scroll to the section you want to update (`hero`, `projects`, `team`, `podcast`, `resources`, `contact`) and write the new text. Leave the curly braces, brackets, and commas untouched so the JSON stays valid.
3. To add a new project or team member, copy an existing entry (the whole block from `{` to `}`), paste it below, and edit the fields. Delete the entire block if you want to remove an entry.
4. Click the **Preview changes** tab to make sure GitHub doesn’t highlight any errors. Fix any stray quotes or commas before committing.
5. When everything looks good, add a brief commit message like `Update project descriptions` and click **Commit changes** to push directly to `main`.
6. GitHub automatically runs the validation workflow in `.github/workflows/validate-content.yml`. If an error appears in the status, return to `content.json`, fix it, and commit again.
7. After the commit completes, wait a minute for GitHub Pages to rebuild, then refresh the live site to see the edits.

## Working locally

### Prerequisites (local editing)
- Install Visual Studio Code (https://code.visualstudio.com/) or another plain-text editor you are comfortable with.
- Ensure `node` or similar runtime is not needed for this static repo, but you still need a terminal:
  - On macOS/Linux use Terminal, on Windows use PowerShell or Windows Terminal.
- Have Git installed and configured (`git --version` should report a version). You can use VS Code’s terminal or your system terminal.

1. Open VS Code and its integrated terminal, or launch the terminal of your choice.
2. Run `git clone https://github.com/Adithiyan/prefiguration-lab-website.git` to copy the repo locally.
3. Move into the directory: `cd prefiguration-lab-website`.
4. Create a branch for your work: `git checkout -b update-team`.
5. Open `content.json` (or any HTML/JS/CSS file) in VS Code and edit the sections you need.
6. Preview changes locally: `python -m http.server 8000` and visit http://localhost:8000 in your browser. Save files and refresh to see updates.
7. Stage changes: `git add content.json` (or `git add .` to include all modified files).
8. Commit: `git commit -m "Describe your change"`.
9. Sync with remote: `git pull origin master` (replace `master` with `main` if that’s the branch name). Resolve conflicts if Git reports any, then `git add`/`git commit` those resolutions.
10. Push your branch: `git push origin HEAD`.
11. When ready to merge, open a Pull Request on GitHub to merge into `master`. Once merged, GitHub Pages will deploy the update.

Editing through GitHub (first section) is best for quick content tweaks, while the local flow is useful when you also want to adjust styling or scripts.
