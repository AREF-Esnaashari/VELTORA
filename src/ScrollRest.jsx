import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollRest() {
  let {pathname} = useLocation();

  useEffect(() => {
    if (pathname) {
      scrollTo(0, 0);
    }
  }, [pathname]);
}
