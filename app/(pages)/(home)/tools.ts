export interface Tool {
  name: string;
  subtext?: string;
  icon: string;
}

export const tools: Tool[] = [
  {
    name: "Sleeper",
    subtext: "",
    icon: "/icons/sleeper.svg",
  },
  {
    name: "ESPN",
    subtext: "2FA required",
    icon: "/icons/espn.svg",
  },
  {
    name: "Yahoo",
    subtext: "",
    icon: "/icons/yahoo.svg",
  },
  {
    name: "CBS",
    subtext: "",
    icon: "/icons/cbs.svg",
  },
  {
    name: "NFL.com",
    subtext: "",
    icon: "/icons/nfl.svg",
  },
];
