import Footer from "@/components/layout/Footer";
import MainNavbar from "@/components/layout/MainNavbar";
import "../globals.css";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainNavbar />
      {children}
      <Footer />
    </>
  );
}
