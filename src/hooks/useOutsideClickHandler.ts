import { ChangeEvent, RefObject, useEffect } from 'react';

const useOutsideClickHandler = <T>(
  ref: RefObject<T>,
  onOutsideClick: CallableFunction,
  whitelist?: Array<string>,
) => {
  useEffect(() => {
    function handleClickOutside(event: ChangeEvent) {
      if (
        ref.current &&
        !(ref.current as HTMLElement).contains(event.target) &&
        !whitelist?.includes(event.target?.id)
      ) {
        onOutsideClick();
      }
    }

    window?.addEventListener('mousedown', handleClickOutside);
    return () => {
      window?.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOutsideClick, ref, whitelist]);
};

export default useOutsideClickHandler;
