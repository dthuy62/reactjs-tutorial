// src/Stories.js

const storiesData = [
  { src: 'https://storage.googleapis.com/a1aa/image/xzx95yTeGnQiGyGbldJUjrpjGVpCL42e36VTgUc2jKz3NRHUA.jpg', label: 'ruych.stu...' },
  { src: 'https://storage.googleapis.com/a1aa/image/guJ41N9vdYLQKlpS2f1qVH2fqSgog5WW1fo5HI0hg4z6biOoA.jpg', label: 'ltna2602...' },
  { src: 'https://storage.googleapis.com/a1aa/image/6pQF0PllIBIcBhdxQ5PNsRhL8tCHIDS7qEfgs43mejmAORHUA.jpg', label: 'soohyun...' },
  { src: 'https://storage.googleapis.com/a1aa/image/6pQF0PllIBIcBhdxQ5PNsRhL8tCHIDS7qEfgs43mejmAORHUA.jpg', label: 'tnquynh.23' },
  { src: 'https://storage.googleapis.com/a1aa/image/fm4AksakSeogqkLPngjO9IKESgpD8nTk3J8xn5ckCt0OORHUA.jpg', label: 'sontungmtp' },
  { src: 'https://storage.googleapis.com/a1aa/image/2jpo5NCReYTVJ6bTevlq99dA1FApNz0LNvupzoqjYH1IORHUA.jpg', label: 'soobin.ho...' },
  { src: 'https://storage.googleapis.com/a1aa/image/lxV2qk573L5yKtp8bGh3E9nfMhx076IqSsyhn3zzI9gCnoDKA.jpg', label: 'rhodishop' },
  { src: 'https://storage.googleapis.com/a1aa/image/i8wzVq5habonG9inGuKMZlNdIrt2XLFWKZMPbEI433miT0BF.jpg', label: 'boong.stu...' },
];

const Stories = () => {
  return (
    <div className="flex space-x-4 mb-6">
      {storiesData.map((story, index) => (
        <div key={index} className="flex flex-col items-center">
          <img alt={`Story ${index + 1}`} className="rounded-full border-2 border-pink-500 w-14 h-14" src={story.src} />
          <span className="text-xs mt-1">{story.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
