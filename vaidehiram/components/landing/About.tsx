import { Text, View } from 'react-native';

import { SectionHeading } from '@/components/landing/SectionHeading';
import { about } from '@/constants/config';

export function About() {
  const [lead, ...rest] = about.paragraphs;

  return (
    <View className="from-mint/50 to-crayonLilac/15 bg-gradient-to-b px-5 py-16 md:px-10 md:py-24">
      {/* ── Main two-column card ── */}
      <View className="border-babySky/40 shadow-card relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border-4 border-dashed bg-white/95 shadow-lift backdrop-blur-sm md:rounded-[2.5rem] md:flex-row">
        <View className="from-crayonGrass/25 via-mint/40 to-sunshine/20 relative flex-1 bg-gradient-to-br px-8 py-10 md:max-w-[44%] md:p-12">
          <View className="bg-sunshine/40 pointer-events-none absolute -left-12 top-10 h-32 w-32 rounded-full blur-2xl" />
          <View className="relative">
            <View className="mb-5 flex-row items-center gap-2">
              <Text className="text-3xl">📖</Text>
              <Text className="font-body text-sage-deep text-sm font-bold uppercase tracking-widest">Our story</Text>
            </View>
            <SectionHeading align="left" eyebrow={about.eyebrow} title={about.sectionTitle} className="!mb-6" />
            <Text className="font-display text-ink-900 text-xl font-semibold leading-snug md:text-2xl">{lead}</Text>
          </View>
        </View>
        <View className="border-t-sage-muted/40 from-blush-50/80 relative flex-1 border-t bg-gradient-to-b to-white px-8 py-10 md:border-l md:border-t-0 md:p-12">
          <View className="bg-crayonPink/30 absolute right-8 top-10 h-28 w-28 rounded-full blur-2xl" />
          <View className="relative">
            {rest.map((p, i) => (
              <Text
                key={i}
                className="font-body text-ink-800 mb-6 text-base leading-relaxed last:mb-0 md:text-[17px] md:leading-8">
                {p}
              </Text>
            ))}
          </View>
        </View>
      </View>

      {/* ── Pull-quote — Why I love childminding ── */}
      <View className="relative mx-auto mt-8 w-full max-w-6xl overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
        <View className="from-sunshine/40 via-crayonPink/25 to-babySky/30 absolute inset-0 bg-gradient-to-br" />
        <View className="bg-sunshine/50 pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full blur-3xl" />
        <View className="bg-crayonPink/40 pointer-events-none absolute -bottom-8 -right-8 h-36 w-36 rounded-full blur-3xl" />

        <View className="relative px-8 py-10 md:px-16 md:py-14">
          <Text
            className="font-display text-sunshine absolute left-6 top-2 select-none text-[7rem] leading-none opacity-60 md:left-10 md:text-[9rem]"
            aria-hidden="true">
            ❝
          </Text>
          <View className="pl-10 md:pl-16">
            <Text className="font-display text-ink-900 text-xl font-semibold italic leading-relaxed md:text-2xl md:leading-10">
              {about.pullQuote}
            </Text>
            <View className="mt-5 flex-row items-center gap-3">
              <View className="bg-crayonCoral/70 h-px flex-1 max-w-[3rem]" />
              <Text className="text-xl">💛</Text>
              <Text className="font-body text-ink-600 text-sm font-bold uppercase tracking-widest">Vaidehi</Text>
            </View>
          </View>
        </View>
      </View>

      {/* ── Philosophy card — Why quality childminding matters ── */}
      <View className="relative mx-auto mt-6 w-full max-w-6xl overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
        {/* Mint/teal gradient — visually distinct from the warm pull-quote above */}
        <View className="from-crayonGrass/40 via-mint/50 to-babySky/35 absolute inset-0 bg-gradient-to-br" />
        <View className="bg-crayonGrass/30 pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full blur-3xl" />
        <View className="bg-babySky/40 pointer-events-none absolute -bottom-8 right-0 h-36 w-36 rounded-full blur-3xl" />

        <View className="relative px-8 py-10 md:px-14 md:py-12">
          {/* Heading row */}
          <View className="mb-7 flex-row items-center gap-3">
            <Text className="text-3xl">{about.philosophyCard.emoji}</Text>
            <Text className="font-display text-ink-900 text-xl font-bold md:text-2xl">
              {about.philosophyCard.heading}
            </Text>
          </View>

          {/* Four pillars */}
          <View className="mb-7 flex-row flex-wrap gap-4">
            {about.philosophyCard.pillars.map((pillar) => (
              <View
                key={pillar.label}
                className="bg-white/70 min-w-[140px] flex-1 rounded-2xl px-4 py-4 backdrop-blur-sm">
                <Text className="mb-1 text-2xl">{pillar.icon}</Text>
                <Text className="font-display text-ink-900 mb-1 text-sm font-bold">{pillar.label}</Text>
                <Text className="font-body text-ink-700 text-xs leading-snug">{pillar.detail}</Text>
              </View>
            ))}
          </View>

          {/* Closing sentence */}
          <View className="border-white/60 rounded-xl border bg-white/40 px-5 py-4 backdrop-blur-sm">
            <Text className="font-body text-ink-800 text-sm leading-relaxed md:text-base md:leading-8">
              {about.philosophyCard.closing}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
