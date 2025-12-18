const fs = require("fs");
const path = require("path");

const placeholder = (href) => !href || href === "#" || href.toLowerCase() === "coming-soon";
const contentPath = path.join(process.cwd(), "content.json");

function loadContent() {
  const raw = fs.readFileSync(contentPath, "utf8");
  return JSON.parse(raw);
}

function collectLinks(content) {
  const links = [];

  (content.projects || []).forEach((p, idx) => {
    links.push({ section: `projects[${idx}]`, label: p.title, href: p.pdf });
  });

  (content.resources || []).forEach((r, idx) => {
    links.push({ section: `resources[${idx}]`, label: r.title, href: r.pdf });
  });

  const podcastLinks = (content.podcast && content.podcast.links) || [];
  podcastLinks.forEach((l, idx) => {
    links.push({ section: `podcast.links[${idx}]`, label: l.label, href: l.href });
  });

  return links;
}

async function checkHttpLink(href) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch(href, { method: "HEAD", signal: controller.signal });
    return res.ok;
  } catch (error) {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

async function main() {
  const content = loadContent();
  const links = collectLinks(content);

  const warnings = [];
  const errors = [];

  for (const link of links) {
    const { section, label, href } = link;
    if (placeholder(href)) {
      continue;
    }

    if (/^https?:\/\//i.test(href)) {
      // Remote link
      const ok = await checkHttpLink(href);
      if (!ok) {
        errors.push(`[${section}] "${label}" appears broken: ${href}`);
      }
    } else {
      // Relative link
      const target = path.join(process.cwd(), href);
      if (!fs.existsSync(target)) {
        warnings.push(`[${section}] "${label}" points to missing file: ${href}`);
      }
    }
  }

  if (warnings.length) {
    console.warn("\nWarnings:");
    warnings.forEach((w) => console.warn(`- ${w}`));
  }

  if (errors.length) {
    console.error("\nErrors:");
    errors.forEach((e) => console.error(`- ${e}`));
    process.exit(1);
  }

  console.log("content.json is valid. Links look good.");
}

main().catch((error) => {
  console.error("Validation failed:", error.message);
  process.exit(1);
});
