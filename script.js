const defaultContent = {
  hero: {
    title: "Prefiguration Lab",
    tagline:
      "A research collective exploring how organizations can prefigure more sustainable, just futures.",
    body:
      "We study practices, technologies, and forms of organizing that anticipate the world we want to build - from AI and surveillance to sustainability and social justice.",
    ctaLabel: "View our projects",
    ctaHref: "#projects",
    focus: [
      "Clearview AI and surveillance capitalism",
      "Sustainability and organizational change",
      "Emerging projects and collaborations",
    ],
  },
  projectsCopy:
    "Our research projects explore how organizational practices shape possible futures.",
  projects: [
    {
      title: "Clearview AI & Surveillance",
      blurb:
        "This project examines the implications of facial recognition technologies in everyday organizational contexts, focusing on power, consent, and accountability.",
      lead: "Prof. [Name]",
      status: "In progress",
      pdf: "docs/clearview-ai-project.pdf",
      pdfLabel: "Download project overview (PDF)",
    },
    {
      title: "Sustainability & Prefiguration",
      blurb:
        "We explore how organizations experiment with sustainable practices today to prefigure low-carbon, socially just futures.",
      lead: "[Student / Prof Name]",
      status: "In progress",
      pdf: "docs/sustainability-project.pdf",
      pdfLabel: "Download project overview (PDF)",
    },
    {
      title: "[Future Project Title]",
      blurb:
        "Short description of a future or third project goes here. You can update this text once the project details are confirmed.",
      lead: "[Name]",
      status: "Planned",
      pdf: "",
      pdfLabel: "",
    },
  ],
  teamCopy:
    "A small research collective led by Prof. Mathieu Bouchard, with student researchers exploring activism, technology, and sustainable futures.",
  team: [
    {
      id: "mathieu",
      name: "Prof. Mathieu Bouchard",
      role: "Principal Investigator",
      bio:
        "Mathieu Bouchard is an assistant professor of strategy and organization at the University of Ottawa's Telfer School of Management. He studies activism for sustainable policymaking out of a belief that if we want to create a better future, we need to act in the present.",
      photo: "images/1725373874280.jpeg",
      linkedin: "https://www.linkedin.com/in/mathieubcd/",
      email: "professor@example.com",
    },
    {
      id: "adi",
      name: "Adithiyan Rajan",
      role: "Graduate Student",
      bio:
        "Adithiyan Rajan is a Computer Science graduate student who specializes in transforming cutting-edge AI and Machine Learning research into practical, high-impact solutions for areas such as cybersecurity and real-time detection.",
      photo: "images/1736718621383.jpeg",
      linkedin: "https://www.linkedin.com/in/adithiyanrajan/",
      email: "student@example.com",
    },
    {
      id: "phuong",
      name: "Phuong Tran",
      role: "Student Researcher",
      bio:
        "Phuong Tran is a Business Technology Management student at the Telfer School of Management, exploring the intersection of emerging technologies, digital policy, and user-centric design in research and practice.",
      photo: "images/profile.jpg",
      linkedin: "https://www.linkedin.com/in/phuongtran0204/",
      email: "student@example.com",
    },
    {
      id: "camila",
      name: "Camila Estrada",
      role: "Student Researcher",
      bio:
        "Camila Estrada is an accounting student at the University of Ottawa involved in research on cycling activism, with an interest in how people are motivated to create change in their communities.",
      photo: "images/1758660234229.png",
      linkedin: "https://www.linkedin.com/in/camila-estrada-523s/",
      email: "student@example.com",
    },
    {
      id: "hamza",
      name: "Hamza",
      role: "Student Researcher",
      bio: "Bio coming soon.",
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
      {
        label: "Prefiguration Lab on Spotify (coming soon)",
        href: "#",
      },
      {
        label: "Prefiguration Lab on Apple Podcasts (coming soon)",
        href: "#",
      },
      {
        label: "RSS feed (coming soon)",
        href: "#",
      },
    ],
  },
  resourcesCopy:
    "Reports, working papers, syllabi, and other materials from the Prefiguration Lab.",
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
    const merged = {
      ...defaultContent,
      ...content,
      hero: { ...defaultContent.hero, ...content.hero },
      podcast: { ...defaultContent.podcast, ...content.podcast },
      contact: { ...defaultContent.contact, ...content.contact },
    };
    renderContent(merged);
  } catch (error) {
    console.warn("Using default content because content.json could not be loaded.", error);
    renderContent(defaultContent);
  }
}

function renderContent(content) {
  const hero = content.hero || defaultContent.hero;
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
    el.textContent = label || "";
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
    title.textContent = project.title || "";

    const blurb = document.createElement("p");
    blurb.textContent = project.blurb || "";

    article.appendChild(title);
    article.appendChild(blurb);

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
  const panel = document.getElementById("team-detail-panel");
  if (!grid || !panel) return;
  grid.innerHTML = "";
  panel.innerHTML = "";

  const members = team.map((member, index) => ({
    ...member,
    id: member.id || slugify(member.name || `member-${index + 1}`),
  }));

  members.forEach((member, index) => {
    const card = document.createElement("article");
    card.className = "card team-person-card";
    if (index === 0) card.classList.add("active");
    card.setAttribute("data-person", member.id);

    const inner = document.createElement("div");
    inner.className = "team-person-inner";

    const photoBox = document.createElement("div");
    photoBox.className = "team-person-photo-box";
    if (member.photo) {
      const img = document.createElement("img");
      img.src = member.photo;
      img.alt = `Portrait of ${member.name || "team member"}`;
      photoBox.appendChild(img);
    } else {
      photoBox.classList.add("team-person-photo-placeholder");
      const span = document.createElement("span");
      span.textContent = (member.name || "T").trim().charAt(0).toUpperCase();
      photoBox.appendChild(span);
    }

    const text = document.createElement("div");
    text.className = "team-person-text";

    const name = document.createElement("h3");
    name.textContent = member.name || "";

    const role = document.createElement("p");
    role.className = "role";
    role.textContent = member.role || "";

    text.appendChild(name);
    text.appendChild(role);
    inner.appendChild(photoBox);
    inner.appendChild(text);
    card.appendChild(inner);
    grid.appendChild(card);

    const detail = document.createElement("div");
    detail.className = "team-detail";
    detail.setAttribute("data-person", member.id);
    if (index !== 0) {
      detail.hidden = true;
    }

    const detailMain = document.createElement("div");
    detailMain.className = "team-detail-main";

    const detailPhoto = document.createElement("div");
    detailPhoto.className = "team-detail-photo";
    if (member.photo) {
      const img = document.createElement("img");
      img.src = member.photo;
      img.alt = `Portrait of ${member.name || "team member"}`;
      detailPhoto.appendChild(img);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "team-person-photo-placeholder";
      const span = document.createElement("span");
      span.textContent = (member.name || "T").trim().charAt(0).toUpperCase();
      placeholder.appendChild(span);
      detailPhoto.appendChild(placeholder);
    }

    const detailText = document.createElement("div");
    detailText.className = "team-detail-text";

    const detailName = document.createElement("h3");
    detailName.textContent = member.name || "";

    const detailBio = document.createElement("p");
    detailBio.textContent = member.bio || "";

    detailText.appendChild(detailName);
    detailText.appendChild(detailBio);
    detailMain.appendChild(detailPhoto);
    detailMain.appendChild(detailText);
    detail.appendChild(detailMain);

    const actions = document.createElement("div");
    actions.className = "team-detail-actions";

    if (member.linkedin) {
      actions.appendChild(
        createIconButton(
          member.linkedin,
          "linkedin",
          `Connect with ${member.name} on LinkedIn`,
          "LinkedIn"
        )
      );
    }

    if (member.scholar) {
      actions.appendChild(
        createIconButton(
          member.scholar,
          "scholar",
          `View ${member.name}'s Google Scholar profile`,
          "Google Scholar"
        )
      );
    }

    if (member.website) {
      actions.appendChild(
        createIconButton(
          member.website,
          "website",
          `Visit ${member.name}'s profile page`,
          "uOttawa profile"
        )
      );
    }

    if (member.email) {
      actions.appendChild(
        createIconButton(
          `mailto:${member.email}`,
          "email",
          `Email ${member.name}`,
          "Email",
          { newTab: false }
        )
      );
    }

    detail.appendChild(actions);
    panel.appendChild(detail);
  });

  setupTeamInteractions();
}

function setupTeamInteractions() {
  const personCards = document.querySelectorAll(".team-person-card");
  const detailBlocks = document.querySelectorAll(".team-detail");

  if (!personCards.length || !detailBlocks.length) return;

  personCards.forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-person");
      if (!id) return;

      personCards.forEach((item) => item.classList.remove("active"));
      card.classList.add("active");

      detailBlocks.forEach((block) => {
        block.hidden = block.getAttribute("data-person") !== id;
      });
    });
  });
}

function setPodcast(podcast) {
  const iframe = document.getElementById("podcast-embed");
  if (iframe) {
    const embed = podcast && podcast.embed ? podcast.embed : defaultContent.podcast.embed;
    iframe.src = embed;
  }
  const list = document.getElementById("podcast-links");
  if (!list) return;
  list.innerHTML = "";
  const links = podcast && Array.isArray(podcast.links) ? podcast.links : [];
  links.forEach((linkItem) => {
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
    title.textContent = resource.title || "";

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
  const button = document.getElementById("contact-button");
  if (button && contact && contact.email) {
    button.href = `mailto:${contact.email}`;
    button.textContent = contact.buttonLabel || "Email the lab";
  }
  const institutionEl = document.getElementById("contact-institution");
  if (institutionEl && contact && contact.institution) {
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

function createIconButton(href, className, ariaLabel, label, options = {}) {
  const button = document.createElement("a");
  button.className = `team-icon-btn ${className}`;
  button.href = href;
  button.setAttribute("aria-label", ariaLabel);
  button.textContent = label;

  if (options.newTab !== false) {
    button.target = "_blank";
    button.rel = "noopener noreferrer";
  }
  return button;
}

function isPlaceholder(href) {
  return !href || href === "#" || href.toLowerCase() === "coming-soon";
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function initPage() {
  setupNavToggle();
  setCurrentYear();
  loadContent();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPage);
} else {
  initPage();
}
