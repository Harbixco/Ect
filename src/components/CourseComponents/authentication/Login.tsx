import { useModal } from "../../../hooks/UseModal";
import { Button } from "../../common";

export default function LoginForm() {
  const { openModal } = useModal();

  return (
    <section className="">
      <div className="mb-3 text-primary *:text-center">
        <h1 className="text-xl font-bold capitalize md:text-2xl">
          welcome back
        </h1>
        <p>Let's continue where we stopped</p>
      </div>
      <form>
        <div className="mb-2 flex flex-col gap-1">
          <label
            htmlFor="email"
            className="font-semibold capitalize text-primary"
          >
            email
          </label>
          <input
            type="text"
            id="email"
            className="h-8 border-primary opacity-50 placeholder:text-sm focus:opacity-100 focus:ring-1 md:h-10"
            placeholder="name@email.com"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="font-semibold capitalize text-primary"
          >
            password
          </label>
          <input
            type="password"
            id="password"
            placeholder="password"
            className="h-8 border-primary opacity-50 placeholder:text-sm focus:opacity-100 focus:ring-1 md:h-10"
          />
        </div>

        <a href="#" className="mb-4 mt-2 block text-sm text-primary underline">
          forgot password?
        </a>
        <Button
          text="log in"
          type="function"
          category="primary"
          width="100%"
          onClick={() => null}
        />
      </form>

      <p className="or my-3 text-center">or</p>

      <div className="flex items-center justify-center gap-4">
        {[
          { src: "/icons/icon_facebook.svg", fn: "", name: "facebook" },
          { src: "/icons/icon_google.svg", fn: "", name: "google" },
          { src: "/icons/icon_apple.svg", fn: "", name: "apple" },
        ].map((item) => (
          <img
            key={item.src}
            src={item.src}
            alt={`icon logo of ${item.name}`}
            className="size-6"
          />
        ))}
      </div>
      <p className="mt-4 text-center text-sm">
        New to Expansion?
        <span
          className="cursor-pointer text-green-500"
          onClick={() => openModal("signup")}
        >
          {" "}
          Signup
        </span>
      </p>
    </section>
  );
}
