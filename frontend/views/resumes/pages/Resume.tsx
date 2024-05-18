import ResumeModel from 'Frontend/generated/com/mich9061/interactivecv2/model/ResumeModel';
import { ResumeController } from 'Frontend/generated/endpoints';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ContactInformation } from '../components/ContactInformation';
import { Hobby } from '../components/Hobby';
import { Language } from '../components/Language';
import { MyHeader } from '../components/MyHeader';
import { Skill } from '../components/Skill';
import { Study } from '../components/Study';
import { Technology } from '../components/Technology';
import { Work } from '../components/Work';
import { LinkedInLogo } from '../icons/LinkedInLogo';
import { GithubLogo } from '../icons/GithubLogo';

export default function Resume() {
    const [resume, setResume] = useState<ResumeModel | null | undefined>();
    const { slug } = useParams();
    useEffect(() => {
        ResumeController.getResumeFromSlug(slug).then(setResume);
    }, []);

    return (
        <div className="flex justify-center w-full">
            {resume?.personalInformation ? (
                <div className="flex flex-col w-full">
                    <div className="flex flex-row w-full">
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
                                <div className="w-full text-lg lg:text-xl uppercase font-title text-white bg-orange-600 px-6 py-2 list-disc">
                                    Soft Skills
                                </div>
                                <div className="bg-gray-100 pt-4 pb-6 px-6">
                                    <ul className="pl-3 list-disc">
                                        {resume?.personalInformation?.skills?.map(skill => {
                                                return (
                                                    <Skill {...skill} 
                                                        position={skill?.position ?? 0} />
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col bg-gray-100 pb-6 h-[400px]">
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
                                <div className="w-full text-sm lg:text-md mt-28 font-nome italic px-6 py-2 mb-2">
                                    {resume?.personalInformation?.contactInformation?.moreInformation?.description}
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
                                    <div className="w-full text-lg lg:text-xl uppercase font-title text-white  bg-orange-600 mt-5 px-6 py-2 mb-3">
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
                                <div className="flex flex-col grow">
                                    <div className="w-full text-lg lg:text-xl uppercase font-title text-white  bg-orange-600 px-6 py-2 mb-2">
                                        Profile and Portfolio
                                    </div>
                                    <div className="flex flex-row h-[256px] justify-between px-6">
                                        <div className="grid grid-rows-2">
                                            <div className="grid grid-cols-4">
                                                <div className="self-center justify-self-center">
                                                    <LinkedInLogo/>
                                                </div>
                                                <Link className='text-lg lg:text-xl italic font-name font-light col-span-3 hover:underline self-center justify-self-right'
                                                    to={resume?.personalInformation?.contactInformation?.linkedinProfile ? resume?.personalInformation?.contactInformation?.linkedinProfile : ''}>
                                                    {resume?.personalInformation?.firstName} {resume?.personalInformation?.secondName}
                                                </Link>
                                            </div>
                                            <div className="grid grid-cols-4">
                                                <div className="self-center justify-self-center">
                                                    <GithubLogo/>
                                                </div>
                                                <Link className='text-lg lg:text-xl italic font-name font-light col-span-3 hover:underline self-center justify-self-right'
                                                    to={`https://github.com/${resume?.personalInformation?.contactInformation?.githubProfile}`}>
                                                    {resume?.personalInformation?.contactInformation?.githubProfile}
                                                </Link>
                                            </div>
                                        </div>
                                        <div className=" bg-orange-600 p-3 mr-6 flex flex-col lg:text-lg italic font-name text-white text-center self-end">
                                            <img className='h-32 w-32 self-center'
                                                src={`data:image/jpeg;base64,${resume?.personalInformation?.images?.[0]?.image}`} alt={resume?.personalInformation?.images?.[0]?.moreInformation?.description}/>
                                            <Link className='mt-1.5 hover:underline'
                                                to={resume?.personalInformation?.contactInformation?.website? resume?.personalInformation?.contactInformation?.website : ''}>  
                                                {resume?.personalInformation?.contactInformation?.website}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            ) : <p className='text-center text-lg lg:text-xl font-title'>Resume not Found</p>}
        </div>
    );
}