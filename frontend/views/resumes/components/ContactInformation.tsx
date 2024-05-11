import ContactInformationModel from "Frontend/generated/com/mich9061/interactivecv2/model/ContactInformationModel";

export const ContactInformation = (props: ContactInformationModel) => {
    
    return(
        <div className="p-6 bg-gray-50">
            <div className="grid grid-cols-3 text-lg lg:text-xl">
                <div className="text-orange-600">
                    Phone:
                </div>
                <div className="col-span-2">
                    { props.phone }
                </div>
            </div>
            <div className="grid grid-cols-3 text-lg lg:text-xl">
                <div className="text-orange-600">
                    Address:
                </div>
                <div className="flex flex-col col-span-2">
                    <div>
                        { props.homeAddress }, { props.homeCity },
                    </div>
                    <div>
                        { props.homePostalCode }, { props.homeCountry }
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 text-lg lg:text-xl">
                <div className="text-orange-600">
                    Email:
                </div>
                <div className="col-span-2">
                    { props.email }
                </div>
            </div>
        </div>
    )

}