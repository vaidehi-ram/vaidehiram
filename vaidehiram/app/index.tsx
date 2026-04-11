import Head from 'expo-router/head';
import { ScrollView, View } from 'react-native';

import { About } from '@/components/landing/About';
import { Faq } from '@/components/landing/Faq';
import { Footer } from '@/components/landing/Footer';
import { Hero } from '@/components/landing/Hero';
import { PlayfulStripe } from '@/components/landing/PlayfulStripe';
import { ProfileSpotlight } from '@/components/landing/ProfileSpotlight';
import { Testimonials } from '@/components/landing/Testimonials';
import { TrustBar } from '@/components/landing/TrustBar';
import { business, profilePhoto, seo, site } from '@/constants/config';

const canonicalUrl = site.canonicalBaseUrl.replace(/\/$/, '') + '/';

const ogImage =
  seo.ogImageUrl.trim() ||
  (profilePhoto.mode === 'remote' ? profilePhoto.remoteUrl.trim() : '') ||
  undefined;

export default function Index() {
  return (
    <>
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9LDGQ6DLW9" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9LDGQ6DLW9');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={business.shortName} />
        {ogImage ? <meta property="og:image" content={ogImage} /> : null}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
      </Head>
      <View className="from-sunshine/10 via-cream to-babySky/15 min-h-full flex-1 bg-gradient-to-b">
        <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
          <PlayfulStripe />
          <Hero />
          <ProfileSpotlight />
          <TrustBar />
          <Testimonials />
          <About />
          <Faq />
          <Footer />
        </ScrollView>
      </View>
    </>
  );
}
