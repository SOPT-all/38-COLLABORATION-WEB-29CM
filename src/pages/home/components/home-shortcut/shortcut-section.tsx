import type { ShortCut } from '@pages/home/types';

import ShortcutButton from './shortcut-button';

interface ShortcutSectionProps {
  shortcuts: ShortCut[];
}

const ShortcutSection = ({ shortcuts }: ShortcutSectionProps) => {
  return (
    <section className="grid grid-cols-6 gap-x-4.5 gap-y-5 px-9.5 py-18">
      {shortcuts.map((shortcut) => (
        <ShortcutButton
          key={shortcut.shortcutId}
          imageUrl={shortcut.imageUrl}
          label={shortcut.name}
        />
      ))}
    </section>
  );
};

export default ShortcutSection;
