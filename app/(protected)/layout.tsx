export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-full w-full">
    {children}
  </div>;
}
