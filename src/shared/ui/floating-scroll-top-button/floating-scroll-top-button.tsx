import { useIsScrolled } from '@shared/hooks/use-is-scrolled';
import ScrollTopButton from '@shared/ui/scroll-top-button/scroll-top-button';

const FloatingScrollTopButton = () => {
  const isScrolled = useIsScrolled();

  if (!isScrolled) {
    return null;
  }

  return <ScrollTopButton className="fixed right-8 bottom-8 z-50" />;
};

export default FloatingScrollTopButton;
