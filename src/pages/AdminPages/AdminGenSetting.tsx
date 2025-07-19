const AdminGenSetting = () => {
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold md:text-xl">General Settings</h2>
      <div className="my-4 w-full">
        <div className="grid grid-cols-1 gap-x-0 gap-y-3 md:grid-cols-2 md:gap-x-4 md:gap-y-10 ">
          <div className="flex flex-col">
            <label
              htmlFor="language"
              className="mb-2 text-sm font-semibold md:text-base"
            >
              Language
            </label>
            <select
              id="language"
              className="rounded-md border p-2 text-sm md:text-base"
              defaultValue="English"
            >
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="currency"
              className="mb-2 text-sm font-semibold md:text-base"
            >
              Currency
            </label>
            <select
              id="currency"
              className="rounded-md border p-2 text-sm md:text-base"
              defaultValue="Euro"
            >
              <option value="Euro">Euro</option>
              <option value="USD">USD</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="timezone"
              className="mb-2 text-sm font-semibold md:text-base"
            >
              Time Zone
            </label>
            <select
              id="timezone"
              className="rounded-md border p-2 text-sm md:text-base"
              defaultValue="(GMT-12:00) International Date Line West"
            >
              <option value="(GMT-12:00) International Date Line West">
                (GMT-12:00) International Date Line West
              </option>
              <option value="(GMT+01:00) West Africa Time">
                (GMT+01:00) West Africa Time
              </option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="appearance"
              className="mb-2 text-sm font-semibold md:text-base"
            >
              Appearance
            </label>
            <select
              id="appearance"
              className="rounded-md border p-2 text-sm md:text-base"
              defaultValue="System Mode"
            >
              <option value="System Mode">System Mode</option>
              <option value="Dark Mode">Dark Mode</option>
            </select>
          </div>
        </div>

        <div className=" w-[80% ] mx-auto mb-6 mt-10 flex flex-col items-center justify-between gap-6 md:w-[60%] md:flex-row lg:w-[50%]">
          <button className="w-full rounded-3xl bg-adminPrimary py-1 text-sm  text-white md:text-base">
            Save Changes
          </button>
          <button className="w-full rounded-3xl border border-[#dadada]  bg-white py-1 text-sm text-black md:text-base ">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminGenSetting;
