import { ExperienceData, ProjectData } from '@/types';

export const getAppContents = async () => {
	const data: {
		experience: ExperienceData[];
	} = {
		experience: [
			{
				name: 'Argon Software',
				logo: '/static/companies/Argon_Software.webp',
				description: 'Software Service Provider',
				email: 'https://argonsoftware.info/',
				content: [
					'March - June 2023 ( 4 Months )',
					'',
					'Software Engineering Intern',
					'',
					'- Develop a Front-End Website using NextJS/ReactJS',
					'- Designed and implemented a robust REST API using Laravel and MySQL, successfully facilitating seamless data storage and retrieval for improved system efficiency.',
					'- Executed SEO strategies, propelling website visibility to achieve a notable enhancement from a score of 80 to an impressive 100, base on PageSpeed Insight.',
					'- Leveraged Git and GitHub for seamless collaboration, harnessed Docker for streamlined application maintenance, and employed Insomnia/Postman for rigorous API testing, ensuring top-notch functionality and reliability.',
					'',
					'ReactJS / NextJS, TailWind CSS, Laravel, React Native, Docker, Git, Insomnia',
				],
			},
			{
				name: 'Far Eastern University - Institute of Technology',
				logo: '/static/companies/FEU_TECH.webp',
				description: 'Higher Education Institution',
				email: 'https://www.feutech.edu.ph/',
				content: [
					'October - Present',
					'',
					'Intructor I',
					'',
					'- Guiding students in mastering the fundamentals of programming through the C++ language, focusing on syntax, data structures, and control flow mechanisms.',
					'- Imparting knowledge on web development basics, covering essential concepts such as HTML, CSS, and JavaScript to build interactive websites.',
					'- Educating students on mobile development principles, using tools like React Native and Kotlin to create mobile applications with a focus on user experience and functionality.',
					'- Instilling algorithmic thinking in students through rigorous exercises and analysis, ensuring top-notch functionality and reliability in their code.',
					'',
					'C++, Web Basic, TailWind, GitHub, Kotlin',
				],
			},
		],
	};

	return data;
};
