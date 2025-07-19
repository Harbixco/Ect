import { Button, StarRatings } from ".";

export default function CourseCardContainer({ length }: { length: number }) {
  return (
    <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
      {Array.from({ length }, (_, index) => (
        <CourseCard key={index} />
      ))}
    </div>
  );
}

function CourseCard() {
  return (
    <div className="flex min-w-64 flex-col gap-1 text-primary">
      <div className="h-48 w-full">
        <img
          className="size-full object-cover object-center"
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <h1 className="mt-2 text-lg font-bold leading-tight">
        The Complete 2024 Web Development Bootcamp
      </h1>
      <p>Jonathan Meyers</p>
      <StarRatings color="gold" rating={4.7} />
      <div className="flex gap-2">
        <p> &#8358;39,999</p>{" "}
        <p className="text-red-500 line-through">&#8358;47,000</p>
      </div>
      <Button
        type="function"
        onClick={() => null}
        text="get started"
        category="primary"
        width="100%"
      />
    </div>
  );
}
