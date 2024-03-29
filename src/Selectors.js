import React from 'react'

const GESelector = ({GE, setGE}) => (
    <select value={GE} onChange={(event) => {console.log("Selected value", event.target.value); setGE(event.target.value)}}>
        <option value="ANY">Do not filter for General Education (GE) categories</option>
        <option value="GE-1A">GE Ia: Lower Division Writing</option>
        <option value="GE-1B">GE Ib: Upper Division Writing</option>
        <option value="GE-2">GE II: Science and Technology</option>
        <option value="GE-3">GE III: Social and Behavioral Sciences</option>
        <option value="GE-4">GE IV: Arts and Humanities</option>
        <option value="GE-5A">GE Va: Quantitative Literacy (starting Fall 2012)</option>
        <option value="GE-5B">GE Vb: Formal Reasoning (starting Fall 2012)</option>
        <option value="GE-6">GE VI: Language other than English</option>
        <option value="GE-7">GE VII: Multicultural Studies</option>
        <option value="GE-8">GE VIII: International/Global Issues</option>
    </select>
)

const DeptSelector = ({Dept, setDept}) => (
    <select value={Dept} onChange={(event) => {console.log("Selected value", event.target.value); setDept(event.target.value)}}>
        <option value=" ALL">Include All Departments</option>
        <option value="AC ENG">AC ENG . . . . . .Academic English and ESL</option>
        <option value="AFAM">AFAM . . . . . . . African American Studies</option>
        <option value="ANATOMY">ANATOMY . . . .Anatomy and Neurobiology</option>
        <option value="ANESTH">ANESTH . . . . . Anesthesiology</option>
        <option value="ANTHRO">ANTHRO . . . . . Anthropology</option>
        <option value="ARABIC">ARABIC . . . . . .Arabic</option>
        <option value="ARMN">ARMN . . . . . . .Armenian (started 2018 Spg)</option>
        <option value="ART">ART . . . . . . . . .Art</option>
        <option value="ART HIS">ART HIS . . . . . .Art History</option>
        <option value="ARTS">ARTS . . . . . . . Arts</option>
        <option value="ARTSHUM">ARTSHUM . . . . Arts and Humanities</option>
        <option value="ASIANAM">ASIANAM . . . . Asian American Studies</option>
        <option value="BANA">BANA . . . . . . . Business Analytics (started 2017 SS2)</option>
        <option value="BATS">BATS . . . . . . . Biomedical and Translational Science</option>
        <option value="BIO SCI">BIO SCI . . . . . .Biological Sciences</option>
        <option value="BIOCHEM">BIOCHEM . . . . Biological Chemistry</option>
        <option value="BME">BME . . . . . . . . Biomedical Engineering</option>
        <option value="BSEMD">BSEMD . . . . . .Bio Sci &amp; Educational Media Design (until 2017 Wtr)</option>
        <option value="CAMPREC">CAMPREC . . . .Campus Recreation</option>
        <option value="CBE">CBE . . . . . . . . Chemical and Biomolecular Engineering (started 2018 Fall)</option>
        <option value="CBEMS">CBEMS . . . . . .Chemical Engr and Materials Science (until 2019 SS2)</option>
        <option value="CEM">CEM . . . . . . . . Community and Environmental Medicine</option>
        <option value="CHC/LAT">CHC/LAT . . . . . Chicano Latino</option>
        <option value="CHEM">CHEM . . . . . . .Chemistry</option>
        <option value="CHINESE">CHINESE . . . . .Chinese</option>
        <option value="CLASSIC">CLASSIC . . . . .Classics</option>
        <option value="CLT&amp;THY">CLT&amp;THY . . . . .Culture &amp; Theory</option>
        <option value="COGS">COGS . . . . . . . Cognitive Sciences  (started 2016 Fall)</option>
        <option value="COM LIT">COM LIT . . . . . Comparative Literature</option>
        <option value="COMPSCI">COMPSCI . . . . Computer Science</option>
        <option value="CRITISM">CRITISM . . . . . Criticism</option>
        <option value="CRM/LAW">CRM/LAW . . . . Criminology, Law and Society</option>
        <option value="CSE">CSE . . . . . . . . Computer Science and Engineering</option>
        <option value="DANCE">DANCE . . . . . . Dance</option>
        <option value="DERM">DERM . . . . . . .Dermatology</option>
        <option value="DEV BIO">DEV BIO . . . . . Developmental and Cell Biology</option>
        <option value="DRAMA">DRAMA . . . . . .Drama</option>
        <option value="E ASIAN">E ASIAN . . . . . East Asian Languages and Literatures (until 2019 SS2)</option>
        <option value="EARTHSS">EARTHSS . . . . Earth System Science</option>
        <option value="EAS">EAS . . . . . . . . East Asian Studies (started 2019 Fall)</option>
        <option value="ECO EVO">ECO EVO . . . . Ecology and Evolutionary Biology</option>
        <option value="ECON">ECON . . . . . . . Economics</option>
        <option value="ECPS">ECPS . . . . . . . Embedded and Cyber-Physical Systems</option>
        <option value="ED AFF">ED AFF . . . . . .Educational Affairs (Sch of Med)</option>
        <option value="EDUC">EDUC . . . . . . . Education</option>
        <option value="EECS">EECS . . . . . . . Electrical Engineering &amp; Computer Science</option>
        <option value="EHS">EHS . . . . . . . . Environmental Health Sciences</option>
        <option value="ENGLISH">ENGLISH . . . . .English</option>
        <option value="ENGR">ENGR . . . . . . . Engineering</option>
        <option value="ENGRCEE">ENGRCEE . . . .Engineering, Civil and Environmental</option>
        <option value="ENGRMAE">ENGRMAE . . . .Engineering, Mechanical and Aerospace</option>
        <option value="ENGRMSE">ENGRMSE . . . .Materials Science and Engineering</option>
        <option value="EPIDEM">EPIDEM . . . . . .Epidemiology</option>
        <option value="ER MED">ER MED . . . . . Emergency Medicine</option>
        <option value="EURO ST">EURO ST . . . . .European Studies</option>
        <option value="FAM MED">FAM MED . . . . Family Medicine</option>
        <option value="FIN">FIN . . . . . . . . . Finance (started 2017 Fall)</option>
        <option value="FLM&amp;MDA">FLM&amp;MDA . . . .Film and Media Studies</option>
        <option value="FRENCH">FRENCH . . . . . French</option>
        <option value="GEN&amp;SEX">GEN&amp;SEX . . . . Gender and Sexuality Studies (started 2014 Fall)</option>
        <option value="GERMAN">GERMAN . . . . .German</option>
        <option value="GLBL ME">GLBL ME . . . . .Global Middle East Studies (started 2016 Fall)</option>
        <option value="GLBLCLT">GLBLCLT . . . . .Global Cultures</option>
        <option value="GREEK">GREEK . . . . . . Greek</option>
        <option value="HEBREW">HEBREW . . . . .Hebrew</option>
        <option value="HINDI">HINDI . . . . . . . .Hindi</option>
        <option value="HISTORY">HISTORY . . . . .History</option>
        <option value="HUMAN">HUMAN . . . . . .Humanities</option>
        <option value="HUMARTS">HUMARTS . . . . Humanities and Arts</option>
        <option value="I&amp;C SCI">I&amp;C SCI . . . . . . Information and Computer Science</option>
        <option value="IN4MATX">IN4MATX . . . . . Informatics</option>
        <option value="INNO">INNO . . . . . . . .Masters of Innovation and Entrepreneurship (started 2019 Fall)</option>
        <option value="INT MED">INT MED . . . . . Internal Medicine</option>
        <option value="INTL ST">INTL ST . . . . . . International Studies</option>
        <option value="ITALIAN">ITALIAN . . . . . .Italian</option>
        <option value="JAPANSE">JAPANSE . . . . Japanese</option>
        <option value="KOREAN">KOREAN . . . . .Korean</option>
        <option value="LATIN">LATIN . . . . . . . Latin</option>
        <option value="LAW">LAW . . . . . . . . Law</option>
        <option value="LINGUIS">LINGUIS . . . . . .Linguistics (until 2019 SS2)</option>
        <option value="LIT JRN">LIT JRN . . . . . . Literary Journalism</option>
        <option value="LPS">LPS . . . . . . . . .Logic and Philosophy of Science</option>
        <option value="LSCI">LSCI . . . . . . . . Language Science (started 2019 Fall)</option>
        <option value="M&amp;MG">M&amp;MG . . . . . . .Microbiology and Molecular Genetics</option>
        <option value="MATH">MATH . . . . . . . Mathematics</option>
        <option value="MED">MED . . . . . . . . Medicine</option>
        <option value="MED ED">MED ED . . . . . Medical Education</option>
        <option value="MED HUM">MED HUM . . . . Medical Humanities (started 2016 Fall)</option>
        <option value="MGMT">MGMT . . . . . . .Management</option>
        <option value="MGMT EP">MGMT EP . . . . Executive MBA</option>
        <option value="MGMT FE">MGMT FE . . . . Fully Employed MBA</option>
        <option value="MGMT HC">MGMT HC . . . . Health Care MBA</option>
        <option value="MGMTMBA">MGMTMBA . . . Management MBA</option>
        <option value="MGMTPHD">MGMTPHD . . . .Management PhD</option>
        <option value="MIC BIO">MIC BIO . . . . . .Microbiology</option>
        <option value="MOL BIO">MOL BIO . . . . . Molecular Biology and Biochemistry</option>
        <option value="MPAC">MPAC . . . . . . .Accounting</option>
        <option value="MUSIC">MUSIC . . . . . . .Music</option>
        <option value="NET SYS">NET SYS . . . . .Networked Systems</option>
        <option value="NEURBIO">NEURBIO . . . . .Neurobiology and Behavior</option>
        <option value="NEUROL">NEUROL . . . . . Neurology</option>
        <option value="NUR SCI">NUR SCI . . . . . Nursing Science</option>
        <option value="OB/GYN">OB/GYN . . . . . Obstetrics and Gynecology</option>
        <option value="OPHTHAL">OPHTHAL . . . . Ophthalmology</option>
        <option value="PATH">PATH . . . . . . . Pathology and Laboratory Medicine</option>
        <option value="PED GEN">PED GEN . . . . Pediatrics Genetics</option>
        <option value="PEDS">PEDS . . . . . . . Pediatrics</option>
        <option value="PERSIAN">PERSIAN . . . . .Persian</option>
        <option value="PHARM">PHARM . . . . . .Medical Pharmacology</option>
        <option value="PHILOS">PHILOS . . . . . .Philosophy</option>
        <option value="PHRMSCI">PHRMSCI . . . . Pharmaceutical Sciences</option>
        <option value="PHY SCI">PHY SCI . . . . . Physical Science</option>
        <option value="PHYSICS">PHYSICS . . . . .Physics</option>
        <option value="PHYSIO">PHYSIO . . . . . .Physiology and Biophysics</option>
        <option value="PLASTIC">PLASTIC . . . . . Plastic Surgery (started 2014 Fall)</option>
        <option value="PM&amp;R">PM&amp;R . . . . . . .Physical Medicine and Rehabilitation</option>
        <option value="POL SCI">POL SCI . . . . . Political Science</option>
        <option value="PORTUG">PORTUG . . . . . Portuguese</option>
        <option value="PP&amp;D">PP&amp;D . . . . . . . Planning, Policy, and Design (until 2018 SS2; see UPPP)</option>
        <option value="PSCI">PSCI . . . . . . . .Psychological Science (started 2019 Fall)</option>
        <option value="PSY BEH">PSY BEH . . . . .Psychology and Social Behavior (until 2019 SS2)</option>
        <option value="PSYCH">PSYCH . . . . . . Psychology</option>
        <option value="PUB POL">PUB POL . . . . .Public Policy</option>
        <option value="PUBHLTH">PUBHLTH . . . . Public Health</option>
        <option value="RADIO">RADIO . . . . . . .Radiology</option>
        <option value="REL STD">REL STD . . . . . Religious Studies</option>
        <option value="ROTC">ROTC . . . . . . . Reserve Officers' Training Corps</option>
        <option value="RUSSIAN">RUSSIAN . . . . .Russian</option>
        <option value="SOC SCI">SOC SCI . . . . . Social Science</option>
        <option value="SOCECOL">SOCECOL . . . . Social Ecology</option>
        <option value="SOCIOL">SOCIOL . . . . . .Sociology</option>
        <option value="SPANISH">SPANISH . . . . .Spanish</option>
        <option value="SPPS">SPPS . . . . . . . Social Policy &amp; Public Service (started 2016 Wtr)</option>
        <option value="STATS">STATS . . . . . . .Statistics</option>
        <option value="SURGERY">SURGERY . . . .Surgery</option>
        <option value="SWE">SWE . . . . . . . .Software Engineering (started 2019 Fall)</option>
        <option value="TAGALOG">TAGALOG . . . . Tagalog</option>
        <option value="TOX">TOX . . . . . . . . .Toxicology</option>
        <option value="UCDC">UCDC . . . . . . . UC Washington DC</option>
        <option value="UNI AFF">UNI AFF . . . . . .University Affairs</option>
        <option value="UNI STU">UNI STU . . . . . .University Studies</option>
        <option value="UPPP">UPPP . . . . . . . Urban Planning and Public Policy (started 2018 Fall)</option>
        <option value="VIETMSE">VIETMSE . . . . .Vietnamese</option>
        <option value="VIS STD">VIS STD . . . . . .Visual Studies</option>
        <option value="WOMN ST">WOMN ST . . . . Women's Studies (until 2014 SS2)</option>
        <option value="WRITING">WRITING . . . . . Writing</option>
    </select>
)

const YearSelector = ({Year, setYear}) => (
    <select value={Year} onChange={(event) => {console.log("Selected value", event.target.value); setYear(event.target.value)}}>
        <option value="2020-03">2020  Winter Quarter</option>
        <option value="2019-92">2019  Fall Quarter</option>
        <option value="2019-76">2019  Summer Session 2</option>
        <option value="2019-51">2019  Summer Qtr (COM)</option>
        <option value="2019-39">2019  10-wk Summer</option>
        <option value="2019-25">2019  Summer Session 1</option>
        <option value="2019-14">2019  Spring Quarter</option>
        <option value="2019-03">2019  Winter Quarter</option>
    </select>
)

export {
    GESelector,
    YearSelector,
    DeptSelector
}