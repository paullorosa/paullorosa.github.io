// Paulo de Araújo Rosa portfolio · main.js

(() => {
	"use strict";

	/* ---------- i18n ---------- */

	const STRINGS = {
		pt: {
			kicker: "disponível para colaborações",
			role: "frontend & designer",
			"role-art": "artista",
			"role-eng": "software engineer",
			years: "anos",
			"ph-hint": "copia a tua foto para aqui",
			caption: "retrato · self",
			loc: "Maputo / Beira, Moçambique",
			bio: "14+ anos entre design gráfico, vídeo, modelação 3D e desenvolvimento. Construo produtos com impacto local — apps de cidadania, saúde, educação e ferramentas próprias como o Kaia para cidades procedurais.",
			"nav-kaia": "Kaia",
			"nav-work": "trabalho",
			"nav-os": "open source",
			"nav-exp": "percurso",
			"nav-stack": "stack",
			"nav-contact": "contacto",

			"kaia-tag": "projecto pessoal",
			"kaia-status": "em desenvolvimento",
			"kaia-sub": "cidades procedurais",
			"kaia-tagline": "O único produto que desenho de raiz e ao meu próprio ritmo. Toolkit desktop composto por duas ferramentas que conversam entre si.",
			"kaia-visit": "visitar página",
			"kt-grelha-pill": "layout · 2D → 3D",
			"kt-grelha-desc": "Gera o tecido urbano. Pinta-se a grelha em 2D — lotes, ruas, blocos — e o motor reconstrói a cidade em 3D.",
			"kt-grelha-b1": "grelha procedural",
			"kt-grelha-b2": "lote → bloco → bairro",
			"kt-grelha-b3": "export 3D",
			"kt-dna-pill": "rules · identity",
			"kt-dna-desc": "Define o \"DNA\" de cada bairro: alturas, materiais, densidade, ritmo. Regras simples; resultado complexo e único.",
			"kt-dna-b1": "regras → estilo",
			"kt-dna-b2": "materiais & alturas",
			"kt-dna-b3": "variação controlada",

			pitch: "14+ anos a desenhar e construir produtos digitais em Moçambique. Do storyboard 3D à linha de código, do gov ao social. Foco em coisas que funcionam offline e fazem diferença local.",
			"m-years": "anos de carreira",
			"m-products": "produtos digitais",
			"m-sectors": "sectores · gov · saúde · social · agro · comércio",
			"m-stack": "pt · en · design · dev · 3D · vídeo",

			"work-title": "produtos por sector",
			"work-sub": "Apps e produtos onde fui responsável pelo frontend, design ou ambos. Agrupados pelo público que servem.",

			"sec-gov": "cidadania · leis · serviços públicos",
			"sec-health": "saúde pública · emergências · prevenção",
			"sec-social": "cultura · educação · fé · línguas",
			"sec-agro": "cadeias produtivas · vendas · trânsito",

			"m-juris": "App de cidadania. Leis moçambicanas simplificadas, em texto + áudio. 20.000+ utilizadores.",
			"m-dondo": "Portal oficial do município. Serviços, anúncios, transparência.",
			"m-consultare": "Primeiros socorros offline. Desenvolvido com médicos MZ. Aprovação MISAU.",
			"m-doamoz": "Plataforma de doações na área da saúde em Moçambique.",
			"m-semmo": "Sistema de Emergência Médica de Moçambique. Resposta rápida no terreno.",
			"m-fonte": "Bíblia áudio sincronizada em 30+ línguas africanas. Offline-first.",
			"m-kukura": "App de impacto social — apoio comunitário e empreendedorismo local.",
			"m-adrj": "App da congregação — agenda, conteúdo e comunidade. Rio de Janeiro, Brasil.",
			"m-cyanga": "App de impacto social em Moçambique. 1º lugar Indigitous Beira 2020 — Melhor Tecnologia & Inovação.",
			"m-fams": "Farmers and Agent Management System. Núcleo de gestão para agronegócio em Manica e outras províncias. GIZ.",
			"m-perpi": "Sistema de compras online — frontend e checkout. Bezalel/MZ-Coders.",
			"m-abastece": "App comunitária para condutores em MZ. Combustível em tempo real.",
			"m-manna": "Software para hospitality & turismo. Suite mobile/web.",

			"ml-no-public": "sem link público",
			"ml-mobile": "mobile",

			"more-apps": "+ outras apps que ajudei a construir",

			"web-title": "web institucional & freelance",
			"web-sub": "Sites para organizações, ONGs e clientes comerciais — frontend ou pacote completo.",
			"w-equip": "organização · Beira, MZ",
			"w-empoder": "ONG · empoderamento social",
			"w-dondo": "portal municipal · Dondo",
			"w-cohen": "marcenaria artesanal · EUA",
			"w-caper": "programador · ES, Brasil",
			"w-fams": "plataforma · Beira",

			"os-title": "open source",
			"os-sub": "Repos próprios e contribuições às organizações onde colaboro.",
			"os-personal": "pessoal",
			"os-orgs": "organizações",
			"o-mz": "~44 repos · Manna, Perpi, dev tools",
			"o-equip": "hackpoverty · empoderando · low-code",
			"o-start": "incubadora · spec-kit workshops",
			"o-genesi": "software house",

			"exp-title": "percurso",
			"exp-sub": "Da edição de vídeo ao frontend, passando por design 3D. Cronologia condensada.",
			"t-now": "actual",
			"t-urban-role": "Proprietário",
			"t-golden-role": "Modelagem 3D + Python",
			"t-empoder-role": "Programador frontend + designer",
			"t-moza-role": "Designer + ilustrador 3D",
			"t-nve-role": "Editor de vídeo + camera man",
			"t-ms-role": "Editor + camera man + designer",
			"t-africa-role": "Editor de vídeo + genéricos",

			"stack-title": "stack",
			"stack-sub": "Ferramentas com que trabalho no dia-a-dia. Curiosidade activa por IA, automação e gráficos procedurais.",
			"s-dev": "desenvolvimento",
			"s-design": "design",
			"s-3d": "3D & motion",
			"s-interest": "interesses activos",
			"s-llm": "LLMs & IA aplicada",
			"s-auto": "automação de tarefas",
			"s-proc": "gráficos procedurais",
			"s-emb": "sistemas embebidos",

			"recog-title": "reconhecimentos & parceiros",
			"recog-sub": "Quem financiou, quem distinguiu, e quem ajudou a tornar os produtos possíveis.",
			"recog-prizes": "reconhecimentos",
			"recog-funders": "financiadores & parceiros",
			"r-cyanga": "1º lugar — C-YANGA · Melhor Tecnologia & Inovação",
			"r-hb": "Hack Beira 2020 · participação",
			"r-more": "acrescentar prémios & menções",

			"contact-title": "contacto",
			"contact-sub": "Para projectos, parcerias ou apenas uma conversa. Respondo em 2–3 dias úteis.",
			"f-name": "nome",
			"f-email": "email",
			"f-message": "mensagem",
			"f-send": "enviar mensagem",
			"f-note": "abre o teu cliente de email com a mensagem pronta.",
			"k-email": "email",
			"k-phone": "telefone",
			"k-loc": "localização",
			"k-loc-val": "Maputo / Beira, MZ",
			"k-tz": "fuso",
			"back-top": "voltar ao topo ↑",
		},
		en: {
			kicker: "open for collaborations",
			role: "frontend & designer",
			"role-art": "artist",
			"role-eng": "software engineer",
			years: "years",
			"ph-hint": "drop your photo here",
			caption: "self portrait",
			loc: "Maputo / Beira, Mozambique",
			bio: "14+ years across graphic design, video, 3D modelling and development. I build products with local impact — apps for civic life, health and education, and personal tools like Kaia for procedural cities.",
			"nav-kaia": "Kaia",
			"nav-work": "work",
			"nav-os": "open source",
			"nav-exp": "experience",
			"nav-stack": "stack",
			"nav-contact": "contact",

			"kaia-tag": "personal project",
			"kaia-status": "in development",
			"kaia-sub": "procedural cities",
			"kaia-tagline": "The only product I design from scratch, at my own pace. A desktop toolkit made of two tools that talk to each other.",
			"kaia-visit": "visit page",
			"kt-grelha-pill": "layout · 2D → 3D",
			"kt-grelha-desc": "Lays out the urban fabric. You paint the grid in 2D — lots, streets, blocks — and the engine rebuilds the city in 3D.",
			"kt-grelha-b1": "procedural grid",
			"kt-grelha-b2": "lot → block → neighbourhood",
			"kt-grelha-b3": "3D export",
			"kt-dna-pill": "rules · identity",
			"kt-dna-desc": "Defines each neighbourhood's \"DNA\": heights, materials, density, rhythm. Simple rules; complex, unique result.",
			"kt-dna-b1": "rules → style",
			"kt-dna-b2": "materials & heights",
			"kt-dna-b3": "controlled variation",

			pitch: "14+ years designing and building digital products in Mozambique. From 3D storyboard to a line of code, from gov to social. Focused on things that work offline and make a local difference.",
			"m-years": "years in the field",
			"m-products": "digital products",
			"m-sectors": "sectors · gov · health · social · agro · commerce",
			"m-stack": "pt · en · design · dev · 3D · video",

			"work-title": "products by sector",
			"work-sub": "Apps and products where I led frontend, design, or both. Grouped by the audience they serve.",

			"sec-gov": "citizenship · laws · public services",
			"sec-health": "public health · emergencies · prevention",
			"sec-social": "culture · education · faith · languages",
			"sec-agro": "value chains · sales · mobility",

			"m-juris": "Civic app. Mozambican laws made simple, in text + audio. 20,000+ users.",
			"m-dondo": "Official municipal portal. Services, announcements, transparency.",
			"m-consultare": "Offline first-aid guide. Built with MZ doctors. MISAU-approved.",
			"m-doamoz": "Donations platform in the health space in Mozambique.",
			"m-semmo": "Mozambique Medical Emergency System. Fast response on the ground.",
			"m-fonte": "Synchronised audio Bible in 30+ African languages. Offline-first.",
			"m-kukura": "Social-impact app — community support and local entrepreneurship.",
			"m-adrj": "Congregation app — schedule, content and community. Rio de Janeiro, Brazil.",
			"m-cyanga": "Social-impact app in Mozambique. 1st place Indigitous Beira 2020 — Best Tech & Innovation.",
			"m-fams": "Farmers and Agent Management System. Core platform for agribusiness in Manica and other provinces. GIZ.",
			"m-perpi": "Online shopping platform — frontend and checkout. Bezalel/MZ-Coders.",
			"m-abastece": "Community app for drivers in MZ. Real-time fuel info.",
			"m-manna": "Hospitality & tourism software. Mobile/web suite.",

			"ml-no-public": "no public link",
			"ml-mobile": "mobile",

			"more-apps": "+ other apps I've helped build",

			"web-title": "institutional & freelance web",
			"web-sub": "Sites for organisations, NGOs and commercial clients — frontend or full delivery.",
			"w-equip": "organisation · Beira, MZ",
			"w-empoder": "NGO · social empowerment",
			"w-dondo": "municipal portal · Dondo",
			"w-cohen": "artisanal woodworking · USA",
			"w-caper": "developer · ES, Brazil",
			"w-fams": "platform · Beira",

			"os-title": "open source",
			"os-sub": "Personal repos and contributions to the organisations I collaborate with.",
			"os-personal": "personal",
			"os-orgs": "organisations",
			"o-mz": "~44 repos · Manna, Perpi, dev tools",
			"o-equip": "hackpoverty · empoderando · low-code",
			"o-start": "incubator · spec-kit workshops",
			"o-genesi": "software house",

			"exp-title": "experience",
			"exp-sub": "From video editing to frontend, with 3D design in between. Condensed timeline.",
			"t-now": "present",
			"t-urban-role": "Owner",
			"t-golden-role": "3D modelling + Python",
			"t-empoder-role": "Frontend developer + designer",
			"t-moza-role": "Designer + 3D illustrator",
			"t-nve-role": "Video editor + camera",
			"t-ms-role": "Editor + camera + designer",
			"t-africa-role": "Video editor + titles",

			"stack-title": "stack",
			"stack-sub": "Day-to-day tools. Active curiosity for AI, automation and procedural graphics.",
			"s-dev": "development",
			"s-design": "design",
			"s-3d": "3D & motion",
			"s-interest": "active interests",
			"s-llm": "LLMs & applied AI",
			"s-auto": "task automation",
			"s-proc": "procedural graphics",
			"s-emb": "embedded systems",

			"recog-title": "recognition & partners",
			"recog-sub": "Who funded, who distinguished, and who helped make the products possible.",
			"recog-prizes": "recognition",
			"recog-funders": "funders & partners",
			"r-cyanga": "1st place — C-YANGA · Best Tech & Innovation",
			"r-hb": "Hack Beira 2020 · participant",
			"r-more": "add prizes & mentions",

			"contact-title": "contact",
			"contact-sub": "For projects, partnerships, or just a chat. I reply within 2–3 business days.",
			"f-name": "name",
			"f-email": "email",
			"f-message": "message",
			"f-send": "send message",
			"f-note": "opens your mail client with the message prefilled.",
			"k-email": "email",
			"k-phone": "phone",
			"k-loc": "location",
			"k-loc-val": "Maputo / Beira, Mozambique",
			"k-tz": "timezone",
			"back-top": "back to top ↑",
		},
	};

	const LANG_KEY = "paullorosa.lang";

	function applyLang(lang) {
		const dict = STRINGS[lang] || STRINGS.pt;
		document.documentElement.setAttribute("lang", lang);
		document.documentElement.setAttribute("data-lang", lang);
		document.querySelectorAll("[data-i18n]").forEach((el) => {
			const key = el.getAttribute("data-i18n");
			if (dict[key] != null) el.textContent = dict[key];
		});
		try { localStorage.setItem(LANG_KEY, lang); } catch (_) {}
	}

	function initLang() {
		let stored = null;
		try { stored = localStorage.getItem(LANG_KEY); } catch (_) {}
		const browser = (navigator.language || "pt").slice(0, 2).toLowerCase();
		const lang = stored || (browser === "en" ? "en" : "pt");
		applyLang(lang);

		const btn = document.getElementById("lang-toggle");
		if (btn) {
			btn.addEventListener("click", () => {
				const next = document.documentElement.getAttribute("data-lang") === "pt" ? "en" : "pt";
				applyLang(next);
			});
		}
	}

	/* ---------- Procedural grid (Kaia-themed) ---------- */

	const GLYPHS = [
		"M0.5 0.15 L0.5 0.85 M0.15 0.5 L0.85 0.5",
		"M0.2 0.2 L0.8 0.8 M0.2 0.8 L0.8 0.2",
		"M0.25 0.25 L0.75 0.25 L0.75 0.75 L0.25 0.75 Z",
		"M0.5 0.2 L0.8 0.8 L0.2 0.8 Z",
		"M0.5 0.5 m-0.25 0 a0.25 0.25 0 1 0 0.5 0 a0.25 0.25 0 1 0 -0.5 0",
		"M0.2 0.5 L0.8 0.5",
		"M0.3 0.3 L0.7 0.7",
		"M0.5 0.2 L0.5 0.8",
		"M0.25 0.65 L0.5 0.35 L0.75 0.65",
		"M0.3 0.3 L0.7 0.3 L0.7 0.7",
	];

	const COLORS = [
		"var(--grelha)",
		"var(--grelha)",
		"var(--dna)",
		"var(--dna)",
		"var(--warm)",
		"var(--text-dim)",
		"var(--text-dim)",
	];

	function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

	function buildGrelha() {
		const svg = document.getElementById("grelha");
		if (!svg) return;

		const cell = 60;
		const w = window.innerWidth;
		const h = window.innerHeight;
		const cols = Math.ceil(w / cell) + 2;
		const rows = Math.ceil(h / cell) + 2;

		svg.setAttribute("viewBox", `0 0 ${cols} ${rows}`);
		svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
		svg.innerHTML = "";

		const ns = "http://www.w3.org/2000/svg";

		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < cols; x++) {
				const r = document.createElementNS(ns, "rect");
				r.setAttribute("class", "cell-bg");
				r.setAttribute("x", x);
				r.setAttribute("y", y);
				r.setAttribute("width", 1);
				r.setAttribute("height", 1);
				svg.appendChild(r);
			}
		}

		const total = cols * rows;
		const count = Math.max(20, Math.floor(total * 0.08));
		const placed = new Set();

		for (let i = 0; i < count; i++) {
			let cx, cy, key, tries = 0;
			do {
				cx = Math.floor(Math.random() * cols);
				cy = Math.floor(Math.random() * rows);
				key = cx + "," + cy;
				tries++;
			} while (placed.has(key) && tries < 8);
			placed.add(key);

			const p = document.createElementNS(ns, "path");
			const glyph = pick(GLYPHS);

			const translated = glyph.replace(/(-?\d*\.?\d+)\s+(-?\d*\.?\d+)/g, (_, a, b) => {
				return (cx + parseFloat(a)).toFixed(3) + " " + (cy + parseFloat(b)).toFixed(3);
			});
			p.setAttribute("d", translated);
			p.setAttribute("class", "glyph");
			p.setAttribute("stroke", pick(COLORS));
			p.style.animationDelay = (Math.random() * 8).toFixed(2) + "s";
			p.style.animationDuration = (6 + Math.random() * 6).toFixed(2) + "s";

			svg.appendChild(p);
		}
	}

	let resizeRaf = null;
	function onResize() {
		if (resizeRaf) cancelAnimationFrame(resizeRaf);
		resizeRaf = requestAnimationFrame(buildGrelha);
	}

	/* ---------- Contact form (mailto) ---------- */

	function initForm() {
		const form = document.getElementById("contact-form");
		if (!form) return;

		form.addEventListener("submit", (ev) => {
			ev.preventDefault();
			const name = form.elements["name"].value.trim();
			const email = form.elements["email"].value.trim();
			const message = form.elements["message"].value.trim();

			if (!name || !email || !message) {
				form.reportValidity();
				return;
			}

			const lang = document.documentElement.getAttribute("data-lang") || "pt";
			const subject = lang === "pt"
				? `[portfolio] mensagem de ${name}`
				: `[portfolio] message from ${name}`;
			const body =
				(lang === "pt" ? "De: " : "From: ") + name + " <" + email + ">\n\n" + message;

			const href = "mailto:rosa.paulo40@gmail.com?subject="
				+ encodeURIComponent(subject)
				+ "&body=" + encodeURIComponent(body);

			window.location.href = href;
		});
	}

	/* ---------- Boot ---------- */

	function initPortrait() {
		const img = document.querySelector(".portrait-disc img");
		if (!img) return;
		const markMissing = () => img.closest(".portrait-disc")?.classList.add("no-img");
		if (img.complete && img.naturalWidth === 0) markMissing();
		img.addEventListener("error", markMissing, { once: true });
	}

	function boot() {
		initLang();
		buildGrelha();
		initForm();
		initPortrait();
		window.addEventListener("resize", onResize, { passive: true });

		const y = document.getElementById("year");
		if (y) y.textContent = String(new Date().getFullYear());
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", boot);
	} else {
		boot();
	}
})();
