import { Nav, Navlink } from "@/components/Nav";
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <Navlink href="/admin">Dashboard</Navlink>
        <Navlink href="/admin/products">product</Navlink>
        <Navlink href="/admin/customer">Cart</Navlink>
        <Navlink href="/admin/sales">Sales</Navlink>
      </Nav>

      <div className="container py-6">{children}</div>
    </>
  );
}
