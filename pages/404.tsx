import Image from "next/image";

function ErrorPage() {
  return (
    <div>
      <Image src="/svg/404.svg" alt="Error Page Not Found" />
    </div>
  );
}

export default ErrorPage;
