import Image from "next/image";
import Link from "next/link";
import { Message } from "../../ui/components";
import { Button } from "../../ui/core";
import { getLayout } from "../../layouts/main";

export default function ThanksSuccessPage() {
  return (
    <Message
      title="Thank you"
      content="Your payment has been received successfully"
      action={
        // eslint-disable-next-line @next/next/link-passhref
        <Link href="/">
          <Button className="bg-primary">Return to home</Button>
        </Link>
      }
      image={<Image src="/img/thanks.png" alt="" width={160} height={160} />}
    />
  );
}

ThanksSuccessPage.getLayout = getLayout;
