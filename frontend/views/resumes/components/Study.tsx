import StudyModel from "Frontend/generated/com/mich9061/interactivecv2/model/StudyModel"

export const Study = (props: StudyModel) => {
    
    return (
        <div className="flex flex-col w-full items-start p-6">
            <div className="text-lg lg:text-xl font-name text-white bg-orange-600 p-1">
                from { props?.startDate } to { props?.endDate ?  props.endDate : 'now' }
            </div>
            <div className="text-lg lg:text-xl uppercase font-title pt-1 font-extrabold mt-2">
                { props?.courseTitle }
            </div>
            <div className="text-lg lg:text-xl italic font-name">
                { props?.school }
            </div>
            <div className="lg:text-lg font-paragraph font-light">
                { props?.moreInformation?.description }
            </div>
        </div>
    )

}