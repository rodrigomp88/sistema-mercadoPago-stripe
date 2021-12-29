import Image from "next/image";
import { Message } from "../../ui/components";
import { Button } from "../../ui/core";

export default function ThanksFailurePage() {
  return (
    <Message
      title="Thank you"
      content="Your payment has been  received successfully"
      action={
        <Button href="/" className="bg-primary">
          Return to home
        </Button>
      }
      image={<Image src="/img/thanks.png" alt="" width={160} height={160} />}
    />
  );
}
