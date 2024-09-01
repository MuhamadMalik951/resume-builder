import { Accordion, AccordionItem } from '@nextui-org/react';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import './App.css';
import { Input, Textarea, Button, Tooltip } from '@nextui-org/react';
import Heading from './components/heading';
import Contact from './components/contact';
import Skills from './components/skills';
import DateElement from './components/dateElements';
import Project from './components/project';

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
  const [details, setDetails] = useState({
    name: 'these are the details of my job',
  });
  const [skill, setSkill] = useState({
    name: '',
  });
  const [updateDetails, setUpdateDetails] = useState('updateddetails');

  const [selectedYear, setSelectedYear] = useState('2021');
  const [selectedYearEnd, setSelectedYearEnd] = useState('2007');
  useState('2007');
  const [selectedMonth, setSelectedMonth] = useState('May');
  const [selectedMonthEnd, setSelectedMonthEnd] = useState('March');
  useState('March');
  const [showElementTwo, setShowElementTwo] = useState(false);
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
        id: 13,
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
        name: 'The Weather App',
        id: 12,
        startDate: {
          month: selectedMonth,
          year: selectedYear,
        },
        endDate: {
          month: selectedMonthEnd,
          year: selectedYearEnd,
        },
        details:
          'This is the Weather app that Im building.',
      },
    ],
    educations: [
      {
        name: 'Punjab Group of Colleges',
        other: 'ICS',
        id: 14,
        startDate: {
          month: selectedMonth,
          year: selectedYear,
        },
        endDate: {
          month: selectedMonthEnd,
          year: selectedYearEnd,
        },
        details:
          'Exploring the field of Computer Science',
      },
      {
        name: 'University of Cambridge',
        other: 'BSc Chemistry - 1st',
        id: 15,
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
  function AddSkills() {
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
  const handleButtonClickTwo = () => {
    setShowElementTwo(!showElementTwo);
  };
  function handleInputChange(event, fieldName) {
    setInfoValues({
      ...info,
      [fieldName]: event.target.value,
    });
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

