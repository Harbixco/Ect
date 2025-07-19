export default function H1({ text }: { text: string }) {
  return (
    <h1 className="text-2xl font-bold capitalize leading-none text-primary md:text-3xl">
      {text}
    </h1>
  );
}
