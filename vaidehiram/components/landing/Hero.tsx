import * as Linking from 'expo-linking';
import { Platform, Pressable, Text, View } from 'react-native';

import { business, contact, hero } from '@/constants/config';

export function Hero() {
  const onContact = () => {
    if (Platform.OS === 'web') {
      // Scroll smoothly to the footer contact section
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      Linking.openURL(`mailto:${contact.email}?subject=${encodeURIComponent(`Enquiry — ${business.shortName}`)}`);
    }
  };

  return (
    <View className="relative overflow-hidden from-blush-50 via-cream to-babySky/15 bg-gradient-to-b pb-16 pt-10 md:pb-24 md:pt-14">
      <View className="pointer-events-none absolute inset-0">
        <View className="bg-sunshine/30 absolute -right-24 -top-32 h-80 w-80 rounded-full blur-3xl" />
        <View className="bg-crayonLilac/35 absolute -bottom-32 -left-28 h-80 w-80 rounded-full blur-3xl" />
        <View className="bg-babySky/40 absolute bottom-20 right-[8%] h-56 w-56 rounded-full blur-2xl md:right-[18%]" />
        <View className="bg-crayonPink/25 absolute left-[20%] top-24 h-24 w-24 rounded-full md:left-[28%]" />
      </View>

      <View className="relative z-10 mx-auto w-full max-w-6xl flex-col px-5 md:flex-row md:items-center md:gap-14 md:px-10">
        <View className="flex-1">
          <View className="mb-4 flex-row flex-wrap items-center gap-2 self-start">
            <View className="border-sunshine/60 bg-white/95 rounded-full border-2 px-4 py-2 shadow-lift">
              <Text className="font-body text-crayonCoral text-xs font-bold uppercase tracking-[0.2em]">
                {business.shortName}
              </Text>
            </View>
            <Text className="text-lg">🌳</Text>
          </View>

          <Text className="font-body text-ink-700 mb-4 text-lg font-medium italic leading-snug md:text-xl">
            &ldquo;{business.tagline}&rdquo;
          </Text>

          <Text className="font-display text-ink-900 mb-2 text-[2.4rem] font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-[3.4rem]">
            <Text className="text-ink-900">Calm, </Text>
            <Text className="text-crayonCoral">joyful</Text>
            <Text className="text-ink-900"> days for </Text>
            <Text className="text-babySky">little</Text>
            <Text className="text-ink-900"> </Text>
            <Text className="text-sage-deep">learners</Text>
          </Text>

          <View className="mb-7 mt-3 max-w-xl flex-row flex-wrap gap-2">
            <View className="bg-sunshine/45 border-sunshine/80 rounded-xl border px-3 py-1.5">
              <Text className="font-body text-ink-900 text-xs font-bold">🚗 I come to your home</Text>
            </View>
            <View className="bg-crayonGrass/35 border-crayonGrass rounded-xl border px-3 py-1.5">
              <Text className="font-body text-ink-900 text-xs font-bold">🎨 Play-led days</Text>
            </View>
          </View>

          <Text className="font-body text-ink-700 mb-9 max-w-xl text-base leading-relaxed md:text-lg">
            {hero.subline}
          </Text>

          <View className="flex-col gap-3 self-start">
            <Pressable
              onPress={onContact}
              accessibilityRole="button"
              className="border-ink-900/10 rounded-2xl border-b-4 border-b-crayonCoral bg-crayonCoral px-9 py-4 shadow-playful active:opacity-90 web:transition-transform web:hover:scale-[1.02]">
              <Text className="font-body text-center text-base font-bold text-white">{hero.primaryCtaLabel}</Text>
            </Pressable>
            <Text className="font-body text-ink-500 max-w-xs pl-1 text-sm">{hero.ctaHint}</Text>
          </View>
        </View>

        <View className="relative mt-14 hidden min-h-[400px] w-full flex-1 md:mt-0 md:flex">
          <View className="border-sunshine/50 from-sunshine/40 to-crayonPink/30 shadow-playful absolute right-2 top-8 z-0 h-40 w-40 rotate-6 rounded-3xl border-4 border-dashed bg-gradient-to-br md:right-12 md:top-10" />

          <View className="border-crayonCoral/30 from-white to-babySky/15 shadow-card absolute right-0 top-6 z-20 w-[92%] rounded-[2rem] border-2 bg-white/95 p-7 shadow-lift backdrop-blur-xl web:hover:-translate-y-1 web:transition-transform web:duration-300 md:top-10 md:w-[85%]">
            <Text className="mb-3 text-4xl">🏡</Text>
            <Text className="font-display text-ink-900 mb-2 text-xl font-bold">Care in your own home</Text>
            <Text className="font-body text-ink-700 text-sm leading-relaxed">
              Your child stays in their familiar surroundings — their toys, their routines, their cosy corners. No
              settling-in stress.
            </Text>
            <View className="bg-crayonGrass/40 border-crayonGrass mt-5 flex-row flex-wrap gap-2 self-start rounded-2xl border px-3 py-2.5">
              <Text className="text-base">🧺</Text>
              <Text className="font-body text-ink-900 text-xs font-bold">Messy play welcome · familiar space</Text>
            </View>
          </View>

          <View className="border-sunshine bg-sunshine/90 absolute bottom-4 left-0 z-10 w-[62%] rounded-2xl border-4 border-white p-4 shadow-card web:hover:-translate-y-0.5 web:transition-transform md:bottom-8">
            <Text className="font-body text-ink-900 text-[11px] font-bold uppercase tracking-[0.2em]">Vibe check</Text>
            <Text className="font-display text-ink-900 mt-1.5 text-lg font-bold">Happy, fed &amp; tucked-in calm</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
