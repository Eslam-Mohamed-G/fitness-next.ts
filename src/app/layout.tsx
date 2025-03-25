import "./globals.css";
import Navbar from "./_Components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Fitness</title>
      </head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
