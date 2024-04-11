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
			responsibility: 'Full Stack Developer',
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
			developmentPhaseImages: ['development.png'],
			final: `The collaborative efforts of the LEAD team culminated in a robust and efficient Student Information Management System. Users, whether students tracking their academic progress or educators managing classes, could easily access and update their data. The SIMS not only simplified data management but also showcased the capabilities of a dedicated group of 3rd-year Computer Science students under the banner of LEAD. Visitors to the website would discover a solution that addressed a significant academic challenge and exemplified the skills and dedication of the LEAD team of developers.`,
			finalPhaseImages: [
				'Final 1.png',
				'Final 2.png',
				'Final 3.png',
				'Final 4.png',
			],
		},
		// {
		// 	id: 'PUGS',
		// 	title: 'Path Utility Guide System (PUGS)',
		// 	association: 'School Project - Thesis',
		// 	type: 'Android Application - Experimental (Research)',
		// 	schema: 'MobileApplication',
		// 	description:
		// 		'An android application that can guide the user in their path by using Neural Networks Algorithms imbedded in the Application. It has a feature that can detect the objects spatial location, approximate distance, Danger Gauge and Object Class by using Neural Networks Algorithms imbedded in the Application.',
		// 	wallpaper: 'wallpaper.webp',
		// 	techs: ['Kotlin', 'Python', 'JavaScript', 'TensorFlow'],
		// 	features: [
		// 		{
		// 			title: 'Object Detection',
		// 			description: 'Detects the object in the camera.',
		// 			image: 'Detection.webp',
		// 		},
		// 		{
		// 			title: 'Object Classification',
		// 			description: 'Classifies the object in the camera.',
		// 			image: 'placeholder.webp',
		// 		},
		// 		{
		// 			title: 'Object Distance',
		// 			description: 'Approximate the distance of the object in the camera.',
		// 			image: 'placeholder.webp',
		// 		},
		// 	],
		// 	coAuthors: [
		// 		{
		// 			name: 'Erolyn Andres',
		// 			link: 'https://www.linkedin.com/in/erolyn-andres-7b0b41274/',
		// 			photoLink:
		// 				'erolyn.jpg',
		// 			role: 'Documentation and Tester',
		// 		},
		// 	],
		// 	responsibility: 'Machine Learning Developer and Android Developer',
		// 	projectBackground: 'In the dynamic landscape of experimental research within the realm of mobile applications and artificial intelligence, the Path Utility Guide System emerges as a pioneering endeavor. Developed as an Android application by a team of innovative researchers, this project seeks to address a pressing need for enhanced navigation and safety measures for BVI(Blind and Visually Impaired). Utilizing cutting-edge Neural Networks Algorithms embedded within the application, the system offers users a comprehensive guide along their path, leveraging advanced algorithms for spatial location detection, approximate distance estimation, danger assessment, and object classification. By seamlessly integrating these capabilities, the Path Utility Guide System aims to revolutionize user experiences, providing assistance and safety in navigating their environments.',
		// 	projectBackgroundImages: ['placeholder.webp', 'placeholder.webp', 'placeholder.webp'],
		// 	challenges: "The challenges faced by the Path Utility Guide System were substantial and multifaceted. The complexity arose from the intricate nature of spatial navigation and safety within dynamic environments. Traditional navigation tools lacked the sophistication needed to accurately detect objects, assess dangers, and provide real-time guidance. Additionally, the integration of Neural Networks Algorithms presented its own set of challenges, including algorithm optimization, training data acquisition, and real-world applicability. Amidst these hurdles, ensuring the system's reliability, accuracy, and user-friendliness remained paramount. Thus, the need for innovative solutions capable of addressing these challenges with precision and efficiency became evident.",
		// 	proposals: 'The researchers proposed the development of an advanced Path Utility Guide System (PUGS). The vision behind this project is to pioneer a mobile application that revolutionizes spatial navigation and safety protocols. By harnessing state-of-the-art technology, including Neural Networks Algorithms, our aim is to create a robust solution that goes beyond traditional navigation tools. PUGS will not only guide users along their paths but also provide crucial insights into object detection, danger assessment, and real-time guidance. Through seamless integration and intuitive user interfaces, PUGS promises to enhance user experiences while ensuring safety and efficiency in diverse environments.',
		// 	proposalsImages: ['proposal.png'],
		// 	coreSolution: 'Collaboration formed the cornerstone of the core solution for the Path Utility Guide System (PUGS). The development team meticulously crafted an intuitive mobile application accessible to all users, prioritizing ease of use and functionality. PUGS is intricately divided into distinct sections, facilitating seamless navigation and user interaction. Each section of the application is designed to comprehensively capture crucial data points, including spatial location, object detection results, danger assessments, and real-time guidance updates. By leveraging a user-friendly interface and advanced algorithms, PUGS aims to redefine navigation and safety protocols, ensuring a streamlined and efficient user experience for all.',
		// 	designPhase: "During the design phase, the PUGS development team prioritized crafting a clean and intuitive user interface (UI) that enhances user experience. Drawing inspiration from the project's affiliation with cutting-edge technology, a sleek and modern design approach was adopted. The color scheme chosen reflects the project's identity.Attention to detail was paramount, ensuring that every element of the interface contributes to a cohesive and user-friendly experience, aligning seamlessly with the objectives of the Path Utility Guide System.",
		// 	designPhaseImages: ['Design-collage.webp'],
		// 	developmentPhase: "During the development phase of the Path Utility Guide System (PUGS), the researchers technical expertise was instrumental in bringing the project to fruition. They spearheaded the implementation of the system's architecture, including the user interfaces, and data retrieval mechanisms. By leveraging cutting-edge technologies and best practices, the platform was engineered to deliver real-time updates, enabling seamless access to the most current information for both educators and students alike. Rigorous testing and optimization were conducted throughout the development process to ensure the system's reliability, performance, and scalability met the highest standards.",
		// 	developmentPhaseImages: ['placeholder.webp', 'placeholder.webp', 'placeholder.webp'],
		// 	final: "The collaborative efforts of the PUGS development team culminated in the creation of a robust and innovative Path Utility Guide System. Users, whether navigating their paths or seeking safety information, can effortlessly access real-time updates and guidance. PUGS not only simplifies navigation but also showcases the capabilities of a dedicated team of researchers and developers. Visitors to the application experience a solution that addresses critical challenges in spatial navigation and safety, exemplifying the skills and dedication of the PUGS development team.",
		// 	finalPhaseImages: [
		// 		'placeholder.webp',
		// 		'placeholder.webp',
		// 		'placeholder.webp',
		// 	],
		// },
		// {
		// 	id: 'Ecommerce_CMS',
		// 	title: 'ECommerce CMS',
		// 	association: 'Personal Project- Sample Demo for Full Stack Development',
		// 	type: 'Web Application',
		// 	schema: 'WebApplication',
		// 	description:
		// 		"I've crafted a Next.js E-Commerce CMS demo highlighting my full-stack skills.The frontend offers dynamic product listings, a smooth cart experience, synced perfectly with the Node.js backend. Expertise in APIs, security, and efficiency showcased.",
		// 	wallpaper: 'Ecommerce_CMS.webp',
		// 	techs: ['NextJS', 'MySQL', 'Prisma', 'Tailwind CSS', 'Stripe - Clerk'],
		// 	features: [
		// 		{
		// 			title: 'Data Management',
		// 			description: 'Collect Basic School Information and manage the student information of a school.',
		// 			image: 'placeholder.webp',
		// 		},
		// 		{
		// 			title: 'Class Management',
		// 			description: 'Collate the class information.',
		// 			image: 'placeholder.webp',
		// 		},
		// 		{
		// 			title: 'Achievement Management',
		// 			description: 'Manage the achievements of the students.',
		// 			image: 'placeholder.webp',
		// 		},
		// 	],
		// 	coAuthors: [],
		// 	responsibility: 'Full Stack Developer',
		// 	projectBackground: 'In the fast-paced world of online commerce, a pressing challenge emerged for developers—a need for an agile and comprehensive E-Commerce Content Management System (CMS). Recognizing this demand, a team of skilled developers embarked on a mission to create a dynamic solution. As experts in web development and full-stack architecture, they aimed to revolutionize the digital shopping experience. Their focus: seamless product management, intuitive user interfaces, and robust backend functionality.',
		// 	projectBackgroundImages: [
		// 		'placeholder.webp',
		// 		'placeholder.webp',
		// 		'placeholder.webp',
		// 	],
		// 	challenges: 'The challenges facing the development of the E-Commerce CMS were both evident and substantial. The sheer magnitude of product data and transactions posed a daunting task for traditional management methods. Inadequate systems often resulted in data discrepancies and operational bottlenecks, hindering the efficiency of online stores. Moreover, with the ever-evolving nature of e-commerce and consumer preferences, a more adaptable and comprehensive solution was urgently required to meet the dynamic demands of the market.',
		// 	proposals: 'I propose the creation of an innovative E-Commerce Content Management System (CMS) to address the evolving needs of online businesses. My vision is to craft a versatile web-based platform that not only simplifies product management but also offers valuable analytics and insights into customer behavior and market trends. By leveraging modern technologies and best practices in web development, this CMS will empower businesses to efficiently manage their online stores while gaining actionable intelligence to enhance their e-commerce strategies and drive growth.',
		// 	proposalsImages: [
		// 		'placeholder.webp',
		// 		'placeholder.webp',
		// 		'placeholder.webp',
		// 	],
		// 	coreSolution: 'Flexibility and adaptability are paramount to the core solution of the E-Commerce CMS. The platform is meticulously crafted to accommodate the diverse needs of online businesses, offering a user-friendly interface accessible to both administrators and customers. With a modular design approach, the CMS is divided into distinct sections, ensuring ease of navigation and seamless management of products, orders, and customer interactions. Additionally, the system is engineered to comprehensively capture and analyze crucial data points, including sales metrics, customer preferences, and market trends, empowering businesses to make informed decisions and stay ahead in the competitive e-commerce landscape.',
		// 	designPhase: "During the design phase of the E-Commerce CMS, I prioritize creating a clean and intuitive user interface that enhances the user experience.",
		// 	designPhaseImages: [
		// 		'placeholder.webp',
		// 		'placeholder.webp',
		// 		'placeholder.webp',
		// 	],
		// 	developmentPhase: "During the development phase of the E-Commerce CMS, my technical expertise is instrumental in realizing the project vision. I lead the implementation of the system's architecture, focusing on user interfaces, database management, and data retrieval mechanisms. By leveraging the latest technologies and adhering to best practices in web development, the platform is engineered to provide seamless navigation and efficient management of product data and transactions. Rigorous testing and optimization are conducted iteratively to ensure the system's reliability, performance, and scalability meet industry standards. Additionally, real-time updates are integrated to enable users, including administrators and customers, to access the most current information effortlessly, enhancing their overall experience with the E-Commerce CMS.",
		// 	developmentPhaseImages: [
		// 		'placeholder.webp',
		// 		'placeholder.webp',
		// 		'placeholder.webp',
		// 	],
		// 	final: 'The culmination of my efforts in developing the E-Commerce CMS results in a robust and innovative solution tailored to meet the diverse needs of online businesses. Users, whether managing their product listings or making purchases, can effortlessly navigate the platform and access real-time updates. This CMS not only streamlines e-commerce operations but also showcases my capabilities as a skilled developer. Visitors to the platform experience a seamless and intuitive solution that addresses critical challenges in online commerce, highlighting my dedication to delivering high-quality solutions in the digital realm.',
		// 	finalPhaseImages: [
		// 		'placeholder.webp',
		// 		'placeholder.webp',
		// 		'placeholder.webp',
		// 	],
		// },
	];

	return data;
};
