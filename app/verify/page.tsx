import * as React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NavBar from "@/components/navbar";

export default function Verify() {
  return (
    <>
      <NavBar />
      <div className="container relative hidden h-[400px] flex-col items-center justify-center md:grid lg:max-w-none lg:px-0">
        <Card className="w-[550px]">
          <CardHeader>
            <CardTitle>Verify your Email</CardTitle>
            <CardDescription>
              We have sent an email to your registered email address. You need
              to verify your email to continue.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
