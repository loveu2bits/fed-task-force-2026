(function () {
  "use strict";

  const data = window.FED_BOARD_DATA;

  if (!data) {
    return;
  }

  const governorById = new Map(data.governors.map((governor) => [governor.id, governor]));
  const laneById = new Map(data.lanes.map((lane) => [lane.id, lane]));

  const leadershipMap = document.getElementById("leadershipMap");
  const votingStructure = document.getElementById("votingStructure");
  const governorList = document.getElementById("governorList");
  const toggleAll = document.getElementById("toggleAll");
  const sourceLinks = document.getElementById("sourceLinks");
  const photoCredits = document.getElementById("photoCredits");
  const activityTimeline = document.getElementById("activityTimeline");
  const backToTop = document.getElementById("backToTop");
  const updatedDate = document.getElementById("updatedDate");

  if (updatedDate && data.updated) {
    updatedDate.textContent = data.updated.replaceAll("-", ".");
  }

  const externalLinkIcon = `
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M15 3h6v6"></path>
      <path d="M10 14 21 3"></path>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    </svg>`;

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderLeadershipMap() {
    leadershipMap.innerHTML = data.lanes.map((lane, laneIndex) => {
      const governors = data.governors.filter((governor) => governor.lane === lane.id);
      const memberMarkup = governors.map((governor, memberIndex) => `
        <button
          class="map-member"
          type="button"
          data-governor-id="${governor.id}"
          aria-label="查看 ${escapeHtml(governor.name)} 的理事档案"
          style="--item-order: ${laneIndex * 4 + memberIndex}"
        >
          <span class="map-member__portrait">
            <img
              src="${governor.portrait}"
              alt=""
              width="116"
              height="140"
              style="object-position: ${governor.portraitPosition}"
              ${laneIndex === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}
              decoding="async"
            >
          </span>
          <span class="map-member__copy">
            <span class="map-member__name">${escapeHtml(governor.name)}</span>
            <span class="map-member__role">${escapeHtml(governor.role)}</span>
          </span>
        </button>
      `).join("");

      return `
        <div class="group-lane ${governors.length > 3 ? "group-lane--four" : ""}" style="--group-color: ${lane.color}">
          <div class="group-lane__label">
            <span class="group-lane__number">${lane.number}</span>
            <span>
              <strong>${escapeHtml(lane.name)}</strong>
              <span>${escapeHtml(lane.en)}</span>
            </span>
          </div>
          <div class="group-lane__members">${memberMarkup}</div>
        </div>
      `;
    }).join("");
  }

  function renderVotingStructure() {
    votingStructure.innerHTML = data.votingStructure.map((row) => `
      <article class="mandate-row" style="--group-color: ${row.color}">
        <span class="mandate-row__number">${row.number}</span>
        <div class="mandate-row__name">
          <strong>${escapeHtml(row.name)}</strong>
          <span>${escapeHtml(row.en)}</span>
        </div>
        <p class="mandate-row__text">${escapeHtml(row.rule)}</p>
        <span class="mandate-row__signal">${escapeHtml(row.signal)}</span>
      </article>
    `).join("");
  }

  function profileIndex(governor) {
    const lane = laneById.get(governor.lane);
    const withinLane = data.governors.filter((item) => item.lane === governor.lane).indexOf(governor) + 1;
    return `${lane.number}.${withinLane}`;
  }

  function renderGovernors() {
    governorList.innerHTML = data.governors.map((governor) => {
      const lane = laneById.get(governor.lane);
      const tags = governor.tags
        .map((tag) => `<span>${escapeHtml(tag)}</span>`)
        .join("");
      const career = governor.career
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("");
      const stances = governor.stances.map((item) => `
        <div class="contribution">
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.text)}</p>
        </div>
      `).join("");

      return `
        <details
          class="member-profile"
          id="profile-${governor.id}"
          data-governor-id="${governor.id}"
          style="--group-color: ${lane.color}"
        >
          <summary>
            <span class="profile-portrait" data-initials="${escapeHtml(governor.name.split(" ").map((word) => word[0]).join(""))}">
              <img
                src="${governor.portrait}"
                alt="${escapeHtml(governor.name)} 肖像"
                width="312"
                height="380"
                loading="lazy"
                decoding="async"
                style="object-position: ${governor.portraitPosition}"
              >
            </span>
            <span class="profile-summary">
              <span class="profile-meta">
                <span>${escapeHtml(lane.name)}</span>
                <span>${escapeHtml(governor.role)} · ${escapeHtml(governor.roleEn)}</span>
                <span class="voting-badge">${escapeHtml(governor.voting)}</span>
              </span>
              <span class="profile-name">${escapeHtml(governor.name)}</span>
              <span class="profile-title">${escapeHtml(governor.term)}</span>
              <span class="profile-core">${escapeHtml(governor.core)}</span>
              <span class="profile-tags" aria-label="标签">${tags}</span>
            </span>
            <span class="profile-index" aria-hidden="true">${profileIndex(governor)}</span>
          </summary>
          <div class="profile-details">
            <div>
              <h4>履历</h4>
              <p class="profile-bio">${escapeHtml(governor.bio)}</p>
              <ol class="career-list">${career}</ol>
              <a class="photo-source" href="${governor.photoSource}" target="_blank" rel="noopener noreferrer">
                ${externalLinkIcon}
                照片来源：${escapeHtml(governor.photoCredit)}
              </a>
            </div>
            <div>
              <h4>政策立场</h4>
              ${stances}
            </div>
          </div>
        </details>
      `;
    }).join("");
  }

  function formatActivityDate(isoDate) {
    const [year, month, day] = isoDate.split("-").map(Number);
    return `${month} 月 ${day} 日`;
  }

  function renderActivityItem(item) {
    const governor = item.memberId ? governorById.get(item.memberId) : null;
    const memberMarkup = governor
      ? `<button
          class="timeline-item__member"
          type="button"
          data-governor-id="${governor.id}"
          aria-label="查看 ${escapeHtml(governor.name)} 的理事档案"
        >${escapeHtml(governor.name)}</button>`
      : `<span class="timeline-item__member timeline-item__member--static">FOMC 全体会议</span>`;

    return `
      <article class="timeline-item" style="--group-color: #164b7a">
        <div class="timeline-item__meta">
          ${memberMarkup}
          <span class="timeline-item__type">${escapeHtml(item.type)}</span>
        </div>
        <h3 class="timeline-item__title">${escapeHtml(item.title)}</h3>
        <p class="timeline-item__summary">${escapeHtml(item.summary)}</p>
        <a class="timeline-item__source" href="${item.url}" target="_blank" rel="noopener noreferrer">
          ${externalLinkIcon}
          来源：${escapeHtml(item.source)}
        </a>
      </article>
    `;
  }

  function renderActivities() {
    const activities = (data.activities || [])
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    if (!activities.length) {
      activityTimeline.innerHTML = "";
      return;
    }

    const byDate = new Map();
    activities.forEach((item) => {
      if (!byDate.has(item.date)) {
        byDate.set(item.date, []);
      }
      byDate.get(item.date).push(item);
    });

    activityTimeline.innerHTML = Array.from(byDate.entries()).map(([date, items]) => `
      <div class="timeline-day">
        <time class="timeline-day__date" datetime="${date}">${formatActivityDate(date)}</time>
        <div class="timeline-day__items">${items.map(renderActivityItem).join("")}</div>
      </div>
    `).join("");
  }

  function renderSources() {
    sourceLinks.innerHTML = data.sources.map((source) => `
      <a class="source-link" href="${source.url}" target="_blank" rel="noopener noreferrer">
        ${externalLinkIcon}
        ${escapeHtml(source.label)}
      </a>
    `).join("");

    photoCredits.innerHTML = data.governors.map((governor) => `
      <a href="${governor.photoSource}" target="_blank" rel="noopener noreferrer">
        ${escapeHtml(governor.name)} · ${escapeHtml(governor.photoCredit)}
      </a>
    `).join("");
  }

  function getVisibleProfiles() {
    return Array.from(governorList.querySelectorAll(".member-profile"));
  }

  function updateToggleAllState() {
    const profiles = getVisibleProfiles();
    const allOpen = profiles.length > 0 && profiles.every((profile) => profile.open);
    toggleAll.setAttribute("aria-expanded", String(allOpen));
    toggleAll.querySelector("span").textContent = allOpen ? "收起全部" : "展开全部";
  }

  function focusGovernor(governorId) {
    const profile = document.getElementById(`profile-${governorId}`);

    if (!profile) {
      return;
    }

    profile.open = true;
    updateToggleAllState();

    window.setTimeout(() => {
      profile.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  }

  function bindEvents() {
    leadershipMap.addEventListener("click", (event) => {
      const button = event.target.closest("[data-governor-id]");
      if (button) {
        focusGovernor(button.dataset.governorId);
      }
    });

    activityTimeline.addEventListener("click", (event) => {
      const button = event.target.closest("[data-governor-id]");
      if (button) {
        focusGovernor(button.dataset.governorId);
      }
    });

    toggleAll.addEventListener("click", () => {
      const profiles = getVisibleProfiles();
      const shouldOpen = !profiles.every((profile) => profile.open);
      profiles.forEach((profile) => {
        profile.open = shouldOpen;
      });
      updateToggleAllState();
    });

    governorList.querySelectorAll(".member-profile").forEach((profile) => {
      profile.addEventListener("toggle", updateToggleAllState);
    });

    document.addEventListener("error", (event) => {
      if (event.target.tagName !== "IMG") {
        return;
      }

      const portrait = event.target.closest(".profile-portrait, .map-member__portrait");
      if (portrait) {
        portrait.classList.add("is-fallback");
        event.target.remove();
      }
    }, true);

    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("is-visible", window.scrollY > 620);
    }, { passive: true });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function observeSections() {
    const navLinks = Array.from(document.querySelectorAll(".site-nav a[href^=\"#\"]"));
    const sections = navLinks
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    }, {
      rootMargin: "-18% 0px -62% 0px",
      threshold: [0, 0.1, 0.4]
    });

    sections.forEach((section) => observer.observe(section));
  }

  renderLeadershipMap();
  renderVotingStructure();
  renderGovernors();
  renderActivities();
  renderSources();
  bindEvents();
  observeSections();
  updateToggleAllState();
}());
