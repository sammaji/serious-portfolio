/**
 * @param icon favicon
 */
interface TechStack {
	title: string;
	icon: string;
	icon_style?: string;
}

/**
 * @param preview_low low quality image loaded on start
 * @param preview_high high quality image lazy loaded or not loaded at all if data-saver is on
 */
interface ProjectData {
	title: string;
	preview_low: string;
	preview_high: string;
	description: string;
	source?: string;
	demo?: string;
	tech_stack: TechStack[];
	tags?: string[];
}

/* A full list of technologies I have worked with, in alphabetical order */
const TECH_STACK = {
	node: {
		title: '',
		icon: '',
		icon_style: ''
	}
};

const PROJECTS_DATA: ProjectData[] = [
	{
		title: 'Lab4All',
		description: 'No desc',
		preview_low: '',
		preview_high: '',
		source: "https://github.com/samyabrata-maji/labforall",
		demo: "https://lab4all.vercel.app",
		tech_stack: [TECH_STACK.node]
	}
];

export default PROJECTS_DATA;
