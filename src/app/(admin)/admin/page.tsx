import { getServerSession } from "next-auth";

export default async function AdminDashboardPage() {
  const session = await getServerSession();
  console.log(session);
  return (
    <div>
      <h1 className="main-heading">This is Admin Dashboard Page</h1>
    </div>
  );
}
