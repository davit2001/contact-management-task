import ContactList from '@/components/UsersList.tsx';
import CreateUserForm from '@/components/CreateUserForm.tsx';
import SearchBar from '@/components/SearchBar.tsx';

const Sidebar = () => {
  return (
    <aside className="bg-light-gray w-full max-w-max h-screen" id="sidebar" aria-label="Contact management Sidebar">
      <div className="py-2 px-4 border border-b border-gray-400 flex gap-2">
        <SearchBar />
        <CreateUserForm />
      </div>
      <ContactList/>
    </aside>
  )
};

export default Sidebar;