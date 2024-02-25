import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Signika } from "next/font/google";
import Sidebar from "react-sidebar";
import SidebarJSX from "@/components/Sidebar/sidebar";
import { MyContextProvider, MyContext } from "@/components/Context/context";
import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
const signika = Signika({ subsets: ["latin"] });

export default function App(props: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MyContextProvider>
        <MyApp {...props} />
      </MyContextProvider>
    </QueryClientProvider>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  const { isOpen, updateDrawerState } = React.useContext(MyContext);
  return (
    <Sidebar
      sidebar={<SidebarJSX />}
      open={isOpen}
      onSetOpen={updateDrawerState}
      styles={{ sidebar: { background: "white", display: "flex" } }}
    >
      <div className={`min-h-screen flex flex-col ${signika.className}`}>
        <Header />
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </Sidebar>
  );
}
