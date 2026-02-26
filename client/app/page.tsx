import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
 <div>this is my main page.
  <div className="bg-red-400">this one is second line ok tellme about that one</div>
  <Link href="/">Home</Link>
<h1 className="common-heading">This one is h1header</h1>
 </div>
  );
}
