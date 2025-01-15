import {Breakpoint} from '@mui/material';
import {ReactNode} from 'react';

export interface AlertDialogPayloadType {
  body: ReactNode;
  key?: string;
  maxWidth?: Breakpoint;
  title?: ReactNode;
  onCancel?: () => void;
  cancelText?: string;
  onOk?: () => void;
  okText?: string;
  cancelColor?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  okColor?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

export type InitialState = {
  dialogPack: AlertDialogPayloadType[];
  open: boolean;
};
