import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="w-96">
        <Image
          src="https://storage.googleapis.com/handiism12345/handiism.jpg"
          width={150}
          height={150}
          alt="Photo profile"
          className="mx-auto mb-2 rounded-full"
        />
        <p className="text-center">
          My name is Muhammad Handi Rachmawan. I am an opiniated Informatics
          student at UPN Veteran Yogyakarta. Lately Ive been learning some
          back-end and cloud computing stuff, but sometimes I do mobile
          development too.
        </p>
      </div>
    </main>
  );
}
