const DATA_PATHS = {
  profile: "data/profile.json",
  projects: "data/projects.json",
  skills: "data/skills.json",
};

const state = {
  projects: [],
};

const SVG_ICONS = {
  email: [
    "path",
    "M4 6h16v12H4z M4 7l8 6 8-6 M4 18l6-6 M20 18l-6-6",
  ],
  github: [
    "path",
    "M12 .8A11.2 11.2 0 0 0 .8 12c0 4.95 3.2 9.15 7.64 10.63.56.1.76-.24.76-.54v-1.9c-3.1.67-3.76-1.34-3.76-1.34-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.73 1.16 1.73 1.16 1 .1 1.62.76 1.62.76.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.43-2.22 1.15-3-.12-.28-.5-1.42.1-2.96 0 0 .94-.3 3.08 1.15a10.6 10.6 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.6 1.54.22 2.68.1 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.1 5.52.36.31.68.93.68 1.88v2.78c0 .3.2.65.77.54A11.21 11.21 0 0 0 23.2 12 11.2 11.2 0 0 0 12 .8Z",
  ],
  linkedin: [
    "path",
    "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.6h4v10.9H3V9.6Zm6.2 0h3.8v1.5h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.66 4.78 6.12v5.28h-4v-4.68c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48v4.76h-4V9.6Z",
  ],
  resume: [
    "path",
    "M6 2h8l4 4v16H6z M14 2v5h5 M8.5 13h7 M8.5 16h7 M8.5 19h4",
  ],
  report: [
    "path",
    "M6 2h8l4 4v16H6z M14 2v5h5 M8.5 12h7 M8.5 15h7 M8.5 18h5",
  ],
  paper: [
    "path",
    "M6 2h8l4 4v16H6z M14 2v5h5 M8.5 12h7 M8.5 15h7 M8.5 18h5",
  ],
  presentation: [
    "path",
    "M3 4h18v11H3z M12 15v5 M8 20h8 M7 8h4 M7 11h8",
  ],
  powerpoint: [
    "path",
    "M3 4h18v11H3z M12 15v5 M8 20h8 M8 8h4a2 2 0 0 1 0 4H8z M8 8v6",
  ],
  source: [
    "path",
    "M9 7 4 12l5 5 M15 7l5 5-5 5 M13 5l-2 14",
  ],
  demo: [
    "path",
    "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M10 8l6 4-6 4z",
  ],
  video: [
    "path",
    "M4 7h11v10H4z M15 10l5-3v10l-5-3z",
  ],
  youtube: [
    "path",
    "M4 8.5c.2-1.4 1.2-2.4 2.6-2.6C8.5 5.6 12 5.6 12 5.6s3.5 0 5.4.3c1.4.2 2.4 1.2 2.6 2.6.3 1.5.3 3.5.3 3.5s0 2-.3 3.5c-.2 1.4-1.2 2.4-2.6 2.6-1.9.3-5.4.3-5.4.3s-3.5 0-5.4-.3c-1.4-.2-2.4-1.2-2.6-2.6-.3-1.5-.3-3.5-.3-3.5s0-2 .3-3.5z M10 9v6l5-3z",
  ],
  external: [
    "path",
    "M14 4h6v6 M20 4l-9 9 M20 14v6H4V4h6",
  ],
  document: [
    "path",
    "M6 2h8l4 4v16H6z M14 2v5h5 M8.5 12h7 M8.5 15h7 M8.5 18h5",
  ],
};

// Fetching content from JSON keeps portfolio updates out of the HTML layout.
async function loadJson(path) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Unable to load ${path}`);
  }

  return response.json();
}

function text(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value || "";
  });
}

function createLink(link, variant = "compact") {
  const anchor = document.createElement("a");
  anchor.className = `button-link ${variant}`;
  anchor.href = link.url;
  anchor.setAttribute("aria-label", link.label);

  const icon = createSvgIcon(link.type);

  const label = document.createElement("span");
  label.className = "link-label";
  label.textContent = link.label;

  anchor.append(icon, label);

  if (link.external) {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }

  return anchor;
}

function createSvgIcon(type = "external") {
  const iconDefinition = SVG_ICONS[type] || SVG_ICONS.external;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const shape = document.createElementNS("http://www.w3.org/2000/svg", iconDefinition[0]);

  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  shape.setAttribute("d", iconDefinition[1]);
  svg.append(shape);

  return svg;
}

function projectResources(project) {
  return project.resources || project.links || [];
}

function firstMedia(project) {
  return project.media?.[0];
}

function createMediaElement(media, compact = false) {
  const frame = document.createElement("figure");
  frame.className = "media-frame";

  if (!media) {
    const placeholder = document.createElement("div");
    placeholder.className = "media-placeholder";
    placeholder.textContent = "Project media";
    frame.append(placeholder);
    return frame;
  }

  if (media.type === "video") {
    const video = document.createElement("video");
    video.src = media.src;
    video.poster = media.poster || "";
    video.controls = !compact;
    video.muted = true;
    video.loop = compact;
    video.playsInline = true;
    video.preload = compact ? "metadata" : "none";

    if (compact) {
      video.autoplay = true;
    }

    frame.append(video);
  } else if (media.type === "youtube" && !compact) {
    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.title = media.alt || "Project demo video";
    iframe.loading = "lazy";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    frame.append(iframe);
  } else {
    const image = document.createElement("img");
    image.src = media.poster || media.src;
    image.alt = media.alt || "";
    image.loading = "lazy";
    frame.append(image);
  }

  if (!compact && media.caption) {
    const caption = document.createElement("figcaption");
    caption.textContent = media.caption;
    frame.append(caption);
  }

  return frame;
}

function renderProfile(profile) {
  Object.entries(profile.fields).forEach(([key, value]) => {
    text(`[data-profile="${key}"]`, value);
  });

  const primaryLinks = document.querySelector('[data-link-list="primary"]');
  const contactLinks = document.querySelector('[data-link-list="contact"]');

  profile.links
    .filter((link) => link.url)
    .forEach((link, index) => {
      const primaryVariant = index === 0 ? "primary" : "secondary";
      primaryLinks?.append(createLink(link, primaryVariant));
      contactLinks?.append(createLink(link));
    });
}

function renderProjects() {
  const grid = document.querySelector("[data-project-grid]");
  if (!grid) return;

  grid.innerHTML = "";

  // Cards are built from data only; add or reorder projects in data/projects.json.
  state.projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.tabIndex = 0;
    card.role = "button";
    card.setAttribute("aria-label", `View details for ${project.title}`);
    card.addEventListener("click", () => openProjectDialog(project));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProjectDialog(project);
      }
    });

    const media = document.createElement("div");
    media.className = "project-media";
    media.append(createMediaElement(firstMedia(project), true));

    const body = document.createElement("div");
    body.className = "project-body";

    const kicker = document.createElement("p");
    kicker.className = "project-kicker";
    kicker.textContent = project.date || project.year || "";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const summary = document.createElement("p");
    summary.className = "project-summary";
    summary.textContent = project.summary;

    const tags = document.createElement("ul");
    tags.className = "tag-list";
    project.tags.forEach((tag) => {
      const tagItem = document.createElement("li");
      tagItem.textContent = tag;
      tags.append(tagItem);
    });

    body.append(kicker, title, summary, tags);

    card.append(media, body);
    grid.append(card);
  });
}

function openProjectDialog(project) {
  const dialog = document.querySelector("[data-project-dialog]");
  const content = dialog?.querySelector("[data-project-dialog-content]");
  if (!dialog || !content) return;

  content.innerHTML = "";

  const header = document.createElement("div");
  header.className = "project-dialog-header";

  const kicker = document.createElement("p");
  kicker.className = "project-kicker";
  kicker.textContent = project.date || project.year || "";

  const title = document.createElement("h2");
  title.textContent = project.title;

  const summary = document.createElement("p");
  summary.className = "project-dialog-summary";
  summary.textContent = project.summary;

  header.append(kicker, title, summary);

  const mediaGallery = document.createElement("div");
  mediaGallery.className = "project-media-gallery";
  (project.media || [firstMedia(project)]).forEach((media) => {
    mediaGallery.append(createMediaElement(media));
  });

  const highlights = document.createElement("ul");
  highlights.className = "project-highlights";
  (project.highlights || []).forEach((highlight) => {
    const item = document.createElement("li");
    item.textContent = highlight;
    highlights.append(item);
  });

  const tags = document.createElement("ul");
  tags.className = "tag-list";
  project.tags.forEach((tag) => {
    const tagItem = document.createElement("li");
    tagItem.textContent = tag;
    tags.append(tagItem);
  });

  const resources = document.createElement("div");
  resources.className = "project-resource-list";
  projectResources(project)
    .filter((link) => link.url)
    .forEach((link) => {
      resources.append(createLink(link));
    });

  content.append(header, mediaGallery);
  if (highlights.children.length) {
    content.append(highlights);
  }
  content.append(tags);
  if (resources.children.length) {
    const resourceHeading = document.createElement("h3");
    resourceHeading.textContent = "Useful Links";
    content.append(resourceHeading, resources);
  }

  dialog.showModal();
}

function setupProjectDialog() {
  const dialog = document.querySelector("[data-project-dialog]");
  if (!dialog) return;

  dialog.querySelector("[data-project-dialog-close]")?.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}

function renderSkills(skills) {
  const grid = document.querySelector("[data-skills-grid]");
  if (!grid) return;

  grid.innerHTML = "";

  skills.forEach((skillGroup) => {
    const card = document.createElement("article");
    card.className = "skill-card";

    if (skillGroup.image) {
      const image = document.createElement("img");
      image.src = skillGroup.image;
      image.alt = skillGroup.imageAlt || "";
      image.loading = "lazy";
      card.append(image);
    }

    const title = document.createElement("h3");
    title.textContent = skillGroup.title;

    const summary = document.createElement("p");
    summary.textContent = skillGroup.summary;

    const list = document.createElement("ul");
    skillGroup.items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      list.append(listItem);
    });

    card.append(title, summary, list);
    grid.append(card);
  });
}

async function init() {
  try {
    const [profile, projects, skills] = await Promise.all([
      loadJson(DATA_PATHS.profile),
      loadJson(DATA_PATHS.projects),
      loadJson(DATA_PATHS.skills),
    ]);

    state.projects = projects;
    renderProfile(profile);
    setupProjectDialog();
    renderProjects();
    renderSkills(skills);
  } catch (error) {
    const grid = document.querySelector("[data-project-grid]");
    if (grid) {
      grid.textContent = "Portfolio content could not be loaded. Start a local static server or check the data files.";
    }
    console.error(error);
  }

  text("[data-current-year]", new Date().getFullYear());
}

init();
