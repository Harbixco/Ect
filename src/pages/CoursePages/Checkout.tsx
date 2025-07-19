import { ChevronLeft, CreditCard, Minus, Plus } from "lucide-react";
import { Button, Component } from "../../components/common";
import { H1 } from "../../components/CourseComponents";
import { blogdetails } from "../../assets";
import { useModal } from "../../hooks/UseModal";

const cart = [
  {
    id: 1,
    name: "the complete 2024 web development bootcamp",
    price: 35000,
    avatar: blogdetails,
    originalPrice: 50000,
  },
  {
    id: 2,
    name: "the complete 2024 fullstack development bootcamp",
    price: 75000,
    avatar: blogdetails,
    originalPrice: 90000,
  },
  {
    id: 3,
    name: "the complete 2024 backend development bootcamp",
    price: 15000,
    avatar: blogdetails,
    originalPrice: 170000,
  },
];

const discount = 7340;

const originalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);

export default function Checkout() {
  const { openModal } = useModal();
  return (
    <Component>
      <button
        onClick={() => window.history.back()}
        className="mb-4 flex cursor-pointer items-center capitalize"
      >
        <ChevronLeft size={16} className="translate-y-px" /> back
      </button>
      <section>
        <div>
          <H1 text="checkout" />
          <div className="relative mt-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8">
            <div className="w-full md:w-1/2">
              <fieldset className="mb-8">
                <legend className="mb-4 text-2xl font-semibold capitalize">
                  billing information
                </legend>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="mb-2 block font-semibold capitalize text-primary"
                  >
                    name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="enter your name"
                    className="h-10 w-full rounded border placeholder:text-sm placeholder:capitalize"
                  />
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="mb-2 block font-semibold capitalize text-primary"
                  >
                    country
                  </label>
                  <input
                    id="country"
                    type="text"
                    placeholder="select your country"
                    className="h-10 w-full rounded border placeholder:text-sm placeholder:capitalize"
                  />
                </div>
              </fieldset>
              <fieldset>
                <legend className="mb-4 text-2xl font-semibold capitalize">
                  payment method
                </legend>
                <section className="rounded border border-primary">
                  <div>
                    <div className="flex items-center justify-between border-b border-primary p-4">
                      <div className="flex items-center gap-2 rounded border border-primary px-2">
                        <CreditCard size={16} className="translate-y-px" />
                        <p className="text-sm font-medium">Card</p>
                      </div>

                      <div className="flex items-center gap-1">
                        {["/images/visa.png", "/images/mastercard.png"].map(
                          (item) => (
                            <img key={item} src={item} className="w-6" />
                          ),
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="w-full p-4">
                        <label
                          className="mb-2 block font-semibold capitalize text-primary"
                          htmlFor="cardNumber"
                        >
                          card number
                        </label>
                        <input
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9\s]{13,19}"
                          maxLength={19}
                          autoComplete="cc-number"
                          name="cardNumber"
                          id="cardNumber"
                          placeholder="Card Number"
                          className="h-10 w-full rounded border placeholder:text-sm"
                        />
                      </div>

                      <div className="flex w-full items-center gap-4 px-4">
                        <div className="w-1/2">
                          <label
                            htmlFor="expiryDate"
                            className="mb-2 block font-semibold capitalize text-primary"
                          >
                            expiry date
                          </label>
                          <input
                            type="tel"
                            inputMode="numeric"
                            maxLength={5}
                            placeholder="MM/YY"
                            autoComplete="cc-exp"
                            pattern="(0[1-9]|1[0-2])\/?([0-9]{2})"
                            className="h-10 w-full rounded border placeholder:text-sm"
                          />
                        </div>

                        <div className="w-1/2">
                          <label
                            htmlFor="cvc"
                            className="mb-2 block font-semibold uppercase text-primary"
                          >
                            cvc/cvv
                          </label>
                          <input
                            type="tel"
                            inputMode="numeric"
                            pattern="[0-9]{3}"
                            maxLength={3}
                            placeholder="CVC"
                            autoComplete="cc-csc"
                            className="h-10 w-full rounded border placeholder:text-sm"
                          />
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-2 px-4">
                        <input
                          type="checkbox"
                          name="saveCard"
                          id="saveCard"
                          className="outline-0 ring-0 focus:ring-0"
                        />
                        <label htmlFor="saveCard" className="text-sm">
                          Securely save this card for later purchase
                        </label>
                      </div>
                    </div>
                  </div>
                </section>
              </fieldset>
            </div>

            <div className="w-full md:sticky md:top-20 md:w-3/6 lg:w-2/6">
              <h1 className="mb-4 text-2xl font-semibold capitalize">
                summary
              </h1>

              <div className="mb-4">
                <hr className="pb-3" />
                {cart.map((item) => (
                  <div className="mb-4 flex items-start gap-x-4 border-b pb-2 ">
                    <img src={item.avatar} alt="" className="w-[140px]" />
                    <div className="">
                      <h4 className="text-sm font-semibold ">{item.name}</h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                          <p className="">{item.price}</p>
                          <p className="text-sm text-red-600 line-through">
                            ({item.originalPrice})
                          </p>
                        </div>
                        <div className="mt-3 flex items-center gap-x-2">
                          <button className="rounded-md bg-secondary  px-1 py-1 text-white">
                            <Minus size={14} />
                          </button>
                          <h3 className="">1</h3>
                          <button className="rounded-md bg-secondary  px-1 py-1 text-white">
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2 p-4">
                <div className="flex items-center justify-between">
                  <p className="capitalize">original price:</p>
                  <p>
                    &#8358;
                    {originalPrice.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="capitalize">discount:</p>
                  <p>- &#8358;{discount.toLocaleString()}</p>
                </div>

                <hr className="border border-primary" />

                <div className="flex items-center justify-between *:font-bold">
                  <p className="uppercase">total:</p>
                  <p>&#8358;{(originalPrice - discount).toLocaleString()}</p>
                </div>

                <div className="my-4 flex items-center gap-4">
                  <input
                    type="checkbox"
                    name="termsRead"
                    id="termsRead"
                    className="outline-0 ring-0 focus:ring-0"
                  />
                  <label htmlFor="termsRead" className="text-xs">
                    I agree that I have read, understood and accept the
                    Expansioncybertech terms and condition
                  </label>
                </div>

                <Button
                  text="complete checkout"
                  type="function"
                  onClick={() => openModal("paymentsuccess")}
                  category="success"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Component>
  );
}
