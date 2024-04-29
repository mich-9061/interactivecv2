import {useEffect, useState} from 'react';
import {Grid} from "@hilla/react-components/Grid";
import {GridColumn} from "@hilla/react-components/GridColumn";
import PersonalInformationRecord from 'Frontend/generated/main/java/com/mich9061/interactivecv2/services/PersonalInformationCallService/PersonalInformationRecord';
import { PersonalInformationCallService } from 'Frontend/generated/endpoints';

export default function PersonalInformations() {
    const [personalInfo, setPersonalInfo] = useState<PersonalInformationRecord | null | undefined>();

    useEffect(() => {
        PersonalInformationCallService.getPersonalInformation(1).then(setPersonalInfo);
    }, []);

    return (
        <div className="p-m flex gap-m">
            <ul>
                <li>I am { personalInfo?.firstName }</li>;
            </ul>
        </div>
    );
}