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
                        { resume?.personalInformation?.contactInformation ? resume.personalInformation.contactInformation.phone : 'nobody'}
                    </div>
                </div>
                <div className="grid grid-cols-2 text-lg lg:text-xl ">
                    <div className="text-orange-600">
                        Address:
                    </div>
                    <div className="flex flex-col">
                        <div>
                            { resume?.personalInformation?.contactInformation ? resume.personalInformation.contactInformation.homeAddress : 'nobody'}, { resume?.personalInformation?.contactInformation ? resume.personalInformation.contactInformation.homeCity : 'nobody'},
                        </div>
                        <div>
                            { resume?.personalInformation?.contactInformation ? resume.personalInformation.contactInformation.homePostalCode : 'nobody'}, { resume?.personalInformation?.contactInformation ? resume.personalInformation.contactInformation.homeCountry : 'nobody'}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 text-lg lg:text-xl ">
                    <div className="text-orange-600">
                        Email:
                    </div>
                    <div className="">
                        { resume?.personalInformation?.contactInformation ? resume.personalInformation.contactInformation.email : 'nobody'}
                    </div>
                </div>
                <div className="flex flex-col text-lg lg:text-xl mt-2">
                    <div className="text-orange-600">
                        Test lista studies:
                    </div>
                    {resume?.personalInformation?.studies?.map(study => {
                            return (
                                <div className="" key={study?.id}>
                                    { study?.courseTitle }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col text-lg lg:text-xl mt-2">
                    <div className="text-orange-600">
                        Test lista works:
                    </div>
                    {resume?.personalInformation?.works?.map(work => {
                            return (
                                <div key={work?.id}>
                                    <div className="">
                                        { work?.workTitle }
                                    </div>
                                    <div className="">
                                        Inizio: { work?.startDate }
                                    </div>
                                    { work?.endDate && (
                                        <div className="">
                                            Fine: {work.endDate}
                                        </div>
                                    )}
                                    <div className="text-orange-600 ml-3">
                                        Test lista workBulletpoints:
                                    </div>
                                    <ul className="ml-3" >
                                        {work?.workBulletpoints?.map(bulletPoint => {
                                            return (
                                                <li key={bulletPoint?.id}>
                                                    { bulletPoint?.jobDescription }
                                                </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col text-lg lg:text-xl mt-2">
                    <div className="text-orange-600">
                        Test lista languages:
                    </div>
                    {resume?.personalInformation?.languages?.map(language => {
                            return (
                                <div className="" key={language?.id}>
                                    { language?.language + ' Level: ' + language?.level}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col text-lg lg:text-xl mt-2">
                    <div className="text-orange-600">
                        Test lista technologies:
                    </div>
                    {resume?.personalInformation?.technologies?.map(technology => {
                            return (
                                <div className="" key={technology?.id}>
                                    { technology?.language + ' Years of experience: ' + technology?.experienceYears}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col text-lg lg:text-xl mt-2">
                    <div className="text-orange-600">
                        Test lista skills:
                    </div>
                    {resume?.personalInformation?.skills?.map(skill => {
                            return (
                                <div className="" key={skill?.id}>
                                    { skill?.description }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col text-lg lg:text-xl mt-2">
                    <div className="text-orange-600">
                        Test lista hobbies:
                    </div>
                    {resume?.personalInformation?.hobbies?.map(hobby => {
                            return (
                                <div key={hobby?.id}>
                                    <div className="">
                                        { hobby?.description }
                                    </div>
                                    {hobby?.moreInformation && (
                                        <div>
                                            <div className="ml-3">
                                                Descrizione: {hobby?.moreInformation.description}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}