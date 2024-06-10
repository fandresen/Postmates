type propsT = {
  name: string;
  email: string;
};
export default function UserInfo({ name, email }: propsT) {
  return (
    <>
      <h4 className="mx-2 mt-2 text-xl 2xl:text-2xl font-medium text-gray-800 dark:text-gray-200">
        {name}
      </h4>
      <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
        {email}
      </p>
    </>
  );
}
