(function () {
  "use strict";

  const data = window.TASK_FORCE_DATA;

  if (!data) {
    return;
  }

  const groupById = new Map(data.groups.map((group) => [group.id, group]));
  const memberById = new Map(data.members.map((member) => [member.id, member]));
  const state = {
    activeGroup: "all",
    query: ""
  };

  const leadershipMap = document.getElementById("leadershipMap");
  const mandateList = document.getElementById("mandateList");
  const groupFilters = document.getElementById("groupFilters");
  const memberList = document.getElementById("memberList");
  const memberSearch = document.getElementById("memberSearch");
  const resultStatus = document.getElementById("resultStatus");
  const emptyState = document.getElementById("emptyState");
  const toggleAll = document.getElementById("toggleAll");
  const sourceLinks = document.getElementById("sourceLinks");
  const photoCredits = document.getElementById("photoCredits");
  const activityTimeline = document.getElementById("activityTimeline");
  const activityNote = document.getElementById("activityNote");
  const backToTop = document.getElementById("backToTop");

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
    leadershipMap.innerHTML = data.groups.map((group, groupIndex) => {
      const members = data.members.filter((member) => member.group === group.id);
      const memberMarkup = members.map((member, memberIndex) => `
        <button
          class="map-member"
          type="button"
          data-member-id="${member.id}"
          aria-label="查看 ${escapeHtml(member.name)} 的人物档案"
          style="--item-order: ${groupIndex * 3 + memberIndex}"
        >
          <span class="map-member__portrait">
            <img
              src="${member.portrait}"
              alt=""
              width="116"
              height="140"
              style="object-position: ${member.portraitPosition}"
              ${groupIndex < 2 ? "fetchpriority=\"high\"" : "loading=\"lazy\""}
              decoding="async"
            >
          </span>
          <span class="map-member__copy">
            <span class="map-member__name">${escapeHtml(member.name)}</span>
            <span class="map-member__role">${escapeHtml(member.type)}</span>
          </span>
        </button>
      `).join("");

      return `
        <div class="group-lane" style="--group-color: ${group.color}">
          <div class="group-lane__label">
            <span class="group-lane__number">${group.number}</span>
            <span>
              <strong>${escapeHtml(group.name)}</strong>
              <span>${escapeHtml(group.en)}</span>
            </span>
          </div>
          <div class="group-lane__members">${memberMarkup}</div>
        </div>
      `;
    }).join("");
  }

  function renderMandates() {
    mandateList.innerHTML = data.groups.map((group) => `
      <article class="mandate-row" style="--group-color: ${group.color}">
        <span class="mandate-row__number">${group.number}</span>
        <div class="mandate-row__name">
          <strong>${escapeHtml(group.name)}</strong>
          <span>${escapeHtml(group.en)}</span>
        </div>
        <p class="mandate-row__text">${escapeHtml(group.mandate)}</p>
        <span class="mandate-row__signal">${escapeHtml(group.signal)}</span>
      </article>
    `).join("");
  }

  function renderFilters() {
    const filters = [
      { id: "all", name: `全部 · ${data.members.length}`, color: "#164b7a" },
      ...data.groups.map((group) => ({
        id: group.id,
        name: group.name.replace("工作组", ""),
        color: group.color
      }))
    ];

    groupFilters.innerHTML = filters.map((filter) => `
      <button
        class="filter-button"
        type="button"
        data-group-id="${filter.id}"
        aria-pressed="${String(state.activeGroup === filter.id)}"
        style="--group-color: ${filter.color}"
      >${escapeHtml(filter.name)}</button>
    `).join("");
  }

  function memberSearchText(member) {
    const contributionText = member.contributions
      .map((item) => `${item.title} ${item.text}`)
      .join(" ");

    return [
      member.name,
      member.cnName || "",
      member.title,
      member.type,
      member.core,
      member.bio,
      member.tags.join(" "),
      member.career.join(" "),
      contributionText,
      groupById.get(member.group).name
    ].join(" ").normalize("NFKC").toLocaleLowerCase("zh-CN");
  }

  function profileIndex(member) {
    const group = groupById.get(member.group);
    const withinGroup = data.members.filter((item) => item.group === member.group).indexOf(member) + 1;
    return `${group.number}.${withinGroup}`;
  }

  function renderMembers() {
    memberList.innerHTML = data.members.map((member) => {
      const group = groupById.get(member.group);
      const cnName = member.cnName
        ? `<span class="profile-cn-name">${escapeHtml(member.cnName)}</span>`
        : "";
      const tags = member.tags
        .map((tag) => `<span>${escapeHtml(tag)}</span>`)
        .join("");
      const career = member.career
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("");
      const contributions = member.contributions.map((item) => `
        <div class="contribution">
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.text)}</p>
        </div>
      `).join("");

      return `
        <details
          class="member-profile"
          id="profile-${member.id}"
          data-member-id="${member.id}"
          data-group-id="${member.group}"
          style="--group-color: ${group.color}"
        >
          <summary>
            <span class="profile-portrait" data-initials="${escapeHtml(member.name.split(" ").map((word) => word[0]).join(""))}">
              <img
                src="${member.portrait}"
                alt="${escapeHtml(member.name)} 肖像"
                width="312"
                height="380"
                loading="lazy"
                decoding="async"
                style="object-position: ${member.portraitPosition}"
              >
            </span>
            <span class="profile-summary">
              <span class="profile-meta">
                <span>${escapeHtml(group.name)}</span>
                <span>${escapeHtml(member.type)}</span>
              </span>
              <span class="profile-name">${escapeHtml(member.name)}${cnName}</span>
              <span class="profile-title">${escapeHtml(member.title)}</span>
              <span class="profile-core">${escapeHtml(member.core)}</span>
              <span class="profile-tags" aria-label="研究标签">${tags}</span>
            </span>
            <span class="profile-index" aria-hidden="true">${profileIndex(member)}</span>
          </summary>
          <div class="profile-details">
            <div>
              <h4>履历</h4>
              <p class="profile-bio">${escapeHtml(member.bio)}</p>
              <ol class="career-list">${career}</ol>
              <a class="photo-source" href="${member.photoSource}" target="_blank" rel="noopener noreferrer">
                ${externalLinkIcon}
                照片来源：${escapeHtml(member.photoCredit)}
              </a>
            </div>
            <div>
              <h4>研究与政策观点</h4>
              ${contributions}
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
    const member = memberById.get(item.memberId);
    if (!member) {
      return "";
    }

    const group = groupById.get(member.group);
    const cnName = member.cnName ? `（${escapeHtml(member.cnName)}）` : "";

    return `
      <article class="timeline-item" style="--group-color: ${group.color}">
        <div class="timeline-item__meta">
          <button
            class="timeline-item__member"
            type="button"
            data-member-id="${member.id}"
            aria-label="查看 ${escapeHtml(member.name)} 的人物档案"
          >${escapeHtml(member.name)}${cnName}</button>
          <span class="timeline-item__group">${escapeHtml(group.name.replace("工作组", ""))}</span>
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

    const activeIds = new Set(activities.map((item) => item.memberId));
    const inactiveMembers = data.members.filter((member) => !activeIds.has(member.id));

    if (!activities.length) {
      activityTimeline.innerHTML = "";
      activityNote.textContent = "2026 年 7 月 9 日宣布以来，暂无可核验的公开活动记录。";
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

    if (inactiveMembers.length) {
      const names = inactiveMembers
        .map((member) => member.cnName || member.name)
        .join("、");
      activityNote.textContent = `其余 ${inactiveMembers.length} 位成员在此期间无公开动态记录：${names}。`;
    } else {
      activityNote.textContent = "";
    }
  }

  function renderSources() {
    sourceLinks.innerHTML = data.sources.map((source) => `
      <a class="source-link" href="${source.url}" target="_blank" rel="noopener noreferrer">
        ${externalLinkIcon}
        ${escapeHtml(source.label)}
      </a>
    `).join("");

    photoCredits.innerHTML = data.members.map((member) => `
      <a href="${member.photoSource}" target="_blank" rel="noopener noreferrer">
        ${escapeHtml(member.name)} · ${escapeHtml(member.photoCredit)}
      </a>
    `).join("");
  }

  function getVisibleProfiles() {
    return Array.from(memberList.querySelectorAll(".member-profile:not([hidden])"));
  }

  function updateToggleAllState() {
    const visibleProfiles = getVisibleProfiles();
    const allOpen = visibleProfiles.length > 0 && visibleProfiles.every((profile) => profile.open);
    toggleAll.setAttribute("aria-expanded", String(allOpen));
    toggleAll.querySelector("span").textContent = allOpen ? "收起全部" : "展开全部";
  }

  function applyFilters() {
    const query = state.query.normalize("NFKC").trim().toLocaleLowerCase("zh-CN");
    let visibleCount = 0;

    data.members.forEach((member) => {
      const profile = document.getElementById(`profile-${member.id}`);
      const groupMatch = state.activeGroup === "all" || member.group === state.activeGroup;
      const queryMatch = !query || memberSearchText(member).includes(query);
      const visible = groupMatch && queryMatch;

      profile.hidden = !visible;
      if (visible) {
        visibleCount += 1;
      }
    });

    resultStatus.textContent = `显示 ${visibleCount} 位成员`;
    emptyState.hidden = visibleCount !== 0;
    memberList.hidden = visibleCount === 0;
    renderFilters();
    updateToggleAllState();
  }

  function focusMember(memberId) {
    const member = memberById.get(memberId);
    const profile = document.getElementById(`profile-${memberId}`);

    if (!member || !profile) {
      return;
    }

    state.activeGroup = member.group;
    state.query = "";
    memberSearch.value = "";
    applyFilters();
    profile.open = true;
    updateToggleAllState();

    window.setTimeout(() => {
      profile.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  }

  function bindEvents() {
    leadershipMap.addEventListener("click", (event) => {
      const button = event.target.closest("[data-member-id]");
      if (button) {
        focusMember(button.dataset.memberId);
      }
    });

    activityTimeline.addEventListener("click", (event) => {
      const button = event.target.closest("[data-member-id]");
      if (button) {
        focusMember(button.dataset.memberId);
      }
    });

    groupFilters.addEventListener("click", (event) => {
      const button = event.target.closest("[data-group-id]");
      if (!button) {
        return;
      }

      state.activeGroup = button.dataset.groupId;
      applyFilters();
    });

    memberSearch.addEventListener("input", (event) => {
      state.query = event.target.value;
      applyFilters();
    });

    toggleAll.addEventListener("click", () => {
      const visibleProfiles = getVisibleProfiles();
      const shouldOpen = !visibleProfiles.every((profile) => profile.open);
      visibleProfiles.forEach((profile) => {
        profile.open = shouldOpen;
      });
      updateToggleAllState();
    });

    memberList.querySelectorAll(".member-profile").forEach((profile) => {
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
    const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
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
  renderMandates();
  renderFilters();
  renderMembers();
  renderActivities();
  renderSources();
  bindEvents();
  observeSections();
  applyFilters();
}());
