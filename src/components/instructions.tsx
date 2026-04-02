import { Card, CardContent, CardHeader } from "./ui/card";

interface InstructionsProps {
  title: string;
  content: string;
  backImage: string;
}

export default function Instructions({
  title,
  content,
  backImage,
}: InstructionsProps) {
  return (
    <Card className="mt-10 h-60 grid relative isolate text-white text-shadow-2xs">
      <CardHeader>
        <h1 className="text-3xl font-bold">{title}</h1>
      </CardHeader>
      <CardContent className="h-full">
        <p>{content}</p>
        <div className="absolute inset-0  -z-100">
          <img src={backImage} alt={title} className=" object-cover grayscale-80 brightness-50" />
        </div>
      </CardContent>
    </Card>
  );
}
