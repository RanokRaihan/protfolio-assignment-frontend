import SessionProvider from "@/components/providers/SessionProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { getServerSession } from "next-auth";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import "./globals.css";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="remove-scrollbar">
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader color="#EA580C" showSpinner={false} />
            {children}
            <Toaster position="top-right" richColors={true} />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
