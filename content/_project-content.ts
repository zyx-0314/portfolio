import { FullProjectData } from '@/types';

export const getProjectContents = async () => {
	const data: FullProjectData[] = [
		{
			id: 'SIMS',
			title: 'Student Information Management System (SIMS)',
			association: 'School Project - Subject',
			type: 'Web Application',
			schema: 'WebApplication',
			description:
				'A web-based application that manages the student information of a school. It has a feature that can generate a report of the student information.',
			wallpaper: 'SIMS Wallpaper.webp',
			techs: ['PHP', 'MySQL', 'Bootstrap CSS'],
			features: [
				{
					title: 'Student Information',
					description: 'Manage the student information of a school.',
					image: 'SIMS_Student_Information.webp',
				},
				{
					title: 'Student Report',
					description: 'Generate a report of the student information.',
					image: 'SIMS_Student_Report.webp',
				},
			],
			coAuthors: [
				{
					name: 'Kathleen Mae Calderon',
					link: 'https://www.linkedin.com/in/kathleen-may-calderon-a279b4265/',
					photoLink:
						'kathleen.jpg',
					role: 'Documentation and Tester',
				},
				{
					name: 'Carlo John Aspiras',
					link: 'https://www.linkedin.com/in/carlo-aspiras-3467b0270/',
					photoLink:
						'carlo.jpg',
					role: 'UI/UX Designer',
				},
				{
					name: 'Ara Gutierrez',
					link: 'https://www.linkedin.com/in/ara-gutierrez-5a79391b7/',
					photoLink:
						'ara.jpg',
					role: 'UI/UX Designer',
				},
				{
					name: 'Andrei Dela Cruz',
					link: 'https://www.linkedin.com/in/andrei-dela-cruz-2b73a6170/',
					photoLink:
						'andrei.jpg',
					role: 'Tester',
				},
			],
			reponsibility: 'Full Stack Developer',
			projectBackground:
				"In the dynamic academic setting of Isabela State University's, Computer Science Program, a unique challenge arose—one that demanded a collaborative effort and a blend of skills. As 3rd-year Computer Science students, the dedicated LEAD team recognized the need for an innovative solution. The challenge at hand was the efficient management of student data, including achievements, classes, seminars, research, projects, and subjects, year after year.",
			projectBackgroundImages: [
				'activite billboard.webp',
				'CCSICT.webp',
				'CS 3rd Year 2021.webp',
				'CCSICT Dept.webp',
				'thesis.webp',
			],
			challenges:
				"The challenges were apparent and significant. The sheer volume of data associated with each student's academic journey was daunting. Traditional record-keeping methods proved inadequate, leading to data inconsistencies and operational inefficiencies. With students continually evolving in their academic pursuits, a more comprehensive and adaptive solution was imperative.",
			proposals:
				"The LEAD team, proposed the creation of a powerful Student Information Management System (SIMS). Their vision was to develop a web-based platform that would not only streamline data management but also provide valuable insights into students' academic experiences.",
			proposalsImages: ['Meeting Planning.webp'],
			coreSolution:
				'Collaboration was key to the core solution. LEAD team designed a user-friendly SIMS, accessible to both students and educators. The platform was meticulously divided into distinct sections, ensuring ease of navigation. It would comprehensively capture achievements, class histories, seminar participation, research endeavors, projects, and subject records for each academic year.',
			designPhase:
				'During the design phase, the LEAD team emphasized a clean and intuitive user interface. To reflect their affiliation with College of Computing Studies Information and Communication Technology Department, they chose a deep orange color. The vibrant blue, representing the MRSP organization and Computer Science Program, added depth to the simplistic design.',
			designPhaseImages: ['design.webp'],
			developmentPhase:
				"In the development phase, LEAD team's technical acumen shone. They led the implementation of the database structure, user interfaces, and data retrieval mechanisms. The platform was engineered to provide real-time updates, ensuring that educators and students could access the most current information effortlessly.",
			developementPhaseImages: ['development.png'],
			final: `The collaborative efforts of the LEAD team culminated in a robust and efficient Student Information Management System. Users, whether students tracking their academic progress or educators managing classes, could easily access and update their data. The SIMS not only simplified data management but also showcased the capabilities of a dedicated group of 3rd-year Computer Science students under the banner of LEAD. Visitors to the website would discover a solution that addressed a significant academic challenge and exemplified the skills and dedication of the LEAD team of developers.`,
			finalPhaseImages: [
				'Final 1.png',
				'Final 2.png',
				'Final 3.png',
				'Final 4.png',
			],
		},
		{
			id: 'PUGS',
			title: 'Path Utility Guide System',
			association: 'School Project - Thesis',
			type: 'Android Application - Experimental (Research)',
			schema: 'MobileApplication',
			description:
				'An android application that can guide the user in their path by using Neural Networks Algorithms imbedded in the Application. It has a feature that can detect the objects spatial location, approximate distance, Danger Gauge and Object Class by using Neural Networks Algorithms imbedded in the Application.',
			wallpaper: 'wallpaper.webp',
			techs: ['Kotlin', 'Python', 'JavaScript', 'TensorFlow'],
			features: [
				{
					title: 'Object Detection',
					description: 'Detects the object in the camera.',
					image: 'placeholder.webp',
				},
				{
					title: 'Object Classification',
					description: 'Classifies the object in the camera.',
					image: 'placeholder.webp',
				},
				{
					title: 'Object Distance',
					description: 'Approximate the distance of the object in the camera.',
					image: 'placeholder.webp',
				},
			],
			coAuthors: [
				{
					name: 'Erolyn Andres',
					link: 'https://www.linkedin.com/in/erolyn-andres-7b0b41274/',
					photoLink:
						'erolyn.jpg',
					role: 'Documentation and Tester',
				},
			],
			reponsibility: 'Machine Learning Developer and Android Developer',
			projectBackground: 'In the dynamic landscape of experimental research within the realm of mobile applications, the Path Utility Guide System emerges as a pioneering endeavor. Developed as an Android application by a team of innovative researchers, this project seeks to address a pressing need for enhanced navigation and safety measures. Utilizing cutting-edge Neural Networks Algorithms embedded within the application, the system offers users a comprehensive guide along their path, leveraging advanced algorithms for spatial location detection, approximate distance estimation, danger assessment, and object classification. By seamlessly integrating these capabilities, the Path Utility Guide System aims to revolutionize user experiences, providing unparalleled assistance and safety in navigating diverse environments.',
			projectBackgroundImages: ['PUGS.webp', 'PUGS2.webp', 'PUGS3.webp'],
			challenges: "The challenges faced by the Path Utility Guide System were substantial and multifaceted. The complexity arose from the intricate nature of spatial navigation and safety within dynamic environments. Traditional navigation tools lacked the sophistication needed to accurately detect objects, assess dangers, and provide real-time guidance. Additionally, the integration of Neural Networks Algorithms presented its own set of challenges, including algorithm optimization, training data acquisition, and real-world applicability. Amidst these hurdles, ensuring the system's reliability, accuracy, and user-friendliness remained paramount. Thus, the need for innovative solutions capable of addressing these challenges with precision and efficiency became evident.",
			proposals: 'The researchers proposed the development of an advanced Path Utility Guide System (PUGS). The vision behind this project is to pioneer a mobile application that revolutionizes spatial navigation and safety protocols. By harnessing state-of-the-art technology, including Neural Networks Algorithms, our aim is to create a robust solution that goes beyond traditional navigation tools. PUGS will not only guide users along their paths but also provide crucial insights into object detection, danger assessment, and real-time guidance. Through seamless integration and intuitive user interfaces, PUGS promises to enhance user experiences while ensuring safety and efficiency in diverse environments.',
			proposalsImages: ['placeholder.webp', 'placeholder.webp', 'placeholder.webp'],
			coreSolution: 'Collaboration formed the cornerstone of the core solution for the Path Utility Guide System (PUGS). The development team meticulously crafted an intuitive mobile application accessible to all users, prioritizing ease of use and functionality. PUGS is intricately divided into distinct sections, facilitating seamless navigation and user interaction. Each section of the application is designed to comprehensively capture crucial data points, including spatial coordinates, object detection results, danger assessments, and real-time guidance updates. By leveraging a user-friendly interface and advanced algorithms, PUGS aims to redefine navigation and safety protocols, ensuring a streamlined and efficient user experience for all.',
			designPhase: '',
			designPhaseImages: ['placeholder.webp', 'placeholder.webp', 'placeholder.webp'],
			developmentPhase: '',
			developementPhaseImages: ['placeholder.webp', 'placeholder.webp', 'placeholder.webp'],
			final: '',
			finalPhaseImages: [
				'placeholder.webp',
				'placeholder.webp',
				'placeholder.webp',
			],
		},
		{
			id: 'Ecommerce_CMS',
			title: 'ECommerce CMS',
			association: 'Personal Project- Sample Demo for Full Stack Development',
			type: 'Web Application',
			schema: 'WebApplication',
			description:
				"I've crafted a Next.js E-Commerce CMS demo highlighting my full-stack skills.The frontend offers dynamic product listings, a smooth cart experience, synced perfectly with the Node.js backend. Expertise in APIs, security, and efficiency showcased.",
			wallpaper: 'Ecommerce_CMS.webp',
			techs: ['NextJS', 'MySQL', 'Prisma', 'Tailwind CSS', 'Stripe - Clerk'],
			features: [
				{
					title: 'Object Detection',
					description: 'Detects the object in the camera.',
					image: 'PUGS_Object_Detection.webp',
				},
				{
					title: 'Object Classification',
					description: 'Classifies the object in the camera.',
					image: 'PUGS_Object_Classification.webp',
				},
				{
					title: 'Object Distance',
					description: 'Approximate the distance of the object in the camera.',
					image: 'PUGS_Object_Distance.webp',
				},
			],
			coAuthors: [],
			reponsibility: 'Full Stack Developer',
			projectBackground: '',
			projectBackgroundImages: [
				'Ecommerce_CMS.webp',
				'Ecommerce_CMS2.webp',
				'Ecommerce_CMS3.webp',
			],
			challenges: '',
			proposals: '',
			proposalsImages: [
				'Ecommerce_CMS.webp',
				'Ecommerce_CMS2.webp',
				'Ecommerce_CMS3.webp',
			],
			coreSolution: '',
			designPhase: '',
			designPhaseImages: [
				'Ecommerce_CMS.webp',
				'Ecommerce_CMS2.webp',
				'Ecommerce_CMS3.webp',
			],
			developmentPhase: '',
			developementPhaseImages: [
				'Ecommerce_CMS.webp',
				'Ecommerce_CMS2.webp',
				'Ecommerce_CMS3.webp',
			],
			final: '',
			finalPhaseImages: [
				'Ecommerce_CMS.webp',
				'Ecommerce_CMS2.webp',
				'Ecommerce_CMS3.webp',
			],
		},
		{
			id: 'Ecommerce',
			title: 'ECommerce',
			association: 'Personal Project - Sample Demo for Full Stack Development',
			type: 'Web Application',
			schema: 'WebApplication',
			description:
				"I've created an E-Commerce store using Next.js.The frontend boasts dynamic product listings, an intuitive cart, and seamless API integration. Backed by a secure Node.js backend, it showcases my prowess in full - stack development for efficient and dynamic online shopping platforms.",
			wallpaper: 'Ecommerce.webp',
			techs: ['NextJS', 'Tailwind CSS', 'Stripe'],
			features: [
				{
					title: 'Object Detection',
					description: 'Detects the object in the camera.',
					image: 'PUGS_Object_Detection.webp',
				},
				{
					title: 'Object Classification',
					description: 'Classifies the object in the camera.',
					image: 'PUGS_Object_Classification.webp',
				},
				{
					title: 'Object Distance',
					description: 'Approximate the distance of the object in the camera.',
					image: 'PUGS_Object_Distance.webp',
				},
			],
			coAuthors: [],
			reponsibility: 'Full Stack Developer',
			projectBackground: '',
			projectBackgroundImages: [
				'Ecommerce.webp',
				'Ecommerce2.webp',
				'Ecommerce3.webp',
			],
			challenges: '',
			proposals: '',
			proposalsImages: ['Ecommerce.webp', 'Ecommerce2.webp', 'Ecommerce3.webp'],
			coreSolution: '',
			designPhase: '',
			designPhaseImages: [
				'Ecommerce.webp',
				'Ecommerce2.webp',
				'Ecommerce3.webp',
			],
			developmentPhase: '',
			developementPhaseImages: [
				'Ecommerce.webp',
				'Ecommerce2.webp',
				'Ecommerce3.webp',
			],
			final: '',
			finalPhaseImages: [
				'Ecommerce.webp',
				'Ecommerce2.webp',
				'Ecommerce3.webp',
			],
		},
	];

	return data;
};
