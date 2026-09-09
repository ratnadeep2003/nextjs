import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hi from home
      <Link href="/blog">Blog</Link>
      <Link href="/products">products</Link>
    </div>
  )
}
