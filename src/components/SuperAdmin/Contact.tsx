export default function Contact() {
  return (
    <div className="mx-auto flex max-w-6xl rounded-lg bg-white p-6 shadow-lg">
      <div className="w-1/3 border-r">
        <h2 className="mb-6 text-2xl font-semibold">Contact</h2>
        <input
          type="text"
          placeholder="Search..."
          className="mb-6 w-full rounded-lg border px-4 py-2"
        />
        <ul>
          <li className="mb-2 flex cursor-pointer items-center justify-between rounded-lg p-4 hover:bg-gray-200">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile Picture"
                className="mr-3 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">Darrell Steward</h3>
                <p className="text-sm text-green-500">● Email</p>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet...
                </p>
              </div>
            </div>
            <span className="text-xs text-gray-500">02.15</span>
          </li>

          <li className="mb-2 flex cursor-pointer items-center justify-between rounded-lg bg-gray-200 p-4">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile Picture"
                className="mr-3 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">Jane Cooper</h3>
                <p className="text-sm text-green-500">● Email</p>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet...
                </p>
              </div>
            </div>
            <span className="text-xs text-gray-500">02.15</span>
          </li>
        </ul>
      </div>
      <div className="w-2/3 p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile Picture"
              className="mr-3 rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold">Jane Cooper</h3>
              <p className="text-sm text-gray-500">
                I want to learn more about App development
              </p>
            </div>
          </div>
          <button className="text-gray-500">
            <i className="lucide lucide-more-horizontal"></i>
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex">
            <div className="w-3/4 rounded-lg bg-blue-500 p-4 text-white">
              <p>
                Auctor urna, varius duis suspendisse mi in dictum. Interdum
                egestas ut porttitor tortor aliquet massa.
              </p>
              <span className="text-xs text-gray-200">
                Stefanie Ang &bull; May 16, 2022. 12:25 PM
              </span>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="w-3/4 rounded-lg bg-teal-500 p-4 text-white">
              <p>
                Auctor urna, varius duis suspendisse mi in dictum. Interdum
                egestas ut porttitor tortor aliquet massa.
              </p>
              <span className="text-xs text-gray-200">12:25 PM</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <textarea
            className="mb-2 w-full rounded-lg border p-4"
            rows={2}
            placeholder="Make a comment"
          ></textarea>
          <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
