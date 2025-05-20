import { Task } from "../types/tasks";
import { Tool } from "../types/tools";

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

export const tasks: Task[] = [
  {
    name: "Connecting to platform",
    status: "inprogress",
    completedPercentage: 0,
    timeLeft: 5,
  },
  {
    name: "Finding Active Slates",
    subText: "4 leagues found",
    status: "pending",
    completedPercentage: 0,
    timeLeft: 4,
  },
  {
    name: "Loading Leagues",
    status: "pending",
    tasks: [
      {
        name: "League Delta",
        status: "pending",
        completedPercentage: 0,
        timeLeft: 7,
      },
      {
        name: "League Alpha",
        status: "pending",
        completedPercentage: 0,
        timeLeft: 10,
      },
      {
        name: "League Gamma",
        status: "pending",
        completedPercentage: 0,
        timeLeft: 3,
      },
      {
        name: "League Beta",
        status: "pending",
        completedPercentage: 0,
        timeLeft: 15,
      },
    ],
  },
];
