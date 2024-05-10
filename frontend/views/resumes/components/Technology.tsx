import Rating from "@mui/material/Rating/Rating";
import TechnologyModel from "Frontend/generated/com/mich9061/interactivecv2/model/TechnologyModel"

export const Technology = (props: TechnologyModel) => {
    return (
        // versione con tutto a destra
        <div className="flex flex-col border border-gray-500 bg-gray-800 p-3 transition-transform duration-500 hover:scale-105 hover:bg-gray-700">
            <div className="flex flex-row items-baseline justify-between font-name font-semibold">
                {props.language}
                <Rating 
                    name="read-only"  
                    icon={<span className="w-3 h-3 rounded-full border border-white bg-white mr-[1px]" />} 
                    emptyIcon={<span className="w-3 h-3 rounded-full border border-white bg-gray-700 mr-[1px]" />}
                    value={props.level} 
                    readOnly />
            </div>
            {/* <div className="flex flex-row justify-between">
                <div className="text-right font-paragraph font-thin">
                    {getExperienceLabel(props.experienceYears)}
                </div>
                <div className="text-right font-paragraph font-thin">
                    {props.projectNumber > 0 && (
                        <>{props.projectNumber > 1 ? `${props.projectNumber} projects` : `1 project`}</>
                    )} 
                </div>
            </div> */}
            <div className="text-right font-paragraph font-thin">
                {getExperienceLabel(props.experienceYears)}
            </div>
            <div className="text-right font-paragraph font-thin">
                {props.projectNumber > 0 && (
                    <>{props.projectNumber > 1 ? `${props.projectNumber} projects` : `1 project`}</>
                )} 
            </div>
            <div className="text-left uppercase font-paragraph font-thin text-sm">
                {props.certification && (
                    <div>
                        {props.certificationName}
                        {props.certificationDate}
                        {props.certificationLevel}
                    </div>
                )}
            </div>
        </div>

        // versione con livello sotto e progetti e anni a destra
        // <div className="flex flex-col border border-gray-500 bg-gray-800 p-3 transition-transform duration-500 hover:scale-105 hover:bg-gray-700">
        //     <div className="flex flex-row items-baseline justify-between font-name font-semibold">
        //         {props.language}
        //         <div className="text-right font-paragraph font-thin">
        //             {getExperienceLabel(props.experienceYears)}
        //         </div>
        //     </div>
        //     <div className="flex flex-row justify-between">
        //         <Rating 
        //             className="mt-2"
        //             name="read-only"  
        //             icon={<span className="w-3 h-3 rounded-full border border-white bg-white opacity-65 mr-[1px]" />} 
        //             emptyIcon={<span className="w-3 h-3 rounded-full border border-white opacity-65 mr-[1px]" />}
        //             value={props.level} 
        //             readOnly />
        //         <div className="text-right font-paragraph font-thin">
        //             {props.projectNumber > 0 && (
        //                 <>{props.projectNumber > 1 ? `${props.projectNumber} projects` : `1 project`}</>
        //             )} 
        //         </div>
        //     </div>
        //     <div className="text-left uppercase font-paragraph font-thin text-sm">
        //         {props.certification && (
        //             <div>
        //                 {props.certificationName}
        //                 {props.certificationDate}
        //                 {props.certificationLevel}
        //             </div>
        //         )}
        //     </div>
        // </div>
    )

}

function getExperienceLabel(experienceYears:number) {
    if (experienceYears >= 1) {
      return `${experienceYears} year${experienceYears > 1 ? 's' : ''}`;
    }
    return 'less than 1 year';
  }