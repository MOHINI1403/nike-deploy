import { CustomerReviews,Footer,Hero,PopularProduct,SpecialOffer,SuperQuality,Services,Subscribe} from "./sections"
import Nav from "./components/Nav"
const App=()=>{
  return (
    <main className="relative bg-white">
      <Nav />
      <section className="xl:padding-1 wide:padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>

    </main>
    
  )
}
export default App