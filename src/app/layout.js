import "./globals.css";
import TopLeftImg from "@/components/common/TopLeftImg";
import Nav from "@/components/Navbar/Nav";
import Header from "@/components/common/Header";
export const metadata = {
  title: "Soraya's Portfolio",
  description: "web developer and Freelancer",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-site text-white bg-cover bg-no-repeat relative h-screen overflow-hidden">
          <TopLeftImg />
          <Nav />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
