
import Navbar from "./components/navbar";
import Header from "./components/headercomponent";
import Features from "./components/features";
import SocialProof from "./components/socialProof";
import CustomerReview from "./components/customerReview";



export default function HomePage(){
    return (
        <div className="md:px-20 px-3 py-5 md:space-y-32 space-y-24">
            <Navbar/>
            <Header/>
            <Features/>
            <SocialProof/>
            <CustomerReview/>
            
        </div>
    )
}



