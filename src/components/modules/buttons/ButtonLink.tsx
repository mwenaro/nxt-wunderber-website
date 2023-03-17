import Link from "next/link";
import Button from "./Button";

export default function ButtonLink({ children, path, ...rest }: { path: string, children: string, styles?: string }) {
  return (
    <Link href={path}>
      <Button {...rest}>
        {children}
      </Button>
    </Link>


  )
}
