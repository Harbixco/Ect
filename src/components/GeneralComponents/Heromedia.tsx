import { media1, media2, media3, media4, media5, media6 } from "../../assets";

const Heromedia = () => {
  return (
    <div className="">
      <section>
        <div className="m-auto w-[95%] px-2 py-4 sm:py-4 lg:px-6">
          <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
            <div className="col-span-2 flex h-auto flex-col gap-4 bg-gray-50 sm:col-span-1 md:col-span-2 md:h-full">
              <a
                href=""
                className="group relative flex grow flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src={media1}
                  alt=""
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </a>

              <a
                href=""
                className="group relative flex grow flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src={media5}
                  alt=""
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </a>
            </div>
            <div className="col-span-2 bg-stone-50 sm:col-span-1 md:col-span-2">
              <a
                href=""
                className="group relative mb-4 flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src={media2}
                  alt=""
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </a>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src={media3}
                    alt=""
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </a>
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src={media4}
                    alt=""
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </a>
              </div>
            </div>

            <div className="col-span-2 flex h-auto flex-col bg-sky-50 sm:col-span-1 md:col-span-1 md:h-full">
              <a
                href=""
                className="group relative flex grow flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src={media6}
                  alt=""
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heromedia;
