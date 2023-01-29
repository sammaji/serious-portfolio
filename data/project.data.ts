/**
 * @param icon favicon
 */
interface TechStack {
  title: string;
  icon: string;
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
  firebase: {
    title: 'Firebase',
    icon: 'firebase-plain'
  },
  javascript: {
    title: 'JavaScript',
    icon: 'javascript-plain'
  },
  node: {
    title: 'Node',
    icon: 'nodejs-plain'
  },
  react: {
    title: 'React',
    icon: 'react-original'
  },
  threejs: {
    title: 'ThreeJs',
    icon: 'threejs-original'
  }
};

const MY_TECH_STACK: TechStack[] = [
  TECH_STACK.react,
  TECH_STACK.threejs,
  TECH_STACK.firebase,
  TECH_STACK.node,
  TECH_STACK.javascript
];

const PROJECTS_DATA: ProjectData[] = [
  {
    title: 'LabForAll',
    description:
      'LabForAll is a website that provides information reguarding practical experiments. It was a hackathon project made for Treasure Hacks 3.0',
    preview_low:
      'https://user-images.githubusercontent.com/116789799/215292499-5df7d3ca-e269-48e9-ad1f-a99e5802cd5d.jpg',
    preview_high:
      'https://user-images.githubusercontent.com/116789799/215286790-697b0975-0740-487f-90d2-9d9666c6d162.png',
    source: 'https://github.com/samyabrata-maji/labforall',
    demo: 'https://lab4all.vercel.app',
    tech_stack: [
      TECH_STACK.react,
      TECH_STACK.threejs,
      TECH_STACK.firebase,
      TECH_STACK.node,
      TECH_STACK.javascript
    ]
  },
  {
    title: 'LabForAll',
    description:
      'LabForAll is a website that provides information reguarding practical experiments. It was a hackathon project made for Treasure Hacks 3.0',
    preview_low:
      'https://user-images.githubusercontent.com/116789799/215292499-5df7d3ca-e269-48e9-ad1f-a99e5802cd5d.jpg',
    preview_high:
      'https://user-images.githubusercontent.com/116789799/215286790-697b0975-0740-487f-90d2-9d9666c6d162.png',
    source: 'https://github.com/samyabrata-maji/labforall',
    demo: 'https://lab4all.vercel.app',
    tech_stack: [
      TECH_STACK.react,
      TECH_STACK.threejs,
      TECH_STACK.firebase,
      TECH_STACK.node,
      TECH_STACK.javascript
    ]
  },
  {
    title: 'LabForAll',
    description:
      'LabForAll is a website that provides information reguarding practical experiments. It was a hackathon project made for Treasure Hacks 3.0',
    preview_low:
      'https://user-images.githubusercontent.com/116789799/215292499-5df7d3ca-e269-48e9-ad1f-a99e5802cd5d.jpg',
    preview_high:
      'https://user-images.githubusercontent.com/116789799/215286790-697b0975-0740-487f-90d2-9d9666c6d162.png',
    source: 'https://github.com/samyabrata-maji/labforall',
    demo: 'https://lab4all.vercel.app',
    tech_stack: [
      TECH_STACK.react,
      TECH_STACK.threejs,
      TECH_STACK.firebase,
      TECH_STACK.node,
      TECH_STACK.javascript
    ]
  }
];

export { PROJECTS_DATA, MY_TECH_STACK };
export type { TechStack, ProjectData };
