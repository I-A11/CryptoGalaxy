import { Roboto } from "next/font/google";

import PageLayout from "@/components/layout/PageLayout";
import "@/styles/globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </main>
  );
}
