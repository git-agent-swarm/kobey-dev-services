/* Kobey Dev Services — bilingual interactions, nav, form, reveal.
   Progressive enhancement: the page is fully usable without JS. */

(() => {
  "use strict";

  const i18n = {
    en: {
      skipLink: "Skip to content",
      navWork: "Work",
      navServices: "Services",
      navProcess: "Process",
      navPricing: "Pricing",
      navContact: "Contact",
      heroEyebrow: "AI-assisted automation · software · content",
      heroTitle1: "Automate the busywork.",
      heroTitle2: "Ship software, fast.",
      heroLead: "I help small and mid-size businesses cut the repetitive work and ship the custom software they actually need — with the craft of a studio, minus the enterprise overhead or price tag.",
      ctaPrimary: "Start a project",
      ctaSecondary: "Explore the work",
      heroNote: "Chinese-speaking clients welcome — Chinese communication and docs available.",
      approachLabel: "(Approach)",
      approachLine1: "You don't need an enterprise team.",
      approachLine2: "You need the busywork gone,",
      approachLine3: "the right tools talking to each other,",
      approachLine4: "and software that ships in days —",
      approachLine5: "not quarters.",
      approachBody: "I design the systems, wire the integrations, and put AI to work only where it actually earns its place. Real tools, real handover, real ownership — no theatre, no lock-in.",
      workLabel: "(Proof, not promises)",
      workTitle: "Real sites I've built — click any of them.",
      workSubtitle: "Whatever your business is, you're looking at the bar I build to.",
      demoVoltworksTag: "Electrician · Contractor",
      demoVoltworksTitle: "VoltWorks Electrical",
      demoVoltworksDesc: "A trade-contractor site that wins jobs: service pages, an instant quote estimator, emergency intake, and project proof.",
      liveDemo: "▶ Live demo",
      viewCode: "Code",
      demoJuniperTag: "Restaurant · Café · Food",
      demoJuniperTitle: "Juniper Table",
      demoJuniperDesc: "A restaurant site that fills tables: reservations, order-ahead cart, beautiful menu cards, private-dining CTA, hours, and reviews.",
      demoLeaseTag: "Property · Real estate",
      demoLeaseTitle: "LeasePilot",
      demoLeaseDesc: "An operations dashboard for property managers: maintenance tickets, SLA risk, vendor assignment, rent status, and inspection schedules.",
      workMore: "And 17+ deeper builds — AI agents, Azure Functions, Auth0, NVIDIA NIM, scrapers, dashboards — on <a href=\"https://github.com/git-agent-swarm\" target=\"_blank\" rel=\"noopener\">my GitHub org</a>.",
      servicesLabel: "(01 — Services)",
      servicesTitle: "What I build",
      servicesSubtitle: "Six ways I take work off your plate — pick one, or string them together into something that runs itself.",
      svc1Title: "Workflow Automation",
      svc1Desc: "Map the busywork, then make it disappear. Zapier, Make, n8n, or custom scripts that run quietly in the background while you do the work that matters.",
      svc2Title: "Custom AI Agents",
      svc2Desc: "Assistants tuned to your data and your voice — drafting, triaging, researching, and answering on autopilot, with you firmly in control.",
      svc3Title: "Dashboards & Data",
      svc3Desc: "Clean the mess, connect the sources, and turn scattered data into dashboards you'll actually open every morning.",
      svc4Title: "API Integrations",
      svc4Desc: "Make your stack talk. Reliable, well-documented connections between the tools you already pay for — no more copy-paste between tabs.",
      svc5Title: "Small Apps & POCs",
      svc5Desc: "From idea to working prototype, fast. Internal tools, MVPs, and proofs-of-concept that ship — built to be expanded, not thrown away.",
      svc6Title: "Technical Content",
      svc6Desc: "Docs, guides, and developer-grade content that explains the hard parts clearly — so people actually use what you build.",
      processLabel: "(02 — Process)",
      processTitle: "How the work happens",
      processSubtitle: "A tight, transparent loop from first conversation to handover. You always know where things stand and what's next.",
      step1Title: "Audit",
      step1Desc: "We find the busywork. A focused look at where your time leaks and what's worth automating first.",
      step2Title: "Blueprint",
      step2Desc: "A clear plan — scope, tools, and the fastest path to value. No surprises, no bloat, no jargon.",
      step3Title: "Build",
      step3Desc: "I work in tight loops, shipping working pieces early so you see real progress instead of promises.",
      step4Title: "Ship",
      step4Desc: "Tested, documented, and handed over — running inside your stack and fully owned by you.",
      step5Title: "Care",
      step5Desc: "Optional ongoing support to tune, extend, and keep everything humming as you grow.",
      pricingLabel: "(03 — Engagements)",
      pricingTitle: "Transparent pricing",
      pricingSubtitle: "Honest starting points, not a maze. Every project is scoped to your problem — these are where the conversation begins.",
      pkg1Title: "Automation Audit",
      pkg1Price: "from $250",
      pkg1Desc: "A deep look at your workflows with a prioritized roadmap you can act on — with or without me.",
      pkg1Item1: "Workflow & tooling review",
      pkg1Item2: "Opportunity map",
      pkg1Item3: "Prioritized roadmap",
      pkg1Item4: "One quick-win prototype",
      pkg2Title: "Starter Build",
      pkg2Price: "from $750",
      pkg2Desc: "One automation or integration, built end-to-end and handed over.",
      pkg2Item1: "Single workflow or integration",
      pkg2Item2: "Setup & testing",
      pkg2Item3: "Short handover doc",
      pkg2Item4: "Two weeks of fixes",
      pkg3Title: "Standard Build",
      pkg3Price: "from $1,800",
      pkg3Desc: "A connected set of automations or a focused internal tool that earns its keep.",
      pkg3Item1: "Multiple workflows",
      pkg3Item2: "Dashboard or light app",
      pkg3Item3: "Full documentation",
      pkg3Item4: "30-day support window",
      mostPicked: "Most picked",
      pkg4Title: "Custom / App Build",
      pkg4Price: "from $2,500",
      pkg4Desc: "A custom app, AI agent, or POC scoped tightly around your problem.",
      pkg4Item1: "Custom app or AI agent",
      pkg4Item2: "Data & API integrations",
      pkg4Item3: "Deploy & handover",
      pkg4Item4: "Iteration loops",
      enquire: "Enquire →",
      careTitle: "Ongoing care plans",
      careSubtitle: "Keep it running, keep it improving. Optional monthly support once you're live — for tuning, extending, and peace of mind. Cancel anytime.",
      care1Title: "Essential",
      care1Price: "$200/month",
      care1Desc: "Monitoring, small tweaks, and priority email support to keep things running.",
      care2Title: "Growth",
      care2Price: "$450/month",
      care2Desc: "Everything in Essential, plus monthly improvements and a few hours of build time.",
      care3Title: "Partner",
      care3Price: "$850/month",
      care3Desc: "Standing build capacity, faster turnarounds, and a recurring strategy call.",
      contactLabel: "(04 — Contact)",
      contactTitle: "Let's build something.",
      contactSubtitle: "Tell me what you're trying to automate or build. I read every message and reply personally — usually within a day.",
      callOrText: "— call or text",
      location: "Wichita Falls, TX — available remote · 全球远程可服务",
      labelName: "Your name",
      labelEmail: "Email",
      labelCompany: "Company <span class=\"opt\">(optional)</span>",
      labelNeed: "What do you need?",
      needWorkflow: "Workflow Automation",
      needAI: "Custom AI Agents",
      needDashboard: "Dashboards & Data",
      needIntegration: "API Integrations",
      needApp: "Small Apps & POCs",
      needContent: "Technical Content",
      needNotSure: "Not sure yet",
      labelMessage: "Tell me about it",
      sendBtn: "Send it →",
      footerTag: "AI-assisted automation · software · content",
      footerMeta: "Remote · Worldwide · 远程 · 全球",
    },
    zh: {
      skipLink: "跳到内容",
      navWork: "作品",
      navServices: "服务",
      navProcess: "流程",
      navPricing: "价格",
      navContact: "联系",
      heroEyebrow: "AI 辅助自动化 · 软件 · 内容",
      heroTitle1: "自动化繁琐事务。",
      heroTitle2: "快速交付软件。",
      heroLead: "我帮助中小企业砍掉重复性工作，交付真正需要的定制软件——兼具工作室的精致，却没有大公司的冗余开销和高昂价格。",
      ctaPrimary: "开启项目",
      ctaSecondary: "查看作品",
      heroNote: "也欢迎中文客户 — 可提供中文沟通、中文文档与双语交付。",
      approachLabel: "（理念）",
      approachLine1: "你不需要一支企业级团队。",
      approachLine2: "你需要的是繁琐工作消失、",
      approachLine3: "工具彼此连通、",
      approachLine4: "软件在数天而非数月内交付。",
      approachLine5: "",
      approachBody: "我设计系统、连接集成，只在 AI 真正创造价值的地方使用 AI。真实的工具、完整的交付、完全归属你——没有表演，没有锁定。",
      workLabel: "（实绩，而非承诺）",
      workTitle: "我构建的真实网站——点击即可查看。",
      workSubtitle: "无论你的业务是什么，这就是我所坚持的标准。",
      demoVoltworksTag: "电工 · 承包商",
      demoVoltworksTitle: "VoltWorks 电气",
      demoVoltworksDesc: "一个为承包商赢得业务的网站：服务页面、即时报价、紧急报修入口和项目案例。",
      liveDemo: "▶ 在线演示",
      viewCode: "代码",
      demoJuniperTag: "餐厅 · 咖啡馆 · 餐饮",
      demoJuniperTitle: "Juniper Table",
      demoJuniperDesc: "一个为餐厅带来更多客流的网站：预订、提前点餐、精美菜单、私宴 CTA、营业时间和评价。",
      demoLeaseTag: "房产 · 房地产",
      demoLeaseTitle: "LeasePilot",
      demoLeaseDesc: "为物业经理打造的操作面板：维修工单、SLA 风险、供应商分配、租金状态和巡检计划。",
      workMore: "还有 17+ 深度作品——AI 智能体、Azure Functions、Auth0、NVIDIA NIM、爬虫、数据面板——尽在 <a href=\"https://github.com/git-agent-swarm\" target=\"_blank\" rel=\"noopener\">我的 GitHub 组织</a>。",
      servicesLabel: "（01 — 服务）",
      servicesTitle: "我能构建什么",
      servicesSubtitle: "六种为你减负的方式——任选其一，或串联成自动运行的系统。",
      svc1Title: "工作流自动化",
      svc1Desc: "梳理繁琐流程，然后让它消失。Zapier、Make、n8n 或自定义脚本，在后台静默运行，让你专注真正重要的工作。",
      svc2Title: "定制 AI 智能体",
      svc2Desc: "基于你的数据和语气调教的助手——自动起草、分类、研究和回复，而你始终掌握控制权。",
      svc3Title: "数据面板与数据",
      svc3Desc: "清理混乱数据，连接多个来源，把分散的信息变成你每天早上都想打开的面板。",
      svc4Title: "API 集成",
      svc4Desc: "让你的工具栈彼此对话。在你已付费的工具之间建立可靠、文档完善的连接——不再在标签页间复制粘贴。",
      svc5Title: "小型应用与概念验证",
      svc5Desc: "从想法到可用原型，快速实现。内部工具、MVP 和概念验证——它们是为了扩展而生，不是用完即弃。",
      svc6Title: "技术内容",
      svc6Desc: "文档、指南和开发者级别的内容，把复杂部分讲清楚——让人们真正使用你构建的东西。",
      processLabel: "（02 — 流程）",
      processTitle: "工作如何推进",
      processSubtitle: "从首次沟通到交付，紧密而透明的闭环。你始终清楚现状和下一步。",
      step1Title: "诊断",
      step1Desc: "找到繁琐工作。聚焦时间浪费点，判断最值得优先自动化的地方。",
      step2Title: "规划",
      step2Desc: "清晰的方案——范围、工具和最快的价值路径。没有意外、没有冗余、没有行话。",
      step3Title: "构建",
      step3Desc: "我以小步快跑的方式工作，尽早交付可用片段，让你看到真实进展而非空头承诺。",
      step4Title: "交付",
      step4Desc: "经过测试、文档完善并交付——运行在你的技术栈中，完全归你所有。",
      step5Title: "维护",
      step5Desc: "可选的持续支持，随着你的成长进行调优、扩展，确保一切顺畅运行。",
      pricingLabel: "（03 — 合作方式）",
      pricingTitle: "透明定价",
      pricingSubtitle: "诚实的起点，不是迷宫。每个项目都围绕你的问题量身定制——这些是对话的起点。",
      pkg1Title: "自动化诊断",
      pkg1Price: "$250 起",
      pkg1Desc: "深入审视你的工作流，给出可执行的优先级路线图——无论是否与我合作。",
      pkg1Item1: "工作流与工具审查",
      pkg1Item2: "机会地图",
      pkg1Item3: "优先级路线图",
      pkg1Item4: "一个快速胜利原型",
      pkg2Title: "入门构建",
      pkg2Price: "$750 起",
      pkg2Desc: "一个端到端的自动化或集成，构建完成并交付。",
      pkg2Item1: "单一工作流或集成",
      pkg2Item2: "配置与测试",
      pkg2Item3: "简短交付文档",
      pkg2Item4: "两周修复支持",
      pkg3Title: "标准构建",
      pkg3Price: "$1,800 起",
      pkg3Desc: "一组相互连接的工作流，或一个聚焦的内部工具，能够真正产生价值。",
      pkg3Item1: "多个工作流",
      pkg3Item2: "数据面板或轻量应用",
      pkg3Item3: "完整文档",
      pkg3Item4: "30 天支持窗口",
      mostPicked: "最受欢迎",
      pkg4Title: "定制 / 应用构建",
      pkg4Price: "$2,500 起",
      pkg4Desc: "围绕你的问题量身定制的应用、AI 智能体或概念验证。",
      pkg4Item1: "定制应用或 AI 智能体",
      pkg4Item2: "数据与 API 集成",
      pkg4Item3: "部署与交付",
      pkg4Item4: "迭代优化",
      enquire: "咨询 →",
      careTitle: "持续维护计划",
      careSubtitle: "保持运行，持续改进。上线后可选择月度支持，用于调优、扩展和安心保障。随时可取消。",
      care1Title: "基础版",
      care1Price: "$200/月",
      care1Desc: "监控、小调整和优先邮件支持，确保系统正常运行。",
      care2Title: "成长版",
      care2Price: "$450/月",
      care2Desc: "包含基础版全部内容，外加每月改进和数小时构建时间。",
      care3Title: "合作伙伴版",
      care3Price: "$850/月",
      care3Desc: "固定构建容量、更快交付周期和定期战略会议。",
      contactLabel: "（04 — 联系）",
      contactTitle: "一起构建点什么。",
      contactSubtitle: "告诉我你想自动化或构建什么。我亲自阅读并回复每条消息——通常在一天内。",
      callOrText: "—— 可电话或短信",
      location: "Wichita Falls, TX — 可远程服务全球",
      labelName: "您的姓名",
      labelEmail: "电子邮箱",
      labelCompany: "公司 <span class=\"opt\">（选填）</span>",
      labelNeed: "您需要什么？",
      needWorkflow: "工作流自动化",
      needAI: "定制 AI 智能体",
      needDashboard: "数据面板与数据",
      needIntegration: "API 集成",
      needApp: "小型应用与概念验证",
      needContent: "技术内容",
      needNotSure: "还不确定",
      labelMessage: "请详细描述",
      sendBtn: "发送 →",
      footerTag: "AI 辅助自动化 · 软件 · 内容",
      footerMeta: "远程 · 全球 · Remote · Worldwide",
    },
  };

  let currentLang = "en";

  /* Chinese fonts (Noto Sans/Serif SC) are self-hosted as a variable subset in
     index.html via @font-face + CJK unicode-range, so the browser loads them
     automatically only when Chinese is rendered — no JS, no Google CDN needed. */

  function setLang(lang) {
    if (!i18n[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const text = i18n[lang][key];
      if (text === undefined) return;
      if (text.includes("<") && el.innerHTML !== text) {
        el.innerHTML = text;
      } else if (el.textContent !== text) {
        el.textContent = text;
      }
    });

    document.querySelectorAll(".lang-option").forEach((opt) => {
      opt.classList.toggle("active", opt.dataset.lang === lang);
    });

    try { localStorage.setItem("kds-lang", lang); } catch {}
  }

  function initLang() {
    const params = new URLSearchParams(location.search);
    const paramLang = params.get("lang");
    const storedLang = (() => { try { return localStorage.getItem("kds-lang"); } catch { return null; } })();
    const browserLang = navigator.language?.toLowerCase().startsWith("zh") ? "zh" : "en";
    const lang = i18n[paramLang] ? paramLang : (i18n[storedLang] ? storedLang : browserLang);
    setLang(lang);

    document.getElementById("lang-toggle")?.addEventListener("click", () => {
      setLang(currentLang === "en" ? "zh" : "en");
    });
  }

  /* Header scroll state */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Mobile nav */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    const setOpen = (open) => {
      menu.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  }

  /* Scroll reveal */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("in"); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* Year */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Need chips */
  const needOptions = document.querySelectorAll(".need-chip");
  const needsInput = document.getElementById("needs-input");
  const selectedNeeds = new Set();
  needOptions.forEach((chip) => {
    chip.addEventListener("click", () => {
      const val = chip.dataset.value;
      if (selectedNeeds.has(val)) {
        selectedNeeds.delete(val);
        chip.classList.remove("active");
      } else {
        selectedNeeds.add(val);
        chip.classList.add("active");
      }
      if (needsInput) needsInput.value = Array.from(selectedNeeds).join(", ");
    });
  });

  /* Contact form */
  const form = document.querySelector(".contact-form");
  if (form) {
    const note = form.querySelector("[data-form-note]");

    const showError = (input, message) => {
      const field = input.closest(".field");
      const slot = form.querySelector(`.error[data-for="${input.id}"]`);
      field?.classList.toggle("invalid", Boolean(message));
      if (slot) slot.textContent = message;
      input.setAttribute("aria-invalid", message ? "true" : "false");
    };

    const validate = (input) => {
      const value = input.value.trim();
      if (input.required && !value) return currentLang === "zh" ? "此字段为必填项。" : "This field is required.";
      if (input.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return currentLang === "zh" ? "请输入有效的电子邮箱地址。" : "Please enter a valid email address.";
      return "";
    };

    const showNote = (msg) => { if (note) { note.hidden = false; note.textContent = msg; } };

    form.querySelectorAll("input, textarea").forEach((input) =>
      input.addEventListener("blur", () => showError(input, validate(input)))
    );

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      let firstInvalid = null;
      form.querySelectorAll("input, textarea").forEach((input) => {
        const msg = validate(input);
        showError(input, msg);
        if (msg && !firstInvalid) firstInvalid = input;
      });
      if (firstInvalid) { firstInvalid.focus(); return; }

      const fd = new FormData(form);
      const payload = {
        name: (fd.get("name") || "").toString().trim(),
        email: (fd.get("email") || "").toString().trim(),
        phone: "",
        company: (fd.get("company") || "").toString().trim(),
        needs: (fd.get("needs") || "").toString().trim(),
        message: (fd.get("message") || "").toString().trim(),
        language: currentLang,
      };
      const submitBtn = form.querySelector('button[type="submit"]');
      const original = submitBtn ? submitBtn.textContent : "";

      if (typeof window.sendLead === "function") {
        if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = currentLang === "zh" ? "发送中…" : "Sending…"; }
        try {
          await window.sendLead(payload);
          showNote(currentLang === "zh" ? "已收到——我会在一个工作日内回复。" : "Thanks, Kobey got it — I'll get back to you within one business day.");
          form.reset();
          selectedNeeds.clear();
          needOptions.forEach((c) => c.classList.remove("active"));
        } catch (err) {
          showNote(currentLang === "zh" ? "发送失败，请重试或通过 GitHub 联系我。" : "Something went wrong sending that. Please try again or reach me on GitHub.");
        } finally {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = original; }
        }
      } else {
        showNote(currentLang === "zh" ? "感谢！（演示模式——连接后端后即可接收消息。）" : "Thanks! (Demo mode — connect a backend to receive messages.)");
        form.reset();
        selectedNeeds.clear();
        needOptions.forEach((c) => c.classList.remove("active"));
      }
    });
  }

  initLang();
})();
