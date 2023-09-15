import Link from "next/link";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearCart } from "@/redux/cart/cartSlice";

const CalculationCard = () => {
  const { cartCalculation } = useAppSelector((store) => store.cartSlice);
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Cart will be cleared.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#131045",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Cleared!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          dispatch(clearCart());
        });
      }
    });
  };

  return (
    <div className="card card-compact bg-white p-5 rounded">
      <div className="card-body">
        <h2 className="relative card-title justify-center text-lg after:content-[''] after:absolute after:-bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-[1rem] after:h-0.5 after:bg-gray-500">
          Cart
        </h2>
        <div className="flex flex-col mt-5 space-y-2">
          <span className="font-semibold">
            Total Price: ${cartCalculation.total.toFixed(2)}
          </span>
          <span className="font-semibold">
            Tax: ${cartCalculation.tax.toFixed(2)}
          </span>
          <span className="font-semibold">
            Grand Total: ${cartCalculation.grandTotal.toFixed(2)}
          </span>
        </div>
        <div className="card-actions mt-5">
          <button
            type="button"
            className="btn btn-sm btn-warning border-none rounded-2xl normal-case w-full"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <Link
            href={`/checkout`}
            className="btn btn-sm bg-blue-cetacean hover:bg-blue-cetacean/70 text-white border-none rounded-2xl normal-case w-full"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CalculationCard;
