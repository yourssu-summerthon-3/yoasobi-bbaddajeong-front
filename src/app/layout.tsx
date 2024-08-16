import { Suspense } from "react";
import "./globals.css";

import { pretendard } from "./utils/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className}`}>
        <div className="flex w-full justify-center">
          <main className="h-screen w-full max-w-[600px]">
            <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
          </main>
        </div>
      </body>
    </html>
  );
}
