import MainLayout from "./MainLayout";

interface Children {
  children: string;
}

const Page = ({children}:Children) => {
  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
}

export default Page;
