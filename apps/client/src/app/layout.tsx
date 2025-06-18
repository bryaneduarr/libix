import "@workspace/tailwind/globals.css";

import Navigation from "@/components/Navigation";
import { Providers } from "@/components/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          {children}
          <Navigation />
        </Providers>
      </body>
    </html>
  );
}
