import "../styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Alexander Terekhov</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
