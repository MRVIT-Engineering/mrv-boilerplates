export type SidebarItem = {
  path: string;
  label: string;
  icon: any;
  subRoutes?: {
    [key: string]: SidebarItem;
  };
};
