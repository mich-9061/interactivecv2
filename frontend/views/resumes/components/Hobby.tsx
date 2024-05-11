import HobbyModel from "Frontend/generated/com/mich9061/interactivecv2/model/HobbyModel"

export const Hobby = (props: HobbyModel) => {
    
    return (
        <div className="flex flex-col w-full items-start p-6">
            <div className="text-lg lg:text-xl italic font-name">
                { props?.description }
            </div>
            <div className="lg:text-lg font-paragraph">
                { props?.moreInformation?.description }
            </div>
        </div>
    )

}