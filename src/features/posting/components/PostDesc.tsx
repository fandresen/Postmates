interface propsT {
  title: string;
  desc: string;
}
export default function PostDesc({ title, desc }: propsT) {
  return (
    <>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{desc}</p>
    </>
  );
}
