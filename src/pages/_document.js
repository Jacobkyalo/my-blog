import { Html, Head, Main, NextScript } from "next/document";
import AppFooter from "@/components/app-footer";
import AppContainer from "@/components/app-container";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <AppContainer>
          <Main />
          <AppFooter />
        </AppContainer>
        <NextScript />
      </body>
    </Html>
  );
}
