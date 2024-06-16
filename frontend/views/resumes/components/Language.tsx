import { Stack, withStyles } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress/LinearProgress";
import LanguageModel from "Frontend/generated/com/mich9061/interactivecv2/model/LanguageModel";
import { useState } from "react";
import { DownArrow } from "../icons/DownArrow";

export const Language = (props: LanguageModel) => {
    const averageLevel = () => {
        switch(props.level) {
            case 1:
                return 'base';
            case 2:
                return 'base';
            case 3:
                return 'intermediate';
            case 4:
                return 'fluent';
            case 5:
                return 'mother tongue';
            default:
                return 'unkown';
        }
    };
    const normalise = (value: number) => ((value - 1) * 100) / (5 - 1);
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={`flex flex-col border border-gray-500 bg-gray-100 p-3 z-10 transition-transform hover:scale-105 hover:bg-gray-200 overflow-hidden duration-500 ${isOpen ? 'max-h-screen' : 'max-h-[70px]'}`}
                onClick={handleToggle}>
            <div className="flex flex-row items-baseline justify-between font-name font-semibold">
                {props.languageName}
                <div className="lowercase font-light font">{averageLevel()}</div>
            </div>
            { !isOpen && (
            <div className="my-2 h-4 w-4 place-self-center animate-bounce">
                <DownArrow/>
            </div>
            )}
            <div className="grid grid-cols-2 items-center justify-between font-paragraph font-sm mt-1">
                Read
                <Stack>
                    <LinearProgress variant="determinate" value={normalise(props.readLevel)} color="inherit"/>
                </Stack >
            </div>
            <div className="grid grid-cols-2 items-center justify-between font-sm font-paragraph">
                Written
                <Stack>
                    <LinearProgress variant="determinate" value={normalise(props.writtenLevel)} color="inherit"/>
                </Stack>
            </div>
            <div className="grid grid-cols-2 items-center justify-between font-sm font-paragraph">
                Spoken
                <Stack>
                    <LinearProgress variant="determinate" value={normalise(props.spokenLevel)} color="inherit"/>
                </Stack>
            </div>
            {props.abroadExperience && (
                <div className="text-right font-paragraph font-thin mt-1">
                    {getExperienceLabel(props.abroadMonths)}
                </div>
            )}
            <div className="text-right font-paragraph font-thin">
                {props.certification && (
                    <>{`Certification: ${props.certificationName}, level: ${props.certificationLevel}`}</>
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
    )

}

function getExperienceLabel(experienceMonths:number) {
    if (experienceMonths >= 1) {
      return `${experienceMonths} month${experienceMonths > 1 ? 's' : ''} abroad`;
    }
    return 'less than 1 month abroad';
  }