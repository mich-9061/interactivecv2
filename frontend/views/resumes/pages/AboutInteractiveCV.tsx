const AboutInteractiveCV = () => {
    return (
      <div className="bg-gray-100 w-full h-[700px]">
        <div className="bg-orange-600 text-white text-center font-title lowercase px-6 py-2 text-2xl">
          About InteractiveCV
        </div>
        <div className="p-8 font-paragraph">
          <p className="mb-4">
            The project started with creating a website that would allow me to bring together the major topics and main development technologies that I know or am learning and explore development phases I have never worked on before. For this reason, sometimes using certain tools for small tasks may seem excessive.
          </p>
          <p className="mb-4">
            I decided to make my code public (under the GPL-3.0-only license) because it could serve as a foundation for anyone who wants to develop a full-stack project that combines the worlds of Java and React due to its low complexity.
          </p>
          <p className="mb-4">
            In the future, other functions will be implemented, such as:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>PDF generation and download</li>
            <li>Better throwing management</li>
            <li>Translation into Italian</li>
            <li>Tests</li>
            <li>Back-office management with react-admin</li>
            <li>Permission management with registration, login, and user profiles</li>
            <li>Management of CVs for multiple people</li>
            <li>Creation of a CV catalog that is explorable with privacy-conscious policies</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default AboutInteractiveCV;