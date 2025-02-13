import MessageTable from "@/components/tables/MessageTable";
import { Separator } from "@/components/ui/separator";
import { getMessages } from "@/lib/actions/message.action";

export default async function Messages() {
  const messages = await getMessages();
  return (
    <div className="p-4 ">
      <h1 className="main-heading pb-4">All Messages</h1>
      <Separator />
      <div>
        <MessageTable messages={messages?.data} />
      </div>
    </div>
  );
}
