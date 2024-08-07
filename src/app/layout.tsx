import type { Metadata } from "next";
import { Inter,DM_Sans} from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const DmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(DmSans.className, 'antialiased')}>{children}</body>
    </html>
  );
}
