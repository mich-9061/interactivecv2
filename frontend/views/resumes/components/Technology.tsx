import Rating from "@mui/material/Rating/Rating";
import TechnologyModel from "Frontend/generated/com/mich9061/interactivecv2/model/TechnologyModel"
import { useState } from "react";
import { DownArrow } from "../icons/DownArrow";

export const Technology = (props: TechnologyModel) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={`flex flex-col border border-gray-500 bg-gray-800 p-3 transition-transform duration-500 hover:scale-105 hover:bg-gray-700 ${isOpen ? 'max-h-screen' : 'max-h-[50px]'}`}
                onClick={handleToggle}>
            <div className="flex flex-row items-baseline justify-between font-name font-semibold">
                {props.language}
                <Rating 
                    name="read-only"  
                    icon={<span className="w-3 h-3 rounded-full border border-white bg-white mr-[1px]" />} 
                    emptyIcon={<span className="w-3 h-3 rounded-full border border-white bg-gray-700 mr-[1px]" />}
                    value={props.level} 
                    readOnly />
            </div>
            { isOpen && (
                <div className="text-right font-paragraph font-thin">
                    {getExperienceLabel(props.experienceYears)}
                </div>
            )}
            { isOpen && (
                <div className="text-right font-paragraph font-thin">
                    {props.projectNumber > 0 && (
                        <>{props.projectNumber > 1 ? `${props.projectNumber} projects` : `1 project`}</>
                    )} 
                </div>
            )}
            { isOpen && (
                <div className="text-left uppercase font-paragraph font-thin text-sm">
                    {props.certification && (
                        <div>
                            {props.certificationName}
                            {props.certificationDate}
                            {props.certificationLevel}
                        </div>
                    )}
                </div>
            )}
        </div>
    )

}

function getExperienceLabel(experienceYears:number) {
    if (experienceYears >= 1) {
      return `${experienceYears} year${experienceYears > 1 ? 's' : ''}`;
    }
    return 'less than 1 year';
  }