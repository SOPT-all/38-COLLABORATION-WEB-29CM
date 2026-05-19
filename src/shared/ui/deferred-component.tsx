import { type PropsWithChildren, useEffect, useState } from 'react';

const DeferredComponent = ({ children }: PropsWithChildren) => {
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsDeferred(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  if (!isDeferred) return null;
  return <>{children}</>;
};

export default DeferredComponent;
