/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
/* eslint-disable tailwindcss/no-custom-classname */
import {
  dashboard,
  mastercard,
  visacard,
  vervecard,
  paypal,
} from "../../assets";

export default function Settingpayment() {
  return (
    <div className="mx-auto bg-[#f5f5f5] pl-5">
      <div className="mb-3">
        <img
          className="size-24 rounded-full"
          src={dashboard}
          alt="Profile Image"
        />
      </div>
      <div className="text-md pb-4 font-semibold md:text-2xl">
        Select Payment Method
      </div>
      <div className="space-y-4">
        <label className="block cursor-pointer rounded-lg border p-4 hover:bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                name="payment"
                className="form-radio size-5 text-black"
                checked
              />
              <div>
                <h3 className="text-sm font-semibold md:text-lg">PayPal</h3>
                <p className="text-xs text-gray-500 md:text-sm">
                  Safe payment online. Bank card needed
                </p>
              </div>
            </div>
            <div className="pr-4">
              <img src={paypal} alt="PayPal Logo" className="size-16" />
            </div>
          </div>
        </label>

        <label className="block cursor-pointer rounded-lg border bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                name="payment"
                className="form-radio size-5 text-black"
              />
              <div>
                <h3 className="text-sm font-semibold md:text-lg">
                  Credit Card
                </h3>
                <p className="text-xs text-gray-500 md:text-sm">
                  Safe money transfer using your bank account. Visa, MasterCard,
                  Credit Card
                </p>
              </div>
            </div>
            <div className="flex gap-x-2">
              <div>
                <img
                  src={mastercard}
                  alt="MasterCard Logo"
                  className="size-10"
                />
              </div>
              <div>
                <img src={vervecard} alt="vervecard Logo" className="size-10" />
              </div>
              <div>
                <img src={visacard} alt="visacard Logo" className="size-10" />
              </div>
            </div>
          </div>
        </label>
      </div>

      <div className="border-t-2 border-black bg-white text-sm md:text-lg">
        <div className="mx-5 mt-6">
          <label className="mb-3 block">
            <span className=" font-semibold">Card Number</span>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border bg-[#f5f5f5] px-4 py-2"
              placeholder="0000 0000 0000 0000"
            />
          </label>
          <label className="mb-3 block">
            <span className="font-semibold">Name on Card</span>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border bg-[#f5f5f5] px-4 py-2"
              placeholder="Adedejis"
            />
          </label>
          <div className="flex space-x-4">
            <label className="block w-1/2">
              <span className="font-semibold">Expiring</span>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border bg-[#f5f5f5] px-4 py-2"
                placeholder="MM/YY"
              />
            </label>
            <label className="block w-1/2">
              <span className="font-semibold">CVV</span>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border bg-[#f5f5f5] px-4 py-2"
                placeholder="CVV"
              />
            </label>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-x-5 pb-5 pr-6 md:justify-end">
          <button
            className="rounded bg-[#D9D9D9] px-6 py-1 text-[#1D2B53]"
            type="button"
          >
            Cancel
          </button>
          <button
            className="rounded bg-[#1D2B53] px-6 text-white"
            type="button"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
