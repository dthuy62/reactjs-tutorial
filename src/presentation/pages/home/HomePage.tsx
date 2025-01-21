import {Post, Sidebar, Stories, SuggestedUsers} from "../../components";

export default function HomePage() {

  return (
    <>
      <div className="flex bg-gray-50">
        <Sidebar/>
        <div className="flex justify-center w-full  overflow-y-auto max-h-screen">
          <div className="p-4 max-w-2xl w-full">
            <Stories/>
            <Post/>
          </div>
          <div className="w-1/4">
            <SuggestedUsers/>
          </div>

        </div>

      </div>
    </>
  );
}



