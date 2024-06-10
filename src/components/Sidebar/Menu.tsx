import UserInfo from "./components/UserInfo";
import Pdp from "./components/pdp";
import SingleMenu from "./components/singleMenu";

export default function Menu() {
    return (
        <>
            <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">

                <div className="flex flex-col items-center mt-6 -mx-2">
                    <Pdp />
                    <UserInfo email="eliotscript@gmail.com" name="fandresena" />
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <SingleMenu icon="src/components/Sidebar/assets/icon/feed.svg" title="My Post" link="test" />
                        <SingleMenu icon="src/components/Sidebar/assets/icon/search.svg" title="Find members" link="test" />
                        <SingleMenu icon="src/components/Sidebar/assets/icon/friends.svg" title="Friends request" link="test" />
                        <SingleMenu icon="src/components/Sidebar/assets/icon/gear.svg" title="Manage Profil" link="test" />
                    </nav>
                    <div className="border-2 border-gray-200 bg-[rgba(10,10,10,0.1)] hover:bg-gray-100 rounded-xl">
                        <SingleMenu icon="src/components/Sidebar/assets/icon/logout.svg" title="Log Out" link="test"/>
                        </div>
                </div>
            </aside>
        </>
    )
}













