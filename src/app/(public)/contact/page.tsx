import Contactform from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <main className="w-full pt-20 min-h-svh p-4 flex justify-center items-center bg-gray-50 dark:bg-gray-950">
      <div className="w-full max-w-xl shadow-lg p-8 rounded-lg bg-white dark:bg-slate-950 border border-gray-200 dark:border-gray-700">
        <h1 className="main-heading text-center  my-6">
          <span className="border-b-2 border-primary inline-block px-6 pb-2">
            Contact me
          </span>
        </h1>
        <h2 className="text-center text-lg mt-4 text-gray-600 dark:text-gray-500">
          Fill out the form to send a message
        </h2>

        <Contactform />
      </div>
    </main>
  );
}
