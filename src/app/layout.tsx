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
        <div className="w-full flex justify-center">
          <main className="max-w-[600px] w-full h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
