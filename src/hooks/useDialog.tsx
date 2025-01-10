import { useCallback, useState } from 'react';

const useDialog = () => {
  const [open, setOpen] = useState(false);
  const onOpen = useCallback(() => setOpen(true), [setOpen]);
  const onClose = useCallback(() => setOpen(false), [setOpen]);

  return {
    open,
    onOpen,
    onClose,
  };
};

export default useDialog;
