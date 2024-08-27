import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col min-h-screen justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
