import Link from 'next/link';
export default function Header() {
  return (
    <header className="p-[20px_172.5px_20px_172.5px] bg-[#222222d2] fixed w-full backdrop-blur-xl">
      <div className="w-full flex justify-between align-middle">
        <div className="">
          <h1 className="text-2xl font-bold text-white-800">DevAhmed</h1>
        </div>

        <nav className="flex gap-20 justify-center items-center">
            <Link href="/about">Experiance</Link>
            <Link href="/about">Projects</Link>
            <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
