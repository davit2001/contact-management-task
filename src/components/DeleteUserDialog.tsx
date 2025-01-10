import Button from '@/ui/atoms/Button.tsx';
import useDialog from '@/hooks/useDialog.tsx';
import DialogTitle from '@/ui/molecule/DialogTitle.tsx';
import DialogActions from '@/ui/atoms/DialogActions.tsx';
import Dialog from '@/components/Dialog.tsx';
import useDeleteUser from '@/hooks/useDeleteUser.tsx';

const DeleteUserDialog = ({ id }: { id: number }) => {
  const {
    open: isDeleteDialogOpen,
    onOpen: openDeleteDialog,
    onClose: closeDeleteDialog,
  } = useDialog();
  const { mutate } = useDeleteUser(id);

  const onDelete = () => {
    closeDeleteDialog();
    mutate(id.toString());
  };

  return (
    <div>
      <Button aria-label="Delete user" aria-haspopup="dialog" color="error" onClick={openDeleteDialog}>
        Delete
      </Button>
      <Dialog open={isDeleteDialogOpen} onClose={closeDeleteDialog} size="md">
        <DialogTitle title="Are you sure you want to delete user ?" onClose={closeDeleteDialog}/>
        <div>
          <p className="my-4 text-red">If you remove user you will permanently lose user data</p>
        </div>
        <DialogActions>
          <Button onClick={closeDeleteDialog}>
            Close dialog
          </Button>
          <Button color="error" onClick={onDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};

export default DeleteUserDialog;