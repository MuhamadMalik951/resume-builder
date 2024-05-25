import { Accordion, AccordionItem } from '@nextui-org/react';
import { v4 as uuid } from 'uuid';
import { useState, useEffect } from 'react';
import './App.css';
import {
  Input,
  Textarea,
  Button,
  Select,
  SelectItem,
  Tooltip,
} from '@nextui-org/react';

function Heading({ text, className }) {
  return (
      <div className={'text-blue-700 text-xl text-center font-bold'}>
        {text}
      </div>
  );
}
function Contact({ address, email, contactNo, text, name }) {
  return (
    <>
      <div className={'text-2xl font-bold text-blue-700'}>{name}</div>
      <div className=" mb-4 first-section">
        <div className="mt-2">{address}</div>
        <div className="email-section mt-2 mb-3">
          <div className="email">{email}</div>
          <div className="space">|</div>
          <div className="number">{contactNo}</div>
        </div>
        <div className={'text-center'}>{text}</div>
      </div>
    </>
  );
}

function Education({
  name,
  startDate,
  endDate,
  jobName,
  text,
  title,
  className,
}) {
  return (
    <div className="second-section">
      <div className="title-section">
        <Heading text={title} className={className}></Heading>
      </div>
      <div className="company">
        <div className="company-box">
          <div className="company-name italic">{name}</div> 
          <div className="date flex gap-1">
            <div className="startDate">{startDate}</div>
            <div>-</div>
            <div className="endDate">{endDate}</div>
          </div>
        </div>
        <div className="job-name">{jobName}</div>
        <Text className={'prev-job'} text={text}></Text>
      </div>
    </div>
  );
}

function Text({ text }) {
  return (
    <div className={'prev-job'}>
      <ul className="ml-5 mt-2 text-left" style={{ listStyleType: 'disc' }}>
        <li>{text}</li>
      </ul>
    </div>
  );
}

function App() {
  const [namee, setNamee] = useState({ name: 'Arnold' });
  const [jobTitlee, setCJobTitlee] = useState({ name: 'Engineer' });
  const [companyNamee, setCompanyNamee] = useState({ name: 'DevSync' });
  const [mobileNo, setMobileNo] = useState({ name: '00000000' });
  const [email, setEmail] = useState({ name: 'davidprocter951@gmail.com' });
  const [month, setMonth] = useState('April');
  const [endMonth, setEndMonth] = useState('November');
  const [year, setYear] = useState('1999');
  const [endYear, setEndYear] = useState('2022');
  const [companyName, setCompanyName] = useState({ name: 'DevSync' });
  const [updateJobTitle, setUpdateJobTitle] = useState({
    name: 'Software Engineer',
  });
  const [updateMonth, setUpdateMonth] = useState('February');
  const [updateEndMonth, setUpdateEndMonth] = useState('april');
  const [updateYear, setUpdateYear] = useState('1998');
  const [updateEndYear, setUpdateEndYear] = useState('2024');
  const [updateCompanyName, setUpdataCompanyName] = useState({
    name: 'ArbiSoft',
  });
  const [jobTitle, setJobTitle] = useState({ name: 'Developer' });
  const [startDate, setStartDate] = useState('ert');
  const [endDate, setEndDate] = useState('jhfg');
  const [details, setDetails] = useState({
    name: 'these are the details of my job',
  });
  const [skill, setSkill] = useState({
    name: '',
  });
  const [updateDetails, setUpdateDetails] = useState('updateddetails');

  const [selectedYear, setSelectedYear] = useState('2021');
  const [selectedYearEnd, setSelectedYearEnd] = useState('2007');
  const [selectedEducationYear, setSelectedEducationYear] = useState('2021');
  const [selectedEducationYearEnd, setSelectedEducationYearEnd] =
    useState('2007');
  const [selectedMonth, setSelectedMonth] = useState('May');
  const [selectedMonthEnd, setSelectedMonthEnd] = useState('March');
  const [selectedEducationMonth, setSelectedEducationMonth] = useState('May');
  const [selectedEducationMonthEnd, setSelectedEducationMonthEnd] =
    useState('March');
  const [showElement, setShowElement] = useState(false);
  const [showElementTwo, setShowElementTwo] = useState(false);
  const [showEducationElement, setShowEducationElement] = useState(false);
  const [info, setInfoValues] = useState({
    inputName: 'Sherlock Holmes',
    inputEmail: 'davidprocter951@gmail.com',
    contactNo: '03054147842',
    address: '221b Baker Street, Marylebone, London',
    bio: 'Consulting Detective working cases of capital importance for private individuals and governments.',
    compnayName: 'Sherlock Homes Detective Agencyi',
    compnayUpdatedName: 'Sherlock Homes Detective Agencyi',
    compnayStartDate: {
      month: selectedMonth,
      year: selectedYear,
    },
    compnayEndDate: {
      month: selectedMonthEnd,
      year: selectedYearEnd,
    },
    educationStartDate: {
      month: selectedMonth,
      year: selectedYear,
    },
    educationEndDate: {
      month: selectedMonthEnd,
      year: selectedYearEnd,
    },
    jobTitle: 'Detective',
    phoneNo: '03054147842',
    details: 'I did detective work at my previous job',
    universitySchool: 'The Islamiya University of Bahawalpur',
    qualification: 'Bsc. Detective',
    educationDetails: 'the details of educations',
    skilsls: 'there are the skills I have for this job',
    Labels: {
      jobs: {
        name: 'Company Name + (Location)',
        title: 'Job Title',
        details: 'Details',
      },
      educations: {
        name: 'University/School',
        title: 'Qualifications (e.g. BSc Chemistry)',
        details: 'Details',
      },
      projects: {
        name: 'Project Title',
        title: 'Job Title',
        details: 'Details',
      },
      references: {
        name: 'Name',
        title: 'Job Title',
        companyName: 'companyName',
        mobileNo: 'Mobile No',
        email: 'E-mail',
      },
    },
    projects: [
      {
        name: 'Resume Builder',
        startDate: {
          month: selectedMonth,
          year: selectedYear,
        },
        endDate: {
          month: selectedMonthEnd,
          year: selectedYearEnd,
        },
        details:
          'This is the first react project that Im building which might not be good as I want it to be.',
      },
      {
        name: 'Resume Builder',
        startDate: {
          month: selectedMonth,
          year: selectedYear,
        },
        endDate: {
          month: selectedMonthEnd,
          year: selectedYearEnd,
        },
        details:
          'This is the first react project that Im building which might not be good as I want it to be.',
      },
    ],
    educations: [
      {
        name: 'University of Cambridge',
        other: 'BSc Chemistry - 1st',
        startDate: {
          month: selectedMonth,
          year: selectedYear,
        },
        endDate: {
          month: selectedMonthEnd,
          year: selectedYearEnd,
        },
        details:
          'Exploring the field of forensic science and analytical chemistry',
      },
      {
        name: 'University of Cambridge',
        other: 'BSc Chemistry - 1st',
        startDate: {
          month: selectedMonth,
          year: selectedYear,
        },
        endDate: {
          month: selectedMonthEnd,
          year: selectedYearEnd,
        },
        details:
          'Exploring the field of forensic science and analytical chemistry',
      },
    ],
    jobs: [
      {
        name: 'Sherlock Holmes Detective Agency',
        other: 'Consulting Detective',
        id: '2323',
        startDate: {
          month: selectedMonth,
          year: selectedYear,
        },
        endDate: {
          month: selectedMonthEnd,
          year: selectedYearEnd,
        },
        details:
          'Exposing and breaking up the criminal organization of Professer Moriarty',
      },
    ],
    skills: [
      {
        name: 'Forensic Sciencessss',
      },

      {
        name: 'Finicial Reasonning',
      },
      {
        name: 'Observational Prowess',
      },
      {
        name: 'Skeptical Knowledge of British knowledge of British Law',
      },
    ],
    references: [
      {
        name: 'Dr. John H. Watson',
        jobTitle: 'Biographer',
        companyName: 'Sherlock Holmes Detective Agency',
        mobileNo: '0984098304',
        email: 'davidprocter951@gmail.com',
      },
    ],
  });

  function extractYear(year) {
    return String(year).slice(-2);
  }

  function monthToNumber(monthName) {
    const months = [
      'january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december',
    ];

    const lowercaseMonth = monthName.toLowerCase();
    const monthIndex = months.indexOf(lowercaseMonth);
    const monthNumber = String(monthIndex + 1).padStart(2, '0');

    return monthNumber;
  }

  function Skills({ skills, heading }) {
    return skills.map((skill, index) => {
      if (index === 0) {
        return (
          <div key={uuid()}>
            <div className="" key={uuid()}>
              <Heading text={heading} className={'heading'}></Heading>
            </div>
            <Text text={skill.name} key={index}></Text>
          </div>
        );
      } else {
        return <Text text={skill.name} key={index}></Text>;
      }
    });
  }
  function Project({ title, heading }) {
    return title.map((project, index) => {
      if (index === 0) {
        return (
          <div key={index} className="second-section mb-2">
            <div>
              <Heading text={heading} className={'heading'}></Heading>
            </div>
            <div className="company">
              <div className="company-box">
                <div className="company-name">{project.name}</div> 

                <div className="date flex gap-1">
                  <div className="startDate">
                    {monthToNumber(project.startDate.month) +
                      '/' +
                      extractYear(project.startDate.year)}
                  </div>
                  <div>-</div>
                  <div className="endDate">
                    {monthToNumber(project.endDate.month) +
                      '/' +
                      extractYear(project.endDate.year)}
                  </div>
                </div>
              </div>
              <div className="job-name">{project.other}</div>
              <Text
                className={'prev-job text-left'}
                text={project.details}
              ></Text>
            </div>
          </div>
        );
      } else {
        return (
          <div key={index} className="second-section mb-2">
            <div className="company">
              <div className="company-box">
                <div className="company-name">{project.name}</div>
                <div className="date flex gap-1">
                  <div className="startDate">
                    {monthToNumber(project.startDate.month) +
                      '/' +
                      extractYear(project.startDate.year)}
                  </div>
                  <div>-</div>
                  <div className="endDate">
                    {monthToNumber(project.endDate.month) +
                      '/' +
                      extractYear(project.endDate.year)}
                  </div>
                </div>
              </div>
              <div className="job-name">{project.other}</div>
              <Text
                className={'prev-job text-left'}
                text={project.details}
              ></Text>
            </div>
          </div>
        );
      }
    });
  }

  function AddSection({ field }) {
    if (field === 'projects') {
      return (
        <>
          {!showElementTwo && (
            <>
              <InputFields object={info[field]} field={field}></InputFields>
              <div className="flex flex-wrap gap-4 items-center justify-center mt-2 p-2 ">
                <Button
                  color="primary"
                  variant="solid"
                  onClick={handleButtonClickTwo}
                >
                  Add Section
                </Button>
              </div>
            </>
          )}
          {showElementTwo && (
            <div className="p-2">
              <div className="flex w-full flex-wrap md:flex-nowrap gap-5 mb-4">
                <Input
                  type="text"
                  onChange={(event) => {
                    handleInputFields(event, 'companyName');
                  }}
                  label={info.Labels[field].name}
                />
              </div>
              <div className="flex w-full md:flex-nowrap gap-5 mb-4  ">
                <div className="flex flex-col gap-3 ml-2 w-full">
                  <div className="afterDate flex w-full gap-5">
                    <DateElement
                      name={'Start Date'}
                      setMonth={setMonth}
                      selectMonth={month}
                      setYear={setYear}
                      selectYear={year}
                    ></DateElement>
                    <DateElement
                      name={'End Date'}
                      setMonth={setEndMonth}
                      selectMonth={endMonth}
                      setYear={setEndYear}
                      selectYear={endYear}
                    ></DateElement>
                  </div>
                </div>
              </div>
              <Textarea
                label={info.Labels[field].details}
                onChange={(event) => {
                  handleInputFields(event, 'details');
                }}
                className=" mb-5"
              />
              <div className="flex flex-wrap gap-4 items-center justify-center ">
                <Button color="danger" variant="ghost">
                  Cancel
                </Button>
                <Button
                  color="primary"
                  variant="solid"
                  onClick={() => {
                    handleFormClick(uuid(), field);
                  }}
                >
                  Save
                </Button>
              </div>
            </div>
          )}
        </>
      );
    } else if (field === 'references') {
      return (
        <>
          {!showElementTwo && (
            <>
              <InputFields object={info[field]} field={field}></InputFields>
              <div className="flex flex-wrap gap-4 items-center justify-center mt-2 p-2 ">
                <Button
                  color="primary"
                  variant="solid"
                  onClick={handleButtonClickTwo}
                >
                  Add Section
                </Button>
              </div>
            </>
          )}
          {showElementTwo && (
            <div className="p-2">
              <div className="flex w-full flex-wrap md:flex-nowrap gap-5 mb-4">
                <Input
                  type="text"
                  placeholder={info[field].name}
                  onChange={(event) => {
                    handleInputFieldss(event, 'name');
                  }}
                  label={info.Labels[field].name}
                  // placeholder="Sherlock Homes Detectives Agency"
                />
                <Input
                  type="text"
                  placeholder={info[field].jobTitle}
                  onChange={(event) => {
                    handleInputFieldss(event, 'jobTitle');
                  }}
                  label={info.Labels[field].title}
                />
              </div>
              <Input
                label={info.Labels[field].companyName}
                // value={obj.companyName}
                placeholder={info[field].companyName}
                onChange={(event) => {
                  handleInputFieldss(event, 'companyName');
                }}
                className=" mb-5"
              />
              <Input
                label={info.Labels[field].mobileNo}
                // value={obj.mobileNo}
                placeholder={info[field].mobileNo}
                onChange={(event) => {
                  handleInputFieldss(event, 'mobileNo');
                }}
                className=" mb-5"
              />
              <Input
                label={info.Labels[field].email}
                // value={obj.email}
                placeholder={info[field].email}
                onChange={(event) => {
                  handleInputFieldss(event, 'email');
                }}
                className=" mb-5"
              />
              <div className="flex flex-wrap gap-4 items-center justify-center ">
                <Button color="danger" variant="ghost">
                  Delete
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    handleFormClick(uuid(), field);
                  }}
                  variant="solid"
                  K
                >
                  Save
                </Button>
              </div>
            </div>
          )}
        </>
      );
    } else {
      return (
        <>
          {!showElementTwo && (
            <>
              <InputFields object={info[field]} field={field}></InputFields>
              <div className="flex flex-wrap gap-4 items-center justify-center mt-2 p-2 ">
                <Button
                  color="primary"
                  variant="solid"
                  onClick={handleButtonClickTwo}
                >
                  Add Section
                </Button>
              </div>
            </>
          )}
          {showElementTwo && (
            <div className="p-2">
              <div className="flex w-full flex-wrap md:flex-nowrap gap-5 mb-4">
                <Input
                  type="text"
                  onChange={(event) => {
                    handleInputFieldss(event, 'comanyName');
                  }}
                  label={info.Labels[field].name}
                />
                <Input
                  type="text"
                  onChange={(event) => {
                    handleInputFields(event, 'jobTitle');
                  }}
                  label={info.Labels[field].title}
                />
              </div>
              <div className="flex w-full md:flex-nowrap gap-5 mb-4  ">
                <div className="flex flex-col gap-3 ml-2 w-full">
                  <div className="afterDate flex w-full gap-5">
                    <DateElement
                      name={'Start Date'}
                      setMonth={setMonth}
                      selectMonth={month}
                      setYear={setYear}
                      selectYear={year}
                    ></DateElement>
                    <DateElement
                      name={'End Date'}
                      setMonth={setEndMonth}
                      selectMonth={endMonth}
                      setYear={setEndYear}
                      selectYear={endYear}
                    ></DateElement>
                  </div>
                </div>
              </div>
              <Textarea
                label={info.Labels[field].details}
                onChange={(event) => {
                  handleInputFields(event, 'details');
                }}
                className=" mb-5"
              />
              <div className="flex flex-wrap gap-4 items-center justify-center ">
                <Button color="danger" variant="ghost">
                  Cancel
                </Button>
                <Button
                  color="primary"
                  variant="solid"
                  onClick={() => {
                    handleFormClick(uuid(), field);
                  }}
                >
                  Save
                </Button>
              </div>
            </div>
          )}
        </>
      );
    }
  }
  function AddSkills({ object, field }) {
    return info.skills.map((obj, index) => {
      return (
        <Tooltip
          key={index}
          color={'red'}
          content={obj.name}
          className="capitalize gap-2 "
        >
          <Button variant="flat" className="capitalize m-1 ">
            {obj.name}
          </Button>
        </Tooltip>
      );
    });
  }
  function AddReference() {
    return info.references.map((obj, index) => {
      if (index === 0) {
        return (
          <div key={index} className="second-section mb-2">
            <div className="">
              <Heading text={'References'} className={'heading'}></Heading>
            </div>
            <div className="flex">
              <div className="text-left mr-1">{obj.name}</div>
              <div>-</div>
              <div className="ml-1">{obj.jobTitle},</div>
              <div className="company-name ml-1">{obj.companyName}</div>
            </div>
            <div className="flex">
              <div className="mr-1">{obj.mobileNo}</div>
              <div>|</div>
              <div className="ml-1">{obj.email}</div>
            </div>
          </div>
        );
      } else {
        return (
          <div key={index} className="second-section mb-2">
            <div className="flex">
              <div className="text-left mr-1">{obj.name}</div>
              <div>-</div>
              <div className="ml-1">{obj.jobTitle},</div>
              <div className="company-name ml-1">{obj.companyName}</div>
            </div>
            <div className="flex">
              <div className="mr-1">{obj.mobileNo}</div>
              <div>|</div>
              <div className="ml-1">{obj.email}</div>
            </div>
          </div>
        );
      }
    });
  }

  function InputFields({ object, field }) {
    return object.map((obj, index) => {
      if (field === 'projects') {
        return (
          <Accordion key={index} variant="shadoe" className={'mt-2  bg-white'}>
            <AccordionItem key={index} aria-label={index} title={obj.name}>
              <div className="p-2">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-5 mb-4">
                  <Input
                    type="text"
                    placeholder={obj.name}
                    onChange={(event) => {
                      handleUpdateInputFields(event, 'companyName');
                    }}
                    label={info.Labels[field].name}
                    // placeholder="Sherlock Homes Detectives Agency"
                  />
                  {/* <Input
                    type="text"
                    placeholder={obj.other}
                    onChange={(event) => {
                      handleUpdateInputFields(event, 'jobTitle');
                    }}
                    label={info.Labels[field].title}
                  /> */}
                </div>
                <div className="flex w-full md:flex-nowrap gap-5 mb-4 ">
                  <div className="flex flex-col gap-3 ml-2 w-full">
                    <div className="afterDate flex w-full gap-5 ">
                      <DateElement
                        name={'Start Date'}
                        setMonth={setUpdateMonth}
                        selectMonth={updateMonth}
                        setYear={setUpdateYear}
                        selectYear={updateYear}
                      ></DateElement>
                      <DateElement
                        name={'End Date'}
                        setMonth={setUpdateEndMonth}
                        selectMonth={updateEndMonth}
                        setYear={setUpdateEndYear}
                        selectYear={updateEndYear}
                      ></DateElement>
                    </div>
                  </div>
                </div>
                <Textarea
                  label={info.Labels[field].details}
                  // value={obj.details}
                  placeholder={obj.details}
                  onChange={(event) => {
                    handleUpdateInputFields(event, 'details');
                  }}
                  className=" mb-5"
                />
                <div className="flex flex-wrap gap-4 items-center justify-center ">
                  <Button color="danger" variant="ghost">
                    Delete
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => {
                      handleUpdateFormClick(obj.id, object);
                    }}
                    variant="solid"
                  >
                    Update
                  </Button>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        );
      } else if (field === 'skills') {
        return (
          <Tooltip
            key={index}
            color={'red'}
            content={obj.name}
            className="capitalize gap-2"
          >
            <Button variant="flat" className="capitalize m-2 ">
              {obj.name}
            </Button>
          </Tooltip>
        );
      } else if (field === 'references') {
        return (
          <Accordion key={index} variant="shadoe" className={'mt-2  bg-white'}>
            <AccordionItem key={index} aria-label={index} title={obj.name}>
              <div className="p-2">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-5 mb-4">
                  <Input
                    type="text"
                    placeholder={obj.name}
                    onChange={(event) => {
                      handleUpdateInputFields(event, 'name');
                    }}
                    label={info.Labels[field].name}
                    // placeholder="Sherlock Homes Detectives Agency"
                  />
                  <Input
                    type="text"
                    placeholder={obj.jobTitle}
                    onChange={(event) => {
                      handleUpdateInputFields(event, 'jobTitle');
                    }}
                    label={info.Labels[field].title}
                  />
                </div>
                <Input
                  label={info.Labels[field].companyName}
                  // value={obj.companyName}
                  placeholder={obj.companyName}
                  onChange={(event) => {
                    handleUpdateInputFields(event, 'companyName');
                  }}
                  className=" mb-5"
                />
                <Input
                  label={info.Labels[field].mobileNo}
                  // value={obj.mobileNo}
                  placeholder={obj.mobileNo}
                  onChange={(event) => {
                    handleUpdateInputFields(event, 'mobileNo');
                  }}
                  className=" mb-5"
                />
                <Input
                  label={info.Labels[field].email}
                  // value={obj.email}
                  placeholder={obj.email}
                  onChange={(event) => {
                    handleUpdateInputFields(event, 'email');
                  }}
                  className=" mb-5"
                />
                <div className="flex flex-wrap gap-4 items-center justify-center ">
                  <Button color="danger" variant="ghost">
                    Delete
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => {
                      handleUpdateFormClick(obj.id, object);
                    }}
                    variant="solid"
                  >
                    Update
                  </Button>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        );
      } else {
        return (
          <Accordion key={index} variant="shadoe" className={'mt-2  bg-white'}>
            <AccordionItem key={index} aria-label={index} title={obj.name}>
              <div className="p-2">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-5 mb-4">
                  <Input
                    type="text"
                    placeholder={obj.name}
                    onChange={(event) => {
                      handleUpdateInputFields(event, 'companyName');
                    }}
                    label={info.Labels[field].name}
                    // placeholder="Sherlock Homes Detectives Agency"
                  />
                  <Input
                    type="text"
                    placeholder={obj.other}
                    onChange={(event) => {
                      handleUpdateInputFields(event, 'jobTitle');
                    }}
                    label={info.Labels[field].title}
                  />
                </div>
                <div className="flex w-full md:flex-nowrap gap-5 mb-4 ">
                  <div className="flex flex-col gap-3 ml-2 w-full">
                    <div className="afterDate flex w-full gap-5 ">
                      <DateElement
                        name={'Start Date'}
                        setMonth={setUpdateMonth}
                        selectMonth={updateMonth}
                        setYear={setUpdateYear}
                        selectYear={updateYear}
                      ></DateElement>
                      <DateElement
                        name={'End Date'}
                        setMonth={setUpdateEndMonth}
                        selectMonth={updateEndMonth}
                        setYear={setUpdateEndYear}
                        selectYear={updateEndYear}
                      ></DateElement>
                    </div>
                  </div>
                </div>
                <Textarea
                  label={info.Labels[field].details}
                  // value={obj.details}
                  placeholder={obj.details}
                  onChange={(event) => {
                    handleUpdateInputFields(event, 'details');
                  }}
                  className=" mb-5"
                />
                <div className="flex flex-wrap gap-4 items-center justify-center ">
                  <Button color="danger" variant="ghost">
                    Delete
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => {
                      handleUpdateFormClick(obj.id, object);
                    }}
                    variant="solid"
                  >
                    Update
                  </Button>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        );
      }
    });
  }
  function DateElement({ name, selectYear, setYear, selectMonth, setMonth }) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return (
      <div className="flex flex-col h-20  w-2/4  gap-3 justify-center items-center">
        <div className="h-full font-bold align-text-top w-full ">{name}</div>
        <div className="selectElement flex w-fit h-fit items-center justify-center gap-4">
          <div className="flex w-full md:flex-nowrap gap-4 flex-row justify-center">
            <Select
              className="flex w-28 h-fit  p-0"
              placeholder={selectMonth}
              value={selectMonth}
            >
              {months.map((month, index) => (
                <SelectItem
                  data={month}
                  placeholder={selectMonth}
                  onClick={(e) => {
                    setMonth(e.target.textContent);
                    // setMonth = e.target.textContent
                  }}
                  key={index}
                >
                  {month}
                </SelectItem>
              ))}
            </Select>
            <Select
              size="none"
              value={selectYear}
              placeholder={selectYear}
              onChange={(e) => {
                setYear(e.target.value);
              }}
              className="flex w-20 h-fit  p-0"
            >
              {generateYearOptions()}
            </Select>
          </div>
        </div>
      </div>
    );
  }

  function generateYearOptions() {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= 1990; year--) {
      years.push(year);
    }
    return years.map((year) => (
      <SelectItem className=" w-fit" key={year} value={year}>
        {year}
      </SelectItem>
    ));
  }

  function handleButtonClick(event) {
    event.preventDefault();
  }

  const handleClick = () => {
    setShowElement(!showElement);
  };

  const handleButtonClickTwo = () => {
    setShowElementTwo(!showElementTwo);
  };

  //   const handleCareerButton = (event) => {
  //     setElementsArray([...elementsArray, array]);
  //
  //     // <>
  //     // <div className="flex w-full flex-wrap md:flex-nowrap gap-5 mb-4">
  //     //                 <Input
  //     //                   type="text"
  //     //                   value={info.jobs[0].name}
  //     //                   onChange={(event) => {
  //     //                     handleInputChange(event, 'companyName');
  //     //                   }}
  //     //                   label="Compnay Name"
  //     //                   placeholder="Sherlock Homes Detectives Agency"
  //     //                 />
  //     //                 <Input
  //     //                   type="text"
  //     //                   value={info.jobTitle}
  //     //                   onChange={(event) => {
  //     //                     handleInputChange(event, 'jobTitle');
  //     //                   }}
  //     //                   label="Job Title"
  //     //                   placeholder="davidprocter951@gmail.com"
  //     //                 />
  //     //               </div>
  //     //               <div className="flex w-full md:flex-nowrap gap-5 mb-4  ">
  //     //                 {!showElement && (
  //     //                   <div className="beforeDate flex gap-3">
  //     //                     <Input
  //     //                       type="text"
  //     //                       value={
  //     //                         info.compnayStartDate.month +
  //     //                         ', ' +
  //     //                         info.compnayStartDate.year
  //     //                       }
  //     //                       label={'Start Date'}
  //     //                       className="w-2/4"
  //     //                       onClick={handleClick}
  //     //                     ></Input>
  //     //                     <Input
  //     //                       type="text"
  //     //                       value={
  //     //                         info.compnayEndDate.month +
  //     //                         ', ' +
  //     //                         info.compnayEndDate.year
  //     //                       }
  //     //                       label={'End Date'}
  //     //                       className="w-2/4"
  //     //                       onClick={handleClick}
  //     //                     ></Input>
  //     //                   </div>
  //     //                 )}
  //     //                 {showElement && (
  //     //                   <div className="flex flex-col gap-3">
  //     //                     <div className="afterDate flex w-full gap-5">
  //     //                       <DateElement
  //     //                         name={'Start Date'}
  //     //                         setMonth={setSelectedMonth}
  //     //                         selectMonth={selectedMonth}
  //     //                         setYear={setSelectedYear}
  //     //                         selectYear={selectedYear}
  //     //                       ></DateElement>
  //     //                       <DateElement
  //     //                         name={'End Date'}
  //     //                         setMonth={setSelectedMonthEnd}
  //     //                         selectMonth={selectedMonthEnd}
  //     //                         setYear={setSelectedYearEnd}
  //     //                         selectYear={selectedYearEnd}
  //     //                       ></DateElement>
  //     //                     </div>
  //     //                     <div className="flex gap-4 items-center justify-center">
  //     //                       <Button onClick={handleClick} size="sm">
  //     //                         Save
  //     //                       </Button>
  //     //                     </div>
  //     //                   </div>
  //     //                 )}
  //     //               </div>
  //     //               <Textarea
  //     //                 label="Details"
  //     //                 value={info.details}
  //     //                 onChange={(event) => {
  //     //                   handleInputChange(event, 'details');
  //     //                 }}
  //     //                 placeholder="What did you do at your previous job? "
  //     //                 className=" mb-5"
  //     //               />
  //     //               <div className="flex flex-wrap gap-4 items-center justify-center ">
  //     //                 <Button color="danger" variant="ghost">
  //     //                   Delete
  //     //                 </Button>
  //     //                 <Button color="primary" variant="solid">
  //     //                   Save
  //     //                 </Button>
  //     //               </div>
  //     // </>
  //   };
  const handleEducationClick = () => {
    setShowEducationElement(!showEducationElement);
  };
  function handleInputChange(event, fieldName) {
    setInfoValues({
      ...info,
      [fieldName]: event.target.value,
    });
    // const value  = event.target.value

    // set
  }

  function handleInputFields(event, field) {
    const value = event.target.value;
    if (field === 'companyName') companyName.name = value;
    if (field === 'jobTitle') jobTitle.name = value;
    if (field === 'details') details.name = value;
    if (field === 'skills') setSkill({ name: value });
  }
  function handleInputFieldss(event, field) {
    const value = event.target.value;
    if (field === 'name') namee.name = value;
    if (field === 'jobTitle') jobTitlee.name = value;
    if (field === 'companyName') companyNamee.name = value;
    if (field === 'mobleNo') mobileNo.name = value;
    if (field === 'email') email.name = value;
  }

  function handleUpdateInputFields(event, field) {
    const value = event.target.value;

    if (field === 'companyName') updateCompanyName.name = value;
    if (field === 'jobTitle') updateJobTitle.name = value;
    if (field === 'details') updateDetails.name = value;
  }

  function handleFormClick(uiid, workField) {
    if (workField === 'skills') {
      const obj = {
        name: skill.name,
        id: uiid,
      };
      info[workField] = [...info[workField], obj];
      setSkill({ name: '' });
    } else if (workField === 'references') {
      const obj = {
        name: namee.name,
        jobTitle: jobTitlee.name,
        companyName: companyNamee.name,
        id: uiid,
        mobileNo: mobileNo.name,
        email: email.name,
      };
      handleButtonClickTwo();
      setInfoValues((prevValues) => ({
        ...prevValues,
        [workField]: [...prevValues[workField], obj],
      }));
    } else {
      const obj = {
        name: companyName.name,
        other: jobTitle.name,
        details: details.name,
        id: uiid,
        startDate: {
          month: month,
          year: year,
        },
        endDate: {
          month: endMonth,
          year: endYear,
        },
      };
      handleButtonClickTwo();
      setInfoValues((prevValues) => ({
        ...prevValues,
        [workField]: [...prevValues[workField], obj],
      }));
    }
  }

  function handleSetInfo() {
    setInfoValues({ ...info });
  }
  function handleUpdateFormClick(uuid, workField) {
    const obj = {
      name: updateCompanyName.name,
      other: updateJobTitle.name,
      details: updateDetails.name,
      id: uuid,
      startDate: {
        month: updateMonth,
        year: updateYear,
      },
      endDate: {
        month: updateEndMonth,
        year: updateEndYear,
      },
    };

    workField.map((job) => {
      job.id === uuid ? Object.assign(job, obj) : console.log('not found');
    });

    setInfoValues({ ...info });
  }

  return (
    <div className="flex flex-wrap w-screen justify-center text-center p-8 bg-gray-200">
      <div className="page p-8 bg-white">
        <div className=" p-1 rounded shadow ">
          <Accordion
            selectionBehavior="toggle"
            selectionMode="single"
            variant="splitted"
            defaultExpandedKeys={['1']}
          >
            <AccordionItem
              key="1"
              aria-label="Personal Information"
              title="Personal Information"
            >
              <form>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-5 mb-4">
                  <Input
                    className="fullNameee"
                    type="text"
                    value={info.inputName}
                    onChange={(event) => {
                      handleInputChange(event, 'inputName');
                    }}
                    label="Full Name"
                    placeholder="David Procter"
                  />
                  <Input
                    type="email"
                    value={info.inputEmail}
                    onChange={(event) => {
                      handleInputChange(event, 'inputEmail');
                    }}
                    label="Email"
                    placeholder="davidprocter951@gmail.com"
                  />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-5 mb-4 ">
                  <Input
                    type="number"
                    value={info.contactNo}
                    onChange={(event) => {
                      handleInputChange(event, 'contactNo');
                    }}
                    label="Phone No."
                    placeholder="+923054147842"
                  />
                  <Input
                    type="text"
                    value={info.address}
                    onChange={(event) => {
                      handleInputChange(event, 'address');
                    }}
                    label="Address"
                    placeholder="221b Baker Street, Marylebone, London"
                  />
                </div>
                <Textarea
                  label="Bio"
                  value={info.bio}
                  onChange={(event) => {
                    handleInputChange(event, 'bio');
                  }}
                  placeholder="Describe yourself in one line"
                  className=" mb-5"
                />
                <Button color="primary" variant="solid">
                  Save
                </Button>
              </form>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Career">
              <AddSection field={'jobs'}></AddSection>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Education">
              <AddSection field={'educations'}></AddSection>
            </AccordionItem>
            <AccordionItem key="4" aria-label="Projects" title="Projects">
              <AddSection field={'projects'}></AddSection>
            </AccordionItem>
            <AccordionItem key="5" aria-label="Key Skills" title="Key Skills">
              <AddSkills></AddSkills>
              <div className="flex gap-4">
                <Textarea
                  label="List your key skills here"
                  className=" mb-6 h-5 w-10/12 "
                  placeholder={skill.name}
                  value={skill.name}
                  onChange={(event) => {
                    handleInputFields(event, 'skills');
                  }}
                />
                <Button
                  color="primary"
                  variant="solid"
                  className="w-0 font-extrabold"
                  onClick={() => {
                    handleFormClick(uuid(), 'skills');
                  }}
                >
                  +
                </Button>
              </div>
            </AccordionItem>
            <AccordionItem key="6" aria-label="References" title="References">
              <AddSection field={'references'}></AddSection>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="page text-center bg-white p-8 rounded shadow">
        <div className=" bg-white text-center">
          <Contact
            contactNo={info.contactNo}
            email={info.inputEmail}
            address={info.address}
            name={info.inputName}
            text={info.bio}
          ></Contact>
          <Project
            title={info.jobs}
            heading={'Professional Experiences'}
          ></Project>
          <Project title={info.educations} heading={'Education'}></Project>
          <Project title={info.projects} heading={'Projects'}></Project>
          <Skills skills={info.skills} heading={'Skills'}></Skills>
          <AddReference></AddReference>
        </div>
      </div>
    </div>
  );
}

export default App;

