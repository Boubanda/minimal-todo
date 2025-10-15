import './globals.css'

export const metadata = {
  title: 'Minimal Todo - Simple & Elegant',
  description: 'To-Do List minimaliste avec PostgreSQL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}