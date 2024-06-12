import { useDispatch } from "react-redux";
import UserInfo from "../components/Sidebar/components/UserInfo";
import Pdp from "../components/Sidebar/components/pdp";
import SingleMenu from "../components/Sidebar/components/singleMenu";
import { AppDispatch } from "@/redux/store";
import { removeToken } from "@/redux/authSlice";

export default function Menu() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <aside className=" w-[18vw] bg-white border-r rtl:border-r-0 rtl:border-l border-[rgba(201,201,201,0.3)] dark:bg-gray-900 dark:border-gray-700">
        <div className="fixed h-screen flex flex-col px-4 py-8 overflow-y-auto left-5">
          <div className="flex flex-col items-center mt-[2vh] -mx-2">
            <Pdp src="src/components/Sidebar/assets/photo/pdp.jpeg" />
            <UserInfo bio="I can't live without my life" name="fandresena" />
          </div>
          <div className="w-full h-1 bg-[rgba(0,0,0,0.2)] mt-[3vh]"></div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <SingleMenu
                icon="src/components/Sidebar/assets/icon/feed.svg"
                title="My Post"
                link="test"
              />
              <SingleMenu
                icon="src/components/Sidebar/assets/icon/search.svg"
                title="Find members"
                link="test"
              />
              <SingleMenu
                icon="src/components/Sidebar/assets/icon/friends.svg"
                title="Friends request"
                link="test"
              />
              <SingleMenu
                icon="src/components/Sidebar/assets/icon/gear.svg"
                title="Manage Profil"
                link="test"
              />
            </nav>
            <div className="">
              <button
                className="flex justify-center px-6 py-5 my-[2vh] text-gray-700 hover:bg-gray-100 rounded-xl dark:bg-gray-800 dark:text-gray-200 bg-[rgba(10,10,10,0.1)]"
                onClick={() => dispatch(removeToken())}
              >
                <img
                  src="src/components/Sidebar/assets/icon/logout.svg"
                  alt="icon"
                  className="w-6 mr-3"
                />
                Log Out
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
