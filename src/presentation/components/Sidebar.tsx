
const Sidebar = () => {
  return (
    <div className="w-1/5 bg-white h-screen p-4 border-r border-gray-200 flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-6">
          <img
            alt="Instagram logo"
            className="h-8"
            src="https://storage.googleapis.com/a1aa/image/99yF5rV3XXp3DJfeto5o3jqmVk0qGwdBQ0vPmC2Nfa85biOoA.jpg"
          />
        </div>
        <nav className="space-y-4">
          {[
            {icon: 'fas fa-home', label: 'Home'},
            {icon: 'fas fa-search', label: 'Search'},
            {icon: 'fas fa-compass', label: 'Explore'},
            {icon: 'fas fa-video', label: 'Reels'},
            {icon: 'fas fa-envelope', label: 'Messages', notification: '1'},
            {icon: 'fas fa-heart', label: 'Notifications'},
            {icon: 'fas fa-plus-square', label: 'Create'},
            {
              icon: 'fas fa-user',
              label: 'Profile',
              image: 'https://storage.googleapis.com/a1aa/image/uYKFhe5twwTdZKmkex8cLIbx5J7AifqgI0yXIW5L9r6f3EdQB.jpg'
            },
          ].map((item, index) => (
            <a key={index} className="flex items-center space-x-3 text-gray-800 hover:text-black" href="#">
              {item.image ? (
                <img alt="Profile" className="rounded-full h-6 w-6" src={item.image}/>
              ) : (
                <i className={`${item.icon} text-xl`}></i>
              )}
              <span className="text-lg">{item.label}</span>

            </a>
          ))}
        </nav>
      </div>

      <div>
        More
      </div>
    </div>
  );
};

export default Sidebar;
