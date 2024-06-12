interface propsT {
    url: string;
  }
export default function PostImage({url}:propsT) {
  return (
    <>
  <img
        src={url}
        width={600}
        height={300}
        alt="Post Image"
        className="w-full aspect-[2/1] object-cover"
      />
    </>
  )
}
