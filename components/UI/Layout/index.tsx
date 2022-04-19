import { ThemeProvider } from "next-themes";
import Navbar from "../Navbar";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
    return(
        <ThemeProvider attribute="class" defaultTheme="light">
            <Navbar/>
            <main>{children}</main>
        </ThemeProvider>            
    );
};