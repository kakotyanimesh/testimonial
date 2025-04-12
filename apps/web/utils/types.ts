export interface TestimonialQuestionsInterface {
    id : number,
    formDescripton : string,
    formTitle : string,
    questionOne : string,
    questionThree : string,
    questionTwo : string,
    spaceId : number,
    uniqueLink : string
}


export interface TestimonialData {
    id : number,
    adminId : string,
    approaved : boolean,
    createdAt : Date,
    customerCompany : string,
    customeremail : string,
    customerimage : string,
    customername : string,
    review : string,
    spaceId : string,
    stars : string,
    videoUrl : string
}