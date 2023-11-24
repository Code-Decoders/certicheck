import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import Sidebar from "@/components/sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <div className="flex justify-center w-full">
        <Sidebar />
        <main className="container px-6">{children}</main>
      </div>
    </div>
  );
}
