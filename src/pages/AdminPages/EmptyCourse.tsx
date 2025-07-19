const EmptyCourse = () => {
  return (
    <div className="flex h-[50vh] w-full flex-col items-center    justify-center md:h-[80vh]">
      <div className="flex flex-col items-center justify-center gap-y-4  ">
        <h2 className="text-2xl text-red-600 md:text-3xl lg:text-4xl">Oops!</h2>
        <h2 className="text-2xl md:text-3xl lg:text-4xl">
          No course added yet
        </h2>
      </div>
    </div>
  );
};

export default EmptyCourse;
