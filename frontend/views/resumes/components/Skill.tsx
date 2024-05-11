import SkillModel from "Frontend/generated/com/mich9061/interactivecv2/model/SkillModel"

export const Skill = (props: SkillModel) => {
    
    return (
        <div className="flex flex-col w-full bg-gray-100 items-start px-6 py-1">
            <div className="text-lg lg:text-xl italic font-name">
                { props?.description }
            </div>
        </div>
    )

}