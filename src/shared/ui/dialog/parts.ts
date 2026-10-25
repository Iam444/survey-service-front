import { Dialog } from '@base-ui/react/dialog';

export const Root = Dialog.Root;
export const Trigger = Dialog.Trigger;
export const Portal = Dialog.Portal;
export const Viewport = Dialog.Viewport;

export const createHandle = Dialog.createHandle;

export { DialogBackdrop as Backdrop } from './backdrop/DialogBackdrop';
export { DialogPopup as Popup } from './popup/DialogPopup';
export { DialogHeader as Header } from './header/DialogHeader';
export { DialogContent as Content } from './content/DialogContent';
export { DialogFooter as Footer } from './footer/DialogFooter';
export { DialogTitle as Title } from './title/DialogTitle';
export { DialogDescription as Description } from './description/DialogDescription';
export { DialogClose as Close } from './close/DialogClose';
export { DialogIconedClose as IconedClose } from './iconed-close/DialogIconedClose';
