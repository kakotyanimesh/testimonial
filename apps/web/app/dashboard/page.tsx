"use client"
import Button from "@repo/ui/button";
import InputBox from "@repo/ui/inputbox";
import { useState, useRef, useEffect } from "react"
import { Rocket } from "lucide-react"
import { apikeycall, createSpacecall, getSpacecall } from "../../utils/api";
import SpaceCard from "../components/ui/spacecardnext";


export default function Space(){
    const [spaceModal, setspaceModal] = useState(false)
    const [spaceloading, setSpaceloading] = useState(false)
    const nameref = useRef<HTMLInputElement | null>(null)
    const displaynameref = useRef<HTMLInputElement | null>(null)
    const [allspacedata, setAllspacedata] = useState<{name : string, displayName : string, id : string}[]>([])

    useEffect(() => {
      const fetchedData = async () => {
        try {
            setSpaceloading(true)
            const data = await getSpacecall()

            setAllspacedata(data.spaces)
            setSpaceloading(false)
        } catch (error) {
            console.error(error)
        }
      }
    
      fetchedData()
      
    }, [])
    

    const createSpace = async () => {
        try {
            setSpaceloading(true)
            await createSpacecall({name : nameref.current?.value || "", displayName : displaynameref.current?.value || ""})
            // console.log(res);
            const data = await getSpacecall()
            // console.log(`all space data ${data}`);
            setAllspacedata(data.spaces)
            // console.log(allspacedata);

            // await apikeycall()
            
            setSpaceloading(false)
            
        } catch (error) {
            console.error(error, "error at space creation")
            setSpaceloading(false)
            alert("something went wrong ")
        } finally{
            setSpaceloading(false)
            setspaceModal(!spaceModal)
        }
    }

    // if(spaceloading){
    //     return (
    //         <div>
    //             loading .... 
    //         </div>
    //     )
    // }

    return (
        <div className=" bg-slate-50 min-h-screen space-y-10">
            {/* navbar */}
            <div className="flex flex-row justify-between items-center md:px-40 px-4 py-4 bg-white border-b-[1px] border-slate-200">
                <h1 className="text-xl font-bold cursor-pointer">ProofCloud</h1>
                <div>
                    <Button style="" title="log out" variants="default" onclick={() => alert("Asdasd")}/>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center md:px-52 px-4">
                <h1 className="text-3xl font-bold cursor-pointer">Your Spaces </h1>
                <div>
                    <Button style="" title="Create Space" variants="primary" onclick={() => setspaceModal(!spaceModal)}/>
                </div>

                
            </div>
            {/* space */}
            {
                allspacedata.length !== 0 ? (
                    <div className="grid md:grid-cols-3  gap-5 md:mx-40 p-10">
                        {
                            allspacedata.map((s, k) => (
                                <SpaceCard name={s.name} key={k} websiteUrl={s.displayName} id={s.id}/>
                                // <SpaceCard name={s.name}  key={k}/>
                            ))
                        }
                    </div>
                ) : (
                    <div className="flex flex-col justify-center space-y-5 items-center text-center bg-white md:mx-64 p-10 rounded-xl border-[1px] border-slate-200 ">
                <div className="bg-slate-200 size-14 flex justify-center items-center rounded-full"> 
                    <Rocket/>                    
                </div>
                <h1>No spaces yet</h1>
                {/* <Button style="" title="Create Space" variants="primary" onclick={() => setspaceModal(!spaceModal)}/> */}
                <div>
                    <Button style="" title="Create Space" variants="primary" onclick={() => setspaceModal(!spaceModal)}/>
                </div>

            </div>
                )
            }
            {/* modal */}
            <div >
                {
                    spaceModal &&  <div className="fixed flex justify-center items-center z-50 top-0 left-0 w-screen h-screen bg-blue-50">
                    <div className="w-[500px] bg-white p-10 space-y-5">
                        <div>
                            <h1 className="font-semibold">Create New Space</h1>
                            <p className="text-slate-500 text-sm">Create a new space to collect and manage testimonials.</p>
                        </div>
                        <InputBox ref={nameref} placeholder="eg : my space one" type="text" label="Space Name"/>
                        <InputBox ref={displaynameref} placeholder="www.animesh.kakoty.tech" type="text" label="website url"/>
                        <Button processingText="creating space ...." processing={spaceloading} style="" title="Create Space" variants="primary" onclick={createSpace}/>
                        
                    </div>
                    </div>
                }
            </div>
        </div>
    )
}