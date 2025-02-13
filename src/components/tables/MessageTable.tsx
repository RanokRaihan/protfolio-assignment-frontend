import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IMessage } from "@/types";

const MessageTable = ({ messages }: { messages: IMessage[] }) => {
  return (
    <Table>
      <TableCaption>A list of all your messages.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Message</TableHead>
          <TableHead className="text-right">Date time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {messages.map((message) => (
          <TableRow key={message?._id}>
            <TableCell className="font-medium">{message?.name}</TableCell>
            <TableCell>{message?.email}</TableCell>
            <TableCell>
              {message?.message.length > 30
                ? `${message.message.slice(0, 30)}...`
                : message.message}
            </TableCell>
            {message?.createdAt && (
              <TableCell className="text-right">
                {new Date(message.createdAt).toLocaleString()}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MessageTable;
