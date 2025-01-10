import { FC, PropsWithChildren } from 'react';
import CloseIcon from '@/assets/close-icon.svg';

interface DialogTitleProps {
  title: string;
  onClose: () => void;
}

const DialogTitle: FC<PropsWithChildren<DialogTitleProps>> = ({ title, onClose }) => (
  <div className="w-full flex justify-between">
    <h2 className="text-3xl font-semibold text-black">{title}</h2>
    <button onClick={onClose} className="fill-gray-400">
      <CloseIcon />
    </button>
  </div>
);

export default DialogTitle;