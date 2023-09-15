import Link from "next/link";
import Image from "next/image";
import imgClock from "@/assets/clock.png";
import imgChecklist from "@/assets/checklist.png";
import imgComplete from "@/assets/complete.png";

export const metadata = {
  title: "Order Complete | BookLand",
};

const CompleteOrder = () => {
  return (
    <section className="py-16 text-center">
      <div className="container">
        <div className="max-w-lg mx-auto p-6">
          <div className="relative bg-gray-50 border-b-2 border-l-2 border-dotted p-8">
            <Image
              src={imgClock.src}
              alt=""
              width={0}
              height={0}
              sizes={`100vw`}
              className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-12"
            />
            <Image
              src={imgComplete.src}
              alt=""
              width={0}
              height={0}
              sizes={`100vw`}
              className="w-12 mx-auto"
            />
            <h1 className="text-3xl font-bold text-blue-cetacean my-3">
              Your Order Is Completed!
            </h1>
            <p className="text-gray-500">
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 hours. You will receive an email
              confirmation when your order is completed.
            </p>
            <Link href={`/books`} className="btn-blue-cetacean mt-8">
              Continue Shopping
            </Link>
            <Image
              src={imgChecklist.src}
              alt=""
              width={0}
              height={0}
              sizes={`100vw`}
              className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteOrder;
