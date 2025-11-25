import './globals.css'

export const metadata = {
  title: 'EcoTech Nexus',
  description: 'Digital solutions for Africa\'s environmental challenges'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
