interface ProcessCardProps {
  number: number;
  title: string;
  description: string;
}

const ProcessCard = ({ number, title, description }: ProcessCardProps) => {
  return (
    <div className="flex flex-col rounded-lg bg-background p-6 text-foreground ">
      <span className="mb-2 text-4xl font-bold">{number}</span>
      <span className="mb-4 text-2xl font-semibold">{title}</span>
      <p>{description}</p>
    </div>
  );
};

export default ProcessCard;
 