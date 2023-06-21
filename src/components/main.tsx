export default function Main() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-slate-800">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-slate-600 h-60 w-96 rounded-3xl shadow-2xl items-center flex flex-col text-slate-300">
      <div className="mt-5">TITLE</div>
      <div className="my-auto ">CONTENT</div>
    </div>
  );
}
