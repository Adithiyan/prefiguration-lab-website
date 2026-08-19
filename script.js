// Lucide icons
const CATEGORY_ICONS = {
  health: `<svg viewBox="0 0 24 24" aria-hidden="true" class="lucide lucide-heart-pulse"><path d="M21 8.5c0-2-1.5-4-4-4-1.6 0-2.8.7-3.5 1.5-.7-.8-1.9-1.5-3.5-1.5-2.5 0-4 2-4 4 0 4 7.5 9 7.5 9S21 12.5 21 8.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 10h2l1-2 2 4 1-2h2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`, // heart-pulse
  education: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`, // graduation-cap
  transportation: `<svg viewBox="0 0 24 24" aria-hidden="true" class="lucide lucide-bike"><circle cx="5.5" cy="17.5" r="3" fill="none" stroke="currentColor" stroke-width="2.6"/><circle cx="18.5" cy="17.5" r="3" fill="none" stroke="currentColor" stroke-width="2.6"/><path d="M5.5 14.5h6l-2-4H8" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="m18.5 14.5-3-6h-3" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M12.5 10.5 14 14.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>`, // bike
  technology: `<svg viewBox="0 0 24 24" aria-hidden="true" class="lucide lucide-cpu"><rect x="7" y="7" width="10" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 1v2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 21v2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15 1v2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15 21v2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 9h2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 15h2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M19 9h2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M19 15h2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 9h6v6H9z" fill="none" stroke="currentColor" stroke-width="2"/></svg>`, // cpu
};

const CATEGORY_LABELS = {
  health: "Health",
  education: "Education",
  transportation: "Transportation",
  technology: "Technology",
};

const CATEGORY_BADGE = {
  health:         "bg-pink-50 text-pink-700 border border-pink-200",
  education:      "bg-amber-50 text-amber-700 border border-amber-200",
  transportation: "bg-lime-50 text-lime-800 border border-lime-200",
  technology:     "bg-cyan-50 text-cyan-700 border border-cyan-100",
};

const CATEGORY_ACCENT = {
  health:         "bg-pink-400",
  education:      "bg-amber-400",
  transportation: "bg-lime-500",
  technology:     "bg-cyan-400",
};

// Compact inline SVGs (w-3.5 h-3.5) for use inside badges
const CATEGORY_ICON_SM = {
  health: `<svg class="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 8.5c0-2-1.5-4-4-4-1.6 0-2.8.7-3.5 1.5-.7-.8-1.9-1.5-3.5-1.5-2.5 0-4 2-4 4 0 4 7.5 9 7.5 9S21 12.5 21 8.5Z"/><path d="M8 10h2l1-2 2 4 1-2h2"/></svg>`,
  education: `<svg class="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`,
  transportation: `<svg class="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5.5" cy="17.5" r="3"/><circle cx="18.5" cy="17.5" r="3"/><path d="M5.5 14.5h6l-2-4H8"/><path d="m18.5 14.5-3-6h-3"/><path d="M12.5 10.5 14 14.5"/></svg>`,
  technology: `<svg class="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 1v2M15 1v2M9 21v2M15 21v2M1 9h2M1 15h2M21 9h2M21 15h2"/></svg>`,
};

const SOCIAL_BUTTON_CONFIG = {
  linkedin: {
    icon: `<svg class="w-2.5 h-2.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    classes: "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100",
  },
  scholar: {
    icon: `<svg class="w-2.5 h-2.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`,
    classes: "bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100",
  },
  website: {
    icon: `<svg class="w-2.5 h-2.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>`,
    classes: "bg-[#53bbbc]/10 text-[#3a8a8b] border border-[#53bbbc]/30 hover:bg-[#53bbbc]/20",
  },
  email: {
    icon: `<svg class="w-2.5 h-2.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    classes: "bg-red-50 text-[#90191d] border border-red-200 hover:bg-red-100",
  },
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
      photo: "images/Mat.jpeg",
      linkedin: "https://www.linkedin.com/in/mathieubcd/",
      email: "professor@example.com",
    },
    {
      id: "adi",
      name: "Adithiyan Rajan",
      role: "Graduate Student",
      bio:
        "Adithiyan Rajan is a Computer Science graduate student who specializes in transforming cutting-edge AI and Machine Learning research into practical, high-impact solutions for areas such as cybersecurity and real-time detection.",
      photo: "images/Adi_Rajan.jpg",
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
      photo: "images/Camila_Estrada.png",
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
    { name: "CSIID", url: "https://csiid.org/", logo: "images/CSIID_logo.png" },
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
      title: "Pedagogy Prefiguration Workshop Report",
      pdf: "data-files/2026-03-10%20BCom%20prefig%20report%20-%20for%20Telfer%20UPC%201.pdf",
      label: "Open PDF",
    },
    {
      title: "Pedagogy Prefiguration Workshop Infographic",
      pdf: "data-files/2026-03-10%20BCom%20prefig%20infographic%20-%20for%20Telfer%20UPC%201.pdf",
      label: "Open PDF",
    },
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
  trainingCopy: {
    en: "Six-module training series on launching a Community of Practice — co-produced by the Prefiguration Lab and Telfer School of Management, University of Ottawa.",
    fr: "Série de formation en six modules sur le démarrage d'une communauté de pratique — coproduite par le Laboratoire sur la Préfiguration et l'École de management Telfer, Université d'Ottawa.",
  },
  training: {
    brand: {
      plab: "images/PLab logo - transparent.png",
      telfer: "https://telfer.uottawa.ca/assets/images/brand/Tertiary_Black3.png",
    },
    modules: [
      { number: 1, title: { en: "Identity", fr: "Identité" }, description: { en: "Developing a shared understanding of what your community of practice represents — its practice, members, and boundaries.", fr: "Développer une compréhension commune de ce que représente votre communauté de pratique — sa pratique, ses membres et ses frontières." }, videoEn: "", videoFr: "", pdf: "" },
      { number: 2, title: { en: "Project", fr: "Projet" }, description: { en: "Defining shared goals and collective action plans that give the community direction and purpose.", fr: "Définir des objectifs communs et des plans d'action collectifs qui donnent une direction et un sens à la communauté." }, videoEn: "", videoFr: "", pdf: "" },
      { number: 3, title: { en: "Ritual", fr: "Rituel" }, description: { en: "Establishing meeting rhythms, session formats, and activity sequences that sustain participation over time.", fr: "Établir des rythmes de rencontre, des formats de séance et des séquences d'activités qui soutiennent la participation dans le temps." }, videoEn: "", videoFr: "", pdf: "" },
      { number: 4, title: { en: "Governance", fr: "Gouvernance" }, description: { en: "Structuring decision-making and leadership so the community can self-organize while remaining coordinated.", fr: "Structurer la prise de décision et le leadership pour que la communauté puisse s'autoorganiser tout en restant coordonnée." }, videoEn: "", videoFr: "", pdf: "" },
      { number: 5, title: { en: "Ecosystem", fr: "Écosystème" }, description: { en: "Mapping the organizational landscape — affiliations, resources, and partnerships the community can draw on.", fr: "Cartographier le paysage organisationnel — affiliations, ressources et partenariats sur lesquels la communauté peut s'appuyer." }, videoEn: "", videoFr: "", pdf: "" },
      { number: 6, title: { en: "Impact", fr: "Impact" }, description: { en: "Measuring and evaluating outcomes for members and their organizations — setting metrics and timelines for assessment.", fr: "Mesurer et évaluer les retombées pour les membres et leurs organisations — fixer des indicateurs et des échéanciers d'évaluation." }, videoEn: "", videoFr: "", pdf: "" },
    ],
  },
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

  renderTraining(content.training, content.trainingCopy);

  setText("resources-copy", content.resourcesCopy);
  renderResources(content.resources);

  setText("contact-copy", content.contactCopy);
  setContact(content.contact);

  // Kick off animations after all DOM is populated
  requestAnimationFrame(initAnimations);
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
  grid.className = "projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5";
  grid.innerHTML = "";

  if (!Array.isArray(projects) || projects.length === 0) {
    grid.innerHTML = `<p class="text-gray-500 col-span-3 text-center py-8">Projects coming soon.</p>`;
    return;
  }

  projects.forEach((project) => {
    const hasPdf = project.pdf && !isPlaceholder(project.pdf);
    const card = document.createElement(hasPdf ? "a" : "article");
    card.className = "project-card group flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden";
    if (hasPdf) {
      card.href = project.pdf;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.style.cssText = "text-decoration:none;color:inherit;";
    }

    // Coloured accent bar at top
    if (project.category) {
      const accent = document.createElement("div");
      accent.className = `h-1 w-full flex-shrink-0 ${CATEGORY_ACCENT[project.category] || "bg-gray-200"}`;
      card.appendChild(accent);
    }

    if (project.image) {
      const imgWrap = document.createElement("div");
      imgWrap.className = "h-44 overflow-hidden bg-gray-100 flex-shrink-0";
      const img = document.createElement("img");
      img.src = project.image;
      img.alt = project.title || "";
      img.loading = "lazy";
      img.decoding = "async";
      img.className = "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500";
      imgWrap.appendChild(img);
      card.appendChild(imgWrap);
    }

    const body = document.createElement("div");
    body.className = "flex flex-col gap-2.5 p-5 flex-1";

    if (project.category) {
      const badgeCls = CATEGORY_BADGE[project.category] || "bg-gray-50 text-gray-600 border border-gray-200";
      const badge = document.createElement("span");
      badge.className = `w-fit inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${badgeCls}`;
      badge.innerHTML = (CATEGORY_ICON_SM[project.category] || "") + (CATEGORY_LABELS[project.category] || project.category);
      body.appendChild(badge);
    }

    const title = document.createElement("h3");
    title.className = "font-bold text-gray-900 leading-snug text-[0.9rem]";
    title.textContent = project.title || "";
    body.appendChild(title);

    if (project.blurb) {
      const blurb = document.createElement("p");
      blurb.className = "text-sm text-gray-600 leading-relaxed";
      blurb.textContent = project.blurb;
      body.appendChild(blurb);
    }

    const authorsText = formatList(project.authors);
    if (authorsText && authorsText !== "Coming soon") {
      const el = document.createElement("p");
      el.className = "text-xs text-gray-500";
      el.innerHTML = `<span class="font-semibold text-gray-700">Authors:</span> ${authorsText}`;
      body.appendChild(el);
    }

    const studentsText = formatList(project.studentResearchers);
    if (studentsText && studentsText !== "Coming soon") {
      const el = document.createElement("p");
      el.className = "text-xs text-gray-500";
      el.innerHTML = `<span class="font-semibold text-gray-700">Student researchers:</span> ${studentsText}`;
      body.appendChild(el);
    }

    const orgNames = Array.isArray(project.organizations)
      ? project.organizations.map(o => typeof o === "string" ? o : o?.name || "").filter(Boolean)
      : [];
    if (orgNames.length) {
      const orgLine = document.createElement("p");
      orgLine.className = "text-[10px] text-gray-500";
      orgLine.innerHTML = `<span class="font-semibold text-gray-600">Supporters:</span> ${orgNames.join(", ")}`;
      body.appendChild(orgLine);
    }

    // Footer: resource links left, project overview right
    const footer = document.createElement("div");
    footer.className = "mt-auto pt-3 border-t border-gray-100 flex items-center justify-between gap-2 flex-wrap";

    const validRes = Array.isArray(project.resources)
      ? project.resources.filter(r => r.pdf && !isPlaceholder(r.pdf))
      : [];

    const leftSide = document.createElement("div");
    leftSide.className = "flex flex-wrap gap-x-3 gap-y-1";
    validRes.forEach(res => {
      const link = document.createElement("a");
      link.href = res.pdf;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "inline-flex items-center gap-1 text-[10px] font-semibold text-[#3a8a8b] hover:underline";
      link.innerHTML = `<svg class="w-2.5 h-2.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>${res.label || res.title || "Open"}`;
      leftSide.appendChild(link);
    });
    footer.appendChild(leftSide);

    const rightSide = document.createElement("div");
    rightSide.className = "ml-auto shrink-0";
    if (hasPdf) {
      const action = document.createElement(card.tagName === "A" ? "span" : "a");
      if (action.tagName === "A") {
        action.href = project.pdf;
        action.target = "_blank";
        action.rel = "noopener noreferrer";
      }
      action.className = "inline-flex items-center gap-1 text-xs font-semibold text-[#90191d] hover:opacity-70 transition-opacity";
      action.innerHTML = `${project.pdfLabel || "Project overview"} <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
      rightSide.appendChild(action);
    } else {
      const note = document.createElement("span");
      note.className = "text-[10px] text-gray-400 italic";
      note.textContent = project.pdfLabel || "More details coming soon";
      rightSide.appendChild(note);
    }
    footer.appendChild(rightSide);
    body.appendChild(footer);

    card.appendChild(body);
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
  if (!grid) return;
  grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";
  grid.innerHTML = "";

  const members = team.map((member, index) => ({
    ...member,
    id: member.id || slugify(member.name || `member-${index + 1}`),
  }));

  members.forEach((member) => {
    const card = document.createElement("article");
    card.className = "team-card flex flex-col gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200";
    card.setAttribute("data-person", member.id);

    const header = document.createElement("div");
    header.className = "flex items-center gap-2.5";

    const photoBox = document.createElement("div");
    photoBox.className = "w-12 h-12 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 flex items-center justify-center";
    if (member.photo) {
      const img = document.createElement("img");
      img.src = member.photo;
      img.alt = `Portrait of ${member.name || "team member"}`;
      img.width = 48;
      img.height = 48;
      img.loading = "lazy";
      img.decoding = "async";
      img.className = "w-full h-full object-cover object-top";
      photoBox.appendChild(img);
    } else {
      photoBox.classList.add("bg-pink-50");
      const span = document.createElement("span");
      span.className = "text-base font-bold text-[#90191d]";
      span.textContent = (member.name || "T").trim().charAt(0).toUpperCase();
      photoBox.appendChild(span);
    }

    const nameBlock = document.createElement("div");
    const name = document.createElement("h3");
    name.className = "font-bold text-gray-900 text-sm leading-tight";
    name.textContent = member.name || "";
    const role = document.createElement("p");
    role.className = "text-[10px] text-[#90191d] font-medium mt-0.5";
    role.textContent = member.role || "";
    nameBlock.appendChild(name);
    nameBlock.appendChild(role);

    header.appendChild(photoBox);
    header.appendChild(nameBlock);
    card.appendChild(header);

    if (member.bio) {
      const bio = document.createElement("p");
      bio.className = "text-xs text-gray-600 leading-relaxed flex-1";
      bio.textContent = member.bio;
      card.appendChild(bio);
    }

    const actions = document.createElement("div");
    actions.className = "flex flex-wrap gap-1 pt-2 border-t border-gray-100";

    if (member.linkedin) actions.appendChild(createIconButton(member.linkedin, "linkedin", `Connect with ${member.name} on LinkedIn`, "LinkedIn"));
    if (member.scholar) actions.appendChild(createIconButton(member.scholar, "scholar", `View ${member.name}'s Google Scholar profile`, "Scholar"));
    if (member.website) actions.appendChild(createIconButton(member.website, "website", `Visit ${member.name}'s profile page`, "Profile"));
    if (member.email) actions.appendChild(createIconButton(`mailto:${member.email}`, "email", `Email ${member.name}`, "Email", { newTab: false }));

    if (actions.children.length) card.appendChild(actions);
    grid.appendChild(card);
  });
}

function renderCollaborators(collaborators = []) {
  const grid = document.getElementById("collaborators-grid");
  if (!grid) return;
  grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";
  grid.innerHTML = "";

  const items =
    collaborators && collaborators.length ? collaborators : defaultContent.collaborators;

  const members = items.map((member, index) => ({
    ...member,
    id: member.id || slugify(member.name || `collaborator-${index + 1}`),
  }));

  members.forEach((member) => {
    const card = document.createElement("article");
    card.className = "collaborator-card flex flex-col gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200";

    const header = document.createElement("div");
    header.className = "flex items-center gap-2.5";

    const photoBox = document.createElement("div");
    photoBox.className = "w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 flex items-center justify-center";
    if (member.photo) {
      const img = document.createElement("img");
      img.src = member.photo;
      img.alt = `Portrait of ${member.name || "collaborator"}`;
      img.width = 48;
      img.height = 48;
      img.loading = "lazy";
      img.decoding = "async";
      img.className = "w-full h-full object-cover";
      photoBox.appendChild(img);
    } else {
      const span = document.createElement("span");
      span.className = "text-sm font-bold text-gray-400";
      span.textContent = (member.name || "C").trim().charAt(0).toUpperCase();
      photoBox.appendChild(span);
    }

    const name = document.createElement("h3");
    name.className = "font-bold text-gray-900 text-sm leading-tight";
    name.textContent = member.name || "";

    header.appendChild(photoBox);
    header.appendChild(name);
    card.appendChild(header);

    const bioText =
      (member.bio && !isPlaceholder(member.bio) && member.bio) ||
      (member.role && !isPlaceholder(member.role) && member.role) || "";
    if (bioText) {
      const bio = document.createElement("p");
      bio.className = "text-xs text-gray-600 leading-relaxed flex-1";
      bio.textContent = bioText;
      card.appendChild(bio);
    }

    const actions = document.createElement("div");
    actions.className = "flex flex-wrap gap-1.5 pt-2 border-t border-gray-100 mt-auto";

    if (member.website) {
      actions.appendChild(isPlaceholder(member.website)
        ? createPlaceholderButton("Profile")
        : createIconButton(member.website, "website", `Visit ${member.name}'s profile page`, "Profile"));
    }
    if (member.scholar) {
      actions.appendChild(isPlaceholder(member.scholar)
        ? createPlaceholderButton("Scholar")
        : createIconButton(member.scholar, "scholar", `View ${member.name}'s Google Scholar profile`, "Scholar"));
    }
    if (member.linkedin) {
      actions.appendChild(isPlaceholder(member.linkedin)
        ? createPlaceholderButton("LinkedIn")
        : createIconButton(member.linkedin, "linkedin", `Connect with ${member.name} on LinkedIn`, "LinkedIn"));
    }
    if (member.email) {
      actions.appendChild(createIconButton(`mailto:${member.email}`, "email", `Email ${member.name}`, "Email", { newTab: false }));
    }

    if (!actions.children.length) {
      const note = document.createElement("span");
      note.className = "text-xs text-gray-400 italic";
      note.textContent = "Links coming soon";
      actions.appendChild(note);
    }

    card.appendChild(actions);
    grid.appendChild(card);
  });
}

function renderSupporters(supporters = []) {
  const grid = document.getElementById("supporters-grid");
  if (!grid) return;
  grid.className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4";
  grid.innerHTML = "";

  const items = supporters && supporters.length ? supporters : defaultContent.supporters;

  const section = document.getElementById("supporters");
  if (!items || items.length === 0) {
    if (section) section.style.display = "none";
    return;
  }
  if (section) section.style.display = "";

  items.forEach((supporter) => {
    const card = document.createElement("div");
    card.className = "supporter-card flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 text-center min-h-[100px]";

    const logoArea = document.createElement("div");
    logoArea.className = "flex items-center justify-center flex-1";

    const ensureInitial = () => {
      const initial = document.createElement("div");
      initial.className = "w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl font-bold text-gray-400";
      initial.textContent = supporter.name ? supporter.name.trim().charAt(0).toUpperCase() : "?";
      logoArea.appendChild(initial);
    };

    if (supporter.logo) {
      if (supporter.logo.toLowerCase().endsWith(".svg")) {
        fetch(supporter.logo)
          .then((r) => r.ok ? r.text() : Promise.reject())
          .then((svgText) => {
            const wrap = document.createElement("div");
            wrap.className = "max-h-10 max-w-[110px] flex items-center justify-center";
            wrap.innerHTML = svgText;
            const svg = wrap.querySelector("svg");
            if (svg) {
              svg.removeAttribute("width");
              svg.removeAttribute("height");
              svg.style.cssText = "max-height:40px;max-width:110px;width:auto;height:auto;";
            }
            logoArea.innerHTML = "";
            logoArea.appendChild(wrap);
          })
          .catch(ensureInitial);
        ensureInitial();
      } else {
        const img = document.createElement("img");
        img.src = supporter.logo;
        img.alt = supporter.name || "Supporter logo";
        img.className = "max-h-16 max-w-[110px] w-auto object-contain";
        img.loading = "lazy";
        img.decoding = "async";
        img.addEventListener("error", () => { img.remove(); ensureInitial(); });
        logoArea.appendChild(img);
      }
    } else {
      ensureInitial();
    }

    const nameLabel = document.createElement("span");
    nameLabel.className = "text-xs font-semibold text-gray-500";
    nameLabel.textContent = supporter.name || "Supporter";

    card.appendChild(logoArea);
    card.appendChild(nameLabel);

    if (supporter.url && !isPlaceholder(supporter.url)) {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => window.open(supporter.url, "_blank", "noopener"));
    }

    grid.appendChild(card);
  });
}

function setPodcast(podcast) {
  const iframe = document.getElementById("podcast-embed");
  if (iframe) {
    const embed = podcast && podcast.embed ? podcast.embed : defaultContent.podcast.embed;
    const embedValue = String(embed || "").trim();
    const isPlaceholderEmbed = !embedValue || embedValue.includes("PLACEHOLDER");
    if (isPlaceholderEmbed) {
      iframe.removeAttribute("src");
      iframe.srcdoc = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <style>
      html, body {
        height: 100%;
      }
      body {
        margin: 0;
        font-family: "Roboto", system-ui, -apple-system, sans-serif;
        background: #f8fafc;
        color: #334155;
        display: grid;
        place-items: center;
      }
      .placeholder {
        text-align: center;
        font-size: 0.9rem;
        padding: 0 1rem;
      }
    </style>
  </head>
  <body>
    <div class="placeholder">Podcast coming soon.</div>
  </body>
</html>`;
    } else {
      iframe.srcdoc = "";
      iframe.src = embedValue;
    }
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
      link.className = "flex items-center gap-2 text-sm text-gray-700 hover:text-[#90191d] transition-colors no-underline";
      link.innerHTML = `<svg class="w-3.5 h-3.5 text-[#53bbbc] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>${linkItem.label}`;
      li.appendChild(link);
    } else {
      const badge = document.createElement("span");
      badge.className = "flex items-center gap-2 text-sm text-gray-400 italic";
      badge.innerHTML = `<svg class="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>${linkItem.label || "Link coming soon"}`;
      li.appendChild(badge);
    }
    list.appendChild(li);
  });
}

let trainingLang = "en";

function renderTraining(training, copy) {
  const titleEl = document.getElementById("training-title");
  const titles = { en: "Community of practice training", fr: "Formation sur les communautés de pratique" };

  function applyLang(lang) {
    trainingLang = lang;
    if (titleEl) titleEl.textContent = titles[lang] || titles.en;
    const copyText = copy && copy[lang] ? copy[lang] : (typeof copy === "string" ? copy : "");
    setText("training-copy", copyText);
    renderTrainingModules(training && training.modules, true);
    document.querySelectorAll(".lang-btn").forEach((b) =>
      b.classList.toggle("lang-btn--active", b.dataset.lang === lang)
    );
  }

  // Initial render (EN default, cards not yet visible so let initAnimations handle them)
  if (titleEl) titleEl.textContent = titles[trainingLang];
  const initCopy = copy && copy[trainingLang] ? copy[trainingLang] : (typeof copy === "string" ? copy : "");
  setText("training-copy", initCopy);
  renderTrainingBrand(training && training.brand);
  renderTrainingModules(training && training.modules, false);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
}

function renderTrainingBrand(brand) {
  const el = document.getElementById("training-brand");
  if (!el || !brand) return;
  el.innerHTML = "";
  ["plab", "telfer"].forEach((key) => {
    if (!brand[key]) return;
    const img = document.createElement("img");
    img.src = brand[key];
    img.alt = key === "plab" ? "Prefiguration Lab" : "Telfer School of Management";
    img.className = "training-brand-logo";
    img.loading = "lazy";
    img.decoding = "async";
    el.appendChild(img);
  });
}

function renderTrainingModules(modules, alreadyVisible) {
  const grid = document.getElementById("training-grid");
  if (!grid) return;
  grid.className = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4";
  grid.innerHTML = "";

  if (!Array.isArray(modules) || !modules.length) {
    const p = document.createElement("p");
    p.className = "text-gray-500 col-span-3 text-center py-8";
    p.textContent = trainingLang === "fr" ? "Modules à venir." : "Modules coming soon.";
    grid.appendChild(p);
    return;
  }

  modules.forEach((mod) => {
    const card = document.createElement("article");
    card.className = "training-module-card flex flex-col gap-2 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200";
    if (alreadyVisible) card.classList.add("will-animate", "in-view");

    const header = document.createElement("div");
    header.className = "flex items-center gap-3";

    const num = document.createElement("span");
    num.className = "flex items-center justify-center w-8 h-8 rounded-full bg-[#90191d] text-white font-bold text-sm flex-shrink-0";
    num.textContent = mod.number || "";

    const title = document.createElement("h3");
    title.className = "font-bold text-gray-900 text-sm leading-tight";
    title.textContent = (mod.title && mod.title[trainingLang]) || "";

    header.appendChild(num);
    header.appendChild(title);
    card.appendChild(header);

    if (mod.description) {
      const desc = document.createElement("p");
      desc.className = "text-xs text-gray-600 leading-relaxed flex-1";
      desc.textContent = (mod.description && mod.description[trainingLang]) || "";
      card.appendChild(desc);
    }

    const videoUrl = trainingLang === "fr" ? mod.videoFr : mod.videoEn;
    const embedWrap = document.createElement("div");
    embedWrap.className = "embed-wrapper training-embed";

    if (videoUrl && !isPlaceholder(videoUrl)) {
      const iframe = document.createElement("iframe");
      iframe.src = videoUrl;
      iframe.width = "100%";
      iframe.height = "220";
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";
      iframe.title = (mod.title && mod.title[trainingLang]) || "";
      embedWrap.appendChild(iframe);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "flex flex-col items-center justify-center gap-1.5 h-24 rounded-xl border-2 border-dashed border-gray-200 text-gray-400";
      placeholder.innerHTML = `<svg class="w-8 h-8 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg><span class="text-xs font-medium">${trainingLang === "fr" ? "Vidéo à venir" : "Video coming soon"}</span>`;
      embedWrap.appendChild(placeholder);
    }
    card.appendChild(embedWrap);

    if (mod.pdf && !isPlaceholder(mod.pdf)) {
      const link = document.createElement("a");
      link.href = mod.pdf;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "inline-flex items-center gap-1.5 text-xs font-semibold text-[#90191d] hover:opacity-60 transition-opacity";
      link.textContent = trainingLang === "fr" ? "Télécharger le guide (PDF)" : "Download guide (PDF)";
      card.appendChild(link);
    }

    grid.appendChild(card);
  });
}

function parseResourceLabel(label) {
  if (!label) return { venue: "", year: "" };
  const match = label.match(/,\s*(\d{4})\s*$/);
  if (match) {
    return { venue: label.slice(0, match.index).trim(), year: match[1] };
  }
  return { venue: label, year: "" };
}

function renderResources(resources = []) {
  const list = document.getElementById("resource-list");
  if (!list) return;
  list.className = "resource-list grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto";
  list.innerHTML = "";

  resources.forEach((resource) => {
    const { venue, year } = parseResourceLabel(resource.label);
    const hasPdf = resource.pdf && !isPlaceholder(resource.pdf);

    const li = document.createElement("li");
    li.className = "flex flex-col gap-2 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200";

    // Venue + year row
    if (venue || year) {
      const meta = document.createElement("div");
      meta.className = "flex items-center gap-2 flex-wrap";
      if (venue) {
        const venueEl = document.createElement("span");
        venueEl.className = "text-[10px] font-bold tracking-widest uppercase text-[#90191d] opacity-80";
        venueEl.textContent = venue;
        meta.appendChild(venueEl);
      }
      if (year) {
        const yearBadge = document.createElement("span");
        yearBadge.className = "text-[10px] font-semibold text-gray-400 bg-gray-100 rounded-full px-2 py-0.5 shrink-0";
        yearBadge.textContent = year;
        meta.appendChild(yearBadge);
      }
      li.appendChild(meta);
    }

    // Title
    const title = document.createElement("p");
    title.className = "text-xs font-semibold text-gray-900 leading-snug flex-1";
    title.textContent = resource.title || "";
    li.appendChild(title);

    // Authors
    if (resource.authors) {
      const authors = document.createElement("p");
      authors.className = "text-[10px] text-gray-500 italic leading-snug";
      authors.textContent = resource.authors;
      li.appendChild(authors);
    }

    // Footer: divider + action
    const footer = document.createElement("div");
    footer.className = "pt-2 border-t border-gray-100";

    if (hasPdf) {
      const link = document.createElement("a");
      link.href = resource.pdf;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "inline-flex items-center gap-1.5 text-xs font-semibold text-[#90191d] hover:opacity-60 transition-opacity";
      link.innerHTML = `Open paper <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
      footer.appendChild(link);
    } else {
      const badge = document.createElement("span");
      badge.className = "text-xs text-gray-400 italic";
      badge.textContent = venue ? "Coming soon" : (resource.label || "Coming soon");
      footer.appendChild(badge);
    }

    li.appendChild(footer);
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

function createIconButton(href, type, ariaLabel, label, options = {}) {
  const config = SOCIAL_BUTTON_CONFIG[type] || SOCIAL_BUTTON_CONFIG.website;
  const button = document.createElement("a");
  button.className = `inline-flex items-center gap-0.5 text-[9px] font-medium rounded px-1 py-px transition-colors no-underline ${config.classes}`;
  button.href = href;
  button.setAttribute("aria-label", ariaLabel);
  button.innerHTML = config.icon + label;
  if (options.newTab !== false) {
    button.target = "_blank";
    button.rel = "noopener noreferrer";
  }
  return button;
}

function createPlaceholderButton(label) {
  const button = document.createElement("span");
  button.className = "inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 border border-gray-100 rounded-lg px-2.5 py-1 cursor-not-allowed";
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

function initAnimations() {
  // --- Nav active link tracking ---
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-nav a");

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle(
              "nav-active",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    },
    { threshold: 0.25, rootMargin: "-72px 0px -55% 0px" }
  );

  sections.forEach((s) => navObserver.observe(s));

  // --- Scroll entrance animations ---
  const animTargets = document.querySelectorAll(
    "#projects .section-heading, #projects .project-card, " +
    "#team .section-heading, #team .team-card, " +
    "#collaborators .section-heading, #collaborators .collaborator-card, " +
    "#supporters .section-heading, #supporters .supporter-card, " +
    "#podcast .section-heading, " +
    "#training .section-heading, #training .training-module-card, " +
    "#resources .section-heading, .resource-list li, " +
    "#contact .section-heading, .contact-card"
  );

  animTargets.forEach((el) => {
    el.classList.add("will-animate");

    // Stagger siblings inside grid/list containers
    const parent = el.parentElement;
    if (parent) {
      const siblings = Array.from(parent.children).filter((c) =>
        c.classList.contains("will-animate")
      );
      const idx = siblings.indexOf(el);
      if (idx > 0) {
        el.style.transitionDelay = `${Math.min(idx * 65, 300)}ms`;
      }
    }
  });

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          scrollObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.07, rootMargin: "0px 0px -32px 0px" }
  );

  animTargets.forEach((el) => scrollObserver.observe(el));
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
