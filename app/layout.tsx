import { Toaster } from "sonner";
import CustomLayout from "@/layouts/CustomLayout";
import Navbar from "@/components/shared/Navbar";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="p-4 pt-1  min-h-screen flex flex-col justify-between overflow-x-hidden">
        <CustomLayout>
          <Navbar />
          <Toaster richColors />
          {children}
        </CustomLayout>
      </body>
    </html>
  );
}
