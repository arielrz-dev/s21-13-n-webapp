import ProfileLayout from './layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <ProfileLayout>
      <Component {...pageProps} />
    </ProfileLayout>
  );
}