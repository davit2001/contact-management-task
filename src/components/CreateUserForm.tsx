import Button from '@/ui/atoms/Button.tsx';
import useDialog from '@/hooks/useDialog.tsx';

const CreateUserForm = () => {
  const {
   open: isCreateContactFormOpen,
   onOpen: openCreateContactForm,
   onClose: closeCreateContactForm,
  } = useDialog();

  return (
    <div>
      <Button aria-label="Create new user" aria-haspopup="dialog" color="primary" onClick={openCreateContactForm}>
        New
      </Button>
    </div>
  )
};

export default CreateUserForm;