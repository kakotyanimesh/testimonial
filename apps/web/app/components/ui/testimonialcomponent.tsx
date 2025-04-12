import UItestimonialCard from "./uitestimonialcard";

export default function TestimonailComponent(){
    return (
        <div>
            <h1 className="font-semibold">All Testimonials</h1>
            <div>
                <UItestimonialCard tdesc="CustomerCherish transformed how we collect and display testimonials. The interface is intuitive and the displays are beautiful." author="Animesh kakoty" authorjob="SEO at Testimonial.kakoty.tech" type="TEXT" ratings={5} status={true} date={"2014-05-22"}   />
            </div>
        </div>
    )
}

