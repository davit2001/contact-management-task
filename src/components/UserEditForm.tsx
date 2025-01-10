import { FC } from 'react';
import useDialog from '@/hooks/useDialog.tsx';
import Button from '@/ui/atoms/Button.tsx';
import Dialog from '@/components/Dialog.tsx';
import DialogTitle from '@/ui/molecule/DialogTitle.tsx';
import { useForm } from '@tanstack/react-form';
import { userSchema } from '@/schemas/user.schema.ts';
import FormField from '@/components/FormField.tsx';
import useUpdateUser from '@/hooks/useUpdateUser.ts';
import DialogActions from '@/ui/atoms/DialogActions.tsx';

interface User  {
  id: string;
  name: string;
  username: string;
  bio: string;
  profilePicture: string;
}

interface UserEditFormProps {
  userData: User
}

const UserEditForm: FC<UserEditFormProps> = ({ userData }) => {
  const {
    open: isUpdateContactFormOpen,
    onOpen: openUpdateContactForm,
    onClose: closeUpdateContactForm,
  } = useDialog();
  const { mutate } = useUpdateUser(userData.id);

  const form = useForm({
    defaultValues: {
      name: userData.name || '',
      username: userData.username,
      bio: userData.bio,
      profilePicture: userData.profilePicture,
    },
    onSubmit: async function <T>(values: T)  {
      mutate(values as {
        value: User
      });
      closeUpdateContactForm();
    },
    validators: {
      onSubmit: userSchema,
    },
  });

  return (
    <div>
      <Button aria-label="Update user" aria-haspopup="dialog" color="primary" onClick={openUpdateContactForm}>
        Edit
      </Button>
      <Dialog open={isUpdateContactFormOpen} onClose={closeUpdateContactForm} size="md">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
        >
          <DialogTitle title="Edit user data" onClose={closeUpdateContactForm}/>
          <div className="flex flex-col gap-2">
            <form.Field
              name="name"
              children={FormField}
            />
            <form.Field
              name="username"
              children={FormField}
            />
            <form.Field
              name="bio"
              children={FormField}
            />
            <form.Field
              name="profilePicture"
              children={FormField}
            />
          </div>
        <DialogActions>
          <Button onClick={closeUpdateContactForm}>
            Close dialog
          </Button>
          <Button color="success" type="submit">
            Submit
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  )
};

export default UserEditForm;