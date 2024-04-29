package com.mich9061.interactivecv2.service;

import java.util.Optional;

import com.mich9061.interactivecv2.entity.PersonalInformation;
import com.mich9061.interactivecv2.repository.PersonalInformationRepository;
// import com.vaadin.flow.server.auth.AnonymousAllowed;

// import dev.hilla.BrowserCallable;


// @AnonymousAllowed
// @BrowserCallable
public class PersonalInformationCallService {

    private final PersonalInformationRepository personalInformationRepository;

    public PersonalInformationCallService(PersonalInformationRepository personalInformationRepository) {
        this.personalInformationRepository = personalInformationRepository;
    }

    public record PersonalInformationRecord(
            String firstName,
            String secondName,
            String fiscalCode,
            String address,
            String city,
            String country,
            String postalCode,
            String description
    ) { }

    // private PersonalInformationRecord toPersonalInformationRecord(PersonalInformation c) {
    //     return new PersonalInformationRecord(
    //         c.getFirstName(),
    //         c.getSecondName(),
    //         c.getFiscalCode(),
    //         c.getAddress(),
    //         c.getCity(),
    //         c.getCountry(),
    //         c.getPostalCode(),
    //         c.getDescription()
    //     );
    // }

    private PersonalInformationRecord toPersonalInformationRecord(Optional<PersonalInformation> entity) {
        if(entity.isPresent()) {
            return new PersonalInformationRecord(
                entity.get().getFirstName(),
                entity.get().getSecondName(),
                entity.get().getFiscalCode(),
                entity.get().getAddress(),
                entity.get().getCity(),
                entity.get().getCountry(),
                entity.get().getPostalCode(),
                entity.get().getDescription()
            );
            // personalInformation.setId(entity.get().getId());
            // return personalInformation;
        } else {
            //logga qualcosa o throws
            return null;
        }
    }


    public PersonalInformationRecord getPersonalInformation(Long id) {
        return toPersonalInformationRecord(id != null ? personalInformationRepository.findById(id) : Optional.empty());
    }

    // public List<ContactRecord> findAllContacts() {
    //     List<Contact> all = contactRepository.findAllWithCompany();
    //     return all.stream()
    //             .map(this::toContactRecord).toList();
    // }

    // public ContactRecord save(ContactRecord contact) {
    //     var dbContact = contactRepository.findById(contact.id).orElseThrow();
    //     var company = companyRepository.findById(contact.company.id).orElseThrow();

    //     dbContact.setFirstName(contact.firstName);
    //     dbContact.setLastName(contact.lastName);
    //     dbContact.setEmail(contact.email);
    //     dbContact.setCompany(company);

    //     var saved = contactRepository.save(dbContact);

    //     return toContactRecord(saved);
    // }

}
