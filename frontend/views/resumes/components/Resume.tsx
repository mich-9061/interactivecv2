import ResumeModel from 'Frontend/generated/com/mich9061/interactivecv2/model/ResumeModel';
import { ResumeController } from 'Frontend/generated/endpoints';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

export default function Resume() {
    const [resume, setResume] = useState<ResumeModel | null | undefined>();
    const { id } = useParams();
    useEffect(() => {
        ResumeController.getResumeFromId(Number(id)).then(setResume);
    }, []);

    return (
        <div className="flex flex-row lg:flex-col w-full">
            <div className="flex flex-row w-full bg-slate-400 h-2/3 items-start">
                <div className="text-xl lg:text-3xl">
                    { resume && resume.personalInformation ? resume.personalInformation.firstName : 'nobody'}
                </div>
                <div className="text-xl lg:text-3xl text-orange-600">
                    { resume && resume.personalInformation ? resume.personalInformation.secondName : 'nobody'}
                </div>
                <div className="text-lg lg:text-2xl text-white bg-black uppercase w-full lg:w-3/4 text-center">
                    { resume && resume.personalInformation ? resume.personalInformation.city : 'nobody'}
                </div>
                <div className="text-md lg:text-lg">
                    { resume && resume.personalInformation ? resume.personalInformation.description : 'nobody'}
                </div>
            </div>
            <div className="flex flex-row w-full bg-slate-400 h-1/3">

            </div>
        </div>
    );
}