import { LayoutHeader } from 'widgets/LayoutHeader';
import { LayoutProfileCard } from 'widgets/LayoutProfileCard';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

import { Layout } from 'shared/ui';

export const layoutWithSidebar = (
  <Layout
    // announcementSlot={
    // }
    // bottomSlot={<DebugModeToggler />}
    sidebarSlot={<Sidebar />}
    headerSlot={<LayoutHeader rightContentSlot={<LayoutProfileCard />} />}
  />
);
