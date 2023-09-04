import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import PageTitle from "@/components/PageTitle";
import Form from "@/components/contact/Form";
import Animation from "@/components/contact/Animation";

export const metadata = {
  title: "Contact us | BookLand",
};

const Contact = () => {
  return (
    <>
      <PageTitle title="Contact" />
      <section className={`py-16 overflow-x-hidden`}>
        <div className="container">
          <div className={`max-w-3xl mx-auto`}>
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8`}>
              <div
                className={`bg-white px-8 py-10 rounded shadow-sm text-center`}
                data-aos="fade-up"
                data-aos-offset="-30"
              >
                <div>
                  <span
                    className={`inline-flex justify-center items-center w-12 h-12 border border-yellow-indian border-dotted rounded-full text-yellow-indian text-lg`}
                  >
                    <FaEnvelope />
                  </span>
                </div>
                <div className={`mt-3`}>
                  <h3 className={`font-bold text-lg text-blue-cetacean`}>
                    Email
                  </h3>
                  <Link
                    href="mailto:support@bookland.com"
                    className={`font-medium text-gray-500 hover:text-yellow-indian break-words transition-colors duration-500`}
                  >
                    support@bookland.com
                  </Link>
                </div>
              </div>
              <div
                className={`bg-white px-8 py-10 rounded shadow-sm text-center`}
                data-aos="fade-up"
                data-aos-offset="-30"
              >
                <div>
                  <span
                    className={`inline-flex justify-center items-center w-12 h-12 border border-yellow-indian border-dotted rounded-full text-yellow-indian text-lg rotate-90`}
                  >
                    <FaPhone />
                  </span>
                </div>
                <div className={`mt-3`}>
                  <h3 className={`font-bold text-lg text-blue-cetacean`}>
                    Phone
                  </h3>
                  <Link
                    href="tel:+8801708166238"
                    className={`font-medium text-gray-500 hover:text-yellow-indian transition-colors duration-500`}
                  >
                    (+880) 1708166238
                  </Link>
                </div>
              </div>
            </div>
            <div className={`mt-16`}>
              <h1
                className={`font-bold text-2xl sm:text-3xl text-center text-blue-cetacean`}
                data-aos="fade-up"
              >
                Drop us a message for any query
              </h1>
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 gap-8 items-center mt-10`}
              >
                <div
                  className={`bg-white px-8 py-10 rounded shadow-sm`}
                  data-aos="fade-right"
                  data-aos-offset="-30"
                >
                  <Form />
                </div>
                <div
                  className="order-first sm:order-none max-w-sm justify-self-center"
                  data-aos="fade-left"
                  data-aos-offset="-30"
                >
                  <Animation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
