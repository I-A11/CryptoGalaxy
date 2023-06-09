import Header from "../common/Header-2";
import Footer from "../common/Footer";
const PageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
