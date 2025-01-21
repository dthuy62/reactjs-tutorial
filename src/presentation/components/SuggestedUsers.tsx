// src/SuggestedUsers.js

const suggestedUsersData = [
  { src: 'https://storage.googleapis.com/a1aa/image/g9c1LEUst4rbJVbcdqNMaMBMV9PxKBbLY0BeQoCcDjC8moDKA.jpg', username: 'shyn.dev__', name: 'Dinh Thanh Huy' },
  { src: 'https://storage.googleapis.com/a1aa/image/7YbhRVQqeAzEZKEKvaePzUJ8OMHVQxz63WUWobRmw2AMORHUA.jpg', username: '_elin00_', name: 'Followed by nguyenthanhlon...' },
  { src: 'https://storage.googleapis.com/a1aa/image/cfyXZKi6dT0sY6YDQd8Q2KV3GwynDme19KreTUTzsYHe4EdQB.jpg', username: 'duong.dangqd', name: 'Followed by nguyenthanhlon...' },
  { src: 'https://storage.googleapis.com/a1aa/image/LTRtwVWR9e2pOCCK0eb5eJ7zmcUyNXyv93BS7VaYcAeR4EdQB.jpg', username: 'emem_haa', name: 'Followed by nguyenthanhlon...' },
  { src: 'https://storage.googleapis.com/a1aa/image/j5qWn6XcJppWPR1f4gnpeyutfdZ0jbEoXueYgbj22HNa4EdQB.jpg', username: 'kem_kun01', name: 'Followed by nguyenthanhlon...' },
  { src: 'https://storage.googleapis.com/a1aa/image/DgJ4IMPeG214IKb4vNdMN9IKVBBx6mWRbXkm9Tw4NNlFnoDKA.jpg', username: 'chuu_mei', name: 'Followed by sky.peminh + 2 ...' },
];

const SuggestedUsers = () => {
  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <img
          alt="User  profile"
          className="rounded-full h-10 w-10"
          src={suggestedUsersData[0].src}
        />
        <div className="ml-3 flex flex-col">
          <span className="font-semibold">{suggestedUsersData[0].username}</span>
          <span className="text-gray-500 text-sm">{suggestedUsersData[0].name}</span>
        </div>
        <a className="text-blue-500 ml-auto" href="#">
          Switch
        </a>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500 font-semibold">Suggested for you</span>
        <a className="text-black font-semibold" href="#">
          See All
        </a>
      </div>
      {suggestedUsersData.slice(1).map((user, index) => (
        <div key={index} className="flex items-center mb-4">
          <img alt={`Suggested user ${index + 1}`} className="rounded-full h-10 w-10" src={user.src} />
          <div className="ml-3">
            <span className="font-semibold">{user.username}</span>
            <span className="text-gray-500 text-sm">{user.name}</span>
          </div>
          <a className="text-blue-500 ml-auto" href="#">
            Follow
          </a>
        </div>
      ))}
      <div className="text-gray-500 text-xs mt-6">
        <p>
          About • Help • Press • API • Jobs • Privacy • Terms • Locations • Language • Meta Verified
        </p>
        <p className="mt-2">© 2025 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
};

export default SuggestedUsers;
