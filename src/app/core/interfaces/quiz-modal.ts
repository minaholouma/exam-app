export interface QuizModal {
 
    answers: {answer:string ,key: string}[] ,
    type?: string,
    _id?:string ,
    question: string,
    correct: string,
    subject?: {
        _id:string ,
        name: string,
        icon:string ,
        createdAt: string

}
exam?: {
    _id: string
    title: string
    duration: number
    subject: string 
    numberOfQuestions: number
    active: boolean
    createdAt: string
}

}


