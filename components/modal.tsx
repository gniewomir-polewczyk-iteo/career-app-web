import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ isOpen, onClose, content }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      maxWidth="md"
    >
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};
