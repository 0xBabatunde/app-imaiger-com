import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <Script id="ms_clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "lazui8r13v");`}
      </Script>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5N2TG267KE"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-5N2TG267KE');
        `}
      </Script>
    </>
  );
}
