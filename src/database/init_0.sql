CREATE TABLE IF NOT EXISTS personal_information (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  second_name VARCHAR(255) NOT NULL,
  birthday DATE,
  fiscal_code VARCHAR(16),
  address VARCHAR(255),
  city VARCHAR(255),
  country VARCHAR(255),
  postal_code VARCHAR(255),
  description varchar(5000)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS contact_information (
  id INT AUTO_INCREMENT PRIMARY KEY,
  person_id INT,
  home_address VARCHAR(255),
  home_city VARCHAR(255),
  home_country VARCHAR(255),
  home_postal_code VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  linkedin_profile VARCHAR(255),
  github_profile VARCHAR(255),
  website VARCHAR(255),
  other VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE  contact_information
ADD CONSTRAINT fk_contact_person_id FOREIGN KEY (person_id) REFERENCES personal_information(id);

CREATE TABLE IF NOT EXISTS image (
  id INT AUTO_INCREMENT PRIMARY KEY,
  person_id INT,
  filename VARCHAR(255),
  position INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE  image 
ADD CONSTRAINT fk_image_person_id FOREIGN KEY (person_id) REFERENCES personal_information(id);

CREATE TABLE IF NOT EXISTS study (
  id INT AUTO_INCREMENT PRIMARY KEY,
  person_id INT,
  start_date DATE,
  end_date DATE,
  school VARCHAR(255),
  vote VARCHAR(255),
  course_title VARCHAR(255) NOT NULL,
  type ENUM('school', 'certification') NOT NULL,
  position INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE  study
ADD CONSTRAINT fk_study_person_id FOREIGN KEY (person_id) REFERENCES personal_information(id)

CREATE TABLE IF NOT EXISTS work (
  id INT AUTO_INCREMENT PRIMARY KEY,
  person_id INT,
  start_date DATE,
  end_date DATE,
  company VARCHAR(255) NOT NULL,
  work_title VARCHAR(255) NOT NULL,
  position INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE  work
ADD CONSTRAINT fk_work_person_id FOREIGN KEY (person_id) REFERENCES personal_information(id)

CREATE TABLE IF NOT EXISTS work_bulletpoint (
  id INT AUTO_INCREMENT PRIMARY KEY,
  person_id INT,
  work_id INT,
  job_description VARCHAR(255),
  position INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE  work_bulletpoint
ADD CONSTRAINT fk_work_bulletpoint_person_id FOREIGN KEY (person_id) REFERENCES personal_information(id);
ALTER TABLE  work_bulletpoint
ADD CONSTRAINT fk_work_bulletpoint_work_id FOREIGN KEY (work_id) REFERENCES work(id);

CREATE TABLE IF NOT EXISTS language (
  id INT AUTO_INCREMENT PRIMARY KEY,
  person_id INT,
  language VARCHAR(255) NOT NULL,
  written_level INT,
  spoken_level INT,
  read_level INT,
  level INT,
  certification BOOL,
  certification_name VARCHAR(255),
  certification_level VARCHAR(10),
  certification_date DATE,
  abroad_experience BOOL,
  abroad_months INT,
  position INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE  language
ADD CONSTRAINT fk_language_person_id FOREIGN KEY (person_id) REFERENCES personal_information(id);

CREATE TABLE IF NOT EXISTS technology (
  id INT AUTO_INCREMENT PRIMARY KEY,
  person_id INT,
  language VARCHAR(255) NOT NULL,
  level INT,
  certification BOOL,
  certification_name VARCHAR(255),
  certification_level VARCHAR(10),
  certification_date DATE,
  experience_years INT,
  project_number INT,
  position INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE  technology
ADD CONSTRAINT fk_technology_person_id FOREIGN KEY (person_id) REFERENCES personal_information(id);

CREATE TABLE IF NOT EXISTS skill (
  id INT AUTO_INCREMENT PRIMARY KEY,
  person_id INT,
  description VARCHAR(255) NOT NULL,
  position INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE  skill
ADD CONSTRAINT fk_skill_person_id FOREIGN KEY (person_id) REFERENCES personal_information(id);

CREATE TABLE IF NOT EXISTS more_information (
  id INT AUTO_INCREMENT PRIMARY KEY,
  person_id INT,
  description VARCHAR(255) NOT NULL,
  position INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE  more_information
ADD CONSTRAINT fk_more_information_person_id FOREIGN KEY (person_id) REFERENCES personal_information(id);

CREATE TABLE IF NOT EXISTS hobby (
  id INT AUTO_INCREMENT PRIMARY KEY,
  person_id INT,
  more_information_id INT,
  description VARCHAR(255) NOT NULL,
  position INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE  hobby
ADD CONSTRAINT fk_hobby_person_id FOREIGN KEY (person_id) REFERENCES personal_information(id);
ALTER TABLE  hobby
ADD CONSTRAINT fk_hobby_more_information_id FOREIGN KEY (more_information_id) REFERENCES more_information(id);

CREATE TABLE IF NOT EXISTS driving_license (
  id INT AUTO_INCREMENT PRIMARY KEY,
  person_id INT,
  more_information_id INT,
  type VARCHAR(10) NOT NULL,
  position INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE  driving_license
ADD CONSTRAINT fk_driving_license_person_id FOREIGN KEY (person_id) REFERENCES personal_information(id);
ALTER TABLE  driving_license
ADD CONSTRAINT fk_driving_license_more_information_id FOREIGN KEY (more_information_id) REFERENCES more_information(id);