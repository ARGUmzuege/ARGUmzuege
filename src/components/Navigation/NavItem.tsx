import { AnimatedLink } from '../common/AnimatedLink';
import styles from './NavItem.module.scss';

interface NavItemProps {
  to: string;
  icon: string;
  text: string;
}

export const NavItem = ({ to, icon, text }: NavItemProps) => {
  return (
    <AnimatedLink to={to} className={styles.navItem}>
      <i className={`fas fa-${icon}`} />
      {text}
    </AnimatedLink>
  );
}; 