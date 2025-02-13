import { LoaderCircleIcon } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./button";

interface ButtonProps {
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({ isLoading, children, className }: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={isLoading} className={className}>
      {isLoading || pending ? (
        <div className="flex items-center gap-4">
          <LoaderCircleIcon className="animate-spin" />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
