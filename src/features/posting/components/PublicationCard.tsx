/**
 * v0 by Vercel.
 * @see https://v0.dev/t/I8ZpND6v57c
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "@/components/ui/card";
import AvatarPdp from "./AvatarPdp";
import Author from "./Author";
import PublishDate from "./PublishDate";
import PostDesc from "./PostDesc";
import PostImage from "./PostImage";
import { dataT } from "../hooks/useFetchPost";


export default function Component({props}: dataT) {

  return (
    <Card className="w-[70vw] ml-[2vw] rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-4 flex items-center gap-4">
        <AvatarPdp src={props.authorAvatar} />
        <div>
          <Author name={props.authorName}/>
          <PublishDate date={new Date(props.date)} />
        </div>
      </div>
      <PostImage url={props.postImage}/>
      <div className="p-4 space-y-2">
        <PostDesc
          title={props.title}
          desc={props.desc}
        />
      </div>
    </Card>
  );
}
