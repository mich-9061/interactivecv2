import SkillModel from "Frontend/generated/com/mich9061/interactivecv2/model/SkillModel"

export const Skill = (props: SkillModel) => {
    
    return (
        <li className="lg:text-lg font-paragraph mx-1 font-light">
            { props?.description }
        </li>
    )

}