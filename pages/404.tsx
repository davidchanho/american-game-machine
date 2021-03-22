import Image from "next/image";

function ErrorPage() {
  return (
    <>
      <Image src="/svg/404.svg" alt="Error Page Not Found" layout='fill' />
    </>
  );
}

export default ErrorPage;
