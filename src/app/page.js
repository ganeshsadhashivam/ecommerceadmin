import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center bg-blue-200">
      <div className="text-center w-full">
        <button className="bg-white p-2 rounded-lg">Login with Google</button>
      </div>
    </div>
  );
}
