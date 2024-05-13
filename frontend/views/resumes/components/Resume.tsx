import ResumeModel from 'Frontend/generated/com/mich9061/interactivecv2/model/ResumeModel';
import { ResumeController } from 'Frontend/generated/endpoints';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ContactInformation } from './ContactInformation';
import { Hobby } from './Hobby';
import { Language } from './Language';
import { MyHeader } from './MyHeader';
import { Skill } from './Skill';
import { Study } from './Study';
import { Technology } from './Technology';
import { Work } from './Work';
import { LinkedInLogo } from '../icons/LinkedInLogo';
import { GithubLogo } from '../icons/GithubLogo';

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
                            <div className="flex flex-col bg-gray-100 pb-6">
                                <div className="w-full text-lg lg:text-xl uppercase font-title text-white  bg-orange-600 px-6 py-2 mb-2">
                                    Languages
                                </div>
                                <div className="grid grid-cols-3 gap-2">
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
                            <div className="flex flex-col bg-gray-100">
                                <div className="w-full text-lg lg:text-xl uppercase font-title text-white  bg-orange-600 px-6 py-2 mb-2">
                                    Profile and Portfolio
                                </div>
                                <div className="flex flex-row justify-between bg-gray-100 grow">
                                    <div className="grid grid-rows-2">
                                        <div className="grid grid-cols-4">
                                            <LinkedInLogo/>
                                            <div className='text-lg lg:text-xl italic font-name col-span-3'>
                                                {resume?.personalInformation?.contactInformation?.linkedinProfile}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-5">
                                            <GithubLogo/>
                                            <div className='text-lg lg:text-xl italic font-name col-span-3'>
                                                {resume?.personalInformation?.contactInformation?.githubProfile}
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" bg-orange-600 p-3 mr-12 flex flex-col text-lg lg:text-xl italic font-name text-white text-center mt-24 self-baseline">
                                        <img className='h-40 w-40 self-center'
                                            src={`data:image/jpeg;base64,${resume?.personalInformation?.images?.[0]?.image}`} alt={resume?.personalInformation?.images?.[0]?.moreInformation?.description}/>
                                        <Link className='mt-1.5 hover:underline'
                                            to={resume?.personalInformation?.contactInformation?.website? resume?.personalInformation?.contactInformation?.website : ''}>  
                                            {resume?.personalInformation?.contactInformation?.website}
                                        </Link>
                                    </div>
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