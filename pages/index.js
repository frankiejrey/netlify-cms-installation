import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <div >
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <h1>Netlify CMS Installation Demo</h1>
      <Script>
        {`
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
              if (!user) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            })
          }          
        `}
      </Script>
    </div>
  )
}
