import WorkModel from "Frontend/generated/com/mich9061/interactivecv2/model/WorkModel";

export const Work = (props: WorkModel) => {
    
    return (
        <div className="flex flex-col w-full bg-gray-50 items-start p-6">
            <div className="text-lg lg:text-xl font-name text-white bg-orange-600 p-1">
                from { props?.startDate } to { props?.endDate ?  props.endDate : 'now' }
            </div>
            <div className="text-lg lg:text-xl uppercase font-title pt-1 font-extrabold mt-2">
                { props?.workTitle }
            </div>
            <div className="text-lg lg:text-xl italic font-name">
                { props?.company }
            </div>
            <div className="border-l-4 border-gray-300 pl-3">
                {props?.workBulletpoints?.map(bulletPoint => {
                    return (
                        <p key={bulletPoint?.id} className="lg:text-lg font-paragraph mx-1">{bulletPoint?.jobDescription}</p>
                    )}
                )}
            </div>
        </div>
    )

}