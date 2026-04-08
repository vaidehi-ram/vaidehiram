import { Text, View } from 'react-native';

import { SectionHeading } from '@/components/landing/SectionHeading';
import { about } from '@/constants/config';

export function About() {
  const [lead, ...rest] = about.paragraphs;

  return (
    <View className="from-mint/50 to-crayonLilac/15 bg-gradient-to-b px-5 py-16 md:px-10 md:py-24">
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
    </View>
  );
}
