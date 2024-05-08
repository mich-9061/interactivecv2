import PersonalInformationModel from "Frontend/generated/com/mich9061/interactivecv2/model/PersonalInformationModel";

export const MyHeader = (props: PersonalInformationModel) => {

    return(
        <div className="flex flex-col w-full bg-gray-200 items-start p-6">
            <div className="text-3xl lg:text-7xl uppercase font-name font-[200] leading-none">
                { props.firstName }
            </div>
            <div className="text-3xl lg:text-7xl text-orange-600 uppercase font-name font-[200]">
                { props.secondName }
            </div>
            <div className="text-2xl lg:text-4xl text-white bg-gray-800 w-full lg:w-4/6 text-center py-1 lowercase font-title mt-6">
                { props.works?.[0]?.workTitle ? props.works[0].workTitle : 'Human being'}
            </div>
            <div className="text-lg lg:text-xl font-paragraph pt-6 lg:pr-12">
                { props.description }
            </div>
        </div>
    )

}