import Form from "@/components/checkout/Form";

export const metadata = {
  title: "Checkout | BookLand",
};

const Checkout = () => {
  return (
    <section className={`py-16`}>
      <div className="container">
        <div className={`max-w-xl mx-auto`}>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
