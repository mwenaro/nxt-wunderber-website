import Link from "next/link";


export default function Header() {
  return (
    <div className="flex justify-between items-center">
        {'home about contact booking gallery dashboard'.split(' ').map((_link:string) =><Link key={_link} href ={`/${_link=== 'home' ? '/' :_link}`} >{_link}</Link>)}
    </div>
  )
}
