"use client";

import { BlocksIcon, Mail, NotebookPen, SquareTerminal } from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "overview",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "/admin",
        },
      ],
    },
    {
      title: "Project Management",
      url: "#",
      icon: BlocksIcon,
      items: [
        {
          title: "Add Project",
          url: "/admin/projects/add-project",
        },
        {
          title: "All Projects",
          url: "/admin/projects",
        },
      ],
    },
    {
      title: "Blog Management",
      url: "#",
      icon: NotebookPen,
      items: [
        {
          title: "Write Blog",
          url: "/admin/blogs/write-blog",
        },
        {
          title: "All Blogs",
          url: "/admin/blogs",
        },
      ],
    },
    {
      title: "Messages",
      url: "#",
      icon: Mail,
      items: [
        {
          title: "All Messages",
          url: "/admin/messages",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
