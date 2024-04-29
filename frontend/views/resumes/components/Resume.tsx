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
        <div className="flex flex-col w-full">
            <div className="flex flex-col w-full bg-slate-300 h-2/3 items-start px-3">
                <div className="text-3xl lg:text-7xl">
                    { resume?.personalInformation ? resume.personalInformation.firstName : 'nobody'}
                </div>
                <div className="text-3xl lg:text-7xl text-orange-600">
                    { resume?.personalInformation ? resume.personalInformation.secondName : 'nobody'}
                </div>
                <div className="text-2xl lg:text-4xl text-white bg-black uppercase w-full lg:w-3/4 text-center">
                    { resume?.personalInformation ? resume.personalInformation.city : 'nobody'}
                </div>
                <div className="text-lg lg:text-xl">
                    { resume?.personalInformation ? resume.personalInformation.description : 'nobody'}
                </div>
            </div>
            <div className="flex flex-col w-full bg-slate-100 h-1/3 px-3">
                <div className="grid grid-cols-2 text-lg lg:text-xl ">
                    <div className="text-orange-600">
                        Phone:
                    </div>
                    <div className="">
                        { resume?.personalInformation ? resume.personalInformation.address : 'nobody'}
                    </div>
                </div>
                <div className="grid grid-cols-2 text-lg lg:text-xl ">
                    <div className="text-orange-600">
                        Address:
                    </div>
                    <div className="flex flex-col">
                        <div>
                            { resume?.personalInformation ? resume.personalInformation.address : 'nobody'}, { resume?.personalInformation ? resume.personalInformation.city : 'nobody'},
                        </div>
                        <div>
                            { resume?.personalInformation ? resume.personalInformation.postalCode : 'nobody'}, { resume?.personalInformation ? resume.personalInformation.country : 'nobody'}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 text-lg lg:text-xl ">
                    <div className="text-orange-600">
                        Email:
                    </div>
                    <div className="">
                        { resume?.personalInformation ? resume.personalInformation.fiscalCode : 'nobody'}
                    </div>
                </div>
            </div>
        </div>
    );
}