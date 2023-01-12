import {
  SearchHeader,
  Navbar,
  CategorySidebar,
  CategoryContent,
} from '../components';

const categoriesData = [
  {name: 'Vegetables', totalItems: 3122},
  {name: 'Fruits', totalItems: 4123},
];

const Categories = () => {
  return (
    <>
      <SearchHeader />
      <Navbar />
      <main>
        <header className="lg:h-[282px]">
          <div className="md:h-full md:bg-[url('/images/categories-page-bg.png')] md:relative flex justify-center items-center">
            <span className="md:h-full md:w-full md:absolute md:z-0 md:top-0 md:left-0 md:bg-primary/80" />
            <h1 className="md:text-white md:text-[60px] md:relative md:z-20 font-josefin md:w-content uppercase">
              Your healthy groceries
            </h1>
          </div>
        </header>
        <section className="lg:px-[20px] flex mt-5">
          <CategorySidebar
            categoriesData={categoriesData}
            className="lg:max-w-[20%] lg:w-[20%]"
          />
          <CategoryContent className="lg:max-w-[80%] lg:w-[80%]" />
        </section>
      </main>
    </>
  );
};

export default Categories;
