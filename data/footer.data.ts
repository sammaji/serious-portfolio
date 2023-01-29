interface FooterData {
  title: string;
  url: string;
}

interface FooterItem {
  heading: string;
  content?: string
  footer: FooterData[];
}

const FOOTER_DATA: FooterItem[] = [
    {
        heading: "Socials",
        footer: [{title: "Twitter", url: "https://twitter.com/sammaji15"},
        {title: "Twitter", url: "https://twitter.com/sammaji15"},
        {title: "Twitter", url: "https://twitter.com/sammaji15"},
        {title: "Twitter", url: "https://twitter.com/sammaji15"}
        ]
    },
    {
        heading: "Projects",
        footer: [{title: "Twitter", url: "https://twitter.com/sammaji15"},
        {title: "Twitter", url: "https://twitter.com/sammaji15"},
        {title: "Twitter", url: "https://twitter.com/sammaji15"},
        {title: "Twitter", url: "https://twitter.com/sammaji15"}
        ]
    },
    {
        heading: "Others",
        footer: [{title: "Twitter", url: "https://twitter.com/sammaji15"},
        {title: "Twitter", url: "https://twitter.com/sammaji15"},
        {title: "Twitter", url: "https://twitter.com/sammaji15"},
        {title: "Twitter", url: "https://twitter.com/sammaji15"}
        ]
    }
];

export default FOOTER_DATA;
