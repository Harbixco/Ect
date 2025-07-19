export default function Support() {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>

          <div className="grid justify-items-center">
            <h2 className="mb-6 mt-4 text-2xl font-semibold">
              How can we help
            </h2>

            <div className="mb-10 w-[300px] md:w-[400px]">
              <input
                type="text"
                placeholder="Find anything"
                className="mx-auto w-full max-w-md rounded-lg border border-gray-300 p-3 focus:ring-gray-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="font-medium text-gray-800">
                What does your company offer?
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="font-medium text-gray-800">
                Do you provide ongoing support and maintenance for mobile, apps
                and websites after launch?
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="font-medium text-gray-800">
                Can you customize services to suit my specific business needs?
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="font-medium text-gray-800">
                Can you provide examples of your past works and client success
                stories?
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="font-medium text-gray-800">
                What industries have you worked with in the past?
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="font-medium text-gray-800">
                Do you offer training programs in UI/UX, mobile app development,
                web design, and digital marketing?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
