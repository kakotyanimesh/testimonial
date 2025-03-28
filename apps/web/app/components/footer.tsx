import Link from "next/link"

export default function Footer(){
    return (
        <div>
            <div className="grid md:grid-cols-4 md:gap-0 gap-5  ">
                <div className="gap-2 flex flex-col">
                    <h1 className="text-xl font-bold cursor-pointer">ProofCloud</h1>
                    <p className="text-sm text-slate-500">Turn customer voices into your most powerful marketing asset.</p>
                </div>
                <div>
                    <Linksdiv heading="Product" array={ProductArray}/>
                </div>
                <div>
                    <Linksdiv heading="Resources" array={ResourcesArray}/>
                </div>
                <div>
                    <Linksdiv heading="Legal" array={LegalArray}/>
                </div>
            </div>
            <div className="border-t-[1px] py-10 mt-10 text-center  md:-mx-20 -mx-3 border-slate-300">
                <p className="text-slate-400 text-sm">© 2025 ProofCloud. All rights reserved.</p>
            </div>
        </div>
    )
}



const Linksdiv = ({heading, array } : {heading : string, array : {title : string, src : string}[]}) => {
    return (
        <div className="md:space-y-5 space-y-2">
            <h1>{heading}</h1>
            <div className="flex flex-col text-slate-500 text-sm md:gap-2">
                {
                    array.map((a, k) => (
                        <Link href={a.src} key={k}>{a.title}</Link>
                    ))
                }
            </div>
        </div>
    )
}

const ProductArray = [
    {title : "Features", src : "/features"},
    {title : "Pricing", src : "/pricing"},
    {title : "Customers", src : "/customers"}
]


const ResourcesArray = [
    {title : "Blog", src : "/blog"},
    {title : "Guides" , src : "/guides"},
    {title : "Help Center", src : "/help"}
]

const CompanyArrya = [
    {title : "About Us", src : "/about"},
    {title : "Contact", src : "/contact"},
    {title : "Ceo", src : "/ceo"}
]

const LegalArray = [
    {title : "Privacy", src : "/privacy"},
    {title : "Terms & Condition", src : "/terms"},
    {title : "TLDR", src : "/tldr"}
]