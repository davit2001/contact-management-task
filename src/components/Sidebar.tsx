import ContactList from '@/components/UsersList.tsx';
import SearchBar from '@/components/SearchBar.tsx';
import UserForm from '@/components/UserForm.tsx';

const Sidebar = () => {
  return (
    <aside className="bg-light-gray w-full max-w-max h-screen" id="sidebar" aria-label="Contact management Sidebar">
      <div className="py-2 px-4 border border-b border-gray-400 flex gap-2">
        <SearchBar />
        <UserForm title="Create User" buttonName="New" mode="create" />
      </div>
      <ContactList/>
    </aside>
  )
};

export default Sidebar;