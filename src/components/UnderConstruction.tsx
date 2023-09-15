"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const UnderConstruction = () => {
  let [isModalOpen, setModalOpen] = useState(true);

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setModalOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-white w-80 p-6 rounded-2xl shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-semibold leading-6"
                >
                  Under Construction
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    We will be back very soon. But you can visit by pressing
                    below button.
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded text-xs text-blue-900 font-medium transition-colors duration-500"
                    onClick={() => setModalOpen(false)}
                  >
                    Got it!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UnderConstruction;
