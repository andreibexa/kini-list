// ScrollToTop.jsx
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
  children: JSX.Element;
};

export default function ScrollToTop({ children }: Props) {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
}
