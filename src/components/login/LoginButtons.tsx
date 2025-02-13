"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { Button } from "../ui/button";
const LoginButtons = ({ callbackUrl }: { callbackUrl: string }) => {
  return (
    <div className="flex flex-col gap-4 mt-4 items-center">
      <Button
        onClick={() => signIn("google", { callbackUrl })}
        size="lg"
        variant="outline"
        className="rounded-full  flex justify-between"
      >
        <Image
          src="/assets/icons/google.png"
          alt="github"
          width={24}
          height={24}
        />
        Continue With google
      </Button>
      <span>or</span>
      <Button
        onClick={() => signIn("github", { callbackUrl })}
        size="lg"
        variant="black"
        className=" rounded-full flex justify-between"
      >
        <Image
          src="/assets/icons/github.png"
          alt="github"
          width={24}
          height={24}
        />
        Continue With github
      </Button>
    </div>
  );
};

export default LoginButtons;
