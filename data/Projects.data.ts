import {
	AndroidSdkLogo,
	AxiosLogo,
	ChartJsLogo,
	JavaLogo,
	JWTLogo,
	KotlinLogo,
	LaravelLogo,
	NextJSLogo,
	OpenWeatherApiLogo,
	ReactLogo,
	RedisLogo,
	StrapiLogo,
	StripeLogo,
	TailwindLogo,
	TMDBLogo,
	TurboRepoLogo,
	TypeScriptLogo,
	ViteLogo,
	ZodLogo
} from "@/public/SVGs/SVGs";
import {RadarTarget} from "@/components/common/Radar";

export interface Project {
	title: string;
	subTitle: string;
	description: string;
	techStack: RadarTarget[];
	images: string[];
	liveLink?: string;
	repoLink: string;
}

export const ProjectsData: Project[] = [
	{
		title: "RevRide — Vehicle Information Platform (POC)",
		subTitle: "Your one place for all vehicular questions",
		description: "Co-built a vehicle information POC as a multi-app Turborepo monorepo; owned the marketing homepage, vehicle brand pages, listings UI, and Strapi CMS integration. Ran market validation and sunset the product after identifying insufficient demand — demonstrating product ownership and data-driven decisions.",
		techStack: [
			{
				name: "Next.js",
				content: NextJSLogo,
				angle: 15,
				distance: 0.25,
			},
			{
				name: "TypeScript",
				content: TypeScriptLogo,
				angle: 87,
				distance: 0.75,
			},
			{
				name: "Turborepo",
				content: TurboRepoLogo,
				angle: 159,
				distance: 0.4,
			},
			{
				name: "Laravel",
				content: LaravelLogo,
				angle: 231,
				distance: 0.6,
			},
			{
				name: "Strapi",
				content: StrapiLogo,
				angle: 303,
				distance: 0.5,
			}
		],
		images: [
			"/projects/revride/revride-homepage.png",
			"/projects/revride/revride-individual-vehicle-page.png",
			"/projects/revride/revride-individual-brand-page.png",
			"/projects/revride/revride-bikes-page.png",
		],
		liveLink: "https://revride.co.in/",
		repoLink: "https://gitlab.com/mohitgurnani3541/redline"
	},
	{
		title: "Micro-Blogging Platform",
		subTitle: "API-first blogging system with high-throughput architecture",
		description: "Designed an API-first blogging system with versioned REST endpoints (V1 routing), stateless JWT auth, Redis caching for high-read routes, async queue processing for background tasks, and Laravel Octane for high-throughput serving. Integrated Telescope for real-time request/query debugging.",
		techStack: [
			{name: "Laravel 13", angle: 15, distance: 0.4, content: LaravelLogo},
			{name: "JWT", angle: 135, distance: 0.75, content: JWTLogo},
			{name: "Redis", angle: 260, distance: 0.5, content: RedisLogo},
		],
		images: [
			"/projects/microblogging/preview-1.png",
			"/projects/microblogging/preview-2.png"
		],
		repoLink: "https://github.com/mohitgurnani/micro-blogging-platform"
	},
	{
		title: "Expense Tracker",
		subTitle: "Personal finance tracker with real-time visualizations and Stripe billing",
		description: "Built a personal finance app with income/expense categorization, Chart.js visualizations, Stripe payments, Zod schema-validated forms, and toast notifications — demonstrating third-party API integration and client-side state management.",
		techStack: [
			{name: "React 19", angle: 20, distance: 0.5, content: ReactLogo},
			{name: "Vite", angle: 70, distance: 0.3, content: ViteLogo},
			{name: "Chart.js", angle: 120, distance: 0.7, content: ChartJsLogo},
			{name: "Stripe", angle: 170, distance: 0.6, content: StripeLogo},
			{name: "Zod", angle: 220, distance: 0.4, content: ZodLogo},
			{name: "Axios", angle: 320, distance: 0.65, content: AxiosLogo}
		],
		images: [
			"/projects/expensetracker/preview-1.png",
			"/projects/expensetracker/preview-2.png"
		],
		repoLink: "https://github.com/mohitgurnani/expense-tracker"
	},
	{
		title: "Film Fiesta — Movie Discovery App",
		subTitle: "Interactive movie search, collection manager, and details viewer",
		description: "Movie discovery platform with search, collection management, dark mode, and skeleton loading states. Abstracted data fetching and page title logic into custom hooks (useFetch, useDynamicTitle); deployed on Netlify with CI from GitHub.",
		techStack: [
			{name: "React 19", angle: 30, distance: 0.4, content: ReactLogo},
			{name: "Tailwind v4", angle: 170, distance: 0.5, content: TailwindLogo},
			{name: "TMDB API", angle: 240, distance: 0.8, content: TMDBLogo},
			{name: "Vite", angle: 310, distance: 0.3, content: ViteLogo},
		],
		images: [
			"/projects/filmfiesta/preview-1.png",
			"/projects/filmfiesta/preview-2.png"
		],
		liveLink: "https://mohit-flim-fiesta.netlify.app",
		repoLink: "https://github.com/mohitgurnani/film-fiesta"
	},
	{
		title: "Android Weather App",
		subTitle: "Native Kotlin mobile client integrating live OpenWeather API",
		description: "Native Android weather app with city search, real-time data display (temperature, humidity, wind, sunrise/sunset with epoch conversion), Glide-powered weather icons, and structured error handling for network and 404 failures.",
		techStack: [
			{name: "Kotlin", angle: 10, distance: 0.5, content: KotlinLogo},
			{name: "OpenWeatherMap API", angle: 110, distance: 0.6, content: OpenWeatherApiLogo},
			{name: "Android SDK", angle: 250, distance: 0.8, content: AndroidSdkLogo}
		],
		images: [
			"/projects/weatherapp/preview-1.png",
			"/projects/weatherapp/preview-2.png"
		],
		repoLink: "https://github.com/mohitgurnani/android-weather-app"
	},
	{
		title: "Notepad Application",
		subTitle: "Swing-based desktop editor featuring pluggable DES/Caesar encryption",
		description: "Desktop text editor with find/replace, persisted preferences, and pluggable file encryption via the Strategy pattern — supporting DES and Caesar Cipher through a shared EncryptionStrategy interface. Organized into 8 modular packages.",
		techStack: [
			{name: "Java", angle: 40, distance: 0.45, content: JavaLogo},
			{name: "Swing", angle: 110, distance: 0.6},
			{name: "DES Encryption", angle: 180, distance: 0.8},
			{name: "Caesar Cipher", angle: 250, distance: 0.7},
			{name: "Strategy Pattern", angle: 320, distance: 0.55}
		],
		images: [
			"/projects/notepad/preview-1.png",
			"/projects/notepad/preview-2.png"
		],
		repoLink: "https://github.com/mohitgurnani/notepad-application"
	}
]