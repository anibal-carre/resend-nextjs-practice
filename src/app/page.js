"use client";
export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-[30px] mb-10">
        Resend Email Next Practice
      </h1>

      <button
        onClick={async () => {
          const res = await fetch("/api/send", {
            method: "POST",
          });
          const data = await res.json();
          console.log(data);
        }}
        className="w-[150px] h-[40px] bg-zinc-800 text-white font-[500] rounded-sm hover:bg-zinc-600 hover:scale-110 hover:transition-all"
      >
        Send Email
      </button>
    </div>
  );
}
