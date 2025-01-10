import Button from '@/ui/atoms/Button.tsx';
import useDialog from '@/hooks/useDialog.tsx';

const DeleteUserDialog = () => {
  const {
    open: isDeleteDialogOpen,
    onOpen: openDeleteDialog,
    onClose: closeDeleteDialog,
  } = useDialog();

  return (
    <div>
      <Button aria-label="Delete user" aria-haspopup="dialog" color="error" onClick={openDeleteDialog}>
        Delete
      </Button>
    </div>
  )
};

export default DeleteUserDialog;