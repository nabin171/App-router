

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <p>product header</p>
        {children}
        <p>product footer</p>
      </body>
    </html>
  );
}
