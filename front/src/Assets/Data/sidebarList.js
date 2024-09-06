// import { CalendarDaysIcon, HomeIcon } from "@heroicons/react/24/outline";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";

export const sidebarList = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  { name: "Logger", href: "/logger", icon: UserIcon, current: false },
  // { name: "User", href: "/user", icon: UserIcon, current: false },

  // {
  //   name: "activity log",
  //   href: "/roles",
  //   icon: HomeIcon,
  //   current: false,
  //   children: [
  //     {
  //       name: "Role List",
  //       href: "/roles",
  //       icon: CalendarDaysIcon,
  //       current: false,
  //     },
  //     {
  //       name: "Create Role",
  //       href: "/roles/create",
  //       icon: CalendarDaysIcon,
  //       current: false,
  //     },
  //   ],
  // },
  // {
  //   name: "Change Password",
  //   href: "/changePassword",
  //   icon: HomeIcon,
  //   current: false,
  // },
  // { name: "setting", href: "/setting", icon: HomeIcon, current: false },
];
