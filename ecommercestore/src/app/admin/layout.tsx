export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <>
        <Nav></Nav>
        <div className="container my-6">{children}</div>
    </>
}