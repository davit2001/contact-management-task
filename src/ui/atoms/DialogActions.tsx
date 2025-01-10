import { FC, PropsWithChildren } from 'react';

const DialogActions: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex justify-end gap-2">
    {children}
  </div>
);

export default DialogActions;