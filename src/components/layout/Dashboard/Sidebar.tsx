

export default function Sidebar() {
  return (
    <aside className="w-2/3 sm:w-1/3 p-5">
      <h3>Sidebar</h3>
      <ul className="flex flex-col justify-center gap-3">
        {
          "link1 link2 link3 link4".split(' ')
          .map(link=><li key={link}>{link}</li>)
        }
      </ul>
    </aside>
  )
}
