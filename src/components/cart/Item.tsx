import React from "react";
import Swal from "sweetalert2";
import { IKImage } from "imagekitio-react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useAppDispatch } from "@/redux/hooks";
import { addCart, removeCart } from "@/redux/cart/cartSlice";

interface Book {
  _id: string;
  title: string;
  isbn13: string;
  quantity: number;
  price: number;
  discountPrice: number;
  image: {
    path: string;
  };
  discount: boolean;
}

interface ItemProps {
  book: Book;
}

const Item: React.FC<ItemProps> = ({ book }) => {
  const {
    _id,
    title,
    isbn13,
    quantity,
    price,
    discountPrice,
    image,
    discount,
  } = book;
  const dispatch = useAppDispatch();

  const handleDecBook = (id: string, title: string, method: string) => {
    if (quantity > 1 && !Boolean(method)) {
      dispatch(removeCart({ id, method: "" }));
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: title + " will be removed from cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#131045",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Removed!",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            dispatch(removeCart({ id, method: "short" }));
          });
        }
      });
    }
  };

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <figure className="mask mask-squircle w-12 h-12">
              <IKImage
                path={image.path}
                alt={``}
                transformation={[
                  {
                    height: "264",
                    q: "30",
                  },
                ]}
              />
            </figure>
          </div>
          <div>
            <h3 className="font-bold">{title}</h3>
            <h5 className="text-gray-500">{isbn13}</h5>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm space-x-0.5">
          <span>$</span>
          <span>{(discount ? discountPrice : price).toFixed(2)}</span>
        </span>
      </td>
      <td className={`w-36`}>
        <div className="btn-group">
          <button
            className="btn btn-xs btn-outline"
            onClick={() => handleDecBook(_id, title, "")}
          >
            <FaMinus />
          </button>
          <span className="btn btn-xs btn-outline bg-yellow-indian border-x-yellow-indian pointer-events-none">
            {quantity}
          </span>
          <button
            className="btn btn-xs btn-outline"
            onClick={() => dispatch(addCart({ id: _id, method: "" }))}
          >
            <FaPlus />
          </button>
        </div>
      </td>
      <td className={`w-36`}>
        <span className="badge badge-ghost badge-sm font-bold space-x-0.5">
          <span>$</span>
          <span>
            {(quantity * (discount ? discountPrice : price)).toFixed(2)}
          </span>
        </span>
      </td>
      <td>
        <FaTrash
          className={`text-red-600 hover:text-red-400 cursor-pointer transition-colors duration-500`}
          onClick={() => handleDecBook(_id, title, "trash")}
        />
      </td>
    </tr>
  );
};

export default Item;
