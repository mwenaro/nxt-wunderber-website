"use client"

import { PageWrapper } from "@/components/modules";
import { useEffect } from "react";
// import { AppProps } from "next/app";
// import { useRouter } from "next/router";
import * as gtag from './../../utils/Gtag'

const App = () => {
  // const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
   
  }, []);

  return <div>
    <PageWrapper>
        <div>Analytics Page</div>
    </PageWrapper>
  </div>;
};

export default App;