import ResumeModel from 'Frontend/generated/com/mich9061/interactivecv2/model/ResumeModel';
import { ResumeController } from 'Frontend/generated/endpoints';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyHeader } from './MyHeader';
import { ContactInformation } from './ContactInformation';
import { Work } from './Work';
import { Technology } from './Technology';
import { Study } from './Study';
import { Skill } from './Skill';
import { Hobby } from './Hobby';
import { Language } from './Language';

export default function Resume() {
    const [resume, setResume] = useState<ResumeModel | null | undefined>();
    const { id } = useParams();
    useEffect(() => {
        ResumeController.getResumeFromId(Number(id)).then(setResume);
    }, []);

    return (
        <div className="flex justify-center">
            {resume?.personalInformation ? (
                <div className="flex flex-col w-full max-w-7xl">
                    <div className="flex flex-row">
                        <div className="w-full lg:w-[47%]">
                            <MyHeader {...resume.personalInformation} />
                            <ContactInformation {...resume.personalInformation.contactInformation} />
                            <div className='w-full text-2xl lg:text-4xl text-white font-title bg-orange-600 uppercase p-6'>
                                WORK EXPERIENCE
                            </div>
                            {resume.personalInformation.works?.map(work => {
                                return (
                                    <Work {...work} position={work?.position ?? 0} />
                                )}
                            )}
                            <div className="flex flex-col">
                                <div className="w-full text-lg lg:text-xl uppercase font-title text-white bg-orange-600 px-6 py-2">
                                    Skills
                                </div>
                                <div className="bg-gray-100 pt-4 pb-6">
                                    {resume?.personalInformation?.skills?.map(skill => {
                                            return (
                                                <Skill {...skill} 
                                                    position={skill?.position ?? 0} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="w-full text-lg lg:text-xl uppercase font-title text-white  bg-orange-600 px-6 py-2 mb-2">
                                    Languages
                                </div>
                                <div className="grid grid-cols-3 gap-2 bg-gray-100">
                                    {resume?.personalInformation?.languages?.map(language => {
                                            return (
                                                <Language {...language} 
                                                    position={language?.position ?? 0} 
                                                    level={language?.level ?? 0} 
                                                    writtenLevel={language?.writtenLevel ?? 0} 
                                                    spokenLevel={language?.spokenLevel ?? 0} 
                                                    readLevel={language?.readLevel ?? 0} 
                                                    certification={language?.certification ?? false}
                                                    abroadExperience={language?.abroadExperience ?? false}
                                                    abroadMonths={language?.abroadMonths ?? 0} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="flex flex-row justify-around items-baseline bg-gray-100 grow">
                                <div className=" bg-orange-600 h-fit">
                                    PHOTO
                                </div>
                                <div className=" bg-orange-600">
                                    QR CODE
                                </div>
                            </div>
                        </div>
                        <div className="w-0 lg:w-[1%] bg-orange-600" />
                        <div className="w-full lg:w-[52%] bg-gray-800 text-white">
                            <div className="flex flex-col w-full">
                                <div className="flex flex-col">
                                    <div className="w-full text-lg lg:text-xl uppercase font-title text-white  bg-orange-600 mt-5 px-6 py-2 mb-2">
                                        Technologies/Languages
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        {resume?.personalInformation?.technologies?.map(technology => {
                                                return (
                                                    <Technology {...technology} 
                                                        position={technology?.position ?? 0} 
                                                        level={technology?.level ?? 0} 
                                                        certification={technology?.certification ?? false}
                                                        experienceYears={technology?.experienceYears ?? 0}
                                                        projectNumber={technology?.projectNumber ?? 0} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="w-full text-lg lg:text-xl uppercase font-title text-white  bg-orange-600 mt-5 px-6 py-2">
                                        Education
                                    </div>
                                    {resume?.personalInformation?.studies?.map(study => {
                                            return (
                                                <Study {...study} 
                                                    position={study?.position ?? 0} />
                                            )
                                        })
                                    }
                                </div>
                                <div className="flex flex-col">
                                    <div className="w-full text-lg lg:text-xl uppercase font-title text-white  bg-orange-600 mt-5 px-6 py-2">
                                        Hobby
                                    </div>
                                    {resume?.personalInformation?.hobbies?.map(hobby => {
                                            return (
                                                <Hobby {...hobby} 
                                                    position={hobby?.position ?? 0} />
                                            )
                                        })
                                    }
                                </div>
                                {/* <div className="flex flex-col text-lg lg:text-xl mt-2">
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-9 bg-orange-600 px-6 py-2'>

                    </div>
                </div>  
            ) : <p className='text-center text-lg lg:text-xl font-title'>Resume not Found</p>}
        </div>
    );
}