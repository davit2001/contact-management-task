import { ChangeEvent, RefObject, useEffect } from 'react';

const useOutsideClickHandler = <T>(
  ref: RefObject<T>,
  onOutsideClick: CallableFunction,
  whitelist?: Array<string>,
) => {
  useEffect(() => {
    function handleClickOutside(event: ChangeEvent<HTMLElement>) {
      if (
        ref.current &&
        // eslint-disable-next-line
        // @ts-ignore
        !(ref.current).contains(event.target) &&
        !whitelist?.includes(event.target?.id)
      ) {
        onOutsideClick();
      }
    }

    window?.addEventListener('mousedown', handleClickOutside as never);
    return () => {
      window?.removeEventListener('mousedown', handleClickOutside as never);
    };
  }, [onOutsideClick, ref, whitelist]);
};

export default useOutsideClickHandler;
