import { Analytics } from '@vercel/analytics/react';
import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar />
        <Main />
        <NextScript />
	<Analytics />
      </body>
    </Html>
  );
}
