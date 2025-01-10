import NavigationItem from '@/ui/atoms/NavigationItem.tsx';

const contacts = [
  {
    id: 1,
    profilePicture: "https://ui-avatars.com/api/?name=Alice+Johnson&background=random",
    name: "Alice Johnson",
    username: "alice.j",
    additionalInfo: "Works at TechCorp. Loves hiking.",
  },
  {
    id: 2,
    profilePicture: "https://ui-avatars.com/api/?name=Bob+Smith&background=random",
    name: "Bob Smith",
    username: "bob.s",
    additionalInfo: "Freelance photographer. Coffee enthusiast.",
  },
  {
    id: 3,
    profilePicture: "https://ui-avatars.com/api/?name=Charlie+Brown&background=random",
    name: "Charlie Brown",
    username: "charlie.b",
    additionalInfo: "Software engineer at CodeWorks. Enjoys painting.",
  }
];

const ContactList = () => {

  return (
    <nav className="py-2 px-4 overflow-y-auto h-full flex flex-col gap-1">
      {contacts.map(({ id, name }) => (
        <NavigationItem
          key={id}
          className="flex items-center gap-2"
          to={`/contact/${id}`}
        >
          {name}
        </NavigationItem>
      ))}
    </nav>
  )
};

export default ContactList;