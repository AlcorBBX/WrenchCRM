import { LayoutHeader } from 'widgets/LayoutHeader';
import { LayoutProfileCard } from 'widgets/LayoutProfileCard';

import { Layout } from 'shared/ui';

/**
 * ✅ FSD Best practice
 *
 * (1) Devide layout in two modules: dumb layout grid (shared)
 * and smart layout with widgets (this file)
 *
 * (2) Avoid cross-import using slot (render prop) pattern
 * Pass widgets as props to layout
 */
export const baseLayout = (
  <Layout
    // bottomSlot={<DebugModeToggler />}
    headerSlot={<LayoutHeader rightContentSlot={<LayoutProfileCard />} />}
  />
);
