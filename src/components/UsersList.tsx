import { useSearch } from '@tanstack/react-router';
import NavigationItem from '@/ui/atoms/NavigationItem.tsx';
import useQueryUsers from '@/hooks/useQueryUsers.ts';

const ContactList = () => {
  const { isLoading, data: users } = useQueryUsers();
  const currentSearchParams = useSearch({
    strict: false,
  });

  return (
    <nav className="py-2 px-4 overflow-y-auto h-full flex flex-col gap-1">
      {!!users?.length && users.map(({ id, name }: {
        id: number;
        name: string;
      }) => (
        <NavigationItem
          key={id}
          className="flex items-center gap-2"
          to={`/users/${id}`}
          search={(prev) => ({
            ...prev,
            ...currentSearchParams,
          })}
        >
          {name}
        </NavigationItem>
      ))}
      {!users?.length && !isLoading && <p className="text-center text-red">No users found</p>}
    </nav>
  )
};

export default ContactList;