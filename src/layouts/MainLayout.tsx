import { Container } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { AppTheme } from "../themes";
import { Footer } from "../components/Footer";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <AppTheme>
        <Navbar />
      </AppTheme>

      {/* <Container >  */}
      <div className="flex-grow">{children}</div>
      {/* </Container> */}

      <AppTheme>
        <Footer />
      </AppTheme>
    </div>
  );
};
