
import MainLayout from "../Layout/MainLayout";

interface Children {
  children: string;
}

export default function Page({children}:Children) {
  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
}
