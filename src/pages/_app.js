import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((pageEl) => pageEl);

  return <Component {...pageProps} />;
}
