import CardPublication from "@/features/posting/components/PublicationCard";
import { dataT, useFetchPost } from "@/features/posting/hooks/useFetchPost";

export default function Home() {
  const dataPost = useFetchPost();
  return (
    <>
      {
      dataPost.map((data: dataT) => (
        <CardPublication
          key={data.id}
          authorAvatar={data.authorAvatar}
          authorName={data.authorName}
          date={data.date}
          desc={data.desc}
          postImage={data.postImage}
          title={data.title}
        />
      ))
      }
    </>
  );
}
