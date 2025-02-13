import { Button } from "@/components/ui/button";
import { Home, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-svh flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 justify-start gap-8">
        <div className="rounded-lg  overflow-hidden border-2 border-primary">
          <Image
            src="/assets/images/not-found.png"
            alt="404"
            width={400}
            height={400}
            className="w-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-8 justify-start align-baseline">
          <h2 className="text-4xl sm:text-6xl font-bold text-primary flex flex-col gap-2">
            404! <br />
            <span className="text-3xl sm:text-5xl"> Page Not Found</span>
          </h2>
          <p className="text-xl sm:2xl text-gray-600 dark:text-gray-400">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <div>
            <p className="text-xl sm:2xl text-gray-600 dark:text-gray-400">
              Please try the following:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              <li>Make sure the URL is spelled correctly.</li>
              <li>Visit the home page.</li>
              <li>Contact support.</li>
            </ul>
          </div>
          <div className="flex gap-4">
            <Button asChild variant="outline">
              <Link href="/contact">
                <Mail />
                Contact Support
              </Link>
            </Button>
            <Button asChild>
              <Link href="/">
                <Home /> Return Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
