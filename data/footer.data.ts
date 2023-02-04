interface FooterData {
  title: string;
  url: string;
}

interface FooterItem {
  heading: string;
  content?: string;
  footer: FooterData[];
}

const FOOTER_DATA: FooterItem[] = [
  {
    heading: 'Socials',
    footer: [
      {
        title: 'Say Hello',
        url: 'mailto:samyabratamaji334@gmail.com?subject=Hello%20Samyabrata%20%F0%9F%91%8B&body=Found%20your%20website.%20Just%20wanted%20to%20say%20hello%20%E2%9C%8C%EF%B8%8F'
      },
      { title: 'Twitter', url: 'https://twitter.com/sammaji15' },
      { title: 'Github', url: 'https://github.com/samyabrata-maji' },
      { title: 'Hashnode', url: 'https://sammaji.pages.dev' },
      { title: 'Linkedin', url: 'https://linkedin.com/in/samyabrata-maji' }
    ]
  },
  {
    heading: 'Projects',
    footer: [
      { title: 'LabForAll', url: 'https://labforall.vercel.app' },
      { title: 'Solar System', url: 'https://labforall.vercel.app?run_sim=true' },
      { title: 'Portfolio 2022', url: 'https://sammaji.pages.dev' },
    ]
  },
  {
    heading: 'Others',
    footer: [
      {
        title: 'Queries',
        url: 'mailto:samyabratamaji334@gmail.com?subject=[QUERY]&body=Hey%20Samyabrata,%20I%20would%20like%20to%20know%20about...'
      },
      { title: 'Contribute', url: 'https://github.com/samyabrata-maji/serious-portfolio/issues' },
      {
        title: 'Bug Report',
        url: 'https://github.com/samyabrata-maji/serious-portfolio/issues/new?assignees=&labels=bug&template=BUG_REPORT.yml&title=%F0%9F%90%9B+%5BBUG%5D+-+%3Ctitle%3E'
      },
      {
        title: 'Feature Request',
        url: 'https://github.com/samyabrata-maji/serious-portfolio/issues/new?assignees=&labels=question&template=FEATURE_REQUEST.yml&title=%F0%9F%92%A1+%5BREQUEST%5D+-+%3Ctitle%3E'
      }
    ]
  }
];

export default FOOTER_DATA;
