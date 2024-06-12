import PublicationCard from "@/features/posting/components/PublicationCard";
import { dataT, useFetchPost } from "@/features/posting/hooks/useFetchPost";

export default function Home(){
  const  dataPost = useFetchPost()
  console.log(dataPost);
  return (
    <>
    {
      dataPost.map((data:dataT)=>{
        // console.log(data.title);
        
        <PublicationCard props={data.authorAvatar,data.authorName,data.date,data.desc,data.postImage,data.title}/>
      })
    } 
    </>
  )
}
