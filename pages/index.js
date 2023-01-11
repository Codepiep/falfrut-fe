import Image from 'next/image';
import {
  GradientButton,
  Navbar,
  SearchHeader,
  CategoryMainCard,
  SectionHeading,
  ProductCard,
  BodyContainer,
  Testimonials,
  FeatureCard,
  Footer,
} from '../components';
import {CATEGORIES} from '../utils';

const featuredPlaceholderArray = Array.from({length: 3}, () => 1);
const testimonials = [
  {
    name: 'samrat singh',
    rating: 3,
    comment: `Tempore assumenda culpa voluptate laudantium. 
        Expedita qui eaque sint maiores non debitis mollitia. Ut excepturi recusandae. Eum iusto voluptatibus explicabo vitae sit blanditiis 
        accusamus perferendis fugiat. Aut ipsum ducimus iste impedit maiores laudantium. Atque at aliquid.`,
  },
  {
    name: 'samrat singh',
    rating: 4,
    comment: `Tempore assumenda culpa voluptate laudantium. 
        Expedita qui eaque sint maiores non debitis mollitia. Ut excepturi recusandae. Eum iusto voluptatibus explicabo vitae sit blanditiis 
        accusamus perferendis fugiat. Aut ipsum ducimus iste impedit maiores laudantium. Atque at aliquid.`,
  },
  {
    name: 'samrat singh',
    rating: 5,
    comment: `Tempore assumenda culpa voluptate laudantium. 
        Expedita qui eaque sint maiores non debitis mollitia. Ut excepturi recusandae. Eum iusto voluptatibus explicabo vitae sit blanditiis 
        accusamus perferendis fugiat. Aut ipsum ducimus iste impedit maiores laudantium. Atque at aliquid.`,
  },
  {
    name: 'samrat singh',
    rating: 4,
    comment: `Tempore assumenda culpa voluptate laudantium. 
        Expedita qui eaque sint maiores non debitis mollitia. Ut excepturi recusandae. Eum iusto voluptatibus explicabo vitae sit blanditiis 
        accusamus perferendis fugiat. Aut ipsum ducimus iste impedit maiores laudantium. Atque at aliquid.`,
  },
  {
    name: 'samrat singh',
    rating: 2,
    comment: `Tempore assumenda culpa voluptate laudantium. 
        Expedita qui eaque sint maiores non debitis mollitia. Ut excepturi recusandae. Eum iusto voluptatibus explicabo vitae sit blanditiis 
        accusamus perferendis fugiat. Aut ipsum ducimus iste impedit maiores laudantium. Atque at aliquid.`,
  },
  {
    name: 'samrat singh',
    rating: 1,
    comment: `Tempore assumenda culpa voluptate laudantium. 
        Expedita qui eaque sint maiores non debitis mollitia. Ut excepturi recusandae. Eum iusto voluptatibus explicabo vitae sit blanditiis 
        accusamus perferendis fugiat. Aut ipsum ducimus iste impedit maiores laudantium. Atque at aliquid.`,
  },
  {
    name: 'samrat singh',
    rating: 4,
    comment: `Tempore assumenda culpa voluptate laudantium. 
        Expedita qui eaque sint maiores non debitis mollitia. Ut excepturi recusandae. Eum iusto voluptatibus explicabo vitae sit blanditiis 
        accusamus perferendis fugiat. Aut ipsum ducimus iste impedit maiores laudantium. Atque at aliquid.`,
  },
  {
    name: 'samrat singh',
    rating: 3,
    comment: `Tempore assumenda culpa voluptate laudantium. 
        Expedita qui eaque sint maiores non debitis mollitia. Ut excepturi recusandae. Eum iusto voluptatibus explicabo vitae sit blanditiis 
        accusamus perferendis fugiat. Aut ipsum ducimus iste impedit maiores laudantium. Atque at aliquid.`,
  },
];
export default function Home() {
  return (
    <main>
      <SearchHeader />
      <Navbar />
      <header className="flex justify-between">
        <div className="lg:pl-[125px] lg:pt-[170px] lg:w-[50%]">
          <h1 className=" font-josefin relative z-0 uppercase text-primary font-black lg:text-7xl lg:before:absolute lg:before:-z-10 lg:before:content-[''] lg:before:bg-accentBackground lg:before:-translate-x-[30%] lg:before:-translate-y-[40%] lg:before:rounded-full lg:before:w-[237px] lg:before:h-[237px]">
            A place with everything{' '}
            <span className="text-accent lg:text-5xl lg:font-medium">
              healthy and organic
            </span>
          </h1>
          <p className="text-primary text-justify mt-4 font-medium font-overpass">
            we provide healthy and organic
            <span className="text-accent"> Falfrut</span> which are taken
            directly from farmers and are kept fresh under all conditions
          </p>
          <GradientButton value="Let's shop" className="mt-8" />
        </div>
        <div className="lg:py-[70px] lg:w-[50%] flex lg:justify-end lg:w-[782px] lg:h-[816px]">
          <Image
            src="/images/hero-image.png"
            alt="vegetables"
            width={441}
            height={776}
            style={{width: '100%', height: '100%'}}
            priority
          />
        </div>
      </header>
      {/* categories */}
      <section className="flex  lg:py-[100px]">
        <BodyContainer className="flex justify-between">
          <CategoryMainCard category={CATEGORIES.VEGETABLES} />
          <CategoryMainCard category={CATEGORIES.FRUITS} />
        </BodyContainer>
      </section>
      {/* featured */}
      <section className="lg:py-[100px]">
        <BodyContainer>
          <SectionHeading title="Featured" subtitle="Grab your falfrut now" />
          <div className="lg:mt-[80px] flex md:gap-16 flex-wrap">
            {featuredPlaceholderArray.map((_, i) => (
              <ProductCard key={i} />
            ))}
            <ProductCard />
          </div>
        </BodyContainer>
      </section>
      {/* testimonials */}
      <section className="lg:py-[100px]">
        <BodyContainer className="flex">
          <div className="lg:w-[30%] flex items-center">
            <h2 className=" h-content w-content text-primary font-black lg:text-[60px] ">
              Our Satisfied customers
            </h2>
          </div>
          <Testimonials data={testimonials} />
        </BodyContainer>
      </section>
      {/* site features */}
      <section className="lg:py-[100px]">
        <BodyContainer>
          <div className="flex justify-evenly">
            <FeatureCard
              iconUrl="/images/shipping-icon.png"
              data="free shipping"
            />
            <FeatureCard iconUrl="/images/call-icon.png" data="8978767654" />
            <FeatureCard
              iconUrl="/images/delivery-icon.png"
              data="door step delivery"
            />
          </div>
        </BodyContainer>
      </section>
      <Image
        src="/images/footer-image.png"
        alt="fruits and vegetables"
        width={1280}
        height={720}
        style={{height: '400px', width: '100%'}}
      />
      <Footer />
    </main>
  );
}
