import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {}

const Navigation: FunctionComponent<NavigationProps> = () => {
  return (
    <nav className="p-3 flex justify-center gap-3 text-2xl">
      <Link to="/">Home</Link>
      <Link to="/words">Dictionary</Link>
    </nav>
  );
};

export default Navigation;
