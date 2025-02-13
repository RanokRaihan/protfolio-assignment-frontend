import LoginButtons from "@/components/login/LoginButtons";

export default function LoginPage() {
  const callbackUrl: string = `${process.env.NEXTAUTH_URL}/admin`;
  return (
    <main className="w-full pt-20 min-h-svh p-4 flex justify-center items-center bg-gray-50 dark:bg-gray-950">
      <div className="w-full max-w-xl shadow-lg p-8 rounded-lg bg-white dark:bg-slate-950 border border-gray-200 dark:border-gray-700">
        <h1 className="main-heading text-center mb-10">
          <span className="border-b-2 border-primary pb-2 px-4">Login</span>
        </h1>
        <LoginButtons callbackUrl={callbackUrl} />
      </div>
    </main>
  );
}
