import { useRef, useState } from "react";
import { Paperclip, Plus, Search, Upload } from "lucide-react";

const AdminNewTopic = () => {
  const [files, setFiles] = useState([]); // Holds an array of file objects
  const [fileFields, setFileFields] = useState([0]); // Holds the number of file input fields
  const [videoFile, setVideoFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === "video/mp4" && file.name.endsWith(".mp4")) {
        setVideoFile(file);
      } else {
        alert("Please select a video file with a .mp4 extension.");
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e, index) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const updatedFiles = [...files];
      updatedFiles[index] = selectedFile; // Update the selected file in the correct index
      setFiles(updatedFiles);
    }
  };

  const handleAddField = () => {
    setFileFields([...fileFields, fileFields.length]); // Add a new field
  };

  return (
    <div className="relative w-full">
      <div className="relative w-full border-[#dadada] py-4 md:border">
        <div className="relative mb-4 border py-3 md:mb-0 md:border-none md:py-0">
          <h1 className="flex items-center justify-center gap-x-2 text-center text-lg font-semibold md:text-xl">
            <Plus size={25} />
            Add a new topic
          </h1>
        </div>
        <hr className="my-4 hidden md:block" />
        <div className="mx-auto w-full md:w-[96%]">
          <div className="">
            <label>Topic title</label>
            <input
              type="text"
              className="mt-[6px] h-[36px] w-full border border-[#dadada] px-1 text-black"
            />
          </div>
          <div className="my-3 flex w-full flex-col-reverse items-center gap-3 md:my-5 md:flex-row md:gap-5">
            <select className="w-full border border-[#dadada]">
              <option value="1">Select category</option>
              <option value="2">Web development</option>
              <option value="3">App development</option>
              <option value="4">Ui/Ux</option>
              <option value="5">Blockchain</option>
            </select>
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search"
                className="w-full border border-[#dadada] py-2 pl-4 pr-10"
              />
              <Search className="absolute right-[10px] top-1/2 w-4 -translate-y-1/2 text-gray-400 md:w-5" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="mb-2 text-base font-semibold md:text-lg">
              Resources
            </h3>
            <div className="flex w-full flex-col items-start  gap-5 md:flex-row md:gap-3">
              <div className="w-full rounded-xl border border-[#dadada] p-[6px] md:w-[80%] md:p-3">
                <div className="">
                  {fileFields.map((field, index) => (
                    <div
                      className="mb-2 flex items-center justify-between rounded-lg border border-[#dadada] px-2 py-1 md:py-2"
                      key={index}
                    >
                      <div className="flex items-center gap-x-2">
                        <Paperclip size={16} />
                        <p className="text-sm font-semibold md:text-base">
                          {files[index]
                            ? files[index].name
                            : "No file selected"}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <label className="flex cursor-pointer items-center gap-x-2">
                          <input
                            type="file"
                            className="hidden"
                            onChange={(e) => handleFileChange(e, index)} // Track the file field index
                          />
                          <p className="text-sm font-semibold md:text-base">
                            Upload
                          </p>
                          <Upload size={16} color="#6BC049" />
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <button
                    onClick={handleAddField}
                    className="mt-2 text-sm font-semibold text-primary underline "
                  >
                    Add More File
                  </button>
                </div>
              </div>
              <div className="w-full md:w-[20%]">
                {videoFile ? (
                  <video className="w-full rounded-xl" controls>
                    <source
                      src={URL.createObjectURL(videoFile)}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div
                    className="flex  cursor-pointer flex-col items-center justify-center rounded-xl border border-[#dadada] py-5"
                    onClick={triggerFileInput}
                  >
                    <Upload size={20} color="#6BC049" />
                    <p className="mt-2 text-sm font-semibold md:text-base">
                      Upload Topic Video
                    </p>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleVideoChange}
                      style={{ display: "none" }}
                      accept="video/mp4" // This line ensures that the file dialog filters for .mp4 files only
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="mt-7 flex w-full flex-col justify-center gap-y-4 pb-3 md:mt-6 md:flex-row md:gap-x-6 md:gap-y-0">
              <button className="w-full rounded-2xl bg-adminPrimary py-1 text-white md:w-[40%] md:py-2 lg:w-[20%]">
                Save Changes
              </button>
              <button className="w-full rounded-2xl border border-[#dadada] py-1 md:w-[40%] md:py-2 lg:w-[20%]">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNewTopic;
