import SkillModel from "Frontend/generated/com/mich9061/interactivecv2/model/SkillModel"

export const Skill = (props: SkillModel) => {
    
    return (
        // <div className="flex flex-col w-full bg-gray-100 items-start px-6 py-1">
            <li className="lg:text-lg font-paragraph mx-1 font-light">
                { props?.description }
            </li>
        // </div>
    )

}