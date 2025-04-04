interface SpaceBarProps {
    itemname : string,
    isActive : number
}
export default function SpaceBar({items} : {items : SpaceBarProps[]}){
    return (
        <div className="flex ui-flex-row ui-gap-4 ui-bg-slate-200 ui-rounded-md ui-w-fit ui-px-4 ui-py-1">
            {
                items.map((i, k) => (
                    <button key={k} className={`${i.isActive === k ? "ui-bg-black" : "ui-bg-blue-400"}`}>{i.itemname}</button>
                ))
            }
        </div>
    )
}