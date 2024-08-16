import "./globals.css";

import localFont from "next/font/local";

export const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const ddag = localFont({
  src: "./fonts/ddag.ttf",
  display: "swap",
  variable: "--font-ddag",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className}`}>
        <div className="w-full flex justify-center">
          <main className="max-w-[600px] w-full h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
