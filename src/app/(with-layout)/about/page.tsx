import PageTitle from "@/components/PageTitle";
import Animation from "@/components/about/Animation";

export const metadata = {
  title: "About us | BookLand",
};

const About = () => {
  return (
    <>
      <PageTitle title="About" />
      <section className={`py-16`}>
        <div className="container">
          <div>
            <figure
              className="max-w-xs mx-auto"
              data-aos="fade-up"
              data-aos-offset="-30"
            >
              <Animation />
            </figure>
          </div>
          <div className={`max-w-3xl mx-auto mt-8 space-y-3`}>
            <p>
              BookLand is an online marketplace for books. Millions of brand new
              books, rare books, and out-of-print books are offered for sale
              through the BookLand websites from thousands of booksellers around
              the whole country. Readers can find bestsellers, collectors can
              find rare books, students can find new textbooks, and treasure
              hunters can find long-lost books.
            </p>
            <p>
              Our mission is to help people find and buy any book from any
              bookseller and our business stretches around the county. The
              unique inventory of books for sale from booksellers includes the
              country’s and world’s finest antiquarian books dating back to the
              15th century, countless out-of-print gems, millions of signed
              books, millions of used copies, a vast selection of college
              textbooks and new books too.
            </p>
            <p>
              BookLand remains a company with a passion for books. Booksellers
              love BookLand for helping them to sell books to buyers around the
              globe – 24 hours a day, 365 days a year. Buyers love BookLand for
              helping them to find and purchase books from the vast online
              inventory.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
