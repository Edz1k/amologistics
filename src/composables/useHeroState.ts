import { computed, ref } from 'vue'

interface Subtitle {
  text1: string
  icon?: string
  text2?: string
}

export interface ServiceContent {
  title: string
  subtitles: Subtitle[]
  list: string[]
}

// Данные для всех вариантов Hero-секции
const servicesData: Record<string, ServiceContent> = {
  'default': {
    title: 'Международные грузоперевозки',
    subtitles: [
      { text1: 'из Европы', icon: 'i-mdi:arrow-right', text2: 'в Казахстан' },
      { text1: 'Россия', icon: 'i-mdi:swap-horizontal', text2: 'Казахстан' },
    ],
    list: [
      '- Комплектные авто, контейнера, вагоны',
      '- Автоконсолидация (сборные грузы)',
      '- Негабаритные перевозки (тралы, вагоны)',
    ],
  },
  'relocation': {
    title: 'Перевозка личных вещей',
    subtitles: [{ text1: 'из Казахстана в Россию' }, { text1: 'Переезд квартир, домов и офисов' }],
    list: ['- Быстрая подача авто', '- Помощь в оформлении сопроводительных документов', '- Гарантия Сохранности'],
  },
  'consolidation': {
    title: 'Консолидация грузов из России',
    subtitles: [{ text1: 'Москва/Санкт-Петербург/Екатеринбург/Новосибирск' }, { text1: 'Отправка грузов от 50 кг' }],
    list: ['- Забор груза у поставщика, консолидация и отправка', '- Быстрая подача авто', '- Гарантия сохранности', '- Сроки и стоимость зависят от направления.'],
  },
  'euro-delivery': {
    title: 'Доставка сборных грузов из Европы',
    subtitles: [{ text1: 'Для юридических лиц' }, { text1: 'Логистика и таможенное оформление' }],
    list: ['- Организация забора груза у поставщика в любой точке ЕС (от 1 паллеты)', '- Комплектация груза на складе (3-4 дня) и отправка', '- Помощь в таможенном оформлении', '- Гарантия сохранности'],
  },
  'oversize': {
    title: 'Доставка негабаритных грузов',
    subtitles: [{ text1: 'из Европы в Казахстан' }, { text1: 'Автомобильным и железнодорожным путем' }],
    list: ['- Открытые площадки, низкорамные тралы, модульные тралы и ж/д платформы', '- Таможенное оформление и спец. разрешения', '- Страхование и сопровождение груза', '- Отсутствие ограничений на вес и объем'],
  },
}

const activeServiceKey = ref('default')

export function useHeroState() {
  const currentContent = computed(() => {
    const key = activeServiceKey.value as keyof typeof servicesData
    return servicesData[key] || servicesData.default
  })

  const setActiveService = (key: string) => {
    activeServiceKey.value = key
    const heroSection = document.querySelector('#hero-section')
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return {
    activeServiceKey,
    currentContent,
    setActiveService,
  }
}
