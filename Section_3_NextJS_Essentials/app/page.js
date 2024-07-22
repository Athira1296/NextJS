import Header from "@/src/components/header";
import Link from "next/link";

export default function Home() {
  // Page.js is treated as server component
  // console.log("Executing ...") // check terminal
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About Us</Link></p>
    </main>
  );
}
