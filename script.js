// Lucide icons
const CATEGORY_ICONS = {
  health: `<svg viewBox="0 0 24 24" aria-hidden="true" class="lucide lucide-heart-pulse"><path d="M21 8.5c0-2-1.5-4-4-4-1.6 0-2.8.7-3.5 1.5-.7-.8-1.9-1.5-3.5-1.5-2.5 0-4 2-4 4 0 4 7.5 9 7.5 9S21 12.5 21 8.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 10h2l1-2 2 4 1-2h2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`, // heart-pulse
  education: `<svg viewBox="0 0 24 24" aria-hidden="true" class="lucide lucide-book-marked"><path d="M6 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14l-5-3-5 3Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 7h8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M12 10V4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`, // book-marked
  transportation: `<svg viewBox="0 0 24 24" aria-hidden="true" class="lucide lucide-bike"><circle cx="5.5" cy="17.5" r="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="18.5" cy="17.5" r="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5.5 14.5h6l-2-4H8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="m18.5 14.5-3-6h-3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M12.5 10.5 14 14.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`, // bike
  technology: `<svg viewBox="0 0 24 24" aria-hidden="true" class="lucide lucide-cpu"><rect x="7" y="7" width="10" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 1v2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 21v2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15 1v2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15 21v2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 9h2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 15h2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M19 9h2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M19 15h2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 9h6v6H9z" fill="none" stroke="currentColor" stroke-width="2"/></svg>`, // cpu
};

const CATEGORY_LABELS = {
  health: "Health",
  education: "Education",
  transportation: "Transportation",
  technology: "Technology",
};

const defaultContent = {
  hero: {
    title: "Prefiguration Lab",
    tagline:
      "A research collective exploring how organizations can prefigure more sustainable, just futures.",
    body:
      "We study practices, technologies, and forms of organizing that anticipate the world we want to build - from AI and surveillance to sustainability and social justice.",
    ctaLabel: "View our projects",
    ctaHref: "#projects",
    themes: [
      { label: "Health", category: "health" },
      { label: "Education", category: "education" },
      { label: "Transportation", category: "transportation" },
      { label: "Technology", category: "technology" },
    ],
  },
  projectsCopy:
    "Our research projects explore how organizational practices shape possible futures.",
  projects: [
    {
      title: "Clearview AI & Surveillance",
      blurb:
        "This project examines the implications of facial recognition technologies in everyday organizational contexts, focusing on power, consent, and accountability.",
      category: "technology",
      supporters: ["SSHRC"],
      pdf: "docs/clearview-ai-project.pdf",
      pdfLabel: "Download project overview (PDF)",
    },
    {
      title: "Sustainability & Prefiguration",
      blurb:
        "We explore how organizations experiment with sustainable practices today to prefigure low-carbon, socially just futures.",
      category: "education",
      supporters: ["Telfer", "Green Academy"],
      pdf: "docs/sustainability-project.pdf",
      pdfLabel: "Download project overview (PDF)",
    },
    {
      title: "[Future Project Title]",
      blurb:
        "Short description of a future or third project goes here. You can update this text once the project details are confirmed.",
      category: "health",
      supporters: ["FRQSC"],
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
  collaboratorsCopy: "Partners and peers we work with across projects and research initiatives.",
  collaborators: [
    { id: "collab-1", name: "Collaborator one", role: "Role placeholder", bio: "Bio coming soon.", website: "#", linkedin: "#" },
    { id: "collab-2", name: "Collaborator two", role: "Role placeholder", bio: "Bio coming soon.", website: "#", linkedin: "#" },
    { id: "collab-3", name: "Collaborator three", role: "Role placeholder", bio: "Bio coming soon.", website: "#", linkedin: "#" },
    { id: "collab-4", name: "Collaborator four", role: "Role placeholder", bio: "Bio coming soon.", website: "#", linkedin: "#" },
    { id: "collab-5", name: "Collaborator five", role: "Role placeholder", bio: "Bio coming soon.", website: "#", linkedin: "#" },
    { id: "collab-6", name: "Collaborator six", role: "Role placeholder", bio: "Bio coming soon.", website: "#", linkedin: "#" },
    { id: "collab-7", name: "Collaborator seven", role: "Role placeholder", bio: "Bio coming soon.", website: "#", linkedin: "#" },
    { id: "collab-8", name: "Collaborator eight", role: "Role placeholder", bio: "Bio coming soon.", website: "#", linkedin: "#" },
    { id: "collab-9", name: "Collaborator nine", role: "Role placeholder", bio: "Bio coming soon.", website: "#", linkedin: "#" },
  ],
  podcastCopy:
    "The vivre sans voiture / living without a car podcast hosts conversations about activism for healthy and sustainable urban transportation.",
  supportersCopy: "Supported by grants and partnerships that fund our research.",
  supporters: [
    { name: "FRQSC", url: "#" },
    { name: "SSHRC", url: "#" },
    { name: "Telfer", url: "#" },
    { name: "uOttawa", url: "#" },
    { name: "Green Academy", url: "#" },
  ],
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
    const text = await response.text();
    const content = safeParseJSON(text);
    if (!content || typeof content !== "object") {
      throw new Error("Content file could not be parsed");
    }
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

function safeParseJSON(text) {
  try {
    const cleaned = String(text || "").replace(/^\uFEFF/, "");
    return JSON.parse(cleaned);
  } catch (error) {
    console.warn("Failed to parse JSON content", error);
    return null;
  }
}

function renderContent(content) {
  const hero = content.hero || defaultContent.hero;
  setText("hero-title", hero.title);
  setText("hero-tagline", hero.tagline);
  setText("hero-body", hero.body);
  setLink("hero-cta", hero.ctaHref, hero.ctaLabel);
  renderThemes(hero.themes);

  setText("projects-copy", content.projectsCopy);
  renderProjects(content.projects);

  setText("team-copy", content.teamCopy);
  renderTeam(content.team);

  setText("collaborators-copy", content.collaboratorsCopy);
  renderCollaborators(content.collaborators);

  setText("supporters-copy", content.supportersCopy);
  renderSupporters(content.supporters);

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

function renderThemes(themes = []) {
  const list = document.getElementById("theme-list");
  if (!list) return;
  list.innerHTML = "";
  (themes || []).forEach((theme) => {
    const li = document.createElement("li");
    li.className = "theme-item";

    const icon = document.createElement("span");
    icon.className = `theme-icon theme-icon--${theme.category || "default"}`;
    icon.innerHTML = CATEGORY_ICONS[theme.category] || "";

    const label = document.createElement("span");
    label.textContent = theme.label || "";

    li.appendChild(icon);
    li.appendChild(label);
    list.appendChild(li);
  });
}

function renderProjects(projects = []) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = "";
  if (!Array.isArray(projects) || projects.length === 0) {
    const empty = document.createElement("p");
    empty.className = "projects-empty";
    empty.textContent = "Projects coming soon.";
    grid.appendChild(empty);
    return;
  }
  projects.forEach((project) => {
    const hasPdf = project.pdf && !isPlaceholder(project.pdf);
    const cardTag = hasPdf ? "a" : "article";
    const card = document.createElement(cardTag);
    card.className =
      "card project-card shadow-sm border border-slate-200 rounded-xl bg-white hover:shadow-lg transition hover:-translate-y-0.5";
    if (project.category) {
      card.classList.add(`project-card--${project.category}`);
    }
    if (hasPdf) {
      card.href = project.pdf;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    const head = document.createElement("div");
    head.className = "project-head";
    const title = document.createElement("h3");
    title.textContent = project.title || "";
    head.appendChild(title);

    const blurb = document.createElement("p");
    blurb.textContent = project.blurb || "";

      card.appendChild(head);
      if (project.blurb) {
        card.appendChild(blurb);
      }

      const authorsRow = createTextLine("Authors", formatList(project.authors));
      if (authorsRow) card.appendChild(authorsRow);

      const studentsRow = createTextLine(
        "Student researchers",
        formatList(project.studentResearchers)
      );
      if (studentsRow) card.appendChild(studentsRow);

    const orgRow = createOrgRow(project.organizations);
    if (orgRow) card.appendChild(orgRow);

    const footer = document.createElement("div");
    footer.className = "project-footer";

    if (hasPdf) {
      const action =
        cardTag === "a" ? document.createElement("span") : document.createElement("a");
      action.className = "project-action";
      action.textContent = project.pdfLabel || "Open PDF";
      if (cardTag !== "a") {
        action.href = project.pdf;
        action.target = "_blank";
        action.rel = "noopener noreferrer";
      }
      footer.appendChild(action);
    } else {
      const badge = document.createElement("span");
      badge.className = "badge badge-muted";
      badge.textContent = project.pdfLabel || "More details coming soon";
      footer.appendChild(badge);
    }

    if (project.supporters && project.supporters.length) {
      const supporters = document.createElement("div");
      supporters.className = "project-supporters";
      const supporterList = project.supporters || [];
      const topSupporters = supporterList.slice(0, 3);
      topSupporters.forEach((supporter) => {
        const tag = document.createElement("span");
        tag.className = "supporter-badge";
        tag.textContent = supporter;
        supporters.appendChild(tag);
      });
      if (supporterList.length > topSupporters.length) {
        const remaining = supporterList.length - topSupporters.length;
        const more = document.createElement("span");
        more.className = "supporter-badge";
        more.textContent = `+${remaining} more`;
        supporters.appendChild(more);
      }
      footer.appendChild(supporters);
    }

    if (project.category) {
      const pill = document.createElement("span");
      pill.className = "project-category-pill project-category-pill--footer";

      const iconWrap = document.createElement("span");
      iconWrap.className = `project-category-icon project-category-icon--${project.category}`;
      iconWrap.innerHTML = CATEGORY_ICONS[project.category] || "";
      pill.appendChild(iconWrap);

      footer.appendChild(pill);
    }
card.appendChild(footer);
    grid.appendChild(card);
  });
}

function createTextLine(label, text) {
  if (!text || String(text).trim().toLowerCase() === "coming soon") return null;
  const row = document.createElement("div");
  row.className = "project-line";
  const labelEl = document.createElement("span");
  labelEl.className = "project-line-label";
  labelEl.textContent = `${label}:`;
  const textEl = document.createElement("span");
  textEl.className = "project-line-text";
  textEl.textContent = text || "Coming soon";
  row.appendChild(labelEl);
  row.appendChild(textEl);
  return row;
}

function createOrgRow(orgs) {
  const hasOrgs = Array.isArray(orgs) && orgs.length;
  if (!hasOrgs) return null;
  const names = orgs
    .map((item) => (typeof item === "string" ? item : item?.name || ""))
    .map((s) => String(s).trim())
    .filter(Boolean);
  if (!names.length) return null;
  const row = document.createElement("div");
  row.className = "project-line";

  const label = document.createElement("span");
  label.className = "project-line-label";
  label.textContent = "Supporters:";
  row.appendChild(label);

  const list = document.createElement("span");
  list.className = "project-line-text";

  list.textContent = names.join(", ");

  row.appendChild(list);
  return row;
}

function formatList(value) {
  if (Array.isArray(value)) {
    const cleaned = value
      .map((item) =>
        typeof item === "string" ? item : item?.name || item?.id || ""
      )
      .map((s) => String(s).trim())
      .filter(Boolean);
    return cleaned.length ? cleaned.join(", ") : "Coming soon";
  }
  if (typeof value === "string" && value.trim().length) {
    return value.trim();
  }
  return "Coming soon";
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
    detail.id = `person-${member.id}`;
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

function renderCollaborators(collaborators = []) {
  const grid = document.getElementById("collaborators-grid");
  const panel = document.getElementById("collaborators-detail-panel");
  if (!grid || !panel) return;
  grid.innerHTML = "";
  panel.innerHTML = "";

  const items =
    collaborators && collaborators.length ? collaborators : defaultContent.collaborators;

  const members = items.map((member, index) => ({
    ...member,
    id: member.id || slugify(member.name || `collaborator-${index + 1}`),
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
      img.alt = `Portrait of ${member.name || "collaborator"}`;
      photoBox.appendChild(img);
    } else {
      photoBox.classList.add("team-person-photo-placeholder");
      const span = document.createElement("span");
      span.textContent = (member.name || "C").trim().charAt(0).toUpperCase();
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
    detail.id = `person-${member.id}`;
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
      img.alt = `Portrait of ${member.name || "collaborator"}`;
      detailPhoto.appendChild(img);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "team-person-photo-placeholder";
      const span = document.createElement("span");
      span.textContent = (member.name || "C").trim().charAt(0).toUpperCase();
      placeholder.appendChild(span);
      detailPhoto.appendChild(placeholder);
    }

    const detailText = document.createElement("div");
    detailText.className = "team-detail-text";

    const detailName = document.createElement("h3");
    detailName.textContent = member.name || "";

    const detailRole = document.createElement("p");
    detailRole.className = "role";
    detailRole.textContent = member.role || "";

    detailText.appendChild(detailName);
    detailText.appendChild(detailRole);
    detailMain.appendChild(detailPhoto);
    detailMain.appendChild(detailText);
    detail.appendChild(detailMain);

    const actions = document.createElement("div");
    actions.className = "team-detail-actions";

      if (member.website) {
        if (isPlaceholder(member.website)) {
          actions.appendChild(createPlaceholderButton("Profile"));
        } else {
          actions.appendChild(
          createIconButton(
            member.website,
            "website",
            `Visit ${member.name}'s profile page`,
            "Profile"
            )
          );
        }
      }

      if (member.scholar) {
        if (isPlaceholder(member.scholar)) {
          actions.appendChild(createPlaceholderButton("Google Scholar"));
        } else {
          actions.appendChild(
            createIconButton(
              member.scholar,
              "scholar",
              `View ${member.name}'s Google Scholar profile`,
              "Google Scholar"
            )
          );
        }
      }

    if (member.linkedin) {
      if (isPlaceholder(member.linkedin)) {
        actions.appendChild(createPlaceholderButton("LinkedIn"));
      } else {
        actions.appendChild(
          createIconButton(
            member.linkedin,
            "linkedin",
            `Connect with ${member.name} on LinkedIn`,
            "LinkedIn"
          )
        );
      }
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

    if (!actions.children.length) {
      const badge = document.createElement("span");
      badge.className = "badge badge-muted";
      badge.textContent = "Links coming soon";
      actions.appendChild(badge);
    }

    detail.appendChild(actions);
    panel.appendChild(detail);
  });

  const cards = grid.querySelectorAll(".team-person-card");
  const details = panel.querySelectorAll(".team-detail");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-person");
      if (!id) return;
      cards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      details.forEach((block) => {
        block.hidden = block.getAttribute("data-person") !== id;
      });
    });
  });
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

function renderSupporters(supporters = []) {
  const grid = document.getElementById("supporters-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const items =
    supporters && supporters.length ? supporters : defaultContent.supporters;

  const section = document.getElementById("supporters");
  if (!items || items.length === 0) {
    if (section) section.style.display = "none";
    return;
  }
  if (section) section.style.display = "";

  items.forEach((supporter) => {
    const card = document.createElement("div");
    card.className = "supporter-card";

    const logoBox = document.createElement("div");
    logoBox.className = "supporter-logo-box";

    const ensureInitial = () => {
      const initial = document.createElement("div");
      initial.className = "supporter-initial";
      initial.textContent = supporter.name ? supporter.name.trim().charAt(0).toUpperCase() : "?";
      logoBox.classList.add("supporter-logo-box--text");
      card.classList.add("supporter-card--initial");
      logoBox.appendChild(initial);
    };

    if (supporter.logo) {
      const img = document.createElement("img");
      img.src = supporter.logo;
      img.alt = supporter.name || "Supporter logo";
      img.addEventListener("error", () => {
        img.remove();
        ensureInitial();
      });
      logoBox.appendChild(img);
    } else {
      ensureInitial();
    }

    const nameLabel = document.createElement("span");
    nameLabel.className = "supporter-name";
    nameLabel.textContent = supporter.name || "Supporter";

    logoBox.appendChild(nameLabel);
    card.appendChild(logoBox);

    if (supporter.url && !isPlaceholder(supporter.url)) {
      card.addEventListener("click", () => {
        window.open(supporter.url, "_blank", "noopener");
      });
      card.classList.add("supporter-card--clickable");
    }

    grid.appendChild(card);
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

function createPlaceholderButton(label) {
  const button = document.createElement("span");
  button.className = "team-icon-btn team-icon-btn--disabled";
  button.textContent = label;
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
