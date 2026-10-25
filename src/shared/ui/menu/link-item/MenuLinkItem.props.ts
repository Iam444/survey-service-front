import type { MenuLinkItemProps } from '@base-ui/react/menu';
import type { LinkProps } from 'react-router-dom';

export type TMenuMenuLinkItemProps = Omit<MenuLinkItemProps, 'href'> & Pick<LinkProps, 'to'>;
