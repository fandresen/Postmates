import SearchBar from "@/components/header/components/Search";
import { ButtonIcon } from "@/components/ui/icon";

export default function Header() {
  return (
    <div className=" w-[75vw] pr-[5vw] pl-2 2xl:w-[80vw] h-[5vh] flex justify-between">
      <ButtonIcon src="/src/components/header/assets/icons8-menu.svg" className="w-12" />
      <div className="flex">
        <ButtonIcon src="/src/components/header/assets/icons8-rappels-de-rendez-vous.svg" className="w-8" />
        <SearchBar />
      </div>
    </div>
  )
}
