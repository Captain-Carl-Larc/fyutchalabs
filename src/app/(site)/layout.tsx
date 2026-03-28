import Header from '@/components/ui/layout/Header'
import Footer from '@/components/ui/layout/Footer'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20 min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}