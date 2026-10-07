import './globals.css'

const SITE_URL = 'https://flagman5casino.vercel.app'
const SITE_TITLE =
  'Flagman Casino — официальный сайт и рабочее зеркало: играть онлайн безопасно'
const SITE_DESCRIPTION =
  'Flagman Casino официальный сайт приглашает играть онлайн: рабочее зеркало Флагман Казино 3, лицензионные слоты. Flagman Casino официальный — быстрые выплаты, поддержка 24/7 и бонусы новым игрокам.'
const SITE_IMAGE = `${SITE_URL}/images/w7k3-hero.jpg`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      {/* HEAD-теги прописаны прямо в html: React 19 поднимает title/meta/link в <head> */}
      <title>{SITE_TITLE}</title>
      <meta name="description" content={SITE_DESCRIPTION} />
      <meta
        name="keywords"
        content="flagman casino, flagman casino официальный сайт, flagman casino зеркало, flagman casino официальный, флагман казино официальный сайт, флагман казино, flagman casino играть, флагман казино 3, зеркало рабочее, флагман казино онлайн, флагман казино официальный, флагман казино играть, флагман казино зеркало"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-image-preview:large, max-snippet:-1"
      />
      <meta name="application-name" content="Flagman Casino" />
      <meta name="author" content="Флагман Казино (Flagman Casino)" />
      <link rel="canonical" href={`${SITE_URL}/`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta property="og:site_name" content="Flagman Casino" />
      <meta property="og:title" content={SITE_TITLE} />
      <meta property="og:description" content={SITE_DESCRIPTION} />
      <meta property="og:image" content={SITE_IMAGE} />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="600" />
      <meta
        property="og:image:alt"
        content="Флагманский корабль Flagman Casino в ночном море"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={SITE_TITLE} />
      <meta name="twitter:description" content={SITE_DESCRIPTION} />
      <meta name="twitter:image" content={SITE_IMAGE} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="Flagman Casino" />
      <meta name="theme-color" content="#0d2440" />
      {/* HEAD-SLOT: сюда вставляйте дополнительные пользовательские теги (верификации,
          preload, extra meta) — React 19 сам поднимет их в <head> */}
      <body>{children}</body>
    </html>
  )
}
