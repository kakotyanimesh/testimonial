
import Navbar from "./components/navbar";
import Header from "./components/headercomponent";
import Features from "./components/features";
import SocialProof from "./components/socialProof";
import CustomerReview from "./components/customerReview";
import PricingComponent from "./components/PricingComponent";
import HomeCta from "./components/homeCta";
import Footer from "./components/footer";



export default function HomePage(){
    return (
        <div className="md:space-y-32 md:mt-32 mt-24 space-y-24">
            {/* <Navbar/> */}
            <Header/>
            <Features/>
            <SocialProof/>
            <CustomerReview/>
            <PricingComponent/>
            <HomeCta/>
            <Footer/>
            
        </div>
    )
}



