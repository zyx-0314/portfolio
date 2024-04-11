export interface ExperienceData {
	name: string;
	logo: string;
	description: string;
	email: string;
	content: string[];
}

export interface ProjectData {
	id: string;
	title: string;
	type: string;
	description: string;
	techs: string[];
	schema: string;
	wallpaper: string;
}

export interface FullProjectData extends ProjectData {
	association: string;
	features: FeatureData[];
	responsibility: string;
	projectBackground: string;
	projectBackgroundImages: string[];
	challenges: string;
	proposals: string;
	proposalsImages: string[];
	coreSolution: string;
	designPhase: string;
	designPhaseImages: string[];
	developmentPhase: string;
	developmentPhaseImages: string[];
	final: string;
	finalPhaseImages: string[];
	coAuthors: CoAuthorData[];
}

export interface FeatureData {
	title: string;
	description: string;
	image: string;
}

export interface CoAuthorData {
	name: string;
	link: string;
	photoLink: string;
	role: string;
}
