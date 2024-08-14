import Header from './Header.tsx'
import Footer from './Footer.tsx'
import StopDetail from './StopDetail.tsx'

const App = () => {
  return (
    <>
      <div className="grid min-h-[100svh] grid-rows-[auto_1fr_auto]">
        <header>
          <Header />
        </header>
        <main className="row-start-2 row-end-3 flex flex-col">
          <StopDetail />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
