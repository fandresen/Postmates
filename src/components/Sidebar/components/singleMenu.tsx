import { Link } from "react-router-dom";

interface propsT {
    icon: string;
    title: string;
    link:string;
    action?: unknown | undefined 
}
export default function SingleMenu({ icon, title,link}: propsT) {
    return (
        <>
            <Link
                className="flex items-center px-4 py-2 my-[2vh] text-gray-700 hover:bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200"
                to={`/${link}`}
            >
                <img src={icon} alt="icon" className="w-6"/>

                <span className="mx-4 font-medium text-sm">{title}</span>
            </Link>
        </>
    );
}
