import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import "@/styles/highlight.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
