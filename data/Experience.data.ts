export type ExperienceKind = "work" | "education";

export interface ExperienceEntry {
	id: string;
	kind: ExperienceKind;
	title: string;
	subtitle: string;
	start: string;
	end: string;
	isCurrent?: boolean;
	location?: string;
	bullets?: string[];
	meta?: string;
	tech?: string[];
}

export const ExperienceData: ExperienceEntry[] = [
	{
		id: "metaminds",
		kind: "work",
		title: "Metaminds Studio",
		subtitle: "Full Stack Developer",
		start: "Oct 2025",
		end: "Present",
		isCurrent: true,
		bullets: [
			"Built a headless CMS platform (WordPress + Next.js 15) with layered service/parser architecture, React.cache deduplication, ISR caching, Framer Motion animations, and a full SEO metadata + JSON-LD pipeline.",
			"Delivered two Strapi v5 + Next.js 16 Turborepo monorepos with Docker Compose, GitHub Actions CI/CD, Playwright E2E, accessibility & Lighthouse testing, multi-language support, and page-builder content blocks.",
			"Built animation-rich marketing sites using GSAP, Framer Motion, Three.js 3D scenes, Lenis smooth scroll, and Lottie; integrated Nodemailer contact forms and Strapi CMS backends.",
			"Developed the company website with interactive Three.js 3D product showcases and a 50+ portfolio grid using Next.js 16 and shadcn/ui.",
		],
		tech: [
			"Next.js",
			"Strapi",
			"Turborepo",
			"Docker",
			"Playwright",
			"Three.js",
			"GSAP",
			"Framer Motion",
		],
	},
	{
		id: "csmu",
		kind: "education",
		title: "CSMU, Navi Mumbai",
		subtitle: "B.Tech, Computer Engineering",
		start: "2025",
		end: "Present",
		isCurrent: true,
		location: "Navi Mumbai",
	},
	{
		id: "vesp",
		kind: "education",
		title: "VESP, Mumbai",
		subtitle: "Diploma, MSBTE, Computer Engineering",
		start: "2025",
		end: "2025",
		meta: "75.60%",
		location: "Mumbai",
	},
	{
		id: "bhis",
		kind: "education",
		title: "BHIS, Thane",
		subtitle: "High School, ICSE (Science)",
		start: "2022",
		end: "2022",
		meta: "81.00%",
		location: "Thane",
	},
];
