import { Text, View } from 'react-native';

import { SectionHeading } from '@/components/landing/SectionHeading';
import { faq, faqSection } from '@/constants/config';

export function Faq() {
  return (
    <View className="from-babySky/15 via-white to-sunshine/15 bg-gradient-to-b px-5 py-16 md:px-10 md:py-24">
      <View className="mx-auto w-full max-w-3xl">
        <SectionHeading
          eyebrow={faqSection.eyebrow}
          title={faqSection.title}
        />
        <View className="flex-col gap-4">
          {faq.map((item, i) => (
            <View
              key={i}
              className="border-white/90 flex-row gap-4 overflow-hidden rounded-3xl border bg-white/90 p-5 shadow-lift backdrop-blur-md web:transition-transform web:duration-300 web:hover:-translate-y-0.5 md:gap-6 md:p-7">
              <View className="from-sunshine to-crayonCoral mt-0.5 h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-white bg-gradient-to-br shadow-playful">
                <Text className="font-display text-sm font-bold text-white">{i + 1}</Text>
              </View>
              <View className="min-w-0 flex-1">
                <Text className="font-display text-ink-900 mb-2 text-lg font-bold">{item.question}</Text>
                <Text className="font-body text-ink-600 text-base leading-relaxed">{item.answer}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
