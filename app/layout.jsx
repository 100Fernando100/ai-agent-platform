import './globals.css'
import { DemoBanner } from '../components/demo/DemoBanner'

export const metadata = {
  title: 'AI Agent Platform',
  description: 'AI Agent Platform Demo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DemoBanner />
        {children}
      </body>
    </html>
  )
}
