import ContactSearchBar from '@/components/ContactSearchBar.tsx';
import ContactList from '@/components/ConctactList.tsx';

const Sidebar = () => {
  return (
    <aside className="bg-light-gray w-full max-w-max h-screen" id="sidebar" aria-label="Contact management Sidebar">
      <ContactSearchBar />
      <ContactList />
    </aside>
  )
};

export default Sidebar;