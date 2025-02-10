import { Nodes } from '@/shared/config';
import { ReactElement } from 'react';
import { createPortal } from 'react-dom';

export type PortalModalsProps = {
  children: ReactElement | ReactElement[];
};

export const PortalModals = ({ children }: PortalModalsProps) =>
  createPortal(children, document.getElementById(Nodes.MODAL)!);
