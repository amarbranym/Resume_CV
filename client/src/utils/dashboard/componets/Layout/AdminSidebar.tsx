"use client";
import {
  LucideIcon,
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  WalletCards,
} from "lucide-react";
import MenuItem from "../ui/elements/MenuItem";
import { ThemeSwitcher } from "../ui/elements/ThemeSwitcher";

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const items: ISidebarItem[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "My Account",
    path: "#",
    icon: CircleUserRound,
    items: [
      {
        name: "Profile",
        path: "/dashboard/my-account/profile",

      },
      {
        name: "Password",
        path: "/dashboard/my-account/password",
      },
    ]
  },
  {
    name: "All Users",
    path: "/dashboard/users",
    icon: WalletCards,
  },
  {
    name: "Accounts",
    path: "#",
    icon: CircleUserRound,
  },
  {
    name: "Resume",
    path: "#",
    icon: Settings,
    items: [
      {
        name: "Content",
        path: "/dashboard/resume",
      },
      {
        name: "Customize",
        path: "#",
      },
      {
        name: "Links",
        path: "#",
      },
    ],
  },
];

const Sidebar = ({ open }: { open: boolean }) => {
  return (
    <div className=" flex flex-col space-y-10 w-full h-full  ">
      {/* <img className="h-10 w-fit" src="/logo-expanded.png" alt="Logo" /> */}
      <div className="h-10">
        <h2 className="text-2xl text-center">logo</h2>
      </div>
      <div className="flex flex-col space-y-2">
        {items.map((item, index) => (
          <MenuItem key={index} item={item} open={open} />
        ))}
        {/* <ThemeSwitcher/> */}
      </div>
    </div>
  );
};

export default Sidebar;
