import Button from '@/ui/atoms/Button.tsx';
import useDialog from '@/hooks/useDialog.tsx';

const CreateContactForm = () => {
  const {
   open: isCreateContactFormOpen,
   onOpen: openCreateContactForm,
   onClose: closeCreateContactForm,
  } = useDialog();

  return (
    <div>
      <Button color="primary" onClick={openCreateContactForm}>
        New
      </Button>
    </div>
  )
};

export default CreateContactForm;