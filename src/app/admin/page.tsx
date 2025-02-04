import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/lib/prisma";

function getSalesData() {
  prisma.order.aggregate({
    _sum: { pricePaidInCents: true },
  });
}

export default function AdminDashboard() {
  return (
    <div className="flex w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 w-full">
        <CardDesign title="sales" subtitle="desc" content="content" />
        <CardDesign title="sales" subtitle="desc" content="content" />
        <CardDesign title="sales" subtitle="desc" content="content" />
      </div>
    </div>
  );
}
type cardLayout = {
  title: string;
  subtitle: string;
  content: string;
};

function CardDesign({ title, subtitle, content }: cardLayout) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}
