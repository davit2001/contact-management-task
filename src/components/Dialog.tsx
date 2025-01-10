import { useRef, useEffect, FC, PropsWithChildren } from 'react';
import useOutsideClickHandler from '@/hooks/useOutsideClickHandler.ts';


interface DialogProps {
  open: boolean;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg';
}

const dialogSizeStyle = {
  sm: 'w-[400px]',
  md: 'w-[600px]',
  lg: 'w-[800px]',
}

const Dialog: FC<PropsWithChildren<DialogProps>> = ({ open, onClose, size = 'sm', children }) => {
  const ref = useRef<HTMLDialogElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  useOutsideClickHandler(innerRef, onClose);

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      onCancel={onClose}
    >
      <div
        className="fixed inset-0 grid place-content-center bg-black/75 transition-all group-data-[open]:opacity-100">
        <div
          ref={innerRef}
          className={
            `h-full rounded-xl m-2 max-w-lg bg-gray-200 p-4 shadow-lg transition-all group-data-[open]:scale-100 group-data-[open]:opacity-100 max-h-[90vh] ${dialogSizeStyle[size]}`}
        >
          {children}
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;