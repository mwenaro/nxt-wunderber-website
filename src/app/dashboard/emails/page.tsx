import { prisma } from "@/lib";

const getEmails = async () => await prisma.conactMail.findMany();



export default async function Emails() {
    const emails = await getEmails();
    console.log(emails)
    return (
        <div className="w-full ">
            <h3 className="text-xl md:text-xl font-bold">Client queries via Email</h3>
            <div className="flex flex-col">
                {
                   emails && emails.map((email: any, indx) => <ul key={indx} className="flex gap-3">
                        <li>{email.fullName }</li>
                        <li>{email.subject}</li>
                        <li><p>{email.body}</p></li>
                    </ul>)
                }

            </div>

        </div>
    )
}
