// Default site content for local fallback
const defaultContent = {
  hero: {
    eyebrow: "Research Collective",
    title: "Prefiguration Lab",
    tagline: "A research collective exploring how organizations can prefigure more sustainable, just futures.",
    body: "We study practices, technologies, and forms of organizing that anticipate the world we want to build.",
    ctaLabel: "View Our Projects",
    ctaHref: "#projects",
    focus: [
      "Clearview AI and surveillance capitalism",
      "Sustainability and organizational change",
      "Emerging projects and collaborations",
    ],
  },
  projectsCopy: "Our research projects explore how organizational practices shape possible futures.",
  projects: [
    {
      title: "Clearview AI & Surveillance",
      blurb:
        "We examine the implications of facial recognition technologies in everyday organizational contexts, focusing on power, consent, and accountability.",
      lead: "Prof. Name",
      status: "In progress",
      pdf: "#",
      pdfLabel: "Project overview (coming soon)",
    },
    {
      title: "Sustainability & Prefiguration",
      blurb:
        "We explore how organizations experiment with sustainable practices today to prefigure low-carbon, socially just futures.",
      lead: "Student / Prof Name",
      status: "In progress",
      pdf: "#",
      pdfLabel: "Project overview (coming soon)",
    },
    {
      title: "Future Project Title",
      blurb: "Short description of a future or third project goes here.",
      lead: "Name",
      status: "Planned",
      pdf: "",
      pdfLabel: "",
    },
  ],
  teamCopy: "The Prefiguration Lab brings together a professor and student researchers.",
  team: [
    {
      name: "Prof. Name",
      role: "Principal Investigator",
      bio: "Research interests, department at the University of Ottawa, and focus within the Prefiguration Lab.",
      email: "professor@example.com",
      affiliation: "Department, University of Ottawa",
    },
    {
      name: "Student Name 1",
      role: "Graduate / Undergraduate Researcher",
      bio: "Works on the Clearview AI project and supports data analysis and literature review.",
    },
    {
      name: "Student Name 2",
      role: "Research Assistant",
      bio: "Focuses on sustainability and organizational change projects.",
    },
    {
      name: "Student Name 3",
      role: "Research Assistant",
      bio: "Supports qualitative interviews, archives, and project responsibilities.",
    },
  ],
  podcastCopy:
    "The Prefiguration Lab podcast hosts conversations about organizations, power, and possible futures.",
  podcastMeta:
    "If your podcast is hosted elsewhere, you can replace this embed code or link to the external site.",
  podcast: {
    embed: "https://open.spotify.com/embed/show/PLACEHOLDER",
    links: [
      {
        label: "Example: Talking About Organizations",
        href: "https://www.talkingaboutorganizations.com/",
      },
      { label: "Prefiguration Lab on Spotify (coming soon)", href: "#" },
      { label: "Prefiguration Lab on Apple Podcasts (coming soon)", href: "#" },
      { label: "RSS feed (coming soon)", href: "#" },
    ],
  },
  resourcesCopy: "Reports, working papers, syllabi, and other materials from the Prefiguration Lab.",
  resources: [
    {
      title: "Lab Overview",
      pdf: "#",
      label: "PDF (coming soon)",
    },
    {
      title: "Clearview AI project brief",
      pdf: "#",
      label: "PDF (coming soon)",
    },
    {
      title: "Sustainability & prefiguration reading list",
      pdf: "#",
      label: "PDF (coming soon)",
    },
  ],
  contactCopy:
    "To learn more about Prefiguration Lab or explore collaboration opportunities, please get in touch.",
  contact: {
    email: "professor@example.com",
    institution: "Department Name\nUniversity of Ottawa, Ottawa, ON, Canada",
  },
};

async function loadContent() {
  try {
    const response = await fetch("content.json", { cache: "no-cache" });
    if (!response.ok) {
      throw new Error("Content file not found");
    }
    const content = await response.json();
    renderContent({ ...defaultContent, ...content });
  } catch (error) {
    console.warn("Using default content because content.json could not be loaded.", error);
    renderContent(defaultContent);
  }
}

function renderContent(content) {
  const hero = content.hero;
  setText("hero-eyebrow", hero.eyebrow);
  setText("hero-title", hero.title);
  setText("hero-tagline", hero.tagline);
  setText("hero-body", hero.body);
  setLink("hero-cta", hero.ctaHref, hero.ctaLabel);
  renderList("focus-list", hero.focus);

  setText("projects-copy", content.projectsCopy);
  renderProjects(content.projects);

  setText("team-copy", content.teamCopy);
  renderTeam(content.team);

  setText("podcast-copy", content.podcastCopy);
  setText("podcast-meta", content.podcastMeta);
  setPodcast(content.podcast);

  setText("resources-copy", content.resourcesCopy);
  renderResources(content.resources);

  setText("contact-copy", content.contactCopy);
  setContact(content.contact);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el && typeof value === "string") {
    el.textContent = value;
  }
}

function setLink(id, href, label) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = label;
    el.setAttribute("href", href || "#");
  }
}

function renderList(id, items = []) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    el.appendChild(li);
  });
}

function renderProjects(projects = []) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = "";
  projects.forEach((project) => {
    const article = document.createElement("article");
    article.className = "card project-card";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const blurb = document.createElement("p");
    blurb.textContent = project.blurb;

    const meta = document.createElement("p");
    meta.className = "meta";
    meta.innerHTML = `<strong>Project lead:</strong> ${project.lead || "TBD"}<br /><strong>Status:</strong> ${project.status || "In progress"}`;

    article.appendChild(title);
    article.appendChild(blurb);
    article.appendChild(meta);

    if (project.pdf && !isPlaceholder(project.pdf)) {
      const link = document.createElement("a");
      link.href = project.pdf;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "link";
      link.textContent = project.pdfLabel || "Download (PDF)";
      article.appendChild(link);
    } else {
      const badge = document.createElement("span");
      badge.className = "badge badge-muted";
      badge.textContent = project.pdfLabel || "More details coming soon";
      article.appendChild(badge);
    }

    grid.appendChild(article);
  });
}

function renderTeam(team = []) {
  const grid = document.getElementById("team-grid");
  if (!grid) return;
  grid.innerHTML = "";
  team.forEach((member) => {
    const card = document.createElement("article");
    card.className = "card team-card";

    const name = document.createElement("h3");
    name.textContent = member.name;

    const role = document.createElement("p");
    role.className = "role";
    role.textContent = member.role || "";

    const bio = document.createElement("p");
    bio.textContent = member.bio || "";

    card.appendChild(name);
    card.appendChild(role);
    card.appendChild(bio);

    if (member.email || member.affiliation) {
      const meta = document.createElement("p");
      meta.className = "meta";
      meta.innerHTML = [
        member.email ? `<a href="mailto:${member.email}" class="link">${member.email}</a>` : "",
        member.affiliation || "",
      ]
        .filter(Boolean)
        .join("<br />");
      card.appendChild(meta);
    }

    grid.appendChild(card);
  });
}

function setPodcast(podcast) {
  const iframe = document.getElementById("podcast-embed");
  if (iframe) {
    iframe.src = podcast?.embed || defaultContent.podcast.embed;
  }
  const list = document.getElementById("podcast-links");
  if (!list) return;
  list.innerHTML = "";
  (podcast?.links || []).forEach((linkItem) => {
    const li = document.createElement("li");
    if (linkItem.href && !isPlaceholder(linkItem.href)) {
      const link = document.createElement("a");
      link.href = linkItem.href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = linkItem.label;
      li.appendChild(link);
    } else {
      const badge = document.createElement("span");
      badge.className = "badge badge-muted";
      badge.textContent = linkItem.label || "Link coming soon";
      li.appendChild(badge);
    }
    list.appendChild(li);
  });
}

function renderResources(resources = []) {
  const list = document.getElementById("resource-list");
  if (!list) return;
  list.innerHTML = "";
  resources.forEach((resource) => {
    const li = document.createElement("li");
    const title = document.createElement("strong");
    title.textContent = resource.title;

    li.appendChild(title);

    if (resource.pdf && !isPlaceholder(resource.pdf)) {
      const link = document.createElement("a");
      link.href = resource.pdf;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "link";
      link.textContent = resource.label || "PDF";
      li.appendChild(link);
    } else {
      const badge = document.createElement("span");
      badge.className = "badge badge-muted";
      badge.textContent = resource.label || "Coming soon";
      li.appendChild(badge);
    }

    list.appendChild(li);
  });
}

function setContact(contact) {
  const emailEl = document.getElementById("contact-email");
  if (emailEl && contact?.email) {
    emailEl.href = `mailto:${contact.email}`;
    emailEl.textContent = contact.email;
  }
  const institutionEl = document.getElementById("contact-institution");
  if (institutionEl && contact?.institution) {
    institutionEl.innerHTML = `<strong>Institution:</strong><br />${contact.institution.replace(/\n/g, "<br />")}`;
  }
}

function setupNavToggle() {
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");

  if (!navToggle || !mainNav) return;

  const closeNav = () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });
}

function setCurrentYear() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

function isPlaceholder(href) {
  return !href || href === "#" || href.toLowerCase() === "coming-soon";
}

document.addEventListener("DOMContentLoaded", () => {
  setupNavToggle();
  setCurrentYear();
  loadContent();
});
