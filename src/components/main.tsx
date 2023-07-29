export default function Main() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-slate-800">
      <Card title="TITLE" content="CONTENT" />
      <Card title="TITLE" content="CONTENT" />
    </div>
  );
}

type CardProps = {
  title: string;
  content: string;
};

function Card({ title, content }: CardProps) {
  return (
    <div className="bg-slate-600 h-60 w-96 rounded-3xl shadow-2xl items-center flex flex-col text-slate-400">
      <div className="mt-5">{title}</div>
      <div className="my-auto ">{content}</div>
    </div>
  );
}
