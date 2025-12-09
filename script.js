// Interest and Skill Options
const interestOptions = [
    { value: 'technology', label: 'Technology & Computers' },
    { value: 'creative', label: 'Creative & Artistic' },
    { value: 'people', label: 'Working with People' },
    { value: 'analytical', label: 'Analytical & Research' },
    { value: 'helping', label: 'Helping Others' },
    { value: 'business', label: 'Business & Finance' },
    { value: 'problem-solving', label: 'Problem Solving' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'outdoors', label: 'Outdoors & Nature' },
    { value: 'competitive', label: 'Competitive' },
    { value: 'hands-on', label: 'Hands-On & Building' },
    { value: 'teaching', label: 'Teaching & Training' },
    { value: 'writing', label: 'Writing & Communication' },
    { value: 'design', label: 'Design & Visuals' },
    { value: 'science', label: 'Science & Research' },
    { value: 'law', label: 'Law & Justice' },
    { value: 'entertainment', label: 'Entertainment & Media' },
    { value: 'sales', label: 'Sales & Persuasion' },
    { value: 'food', label: 'Food & Culinary' },
    { value: 'construction', label: 'Construction & Trades' },
    { value: 'transportation', label: 'Transportation & Logistics' },
    { value: 'sports', label: 'Sports & Fitness' }
];

const skillOptions = [
    { value: 'communication', label: 'Communication' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'technical', label: 'Technical Skills' },
    { value: 'creative', label: 'Creativity' },
    { value: 'analytical', label: 'Analytical Thinking' },
    { value: 'programming', label: 'Programming' }
];

// Career Database
const careers = [
    {
        id: 1,
        title: "Software Developer",
        description: "Design and create software applications and systems",
        detailedDescription: "Software developers are the creative minds behind computer programs and applications. They design, develop, test, and maintain software solutions that power everything from mobile apps to complex enterprise systems. Developers work closely with stakeholders to understand requirements, write clean and efficient code, debug issues, and continuously improve software performance. This role requires strong problem-solving abilities, attention to detail, and the ability to learn new technologies quickly.",
        topCompanies: ["Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix", "Adobe", "Salesforce", "Oracle", "IBM"],
        interests: ["technology", "problem-solving", "creative"],
        skills: ["programming", "analytical", "technical"],
        education: "bachelor",
        workStyle: ["independent", "team"],
        salaryRange: "$70,000 - $120,000",
        salaryMin: 70000,
        growth: "22%",
        retention: "85%",
        qualifications: [
            "Bachelor's degree in Computer Science, Software Engineering, or related field",
            "Proficiency in programming languages (Java, Python, C++, JavaScript, etc.)",
            "Understanding of data structures, algorithms, and software design patterns",
            "Experience with version control systems (Git, SVN)",
            "Knowledge of software development methodologies (Agile, Scrum)",
            "Strong debugging and problem-solving skills",
            "Ability to work collaboratively in team environments",
            "Portfolio of completed projects or contributions to open-source software (preferred)"
        ],
        reviews: [
            { name: "Sarah M.", role: "Senior Developer", rating: 5, comment: "Love the creative problem-solving and continuous learning. Great salary and remote work options. Work-life balance can be challenging during sprint deadlines." },
            { name: "Marcus T.", role: "Full Stack Developer", rating: 4, comment: "Exciting projects and cutting-edge technologies. The constant learning keeps things fresh, though it can be overwhelming at times. Excellent career growth opportunities." },
            { name: "Jennifer K.", role: "Software Engineer", rating: 5, comment: "High pay, flexible hours, and the satisfaction of building products used by millions. The tech industry moves fast, so staying current requires dedication." }
        ],
        tasks: ["Write and test code", "Debug programs", "Design software solutions"]
    },
    {
        id: 2,
        title: "Data Scientist",
        description: "Analyze complex data to help organizations make decisions",
        detailedDescription: "Data scientists transform raw data into actionable insights that drive business strategy and decision-making. They collect, process, and analyze large datasets using statistical methods, machine learning algorithms, and data visualization tools. Data scientists identify trends, build predictive models, and communicate findings to stakeholders through compelling visualizations and reports. This role combines expertise in mathematics, statistics, programming, and business acumen to solve complex real-world problems.",
        topCompanies: ["Amazon", "Google", "Meta", "Microsoft", "Netflix", "Airbnb", "Uber", "Tesla", "JPMorgan Chase", "Capital One"],
        interests: ["technology", "analytical", "problem-solving"],
        skills: ["analytical", "technical", "programming"],
        education: "master",
        workStyle: ["independent", "team"],
        salaryRange: "$80,000 - $140,000",
        salaryMin: 80000,
        growth: "36%",
        retention: "82%",
        qualifications: [
            "Master's degree in Data Science, Statistics, Mathematics, or Computer Science",
            "Strong programming skills in Python or R",
            "Expertise in statistical analysis and machine learning techniques",
            "Experience with data visualization tools (Tableau, Power BI, matplotlib)",
            "Proficiency in SQL and database management",
            "Knowledge of big data technologies (Hadoop, Spark) is a plus",
            "Excellent communication skills to explain complex findings to non-technical audiences",
            "3+ years of experience in data analysis or related field (for senior roles)"
        ],
        reviews: [
            { name: "David L.", role: "Senior Data Scientist", rating: 5, comment: "Incredibly rewarding to see your models drive real business decisions. Great pay and interesting problems to solve. Sometimes stakeholders don't understand the complexity involved." },
            { name: "Priya S.", role: "Data Scientist", rating: 4, comment: "Perfect blend of math, coding, and business strategy. The work is intellectually stimulating and companies value your insights. Can be frustrating when data quality is poor." },
            { name: "James R.", role: "Lead Data Scientist", rating: 5, comment: "High demand for this role means excellent compensation and job security. I love discovering patterns in data. The field evolves rapidly so continuous learning is essential." }
        ],
        tasks: ["Analyze data patterns", "Create predictive models", "Present insights"]
    },
    {
        id: 3,
        title: "Marketing Manager",
        description: "Develop and implement marketing strategies",
        detailedDescription: "Marketing managers are responsible for planning, executing, and measuring marketing campaigns that promote products, services, or brands. They conduct market research to understand customer needs, develop comprehensive marketing strategies, manage budgets, and oversee creative teams. Marketing managers analyze campaign performance metrics, adjust strategies based on data, and collaborate with sales, product, and creative departments to achieve business objectives. Success in this role requires creativity, strategic thinking, and strong leadership abilities.",
        topCompanies: ["Procter & Gamble", "Nike", "Coca-Cola", "Unilever", "L'Oréal", "PepsiCo", "Apple", "Amazon", "HubSpot", "Salesforce"],
        interests: ["creative", "people", "business"],
        skills: ["communication", "creative", "leadership"],
        education: "bachelor",
        workStyle: ["team", "fast-paced"],
        salaryRange: "$65,000 - $110,000",
        salaryMin: 65000,
        growth: "10%",
        retention: "72%",
        qualifications: [
            "Bachelor's degree in Marketing, Business Administration, or Communications",
            "5+ years of marketing experience, including 2+ years in a management role",
            "Strong understanding of digital marketing channels (SEO, SEM, social media, email)",
            "Experience with marketing analytics and CRM platforms",
            "Proven track record of successful campaign management",
            "Excellent written and verbal communication skills",
            "Budget management and project coordination experience",
            "Creative thinking with strong analytical abilities"
        ],
        reviews: [
            { name: "Emily C.", role: "Marketing Manager", rating: 4, comment: "Creative and dynamic role where no two days are the same. Love seeing campaigns come to life and drive results. Can be stressful managing multiple projects and stakeholders." },
            { name: "Alex P.", role: "Digital Marketing Manager", rating: 4, comment: "Great opportunity to be creative while using data to measure success. Fast-paced environment keeps you on your toes. Work-life balance can suffer during major launches." },
            { name: "Nicole W.", role: "Brand Manager", rating: 5, comment: "Exciting to shape how customers perceive our brand. Good salary and room for advancement. The pressure to deliver ROI is constant but rewarding when campaigns succeed." }
        ],
        tasks: ["Plan campaigns", "Manage teams", "Analyze market trends"]
    },
    {
        id: 4,
        title: "Nurse Practitioner",
        description: "Provide advanced nursing care and treatment",
        detailedDescription: "Nurse practitioners are advanced practice registered nurses who provide comprehensive healthcare services to patients. They diagnose and treat acute and chronic conditions, order and interpret diagnostic tests, prescribe medications, and develop treatment plans. NPs work independently or collaboratively with physicians to deliver high-quality patient care. They focus on disease prevention, health education, and patient wellness while maintaining detailed medical records. This rewarding career combines clinical expertise with compassionate patient care.",
        topCompanies: ["Mayo Clinic", "Cleveland Clinic", "Kaiser Permanente", "Johns Hopkins Hospital", "Mass General Brigham", "HCA Healthcare", "CVS Health", "UnitedHealth Group", "Walgreens", "Humana"],
        interests: ["helping", "people", "healthcare"],
        skills: ["communication", "technical", "leadership"],
        education: "master",
        workStyle: ["team", "fast-paced"],
        salaryRange: "$95,000 - $125,000",
        salaryMin: 95000,
        growth: "45%",
        retention: "78%",
        qualifications: [
            "Master's degree in Nursing (MSN) or Doctor of Nursing Practice (DNP)",
            "Current RN license and board certification as a Nurse Practitioner",
            "Completed accredited nurse practitioner program",
            "National certification in area of specialty (Family, Pediatric, Adult-Gerontology, etc.)",
            "State-specific prescriptive authority and DEA license",
            "Strong clinical assessment and diagnostic skills",
            "Excellent patient communication and bedside manner",
            "2+ years of RN experience before entering NP program (typically required)"
        ],
        reviews: [
            { name: "Karen B.", role: "Family Nurse Practitioner", rating: 5, comment: "Incredibly fulfilling to provide comprehensive care to patients. Great autonomy and respect. The education is rigorous but worth it. Long hours can be tiring." },
            { name: "Michael D.", role: "Acute Care NP", rating: 5, comment: "Perfect balance of independence and collaboration with physicians. Excellent salary and high demand for NPs. Emotional toll of patient care is real but manageable." },
            { name: "Lisa H.", role: "Pediatric NP", rating: 4, comment: "Love building relationships with families and making a difference in children's health. Great job security and benefits. Dealing with insurance companies can be frustrating." }
        ],
        tasks: ["Diagnose conditions", "Prescribe treatments", "Patient care"]
    },
    {
        id: 5,
        title: "Financial Analyst",
        description: "Evaluate financial data to guide business decisions",
        detailedDescription: "Financial analysts evaluate financial data, market trends, and economic conditions to provide insights that guide investment and business decisions. They prepare detailed financial reports, build financial models, forecast future performance, and make recommendations to management. Analysts assess the financial health of companies, evaluate investment opportunities, and help organizations optimize their financial strategies. This role requires strong analytical skills, attention to detail, and the ability to translate complex financial information into actionable recommendations.",
        topCompanies: ["Goldman Sachs", "JPMorgan Chase", "Morgan Stanley", "Bank of America", "BlackRock", "Vanguard", "Fidelity Investments", "Citigroup", "Wells Fargo", "Deloitte"],
        interests: ["analytical", "business", "problem-solving"],
        skills: ["analytical", "technical", "communication"],
        education: "bachelor",
        workStyle: ["independent", "structured"],
        salaryRange: "$60,000 - $95,000",
        salaryMin: 60000,
        growth: "9%",
        retention: "74%",
        qualifications: [
            "Bachelor's degree in Finance, Accounting, Economics, or Business Administration",
            "Strong proficiency in Microsoft Excel and financial modeling",
            "Understanding of financial statements, ratios, and valuation methods",
            "Experience with financial analysis software and databases (Bloomberg, FactSet)",
            "Knowledge of GAAP and financial regulations",
            "CFA (Chartered Financial Analyst) designation is highly valued",
            "Strong quantitative and analytical skills",
            "Excellent written and verbal communication abilities"
        ],
        reviews: [
            { name: "Robert F.", role: "Financial Analyst", rating: 4, comment: "Solid career path with good earning potential. Love the analytical challenges and seeing my recommendations implemented. Hours can be long, especially during earnings season." },
            { name: "Amanda Y.", role: "Senior Financial Analyst", rating: 4, comment: "Intellectually stimulating work with real business impact. Good benefits and room for advancement. The pressure during quarter-end can be intense." },
            { name: "Chris N.", role: "Investment Analyst", rating: 5, comment: "Exciting to research companies and markets. Great stepping stone to higher finance roles. Work-life balance improves as you become more efficient." }
        ],
        tasks: ["Analyze financial data", "Create reports", "Forecast trends"]
    },
    {
        id: 6,
        title: "Graphic Designer",
        description: "Create visual concepts to communicate ideas",
        detailedDescription: "Graphic designers create visual content that communicates messages, tells stories, and engages audiences. They design everything from logos and branding materials to websites, advertisements, and publications. Designers work with clients to understand project requirements, develop creative concepts, select colors and typography, and produce final designs across various media. This career combines artistic creativity with technical software skills and requires staying current with design trends and technologies.",
        topCompanies: ["Adobe", "Apple", "Nike", "Google", "Meta", "Pentagram", "IDEO", "Landor", "Wolff Olins", "Ogilvy"],
        interests: ["creative", "artistic", "technology"],
        skills: ["creative", "technical", "communication"],
        education: "bachelor",
        workStyle: ["independent", "team"],
        salaryRange: "$45,000 - $75,000",
        salaryMin: 45000,
        growth: "3%",
        retention: "68%",
        qualifications: [
            "Bachelor's degree in Graphic Design, Visual Arts, or related field",
            "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
            "Strong portfolio demonstrating design skills and creativity",
            "Understanding of typography, color theory, and layout principles",
            "Experience with web design and UI/UX principles",
            "Knowledge of print and digital production processes",
            "Ability to work on multiple projects and meet tight deadlines",
            "Strong communication and client management skills"
        ],
        reviews: [
            { name: "Tyler J.", role: "Senior Graphic Designer", rating: 4, comment: "Love the creative freedom and variety of projects. Seeing your designs in the real world is amazing. Client revisions can be endless, and freelance work is inconsistent." },
            { name: "Rachel G.", role: "Brand Designer", rating: 4, comment: "Perfect for creative people who also enjoy technology. Portfolio development is crucial. Pay can be lower compared to tech roles but very fulfilling work." },
            { name: "Kevin S.", role: "Art Director", rating: 5, comment: "Incredibly rewarding when a campaign succeeds. Great creative teams and collaborative environment. Tight deadlines can be stressful but you learn to manage them." }
        ],
        tasks: ["Design layouts", "Create graphics", "Collaborate with clients"]
    },
    {
        id: 7,
        title: "Teacher",
        description: "Educate students in various subjects",
        detailedDescription: "Teachers inspire and educate students, helping them develop knowledge, critical thinking skills, and a love of learning. They plan and deliver engaging lessons, assess student progress, provide individualized support, and create inclusive classroom environments. Teachers collaborate with colleagues, communicate with parents, and participate in professional development. This impactful career requires patience, creativity, strong communication skills, and a genuine passion for helping students succeed academically and personally.",
        topCompanies: ["NYC Department of Education", "Los Angeles Unified School District", "Chicago Public Schools", "KIPP", "Teach For America", "Achievement First", "Success Academy", "Pearson", "McGraw-Hill", "Scholastic"],
        interests: ["helping", "people", "creative"],
        skills: ["communication", "leadership", "creative"],
        education: "bachelor",
        workStyle: ["team", "structured"],
        salaryRange: "$45,000 - $70,000",
        salaryMin: 45000,
        growth: "8%",
        retention: "65%",
        qualifications: [
            "Bachelor's degree in Education or specific subject area with teaching certification",
            "Valid state teaching license/certification",
            "Completion of student teaching or supervised teaching experience",
            "Strong classroom management and organizational skills",
            "Ability to develop engaging lesson plans aligned with curriculum standards",
            "Patience and adaptability to meet diverse student needs",
            "Excellent communication skills with students, parents, and colleagues",
            "Master's degree in Education (often required for advancement or higher pay)"
        ],
        reviews: [
            { name: "Patricia L.", role: "High School Teacher", rating: 5, comment: "Most rewarding job seeing students succeed and grow. Great benefits and summers off. Salary could be higher, and administrative tasks can be overwhelming at times." },
            { name: "Jordan M.", role: "Elementary Teacher", rating: 4, comment: "Love making a difference in young lives every day. The emotional connection with students is special. Budget constraints and large class sizes are challenging." },
            { name: "Daniel K.", role: "Middle School Teacher", rating: 4, comment: "No two days are the same - always engaging. Good job security and pension benefits. Work often extends beyond school hours with grading and planning." }
        ],
        tasks: ["Develop lessons", "Teach students", "Assess progress"]
    },
    {
        id: 8,
        title: "Civil Engineer",
        description: "Design and oversee infrastructure projects",
        detailedDescription: "Civil engineers design, build, and maintain the infrastructure that forms the foundation of modern society, including roads, bridges, buildings, water systems, and transportation networks. They analyze survey reports, assess environmental impact, create detailed plans using CAD software, and oversee construction projects to ensure quality and safety standards. Civil engineers solve complex technical challenges, manage budgets and timelines, and work with diverse teams to bring projects from concept to completion.",
        topCompanies: ["AECOM", "Jacobs Engineering", "Bechtel", "Fluor Corporation", "Kiewit", "HDR", "Parsons", "CH2M Hill", "Black & Veatch", "Stantec"],
        interests: ["problem-solving", "technology", "outdoors"],
        skills: ["technical", "analytical", "leadership"],
        education: "bachelor",
        workStyle: ["team", "structured"],
        salaryRange: "$65,000 - $105,000",
        salaryMin: 65000,
        growth: "8%",
        retention: "80%",
        qualifications: [
            "Bachelor's degree in Civil Engineering from an ABET-accredited program",
            "Professional Engineering (PE) license (required for senior positions)",
            "Proficiency in CAD software (AutoCAD, Civil 3D) and engineering analysis tools",
            "Strong understanding of structural analysis, geotechnics, and materials",
            "Knowledge of building codes, regulations, and safety standards",
            "Project management and leadership abilities",
            "EIT (Engineer in Training) certification immediately after graduation",
            "4+ years of progressive engineering experience for PE licensure"
        ],
        reviews: [
            { name: "Brian H.", role: "Civil Engineer", rating: 5, comment: "Incredibly satisfying to see infrastructure projects you designed actually built. Good salary and job stability. PE license takes time but opens many doors." },
            { name: "Michelle S.", role: "Structural Engineer", rating: 4, comment: "Love the combination of field work and office design work. Projects can last years which is exciting. Deadlines can be tight when working with construction schedules." },
            { name: "Antonio R.", role: "Transportation Engineer", rating: 5, comment: "Great career for problem-solvers who want to improve communities. Diverse project types keep it interesting. Dealing with multiple stakeholders requires patience." }
        ],
        tasks: ["Design structures", "Manage projects", "Ensure safety"]
    },
    {
        id: 9,
        title: "Human Resources Manager",
        description: "Oversee recruiting, training, and employee relations",
        detailedDescription: "Human Resources managers develop and implement strategies to attract, retain, and develop talent within organizations. They oversee recruitment processes, manage employee relations, administer compensation and benefits programs, and ensure compliance with employment laws. HR managers handle workplace conflicts, foster positive company culture, develop training programs, and provide strategic guidance to leadership on workforce planning. This role requires strong interpersonal skills, business acumen, and the ability to balance employee needs with organizational goals.",
        topCompanies: ["Google", "Microsoft", "Amazon", "Apple", "Salesforce", "LinkedIn", "Workday", "ADP", "Paychex", "Ultimate Software"],
        interests: ["people", "business", "helping"],
        skills: ["communication", "leadership", "analytical"],
        education: "bachelor",
        workStyle: ["team", "structured"],
        salaryRange: "$70,000 - $115,000",
        salaryMin: 70000,
        growth: "9%",
        retention: "76%",
        qualifications: [
            "Bachelor's degree in Human Resources, Business Administration, or related field",
            "5+ years of HR experience, including 2+ years in a management role",
            "PHR (Professional in Human Resources) or SHRM-CP certification preferred",
            "Strong knowledge of employment law and HR regulations",
            "Experience with HRIS systems and applicant tracking software",
            "Excellent conflict resolution and employee relations skills",
            "Strategic thinking and business partnership abilities",
            "Strong organizational and multitasking capabilities"
        ],
        reviews: [
            { name: "Sharon T.", role: "HR Manager", rating: 4, comment: "Fulfilling to help employees develop and resolve workplace issues. Good work-life balance. Dealing with difficult personalities and layoffs can be emotionally draining." },
            { name: "Carlos M.", role: "Talent Acquisition Manager", rating: 5, comment: "Love connecting great candidates with opportunities. Strategic role with real business impact. High-volume hiring periods can be stressful." },
            { name: "Angela W.", role: "HR Business Partner", rating: 4, comment: "Great mix of people skills and business strategy. Respected position with growth opportunities. Confidentiality requirements can feel isolating at times." }
        ],
        tasks: ["Recruit talent", "Manage policies", "Resolve conflicts"]
    },
    {
        id: 10,
        title: "Physical Therapist",
        description: "Help patients recover movement and manage pain",
        detailedDescription: "Physical therapists help patients recover from injuries, manage chronic conditions, and improve mobility through evidence-based therapeutic interventions. They evaluate patients' physical abilities, develop personalized treatment plans, and use exercises, manual therapy, and specialized equipment to restore function and reduce pain. PTs educate patients on injury prevention, track progress, and collaborate with other healthcare professionals to optimize patient outcomes. This rewarding career combines clinical expertise with hands-on patient care.",
        topCompanies: ["ATI Physical Therapy", "Select Medical", "Athletico Physical Therapy", "Concentra", "Professional Physical Therapy", "BenchMark Physical Therapy", "Pivot Physical Therapy", "U.S. Physical Therapy", "Kaiser Permanente", "Mayo Clinic"],
        interests: ["helping", "people", "healthcare"],
        skills: ["communication", "technical", "leadership"],
        education: "doctorate",
        workStyle: ["team", "independent"],
        salaryRange: "$75,000 - $95,000",
        salaryMin: 75000,
        growth: "17%",
        retention: "81%",
        qualifications: [
            "Doctor of Physical Therapy (DPT) degree from an accredited program",
            "State licensure to practice as a physical therapist",
            "Passed the National Physical Therapy Examination (NPTE)",
            "Strong knowledge of anatomy, physiology, and biomechanics",
            "Clinical experience through rotations in various healthcare settings",
            "Excellent manual therapy and assessment skills",
            "Strong patient communication and motivational abilities",
            "Specialized certifications in areas like sports, orthopedics, or neurology (optional but valuable)"
        ],
        reviews: [
            { name: "Dr. Thomas B.", role: "Physical Therapist", rating: 5, comment: "Extremely rewarding watching patients regain mobility and independence. Excellent job outlook and pay. DPT program is demanding and student loans can be significant." },
            { name: "Maria C.", role: "Orthopedic PT", rating: 5, comment: "Perfect blend of hands-on work and patient relationships. Flexible scheduling options. Physically demanding job that can be tiring by end of day." },
            { name: "Steven L.", role: "Sports PT", rating: 4, comment: "Love working with athletes and active patients. Great professional respect. Insurance paperwork is tedious but necessary part of the job." }
        ],
        tasks: ["Assess patients", "Create treatment plans", "Track progress"]
    },
    {
        id: 11,
        title: "Accountant",
        description: "Prepare and examine financial records",
        detailedDescription: "Accountants manage financial records, ensure compliance with tax laws and regulations, and provide insights that help organizations make informed financial decisions. They prepare financial statements, conduct audits, process tax returns, and analyze financial data to identify trends and opportunities for improvement. Accountants work across various industries and may specialize in areas like tax, audit, forensic accounting, or management accounting. This career requires meticulous attention to detail, ethical integrity, and strong analytical abilities.",
        topCompanies: ["Deloitte", "PwC (PricewaterhouseCoopers)", "EY (Ernst & Young)", "KPMG", "Grant Thornton", "RSM", "BDO", "Crowe", "Moss Adams", "Baker Tilly"],
        interests: ["analytical", "business", "structured"],
        skills: ["analytical", "technical", "communication"],
        education: "bachelor",
        workStyle: ["independent", "structured"],
        salaryRange: "$55,000 - $85,000",
        salaryMin: 55000,
        growth: "6%",
        retention: "77%",
        qualifications: [
            "Bachelor's degree in Accounting, Finance, or related field",
            "CPA (Certified Public Accountant) license strongly preferred",
            "150 credit hours of education (required for CPA in most states)",
            "Proficiency in accounting software (QuickBooks, SAP) and Excel",
            "Strong understanding of GAAP, tax regulations, and financial reporting",
            "Analytical skills and attention to detail",
            "Ability to work with numbers and meet strict deadlines",
            "Internship or entry-level experience in accounting"
        ],
        reviews: [
            { name: "Gregory P.", role: "Senior Accountant", rating: 4, comment: "Stable career with clear advancement path. CPA opens many doors. Tax season is brutal with long hours, but off-season is more balanced." },
            { name: "Stephanie K.", role: "Staff Accountant", rating: 4, comment: "Good pay and benefits, especially at Big 4 firms. Work is detail-oriented which I enjoy. Can feel repetitive during certain periods." },
            { name: "Raymond D.", role: "Tax Accountant", rating: 5, comment: "Satisfying to help clients save money and stay compliant. Constant learning with tax law changes. Busy season requires sacrifice but good compensation." }
        ],
        tasks: ["Prepare taxes", "Audit records", "Ensure compliance"]
    },
    {
        id: 12,
        title: "UX Designer",
        description: "Design user-friendly digital experiences",
        detailedDescription: "UX (User Experience) designers create intuitive, accessible, and enjoyable digital products by understanding user needs and behaviors. They conduct user research, develop personas and user journeys, create wireframes and prototypes, and collaborate with developers and stakeholders to bring designs to life. UX designers continuously test and iterate on designs based on user feedback and analytics. This role combines psychology, design thinking, and technical skills to solve real user problems and improve product usability.",
        topCompanies: ["Apple", "Google", "Meta", "Amazon", "Adobe", "Microsoft", "Airbnb", "Spotify", "Netflix", "Uber"],
        interests: ["creative", "technology", "people"],
        skills: ["creative", "technical", "communication"],
        education: "bachelor",
        workStyle: ["team", "independent"],
        salaryRange: "$65,000 - $110,000",
        salaryMin: 65000,
        growth: "13%",
        retention: "79%",
        qualifications: [
            "Bachelor's degree in Design, Human-Computer Interaction, or related field",
            "Strong portfolio demonstrating UX design process and completed projects",
            "Proficiency in design tools (Figma, Sketch, Adobe XD)",
            "Experience with user research methods and usability testing",
            "Understanding of information architecture and interaction design",
            "Knowledge of accessibility standards and responsive design principles",
            "Strong communication and collaboration skills",
            "Basic understanding of HTML/CSS is beneficial"
        ],
        reviews: [
            { name: "Olivia N.", role: "UX Designer", rating: 5, comment: "Love advocating for users and solving real problems. Great salary and remote opportunities. Balancing user needs with business goals can be tricky." },
            { name: "Derek W.", role: "Senior UX Designer", rating: 5, comment: "Perfect mix of creativity, psychology, and technology. Seeing users benefit from your designs is rewarding. Stakeholder management is crucial skill." },
            { name: "Megan F.", role: "Product Designer", rating: 4, comment: "Exciting field with high demand. Collaborative work with developers and PMs. Need thick skin for design critiques and user testing feedback." }
        ],
        tasks: ["Research users", "Create prototypes", "Test designs"]
    },
    {
        id: 13,
        title: "Environmental Scientist",
        description: "Protect the environment and human health",
        detailedDescription: "Environmental scientists study the natural world and develop solutions to environmental problems. They conduct field research, collect and analyze environmental samples, assess pollution levels, and evaluate the impact of human activities on ecosystems. Environmental scientists work on projects ranging from climate change mitigation to water quality management, waste reduction, and conservation. They prepare technical reports, ensure compliance with environmental regulations, and provide recommendations to policymakers and organizations seeking to reduce their environmental footprint.",
        topCompanies: ["EPA (Environmental Protection Agency)", "AECOM", "Jacobs", "Tetra Tech", "WSP", "Golder Associates", "ERM", "SWCA Environmental Consultants", "The Nature Conservancy", "Environmental Resources Management"],
        interests: ["outdoors", "analytical", "helping"],
        skills: ["analytical", "technical", "communication"],
        education: "bachelor",
        workStyle: ["independent", "team"],
        salaryRange: "$55,000 - $85,000",
        salaryMin: 55000,
        growth: "8%",
        retention: "73%",
        qualifications: [
            "Bachelor's degree in Environmental Science, Biology, Chemistry, or related field",
            "Master's degree preferred for research and advanced positions",
            "Field and laboratory research experience",
            "Knowledge of environmental regulations and compliance standards",
            "Proficiency in data analysis and GIS software",
            "Strong report writing and presentation skills",
            "Physical ability to conduct fieldwork in various outdoor conditions",
            "Professional certification (e.g., Certified Environmental Professional) is a plus"
        ],
        reviews: [
            { name: "Jessica R.", role: "Environmental Scientist", rating: 5, comment: "Fulfilling to work on projects that protect the environment. Mix of field and office work keeps it interesting. Grant funding can be unstable for some positions." },
            { name: "Nathan V.", role: "Environmental Consultant", rating: 4, comment: "Great for people passionate about sustainability. Diverse project types across industries. Travel requirements vary by role and can be extensive." },
            { name: "Laura H.", role: "Water Quality Scientist", rating: 5, comment: "Love the hands-on research and data analysis. Making a real difference in communities. Salaries lower than private sector but very meaningful work." }
        ],
        tasks: ["Conduct research", "Analyze data", "Develop solutions"]
    },
    {
        id: 14,
        title: "Sales Manager",
        description: "Lead sales teams and develop strategies",
        detailedDescription: "Sales managers lead and motivate sales teams to achieve revenue targets and business growth. They develop sales strategies, set quotas, analyze market trends, and identify new business opportunities. Sales managers train and coach team members, monitor performance metrics, and build relationships with key clients. They work closely with marketing and product teams to align strategies and ensure customer satisfaction. Success in this role requires strong leadership, strategic thinking, excellent communication, and a results-driven mindset.",
        topCompanies: ["Salesforce", "Oracle", "Microsoft", "Adobe", "SAP", "IBM", "HubSpot", "ADP", "Cisco", "Dell Technologies"],
        interests: ["people", "business", "competitive"],
        skills: ["communication", "leadership", "analytical"],
        education: "bachelor",
        workStyle: ["team", "fast-paced"],
        salaryRange: "$75,000 - $130,000",
        salaryMin: 75000,
        growth: "7%",
        retention: "70%",
        qualifications: [
            "Bachelor's degree in Business, Marketing, or related field",
            "5+ years of sales experience with proven track record of meeting/exceeding targets",
            "2+ years in a sales leadership or management role",
            "Strong understanding of sales processes, CRM systems, and sales analytics",
            "Excellent negotiation and relationship-building skills",
            "Ability to motivate and develop team members",
            "Strategic thinking and business development capabilities",
            "Industry-specific knowledge relevant to the sales sector"
        ],
        reviews: [
            { name: "Mark A.", role: "Sales Manager", rating: 4, comment: "Excellent earning potential with commissions and bonuses. Love leading a team to success. Pressure to hit quotas every quarter can be intense." },
            { name: "Vanessa L.", role: "Regional Sales Manager", rating: 5, comment: "Dynamic role with great networking opportunities. Seeing your team close deals is exciting. Travel can be extensive depending on territory size." },
            { name: "Jonathan E.", role: "Enterprise Sales Manager", rating: 4, comment: "High-stakes deals are thrilling and lucrative. Strong relationship-building skills essential. Rejection is part of the job - need resilience." }
        ],
        tasks: ["Set goals", "Train teams", "Build relationships"]
    },
    {
        id: 15,
        title: "Cybersecurity Analyst",
        description: "Protect computer systems from threats",
        detailedDescription: "Cybersecurity analysts protect organizations' computer networks and systems from cyber threats, unauthorized access, and data breaches. They monitor networks for security incidents, investigate potential threats, implement security measures, and respond to security breaches. Analysts conduct vulnerability assessments, develop security policies, and stay current with emerging threats and security technologies. This critical role requires technical expertise, analytical thinking, and the ability to respond quickly and effectively to security incidents in an ever-evolving threat landscape.",
        topCompanies: ["Palo Alto Networks", "CrowdStrike", "Cisco", "FireEye", "Fortinet", "Check Point", "Symantec", "McAfee", "IBM Security", "Microsoft"],
        interests: ["technology", "problem-solving", "analytical"],
        skills: ["technical", "analytical", "communication"],
        education: "bachelor",
        workStyle: ["independent", "fast-paced"],
        salaryRange: "$75,000 - $120,000",
        salaryMin: 75000,
        growth: "35%",
        retention: "83%",
        qualifications: [
            "Bachelor's degree in Cybersecurity, Computer Science, or Information Technology",
            "Industry certifications (Security+, CEH, CISSP, CISM) highly valued",
            "Strong understanding of network security, encryption, and firewalls",
            "Experience with security tools (SIEM, IDS/IPS, vulnerability scanners)",
            "Knowledge of operating systems (Windows, Linux, Unix) and cloud security",
            "Understanding of compliance frameworks (NIST, ISO 27001, HIPAA)",
            "Problem-solving skills and ability to work under pressure",
            "Continuous learning mindset to keep pace with evolving threats"
        ],
        reviews: [
            { name: "Eric Z.", role: "Cybersecurity Analyst", rating: 5, comment: "Exciting field with constant challenges and learning. Excellent job security and salary. On-call rotations for security incidents can disrupt personal time." },
            { name: "Tiffany Q.", role: "Security Analyst", rating: 5, comment: "Love the puzzle-solving aspect of threat detection. High demand for these skills. Stress levels can be high when responding to active breaches." },
            { name: "Andrew G.", role: "InfoSec Analyst", rating: 4, comment: "Rewarding to protect company data and systems. Certifications boost career. Keeping up with evolving threats requires continuous education." }
        ],
        tasks: ["Monitor systems", "Respond to threats", "Implement security"]
    },
    {
        id: 16,
        title: "Project Manager",
        description: "Plan, execute, and oversee projects from start to finish",
        detailedDescription: "Project managers are responsible for planning, organizing, and directing the completion of specific projects while ensuring they are on time, on budget, and within scope. They coordinate teams, manage resources, communicate with stakeholders, and mitigate risks. PMs create detailed project plans, set milestones, track progress, and solve problems as they arise. This leadership role requires excellent organizational skills, communication abilities, and the capacity to juggle multiple priorities while keeping teams motivated and aligned toward common goals.",
        topCompanies: ["Deloitte", "Accenture", "McKinsey & Company", "Bain & Company", "PwC", "EY", "KPMG", "Boston Consulting Group", "IBM", "Capgemini"],
        interests: ["business", "people", "problem-solving"],
        skills: ["leadership", "communication", "analytical"],
        education: "bachelor",
        workStyle: ["team", "fast-paced"],
        salaryRange: "$70,000 - $125,000",
        salaryMin: 70000,
        growth: "11%",
        retention: "75%",
        qualifications: [
            "Bachelor's degree in Business, Management, or related field",
            "PMP (Project Management Professional) certification preferred",
            "5+ years of project management experience",
            "Proficiency in project management software (MS Project, Asana, Jira)",
            "Strong understanding of project management methodologies (Agile, Waterfall, Scrum)",
            "Excellent time management and organizational skills",
            "Risk management and budget planning experience",
            "Strong leadership and team coordination abilities"
        ],
        reviews: [
            { name: "Catherine B.", role: "Project Manager", rating: 4, comment: "Great leadership role with high impact on company success. Diverse projects keep it engaging. Juggling multiple stakeholders and priorities can be stressful." },
            { name: "Richard H.", role: "Senior PM", rating: 5, comment: "Love orchestrating complex projects and seeing them through to completion. PMP certification is valuable. Scope creep is constant battle." },
            { name: "Monica S.", role: "Technical PM", rating: 4, comment: "Perfect for organized people who like problem-solving. Good compensation and clear career path. Unexpected issues require quick thinking and flexibility." }
        ],
        tasks: ["Create project plans", "Coordinate teams", "Track progress and budgets"]
    },
    {
        id: 17,
        title: "Mechanical Engineer",
        description: "Design and develop mechanical systems and devices",
        detailedDescription: "Mechanical engineers design, develop, build, and test mechanical devices, including tools, engines, machines, and other equipment. They apply principles of physics, mathematics, and material science to create solutions for manufacturing, transportation, energy, and robotics. Mechanical engineers use CAD software to create designs, conduct simulations, prototype products, and work with manufacturing teams to bring concepts to life. This versatile engineering discipline offers opportunities across countless industries.",
        topCompanies: ["Boeing", "Lockheed Martin", "Tesla", "SpaceX", "General Electric", "Caterpillar", "Ford Motor Company", "General Motors", "Northrop Grumman", "Honeywell"],
        interests: ["technology", "problem-solving", "creative"],
        skills: ["technical", "analytical", "creative"],
        education: "bachelor",
        workStyle: ["team", "independent"],
        salaryRange: "$68,000 - $110,000",
        salaryMin: 68000,
        growth: "10%",
        retention: "82%",
        qualifications: [
            "Bachelor's degree in Mechanical Engineering from ABET-accredited program",
            "Proficiency in CAD software (SolidWorks, AutoCAD, CATIA)",
            "Strong understanding of thermodynamics, mechanics, and materials science",
            "Knowledge of manufacturing processes and quality control",
            "FE (Fundamentals of Engineering) exam passed",
            "PE (Professional Engineer) license for senior positions",
            "Problem-solving and analytical skills",
            "Experience with prototyping and testing"
        ],
        reviews: [
            { name: "William C.", role: "Mechanical Engineer", rating: 5, comment: "Fantastic to see your designs become real products. Wide range of industries to choose from. Complex problems require patience and iteration." },
            { name: "Samantha J.", role: "Design Engineer", rating: 4, comment: "Love the combination of creativity and technical precision. CAD skills are essential and fun to master. Manufacturing constraints can limit design freedom." },
            { name: "Paul R.", role: "R&D Engineer", rating: 5, comment: "Cutting-edge work with latest technologies. Strong job security and benefits. PE license takes 4+ years but worth the investment." }
        ],
        tasks: ["Design mechanical systems", "Run simulations", "Test prototypes"]
    },
    {
        id: 18,
        title: "Social Media Manager",
        description: "Develop and execute social media strategies",
        detailedDescription: "Social media managers create and implement strategies to build brand awareness, engage audiences, and drive business results across social platforms. They develop content calendars, create compelling posts, monitor engagement metrics, manage online communities, and respond to customer inquiries. Social media managers stay current with platform trends, analyze performance data, and collaborate with marketing teams to align social efforts with broader business objectives. This creative role combines storytelling, data analysis, and community management.",
        topCompanies: ["Meta", "Twitter/X", "TikTok", "Snap Inc.", "LinkedIn", "Pinterest", "HubSpot", "Hootsuite", "Buffer", "Sprout Social"],
        interests: ["creative", "people", "technology"],
        skills: ["communication", "creative", "analytical"],
        education: "bachelor",
        workStyle: ["team", "fast-paced"],
        salaryRange: "$50,000 - $85,000",
        salaryMin: 50000,
        growth: "14%",
        retention: "68%",
        qualifications: [
            "Bachelor's degree in Marketing, Communications, or related field",
            "3+ years of social media management experience",
            "Strong knowledge of all major social platforms (Instagram, Facebook, Twitter, TikTok, LinkedIn)",
            "Experience with social media management tools (Hootsuite, Buffer, Sprout Social)",
            "Content creation skills (copywriting, basic graphic design, video editing)",
            "Understanding of social media analytics and reporting",
            "Excellent written communication and storytelling abilities",
            "Crisis management and customer service skills"
        ],
        reviews: [
            { name: "Brittany L.", role: "Social Media Manager", rating: 4, comment: "Creative and fast-paced role perfect for digital natives. Love seeing content go viral. Always-on nature means weekends can be busy during campaigns." },
            { name: "Trevor N.", role: "Social Media Strategist", rating: 4, comment: "Fun to engage with communities and build brand presence. Data-driven approach is satisfying. Negative comments and trolls can be draining." },
            { name: "Ashley P.", role: "Community Manager", rating: 5, comment: "Every day is different with new trends emerging. Great for creative storytellers. Algorithms change constantly - need to stay adaptable." }
        ],
        tasks: ["Create content", "Engage with audiences", "Analyze metrics"]
    },
    {
        id: 19,
        title: "Electrical Engineer",
        description: "Design and develop electrical systems and equipment",
        detailedDescription: "Electrical engineers design, develop, test, and supervise the manufacturing of electrical equipment and systems, including electric motors, radar and navigation systems, communications systems, and power generation equipment. They use computer-aided design software to create schematics, conduct simulations, and solve complex electrical problems. Electrical engineers work on projects ranging from small electronic devices to large-scale power distribution systems, ensuring safety, efficiency, and reliability.",
        topCompanies: ["Intel", "Texas Instruments", "Qualcomm", "Broadcom", "NVIDIA", "Siemens", "General Electric", "Schneider Electric", "ABB", "Emerson Electric"],
        interests: ["technology", "problem-solving", "analytical"],
        skills: ["technical", "analytical", "creative"],
        education: "bachelor",
        workStyle: ["team", "independent"],
        salaryRange: "$72,000 - $115,000",
        salaryMin: 72000,
        growth: "7%",
        retention: "81%",
        qualifications: [
            "Bachelor's degree in Electrical Engineering from ABET-accredited program",
            "Proficiency in electrical design software (MATLAB, Simulink, PSPICE)",
            "Strong understanding of circuit theory, electromagnetism, and control systems",
            "Knowledge of electrical codes and safety standards (NEC, IEEE)",
            "FE exam certification immediately after graduation",
            "PE license required for senior positions and project sign-offs",
            "Experience with testing equipment and diagnostic tools",
            "Strong mathematical and problem-solving abilities"
        ],
        reviews: [
            { name: "Dennis F.", role: "Electrical Engineer", rating: 5, comment: "Excellent problem-solving opportunities working on power systems and electronics. Strong demand and good pay. Troubleshooting complex circuits requires patience." },
            { name: "Crystal W.", role: "Power Systems Engineer", rating: 4, comment: "Rewarding to work on critical infrastructure. Job security is excellent. Staying current with electrical codes and standards is important." },
            { name: "Gary M.", role: "Controls Engineer", rating: 5, comment: "Love the automation and programming aspects. Great career advancement. PE license essential for certain projects and adds credibility." }
        ],
        tasks: ["Design electrical systems", "Test equipment", "Ensure code compliance"]
    },
    {
        id: 20,
        title: "Occupational Therapist",
        description: "Help patients develop skills for daily living and working",
        detailedDescription: "Occupational therapists help people across all ages develop, recover, or maintain the daily living and work skills they need for independence and quality of life. They work with patients who have physical, mental, developmental, or emotional challenges, creating personalized treatment plans that may include adaptive equipment, therapeutic exercises, and environmental modifications. OTs assess patients' abilities, set goals, track progress, and collaborate with families and healthcare teams to maximize patient outcomes and independence.",
        topCompanies: ["Encompass Health", "Select Medical", "Kindred Healthcare", "ATI Physical Therapy", "Brookdale Senior Living", "Genesis HealthCare", "Skilled Healthcare Group", "HealthPRO Heritage", "BAYADA Home Health Care", "Visiting Angels"],
        interests: ["helping", "people", "healthcare"],
        skills: ["communication", "technical", "leadership"],
        education: "master",
        workStyle: ["team", "independent"],
        salaryRange: "$70,000 - $95,000",
        salaryMin: 70000,
        growth: "14%",
        retention: "79%",
        qualifications: [
            "Master's degree in Occupational Therapy from accredited program",
            "State licensure to practice occupational therapy",
            "Passed the NBCOT (National Board for Certification in Occupational Therapy) exam",
            "Strong knowledge of human anatomy, physiology, and psychology",
            "Clinical fieldwork experience in various healthcare settings",
            "Excellent patient assessment and treatment planning skills",
            "Empathy, patience, and strong interpersonal abilities",
            "Specialized certifications in areas like pediatrics or hand therapy (optional)"
        ],
        reviews: [
            { name: "Dr. Rebecca Y.", role: "Occupational Therapist", rating: 5, comment: "Incredibly fulfilling helping people regain independence. Diverse patient populations keep work interesting. Master's program is intensive but prepares you well." },
            { name: "Kenneth L.", role: "Pediatric OT", rating: 5, comment: "Love working with children and seeing their progress. Creative treatment approaches. Documentation requirements can be time-consuming." },
            { name: "Hannah B.", role: "Hand Therapist", rating: 4, comment: "Specialized area with good demand. Great patient relationships. Need additional certification for hand therapy specialty." }
        ],
        tasks: ["Assess patient needs", "Develop treatment plans", "Teach adaptive skills"]
    },
    {
        id: 21,
        title: "Content Writer",
        description: "Create engaging written content for various platforms",
        detailedDescription: "Content writers create compelling, informative, and engaging written material for websites, blogs, social media, marketing campaigns, and other digital platforms. They research topics thoroughly, write in various tones and styles to match brand voice, optimize content for search engines, and collaborate with marketing teams to support business goals. Content writers must adapt to different audiences, meet deadlines, and continuously refine their craft while staying current with content trends and best practices.",
        topCompanies: ["HubSpot", "Contently", "Scripted", "ClearVoice", "Skyword", "BuzzFeed", "Medium", "Condé Nast", "Hearst Communications", "The Washington Post"],
        interests: ["creative", "people", "technology"],
        skills: ["communication", "creative", "analytical"],
        education: "bachelor",
        workStyle: ["independent", "team"],
        salaryRange: "$45,000 - $75,000",
        salaryMin: 45000,
        growth: "9%",
        retention: "70%",
        qualifications: [
            "Bachelor's degree in English, Journalism, Communications, or related field",
            "Exceptional writing, editing, and proofreading skills",
            "Strong portfolio demonstrating writing versatility across topics and formats",
            "Understanding of SEO best practices and keyword research",
            "Familiarity with content management systems (WordPress, HubSpot)",
            "Research skills and ability to write about complex topics clearly",
            "Time management and ability to handle multiple projects",
            "Basic understanding of digital marketing and analytics"
        ],
        reviews: [
            { name: "Sophie D.", role: "Content Writer", rating: 4, comment: "Perfect for people who love writing and research. Remote work opportunities are plentiful. Freelance rates vary widely and finding steady clients takes time." },
            { name: "Ian T.", role: "SEO Content Writer", rating: 4, comment: "Satisfying to see your articles rank on Google. Flexible schedule. SEO requirements can sometimes limit creative expression." },
            { name: "Melissa G.", role: "Technical Writer", rating: 5, comment: "Great pay for specialized technical writing. Love making complex topics accessible. Need to learn different industries quickly." }
        ],
        tasks: ["Write articles and blog posts", "Research topics", "Edit and optimize content"]
    },
    {
        id: 22,
        title: "Business Analyst",
        description: "Analyze business processes and recommend improvements",
        detailedDescription: "Business analysts bridge the gap between business needs and technical solutions by analyzing processes, identifying inefficiencies, and recommending improvements. They gather requirements from stakeholders, document workflows, create business cases, and work with IT teams to implement solutions. BAs use data analysis, process mapping, and strategic thinking to help organizations optimize operations, reduce costs, and achieve their goals. This role requires both analytical skills and strong communication abilities.",
        topCompanies: ["McKinsey & Company", "Deloitte", "Accenture", "PwC", "EY", "KPMG", "IBM", "Capgemini", "Booz Allen Hamilton", "Oliver Wyman"],
        interests: ["analytical", "business", "problem-solving"],
        skills: ["analytical", "communication", "technical"],
        education: "bachelor",
        workStyle: ["team", "structured"],
        salaryRange: "$65,000 - $105,000",
        salaryMin: 65000,
        growth: "14%",
        retention: "76%",
        qualifications: [
            "Bachelor's degree in Business Administration, IT, or related field",
            "3+ years of business analysis experience",
            "Proficiency in requirements gathering and documentation",
            "Experience with process modeling tools (Visio, Lucidchart)",
            "Strong analytical and problem-solving skills",
            "Knowledge of project management and Agile methodologies",
            "SQL and data analysis skills",
            "Certification such as CBAP or PMI-PBA is a plus"
        ],
        reviews: [
            { name: "Timothy X.", role: "Business Analyst", rating: 4, comment: "Great bridge between business and IT. Analytical work is engaging. Managing conflicting stakeholder requirements requires diplomacy." },
            { name: "Victoria A.", role: "Senior BA", rating: 5, comment: "Love process improvement and seeing efficiency gains. Good compensation. Documentation can be tedious but is crucial." },
            { name: "Gregory I.", role: "Systems Analyst", rating: 4, comment: "Intellectually stimulating with variety of projects. CBAP certification adds value. Requirements gathering needs strong communication skills." }
        ],
        tasks: ["Gather requirements", "Analyze processes", "Create documentation"]
    },
    {
        id: 23,
        title: "Paramedic",
        description: "Provide emergency medical care in critical situations",
        detailedDescription: "Paramedics are highly trained emergency medical professionals who provide advanced life support and critical care to patients in emergency situations. They respond to 911 calls, assess patient conditions, perform medical procedures, administer medications, and transport patients to medical facilities. Paramedics work in high-pressure environments, making split-second decisions that can save lives. They must stay calm under pressure, communicate effectively with patients and healthcare teams, and maintain their skills through continuous training.",
        topCompanies: ["American Medical Response (AMR)", "Acadian Ambulance", "Rural/Metro Corporation", "Falck", "Global Medical Response", "LifeFleet", "ProMedica", "Hunter Ambulance", "City Fire Departments", "County EMS Services"],
        interests: ["helping", "healthcare", "people"],
        skills: ["technical", "communication", "leadership"],
        education: "associate",
        workStyle: ["team", "fast-paced"],
        salaryRange: "$40,000 - $65,000",
        salaryMin: 40000,
        growth: "11%",
        retention: "72%",
        qualifications: [
            "Completion of accredited paramedic training program",
            "Associate's degree in Emergency Medical Services (often required)",
            "State certification and National Registry of EMTs (NREMT) Paramedic certification",
            "Current CPR and ACLS certifications",
            "Valid driver's license and clean driving record",
            "Physical ability to lift patients and equipment",
            "Strong decision-making skills under pressure",
            "Excellent communication and bedside manner"
        ],
        reviews: [
            { name: "Jake O.", role: "Paramedic", rating: 5, comment: "Most rewarding job saving lives and helping people in crisis. Strong camaraderie with partners. Shift work and exposure to trauma can be challenging." },
            { name: "Christina U.", role: "Flight Paramedic", rating: 5, comment: "Adrenaline-filled career that's never boring. Critical thinking skills constantly tested. Emotionally demanding but incredible sense of purpose." },
            { name: "Marcus E.", role: "Critical Care Paramedic", rating: 4, comment: "Love the advanced procedures and autonomy. Great for people who thrive under pressure. Physical demands and irregular hours are tough." }
        ],
        tasks: ["Respond to emergencies", "Provide advanced medical care", "Transport patients"]
    },
    {
        id: 24,
        title: "Web Developer",
        description: "Build and maintain websites and web applications",
        detailedDescription: "Web developers create and maintain websites and web applications using programming languages, frameworks, and tools. They work on front-end interfaces that users see and interact with, back-end server logic and databases, or both as full-stack developers. Web developers collaborate with designers, content creators, and clients to bring digital experiences to life while ensuring functionality, performance, security, and responsiveness across devices. This dynamic field requires continuous learning as technologies evolve.",
        topCompanies: ["Google", "Meta", "Amazon", "Netflix", "Shopify", "WordPress", "Squarespace", "Wix", "GitHub", "Atlassian"],
        interests: ["technology", "creative", "problem-solving"],
        skills: ["programming", "technical", "creative"],
        education: "bachelor",
        workStyle: ["independent", "team"],
        salaryRange: "$60,000 - $110,000",
        salaryMin: 60000,
        growth: "23%",
        retention: "80%",
        qualifications: [
            "Bachelor's degree in Computer Science, Web Development, or related field (or equivalent experience)",
            "Proficiency in HTML, CSS, and JavaScript",
            "Experience with front-end frameworks (React, Vue, Angular)",
            "Knowledge of back-end languages (Node.js, Python, PHP, Ruby)",
            "Understanding of databases (MySQL, MongoDB, PostgreSQL)",
            "Familiarity with version control (Git) and deployment processes",
            "Responsive design and mobile-first development skills",
            "Portfolio demonstrating completed web projects"
        ],
        reviews: [
            { name: "Brandon K.", role: "Full Stack Developer", rating: 5, comment: "Love building functional websites from scratch. High demand and remote-friendly. Frameworks change rapidly - constant learning required." },
            { name: "Diana M.", role: "Front End Developer", rating: 4, comment: "Creative and technical - perfect combination. Good work-life balance at many companies. Browser compatibility issues can be frustrating." },
            { name: "Jeffrey V.", role: "Back End Developer", rating: 5, comment: "Satisfying to build robust systems and APIs. Strong job market. Debugging complex issues can take hours but very rewarding when solved." }
        ],
        tasks: ["Write front-end and back-end code", "Debug websites", "Optimize performance"]
    },
    {
        id: 25,
        title: "Psychologist",
        description: "Study behavior and mental processes to help people",
        detailedDescription: "Psychologists study cognitive, emotional, and social processes and behavior to understand, explain, and help people overcome challenges. They conduct assessments, provide therapy, develop treatment plans, and conduct research. Psychologists may specialize in clinical, counseling, school, industrial-organizational, or research psychology. They work with individuals, families, groups, and organizations to promote mental health, improve relationships, enhance performance, and address psychological disorders through evidence-based interventions.",
        topCompanies: ["Mayo Clinic", "Cleveland Clinic", "Kaiser Permanente", "Talkspace", "BetterHelp", "Headspace Health", "VA Medical Centers", "LifeStance Health", "Mindpath Health", "Thriveworks"],
        interests: ["helping", "people", "analytical"],
        skills: ["communication", "analytical", "leadership"],
        education: "doctorate",
        workStyle: ["independent", "team"],
        salaryRange: "$60,000 - $100,000",
        salaryMin: 60000,
        growth: "6%",
        retention: "77%",
        qualifications: [
            "Doctoral degree (Ph.D. or Psy.D.) in Psychology",
            "State licensure to practice psychology",
            "Completion of supervised clinical internship and postdoctoral hours",
            "Passed the EPPP (Examination for Professional Practice in Psychology)",
            "Strong understanding of psychological theories, research methods, and assessment",
            "Excellent listening and therapeutic communication skills",
            "Ethical practice and cultural competence",
            "Specialized training in areas like CBT, trauma, or neuropsychology (depending on focus)"
        ],
        reviews: [
            { name: "Dr. Linda S.", role: "Clinical Psychologist", rating: 5, comment: "Deeply rewarding helping people overcome mental health challenges. Flexibility with private practice. Doctoral program is long but opens many doors." },
            { name: "Dr. Aaron P.", role: "School Psychologist", rating: 4, comment: "Love working with students and families. Summers off is great benefit. Emotional burden of cases can be heavy - self-care is essential." },
            { name: "Dr. Patricia N.", role: "I-O Psychologist", rating: 5, comment: "Fascinating applying psychology to workplace challenges. Excellent compensation in corporate settings. Less direct patient contact than clinical roles." }
        ],
        tasks: ["Conduct assessments", "Provide therapy", "Develop treatment plans"]
    },
    {
        id: 26,
        title: "Video Editor",
        description: "Edit and produce video content for various media",
        detailedDescription: "Video editors take raw footage and transform it into polished, compelling visual stories. They select the best shots, arrange sequences, add transitions and effects, incorporate music and sound, and color correct to create professional videos for film, television, social media, corporate communications, and digital platforms. Video editors work closely with directors, producers, and content creators to bring creative visions to life while meeting technical specifications and deadlines.",
        topCompanies: ["Netflix", "Disney", "Warner Bros.", "NBCUniversal", "Sony Pictures", "YouTube", "Adobe", "Vimeo", "DreamWorks", "Paramount Pictures"],
        interests: ["creative", "technology", "artistic"],
        skills: ["creative", "technical", "communication"],
        education: "bachelor",
        workStyle: ["independent", "team"],
        salaryRange: "$45,000 - $85,000",
        salaryMin: 45000,
        growth: "12%",
        retention: "71%",
        qualifications: [
            "Bachelor's degree in Film Production, Media Arts, or related field (or equivalent experience)",
            "Proficiency in video editing software (Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve)",
            "Understanding of storytelling, pacing, and visual composition",
            "Knowledge of color grading and audio mixing",
            "Experience with motion graphics and effects (After Effects)",
            "Strong portfolio/reel demonstrating editing skills",
            "Ability to work under tight deadlines",
            "Collaborative mindset and attention to detail"
        ],
        reviews: [
            { name: "Ryan W.", role: "Video Editor", rating: 4, comment: "Creative work with visible results. Love storytelling through editing. Tight deadlines and client revisions can mean long hours." },
            { name: "Jasmine H.", role: "Post-Production Editor", rating: 5, comment: "Exciting projects in film and TV. Adobe suite mastery is essential and satisfying. Freelance work can be feast or famine." },
            { name: "Omar K.", role: "Motion Graphics Editor", rating: 4, comment: "Perfect blend of editing and animation. Strong portfolio gets you great clients. Rendering times can slow down workflow." }
        ],
        tasks: ["Edit video footage", "Add effects and graphics", "Color grade and mix audio"]
    },
    {
        id: 27,
        title: "Pharmacist",
        description: "Dispense medications and provide pharmaceutical care",
        detailedDescription: "Pharmacists are medication experts who dispense prescription medications, counsel patients on proper use, identify potential drug interactions, and monitor patient outcomes. They work in retail pharmacies, hospitals, clinics, and research settings, playing a critical role in patient safety and health outcomes. Pharmacists collaborate with physicians and other healthcare providers, provide immunizations, conduct health screenings, and educate patients about disease management and wellness.",
        topCompanies: ["CVS Health", "Walgreens", "Walmart Pharmacy", "Rite Aid", "Kaiser Permanente", "Mayo Clinic", "Cleveland Clinic", "UnitedHealth Group", "Express Scripts", "Cigna"],
        interests: ["helping", "healthcare", "analytical"],
        skills: ["technical", "communication", "analytical"],
        education: "doctorate",
        workStyle: ["team", "structured"],
        salaryRange: "$110,000 - $145,000",
        salaryMin: 110000,
        growth: "2%",
        retention: "78%",
        qualifications: [
            "Doctor of Pharmacy (Pharm.D.) degree from accredited program",
            "State licensure to practice pharmacy",
            "Passed the NAPLEX (North American Pharmacist Licensure Examination)",
            "Passed state-specific pharmacy law exam (MPJE)",
            "Strong knowledge of pharmacology, therapeutics, and drug interactions",
            "Excellent patient counseling and communication skills",
            "Attention to detail and accuracy in dispensing medications",
            "Residency or specialized certifications for advanced practice areas"
        ],
        reviews: [
            { name: "Dr. Susan L.", role: "Retail Pharmacist", rating: 4, comment: "Rewarding to counsel patients and catch dangerous drug interactions. Excellent salary. Long standing hours and retail pressure can be tiring." },
            { name: "Dr. James C.", role: "Clinical Pharmacist", rating: 5, comment: "Love being part of healthcare team making medication decisions. Respected role with good benefits. Pharm.D. is expensive and competitive to get into." },
            { name: "Dr. Maria G.", role: "Hospital Pharmacist", rating: 4, comment: "Interesting cases and collaboration with doctors. Job security is excellent. Shift work including nights and weekends required." }
        ],
        tasks: ["Dispense medications", "Counsel patients", "Monitor drug interactions"]
    },
    {
        id: 28,
        title: "Database Administrator",
        description: "Manage and secure organizational databases",
        detailedDescription: "Database administrators (DBAs) ensure that databases run efficiently, securely, and reliably. They install and configure database systems, perform backups and recovery, optimize performance, implement security measures, and troubleshoot issues. DBAs monitor database health, plan capacity, manage user access, and ensure data integrity. This critical technical role requires deep knowledge of database systems and the ability to balance performance, security, and availability.",
        topCompanies: ["Oracle", "Microsoft", "IBM", "Amazon Web Services (AWS)", "Google Cloud", "MongoDB", "SAP", "Snowflake", "Databricks", "Redis Labs"],
        interests: ["technology", "analytical", "problem-solving"],
        skills: ["technical", "analytical", "communication"],
        education: "bachelor",
        workStyle: ["independent", "structured"],
        salaryRange: "$75,000 - $125,000",
        salaryMin: 75000,
        growth: "9%",
        retention: "84%",
        qualifications: [
            "Bachelor's degree in Computer Science, Information Systems, or related field",
            "Strong expertise in database systems (Oracle, SQL Server, MySQL, PostgreSQL)",
            "Proficiency in SQL and database query optimization",
            "Experience with backup/recovery and disaster recovery planning",
            "Knowledge of database security and access control",
            "Understanding of data modeling and database design",
            "Certifications such as Oracle DBA, Microsoft MCSA, or AWS Database Specialty",
            "Problem-solving skills and attention to detail"
        ],
        reviews: [
            { name: "Douglas R.", role: "Database Administrator", rating: 5, comment: "Critical role with excellent job security. Love optimizing performance and solving complex queries. On-call responsibilities for production issues." },
            { name: "Teresa M.", role: "Senior DBA", rating: 4, comment: "High demand for these skills means great salary. Database certifications are valuable. Pressure is high when systems go down." },
            { name: "Vincent T.", role: "Cloud DBA", rating: 5, comment: "Exciting shift to cloud databases. Continuous learning keeps it fresh. Disaster recovery testing can be stressful but necessary." }
        ],
        tasks: ["Maintain databases", "Optimize performance", "Implement security measures"]
    },
    {
        id: 29,
        title: "Dental Hygienist",
        description: "Provide preventive dental care and patient education",
        detailedDescription: "Dental hygienists are licensed oral health professionals who provide preventive dental care, including teeth cleaning, fluoride treatments, and periodontal therapy. They examine patients for signs of oral diseases, take dental X-rays, educate patients on proper oral hygiene techniques, and work closely with dentists to develop treatment plans. Dental hygienists play a vital role in preventing dental disease and promoting overall oral health through patient education and clinical interventions.",
        topCompanies: ["Aspen Dental", "Pacific Dental Services", "Heartland Dental", "Western Dental", "Smile Brands", "Great Expressions Dental Centers", "Gentle Dental", "Bright Now! Dental", "Kool Smiles", "InterDent"],
        interests: ["helping", "healthcare", "people"],
        skills: ["technical", "communication", "leadership"],
        education: "associate",
        workStyle: ["team", "structured"],
        salaryRange: "$65,000 - $90,000",
        salaryMin: 65000,
        growth: "9%",
        retention: "75%",
        qualifications: [
            "Associate's or Bachelor's degree in Dental Hygiene from accredited program",
            "State licensure to practice dental hygiene",
            "Passed National Board Dental Hygiene Examination (NBDHE)",
            "Passed clinical board examination",
            "Current CPR certification",
            "Strong clinical skills in scaling, polishing, and patient assessment",
            "Excellent patient communication and education abilities",
            "Knowledge of infection control and safety protocols"
        ],
        reviews: [
            { name: "Kimberly F.", role: "Dental Hygienist", rating: 5, comment: "Great work-life balance with good pay. Love educating patients about oral health. Physical demands of the job (back, hands) require good ergonomics." },
            { name: "Tyler G.", role: "Registered Dental Hygienist", rating: 4, comment: "Associate's degree gets you into healthcare quickly. Flexible scheduling options. Repetitive motions and standing all day can be tiring." },
            { name: "Natalie S.", role: "Periodontal Hygienist", rating: 5, comment: "Rewarding seeing improvements in patients' oral health. Strong job market. Some patients have dental anxiety which requires patience." }
        ],
        tasks: ["Clean teeth", "Take X-rays", "Educate patients on oral health"]
    },
    {
        id: 30,
        title: "Supply Chain Manager",
        description: "Oversee logistics and supply chain operations",
        detailedDescription: "Supply chain managers coordinate and optimize the entire supply chain process, from procurement of raw materials to delivery of finished products to customers. They manage relationships with suppliers and distributors, negotiate contracts, forecast demand, manage inventory levels, and implement strategies to reduce costs and improve efficiency. Supply chain managers use data analytics, collaboration, and strategic planning to ensure products are delivered on time, at the right cost, and with the right quality.",
        topCompanies: ["Amazon", "Walmart", "Target", "UPS", "FedEx", "DHL", "Procter & Gamble", "Unilever", "Tesla", "Apple"],
        interests: ["business", "analytical", "problem-solving"],
        skills: ["analytical", "leadership", "communication"],
        education: "bachelor",
        workStyle: ["team", "fast-paced"],
        salaryRange: "$75,000 - $120,000",
        salaryMin: 75000,
        growth: "6%",
        retention: "74%",
        qualifications: [
            "Bachelor's degree in Supply Chain Management, Business, Logistics, or related field",
            "5+ years of supply chain or logistics experience",
            "Proficiency in supply chain management software (SAP, Oracle SCM)",
            "Strong understanding of procurement, inventory management, and distribution",
            "Data analysis and forecasting skills",
            "Professional certifications (CPIM, CSCP, Six Sigma) preferred",
            "Excellent negotiation and vendor management abilities",
            "Strategic thinking and problem-solving capabilities"
        ],
        reviews: [
            { name: "Lawrence D.", role: "Supply Chain Manager", rating: 4, comment: "Strategic role with significant business impact. Love optimizing operations and reducing costs. Supply disruptions require quick problem-solving." },
            { name: "Cynthia R.", role: "Logistics Manager", rating: 5, comment: "Fast-paced environment with global reach. CPIM certification is valuable. Coordinating across time zones can mean odd-hour calls." },
            { name: "Matthew P.", role: "Procurement Manager", rating: 4, comment: "Great for analytical people who like negotiation. Good salary and advancement opportunities. Supplier issues can create production delays and stress." }
        ],
        tasks: ["Manage suppliers", "Optimize logistics", "Forecast demand"]
    }
];

// Initialize the form
function initializeForm() {
    const interestsGrid = document.getElementById('interestsGrid');
    const skillsGrid = document.getElementById('skillsGrid');

    // Create interest checkboxes
    interestOptions.forEach(option => {
        const label = document.createElement('label');
        label.className = 'checkbox-label';
        label.innerHTML = `
            <input type="checkbox" name="interest" value="${option.value}">
            <span>${option.label}</span>
        `;
        interestsGrid.appendChild(label);
    });

    // Create skill checkboxes
    skillOptions.forEach(option => {
        const label = document.createElement('label');
        label.className = 'checkbox-label';
        label.innerHTML = `
            <input type="checkbox" name="skill" value="${option.value}">
            <span>${option.label}</span>
        `;
        skillsGrid.appendChild(label);
    });
}

// Get selected values from checkboxes
function getSelectedValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value);
}

// Calculate career matches
function findCareerMatches(preferences) {
    const { interests, skills, education, workStyle, salary } = preferences;

    // Calculate match scores
    const scoredCareers = careers.map(career => {
        let score = 0;
        let maxScore = 0;

        // Interest matching (30 points)
        maxScore += 30;
        const interestMatches = interests.filter(i => career.interests.includes(i));
        score += (interestMatches.length / Math.max(interests.length, 1)) * 30;

        // Skills matching (30 points)
        maxScore += 30;
        const skillMatches = skills.filter(s => career.skills.includes(s));
        score += (skillMatches.length / Math.max(skills.length, 1)) * 30;

        // Education matching (20 points)
        maxScore += 20;
        const educationLevels = ["high-school", "associate", "bachelor", "master", "doctorate"];
        const userEduLevel = educationLevels.indexOf(education);
        const careerEduLevel = educationLevels.indexOf(career.education);
        if (userEduLevel >= careerEduLevel) {
            score += 20;
        } else {
            score += Math.max(0, 20 - (careerEduLevel - userEduLevel) * 5);
        }

        // Work style matching (10 points)
        maxScore += 10;
        if (career.workStyle.includes(workStyle)) {
            score += 10;
        }

        // Salary matching (10 points)
        maxScore += 10;
        if (salary === "any" || career.salaryMin >= parseInt(salary)) {
            score += 10;
        } else {
            score += Math.max(0, 10 - (parseInt(salary) - career.salaryMin) / 10000);
        }

        const matchPercentage = Math.round((score / maxScore) * 100);

        return {
            ...career,
            matchPercentage,
            matchedInterests: interestMatches,
            matchedSkills: skillMatches
        };
    });

    // Sort by match percentage and filter
    return scoredCareers
        .sort((a, b) => b.matchPercentage - a.matchPercentage)
        .filter(career => career.matchPercentage >= 30);
}

// Get match color class
function getMatchColor(percentage) {
    if (percentage >= 80) return 'excellent';
    if (percentage >= 60) return 'good';
    if (percentage >= 40) return 'fair';
    return 'low';
}

// Get retention color class
function getRetentionClass(retention) {
    const rate = parseInt(retention);
    if (rate >= 80) return 'retention-high';
    if (rate >= 70) return 'retention-medium';
    return 'retention-low';
}

// Create career card HTML
function createCareerCard(career, location = '') {
    const educationDisplay = career.education.charAt(0).toUpperCase() + career.education.slice(1);
    
    return `
        <div class="career-card">
            <div class="match-badge ${getMatchColor(career.matchPercentage)}">
                ${career.matchPercentage}% Match
            </div>
            
            <h3 class="career-title">${career.title}</h3>
            <p class="career-description">${career.description}</p>

            <div class="career-details">
                <div class="detail-item">
                    <span class="detail-label">💵 Salary Range:</span>
                    <span class="detail-value">${career.salaryRange}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">📈 Job Growth:</span>
                    <span class="detail-value">${career.growth}</span>
                </div>

                <div class="detail-item">
                    <span class="detail-label">🎓 Education:</span>
                    <span class="detail-value">${educationDisplay}'s Degree</span>
                </div>

                <div class="detail-item">
                    <span class="detail-label">👥 Retention Rate:</span>
                    <span class="detail-value ${getRetentionClass(career.retention)}">${career.retention}</span>
                </div>
            </div>

            <div class="matched-section">
                <h4>✅ Your Matched Interests:</h4>
                <div class="tag-list">
                    ${career.matchedInterests.map(interest => 
                        `<span class="tag tag-interest">${interest}</span>`
                    ).join('')}
                </div>
            </div>

            <div class="matched-section">
                <h4>💪 Your Matched Skills:</h4>
                <div class="tag-list">
                    ${career.matchedSkills.map(skill => 
                        `<span class="tag tag-skill">${skill}</span>`
                    ).join('')}
                </div>
            </div>

            <div class="tasks-section">
                <h4>📋 Typical Tasks:</h4>
                <ul class="tasks-list">
                    ${career.tasks.map(task => `<li>${task}</li>`).join('')}
                </ul>
            </div>

            <div class="detailed-description">
                <h4>📖 About This Career:</h4>
                <p>${career.detailedDescription}</p>
            </div>

            <div class="top-companies-section">
                <h4>🏢 Top Companies Hiring:</h4>
                <div class="companies-grid">
                    ${career.topCompanies.map(company => `<span class="company-tag">${company}</span>`).join('')}
                </div>
            </div>

            <div class="qualifications-section">
                <h4>🎯 Required Qualifications:</h4>
                <ul class="qualifications-list">
                    ${career.qualifications.map(qual => `<li>${qual}</li>`).join('')}
                </ul>
            </div>

            <div class="reviews-section">
                <h4>⭐ Employee Reviews:</h4>
                <div class="reviews-container">
                    ${career.reviews.map(review => `
                        <div class="review-card">
                            <div class="review-header">
                                <div class="reviewer-info">
                                    <strong>${review.name}</strong>
                                    <span class="reviewer-role">${review.role}</span>
                                </div>
                                <div class="review-rating">
                                    ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                                </div>
                            </div>
                            <p class="review-comment">${review.comment}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="job-search-section">
                <h4>🔍 Find Open Positions:</h4>
                <div class="job-board-links">
                    <a href="https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(career.title)}${location ? '&location=' + encodeURIComponent(location) : ''}" target="_blank" class="job-link linkedin">
                        <span class="job-icon">💼</span> LinkedIn
                    </a>
                    <a href="https://www.indeed.com/jobs?q=${encodeURIComponent(career.title)}${location ? '&l=' + encodeURIComponent(location) : ''}" target="_blank" class="job-link indeed">
                        <span class="job-icon">🔵</span> Indeed
                    </a>
                    <a href="https://www.glassdoor.com/Job/jobs.htm?sc.keyword=${encodeURIComponent(career.title)}${location ? '&locT=C&locId=' + encodeURIComponent(location) : ''}" target="_blank" class="job-link glassdoor">
                        <span class="job-icon">🟢</span> Glassdoor
                    </a>
                    <a href="https://www.ziprecruiter.com/candidate/search?search=${encodeURIComponent(career.title)}${location ? '&location=' + encodeURIComponent(location) : ''}" target="_blank" class="job-link ziprecruiter">
                        <span class="job-icon">⚡</span> ZipRecruiter
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Display results
function displayResults(matches, location = '') {
    const formContainer = document.getElementById('formContainer');
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsCount = document.getElementById('resultsCount');
    const resultsGrid = document.getElementById('resultsGrid');

    formContainer.style.display = 'none';
    resultsContainer.style.display = 'block';

    resultsCount.textContent = `Found ${matches.length} career${matches.length !== 1 ? 's' : ''} matching your profile`;

    if (matches.length === 0) {
        resultsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 2rem;">
                <p style="font-size: 1.2rem; color: #666;">No strong matches found. Try adjusting your preferences!</p>
            </div>
        `;
    } else {
        resultsGrid.innerHTML = matches.map(career => createCareerCard(career, location)).join('');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Reset to form
function resetToForm() {
    const formContainer = document.getElementById('formContainer');
    const resultsContainer = document.getElementById('resultsContainer');

    formContainer.style.display = 'block';
    resultsContainer.style.display = 'none';

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Form submission handler
document.getElementById('careerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const interests = getSelectedValues('interest');
    const skills = getSelectedValues('skill');
    const education = document.getElementById('education').value;
    const workStyle = document.getElementById('workStyle').value;
    const salary = document.getElementById('salary').value;
    const location = document.getElementById('userLocation').value.trim();

    if (interests.length === 0 || skills.length === 0) {
        alert('Please select at least one interest and one skill');
        return;
    }

    const preferences = { interests, skills, education, workStyle, salary };
    const matches = findCareerMatches(preferences);
    displayResults(matches, location);
});

// Reset button handler
document.getElementById('resetBtn').addEventListener('click', resetToForm);

// Initialize on page load
initializeForm();

// ============================================
// LOGIN/SIGNUP SYSTEM
// ============================================

let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Check login status on load
function checkLoginStatus() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const userProfile = document.getElementById('userProfile');
    const userName = document.getElementById('userName');

    if (currentUser) {
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        userProfile.style.display = 'flex';
        userName.textContent = currentUser.name;
    } else {
        loginBtn.style.display = 'block';
        signupBtn.style.display = 'block';
        userProfile.style.display = 'none';
    }
}

// Modal controls
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const closeLogin = document.getElementById('closeLogin');
const closeSignup = document.getElementById('closeSignup');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');

loginBtn.addEventListener('click', () => {
    loginModal.classList.add('active');
});

signupBtn.addEventListener('click', () => {
    signupModal.classList.add('active');
});

closeLogin.addEventListener('click', () => {
    loginModal.classList.remove('active');
});

closeSignup.addEventListener('click', () => {
    signupModal.classList.remove('active');
});

switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.remove('active');
    signupModal.classList.add('active');
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.classList.remove('active');
    loginModal.classList.add('active');
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
    }
    if (e.target === signupModal) {
        signupModal.classList.remove('active');
    }
});

// Login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = { name: user.name, email: user.email };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        loginModal.classList.remove('active');
        checkLoginStatus();
        
        // Show success message
        alert(`Welcome back, ${user.name}! 🎉`);
        this.reset();
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

// Signup form submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    // Validate password match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if user already exists
    if (users.find(u => u.email === email)) {
        alert('An account with this email already exists. Please login.');
        return;
    }
    
    // Create new user
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto login
    currentUser = { name, email };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    signupModal.classList.remove('active');
    checkLoginStatus();
    
    // Show success message
    alert(`Account created successfully! Welcome, ${name}! 🎉`);
    this.reset();
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
        currentUser = null;
        localStorage.removeItem('currentUser');
        checkLoginStatus();
        alert('You have been logged out successfully.');
    }
});

// Initialize login status
checkLoginStatus();

// ============================================
// MENU BAR FUNCTIONALITY
// ============================================

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const menuItems = document.querySelector('.menu-items');

mobileMenuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    menuItems.classList.toggle('active');
});

// Menu link functionality
const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Remove active class from all links
        menuLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Close mobile menu if open
        mobileMenuToggle.classList.remove('active');
        menuItems.classList.remove('active');
        
        const section = this.getAttribute('data-section');
        
        if (section === 'home') {
            e.preventDefault();
            document.getElementById('aboutSection').style.display = 'none';
            document.getElementById('formContainer').style.display = 'block';
            document.getElementById('resultsContainer').style.display = 'none';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (section === 'quiz') {
            e.preventDefault();
            document.getElementById('aboutSection').style.display = 'none';
            document.getElementById('formContainer').style.display = 'block';
            document.getElementById('resultsContainer').style.display = 'none';
            window.scrollTo({ 
                top: document.querySelector('.career-form').offsetTop - 100, 
                behavior: 'smooth' 
            });
        } else if (section === 'about') {
            e.preventDefault();
            document.getElementById('formContainer').style.display = 'none';
            document.getElementById('resultsContainer').style.display = 'none';
            document.getElementById('aboutSection').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (section === 'contact') {
            e.preventDefault();
            alert('Contact us at: careers@careerMatcher.com\nPhone: 1-800-CAREERS');
        }
    });
});

// About section "Take Quiz" button
document.getElementById('aboutToQuiz').addEventListener('click', function() {
    document.getElementById('aboutSection').style.display = 'none';
    document.getElementById('formContainer').style.display = 'block';
    
    // Update active menu link
    menuLinks.forEach(l => l.classList.remove('active'));
    document.querySelector('[data-section="quiz"]').classList.add('active');
    
    window.scrollTo({ 
        top: document.querySelector('.career-form').offsetTop - 100, 
        behavior: 'smooth' 
    });
});

// ============================================
// GEMINI AI INTEGRATION
// ============================================

let geminiApiKey = localStorage.getItem('geminiApiKey');
let currentMatches = [];

// Check if API key exists on load
function checkApiKey() {
    const aiSetup = document.getElementById('aiSetup');
    const aiChatContainer = document.getElementById('aiChatContainer');
    
    if (geminiApiKey) {
        aiSetup.style.display = 'none';
        aiChatContainer.style.display = 'block';
    } else {
        aiSetup.style.display = 'block';
        aiChatContainer.style.display = 'none';
    }
}

// Save API key
document.getElementById('saveApiKey').addEventListener('click', function() {
    const apiKeyInput = document.getElementById('apiKeyInput');
    const apiKey = apiKeyInput.value.trim();
    
    if (!apiKey) {
        alert('Please enter your Gemini API key');
        return;
    }
    
    geminiApiKey = apiKey;
    localStorage.setItem('geminiApiKey', apiKey);
    apiKeyInput.value = '';
    checkApiKey();
    
    // Add welcome message
    addAiMessage('Hello! I\'m your AI Career Advisor powered by Google Gemini. I can help you understand your career matches, provide interview tips, suggest skills to develop, and answer any career-related questions. How can I assist you today?');
});

// Clear API key
document.getElementById('clearApiKey').addEventListener('click', function() {
    if (confirm('Are you sure you want to remove your API key?')) {
        localStorage.removeItem('geminiApiKey');
        geminiApiKey = null;
        document.getElementById('chatMessages').innerHTML = '';
        checkApiKey();
    }
});

// Add message to chat
function addUserMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message user';
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addAiMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message ai';
    messageDiv.innerHTML = `<strong>AI Advisor:</strong> ${message.replace(/\n/g, '<br>')}`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addLoadingMessage() {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message loading';
    messageDiv.id = 'loadingMessage';
    messageDiv.textContent = 'AI is thinking...';
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageDiv;
}

function removeLoadingMessage() {
    const loadingMsg = document.getElementById('loadingMessage');
    if (loadingMsg) {
        loadingMsg.remove();
    }
}

// Send message to Gemini
async function sendToGemini(userMessage) {
    const loadingMsg = addLoadingMessage();
    const sendBtn = document.getElementById('sendMessage');
    sendBtn.disabled = true;
    
    try {
        // Prepare context about career matches
        const context = currentMatches.length > 0 
            ? `The user has been matched with the following careers based on their profile:\n${currentMatches.map((c, i) => 
                `${i + 1}. ${c.title} (${c.matchPercentage}% match) - ${c.description}`
              ).join('\n')}\n\n`
            : '';
        
        const prompt = `${context}User question: ${userMessage}\n\nProvide helpful, specific career advice. Keep responses concise (2-3 paragraphs).`;
        
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${geminiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }]
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'API request failed');
        }
        
        const data = await response.json();
        const aiResponse = data.candidates[0]?.content?.parts[0]?.text || 'Sorry, I could not generate a response.';
        
        removeLoadingMessage();
        addAiMessage(aiResponse);
        
    } catch (error) {
        removeLoadingMessage();
        console.error('Gemini API Error:', error);
        
        if (error.message.includes('API_KEY_INVALID') || error.message.includes('API key')) {
            addAiMessage('❌ Invalid API key. Please check your API key and try again.');
            localStorage.removeItem('geminiApiKey');
            geminiApiKey = null;
            setTimeout(() => checkApiKey(), 2000);
        } else {
            addAiMessage(`❌ Error: ${error.message}. Please try again.`);
        }
    } finally {
        sendBtn.disabled = false;
    }
}

// Send message handler
document.getElementById('sendMessage').addEventListener('click', function() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    addUserMessage(message);
    chatInput.value = '';
    sendToGemini(message);
});

// Enter key to send
document.getElementById('chatInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('sendMessage').click();
    }
});

// Update display results to store current matches
const originalDisplayResults = displayResults;
displayResults = function(matches) {
    currentMatches = matches;
    originalDisplayResults(matches);
    
    // Check API key status when results are shown
    checkApiKey();
};

// Initialize API key check
checkApiKey();

