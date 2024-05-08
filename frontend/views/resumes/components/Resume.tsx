import ResumeModel from 'Frontend/generated/com/mich9061/interactivecv2/model/ResumeModel';
import { ResumeController } from 'Frontend/generated/endpoints';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyHeader } from './MyHeader';
import { ContactInformation } from './ContactInformation';
import { Work } from './Work';
import { Technology } from './Technology';

export default function Resume() {
    const [resume, setResume] = useState<ResumeModel | null | undefined>();
    const { id } = useParams();
    useEffect(() => {
        ResumeController.getResumeFromId(Number(id)).then(setResume);
    }, []);

    return (
        <div className="flex justify-center">
            {resume?.personalInformation ? (
                <div className="flex flex-row w-full max-w-7xl">
                    <div className="w-full lg:w-5/12">
                        <MyHeader {...resume.personalInformation} />
                        <ContactInformation {...resume.personalInformation.contactInformation} />
                        <div className='w-full text-2xl lg:text-4xl text-white font-title bg-orange-600 uppercase mt-5 p-6'>
                            WORK EXPERIENCE
                        </div>
                        {resume.personalInformation.works?.map(work => {
                            return (
                                <Work {...work} position={work?.position ?? 0} />
                            )}
                        )}
                    </div>
                    <div className="w-full lg:w-7/12 bg-gray-800 text-white">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col">
                                <div className="w-full text-lg lg:text-xl uppercase font-title text-white  bg-orange-600 mt-5 px-6 py-2">
                                    Technologies/Languages
                                </div>
                                <div className="grid grid-cols-3">
                                    {resume?.personalInformation?.technologies?.map(technology => {
                                            return (
                                                <Technology {...technology} 
                                                    position={technology?.position ?? 0} 
                                                    level={technology?.level ?? 0} 
                                                    certification={technology?.certification ?? false}
                                                    experienceYears={technology?.experienceYears ?? 0}
                                                    projectNumber={technology?.projectNumber ?? 0}/>
                                            )
                                        })
                                    }
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
                            <div className="flex flex-col text-lg lg:text-xl mt-2">
                                <div className="text-orange-600">
                                    Test lista Driving Licenses:
                                </div>
                                {resume?.personalInformation?.drivingLicenses?.map(drivingLicense => {
                                        return (
                                            <div key={drivingLicense?.id}>
                                                <div className="">
                                                    { drivingLicense?.type }
                                                </div>
                                                {drivingLicense?.moreInformation && (
                                                    <div>
                                                        <div className="ml-3">
                                                            Descrizione: {drivingLicense?.moreInformation.description}
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
                </div>
            ) : <p className='text-center text-lg lg:text-xl'>Resume not Found</p>}
        </div>
    );
}