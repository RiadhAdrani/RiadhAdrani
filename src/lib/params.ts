import { EmploymentType, Technologies, Assets, type SkillsParams } from './utils';
import type {
	CareerParams,
	HomeParams,
	NavBarParams,
	PersonalProjectsParams,
	ResumePageParams
} from './utils';

export const PortfolioTitle = 'Slick template with Svelte';

export const NavBar: NavBarParams = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experience',
	resume: 'Resume',
	skills: 'My Skills'
};

export const Home: HomeParams = {
	title: 'Home Page',
	name: 'Riadh',
	lastName: 'ADRANI',
	description: 'A self-made developer based in Tunisia.',
	links: {
		github: 'https://github.com/RiadhAdrani',
		linkedin: 'https://www.linkedin.com/in/riadh-adrani/',
		stackoverflow: 'https://stackoverflow.com/users/12978534/riadh-adrani'
	},
	skills: [
		Technologies.TypeScript,
		Technologies.Dart,
		Technologies.Kotlin,
		Technologies.NodeJs,
		Technologies.Deno,
		Technologies.ReactJs,
		Technologies.Svelte,
		Technologies.VueJs,
		Technologies.Angular,
		Technologies.Flutter,
		Technologies.Electron,
		Technologies.Fastify,
		Technologies.MongoDB,
		Technologies.PostgreSQL,
		Technologies.Redis
	]
};

export const PersonalProjects: PersonalProjectsParams = {
	title: 'Personal Projects',
	items: [
		{
			color: '#5cad47',
			name: 'Dom Control',
			logo: Assets.NodeJs,
			description: 'Create and manipulate DOM elements.',
			period: { from: new Date(2022, 9, 28) },
			links: [
				{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/dom-control-js' },
				{ label: 'NPM', to: 'https://www.npmjs.com/package/@riadh-adrani/dom-control-js' },
				{ label: 'Docs', to: 'https://riadhadrani.github.io/dom-control-js/' }
			],
			technologies: [Technologies.TypeScript, Technologies.NodeJs],
			type: 'JavaScript library'
		},
		{
			color: '#fbb03b',
			name: 'Werewolves',
			logo: Assets.Werewolves1,
			description:
				'An app to manage your game of Loup garous de thiercelieu also known as The Werewolves of Millers Hollow.',
			period: { from: new Date(2022, 6, 23) },
			links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/werewolves' }],
			technologies: [Technologies.Dart, Technologies.Flutter],
			type: 'Mobile App'
		},
		{
			color: '#ff3e00',
			name: 'Portfolio',
			logo: Assets.Unknown,
			description: 'My personal website portfolio.',
			period: { from: new Date(2021, 3, 1) },
			links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/RiadhAdrani' }],
			technologies: [
				Technologies.TypeScript,
				Technologies.NodeJs,
				Technologies.Svelte,
				Technologies.Sass
			],
			type: 'Website'
		},
		{
			color: '#cf2026',
			name: 'Recursive',
			logo: Assets.Recursive,
			description:
				'Recursive is an ongoing project that allow developers to build a functional, component-based, Javascript only, beautiful and interactive Web applications.',
			period: { from: new Date(2021, 8, 1), to: new Date(2022, 11, 26) },
			links: [
				{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/recursive' },
				{ label: 'NPM', to: 'https://www.npmjs.com/package/@riadh-adrani/recursive' }
			],
			technologies: [Technologies.JavaScript, Technologies.NodeJs],
			type: 'UI Framework'
		},
		{
			color: '#5cad47',
			name: 'Utility Js',
			logo: Assets.NodeJs,
			description: 'My JavaScript utility functions and types.',
			period: { from: new Date(2022, 8, 1) },
			links: [
				{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/utility-js' },
				{ label: 'NPM', to: 'https://www.npmjs.com/package/@riadh-adrani/utility-js' }
			],
			technologies: [Technologies.TypeScript, Technologies.NodeJs],
			type: 'JavaScript library'
		},
		{
			color: '#518ac8',
			name: 'Solid GitHub',
			logo: Assets.SolidJs,
			description:
				'Web app that retrieves repositories from GitHub and displaying them with the ability to be saved and persisted in the local storage.',
			period: { from: new Date(2022, 10, 1), to: new Date(2022, 10, 10) },
			links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/solid-github' }],
			technologies: [Technologies.TypeScript, Technologies.NodeJs, Technologies.SolidJs],
			type: 'Web App'
		},
		{
			name: 'Trollo',
			type: 'Web App',
			logo: Assets.Trello,
			color: '#065ad4',
			period: { from: new Date(2022, 10, 1), to: new Date(2022, 10, 10) },
			links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/trollo' }],
			description:
				'Trollo is a Trello clone, intended to showcase recursive and recursive-web compatibility with Typescript as of version 0.8.0.',
			technologies: [Technologies.TypeScript, Technologies.NodeJs, Technologies.Recursive]
		},
		{
			name: 'Gradio',
			type: 'Web App',
			logo: Assets.Gradio,
			color: '#52bffa',
			period: { from: new Date(2022, 9, 1), to: new Date(2022, 9, 10) },
			links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/gradio' }],
			description:
				'A web application used to create and generate gradient background for css usage.',
			technologies: [
				Technologies.TypeScript,
				Technologies.NodeJs,
				Technologies.Quasar,
				Technologies.VueJs,
				Technologies.Sass
			]
		},
		{
			name: 'Card Baker',
			type: 'Web App',
			logo: Assets.CardBaker,
			color: '#52bffa',
			period: { from: new Date(2022, 7, 1), to: new Date(2022, 7, 10) },
			links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/card-baker' }],
			description: 'Create "Yu-Gi-Oh" styled game cards.',
			technologies: [Technologies.JavaScript, Technologies.NodeJs, Technologies.Recursive]
		},
		{
			name: 'Random Name Picker',
			type: 'Android App',
			logo: Assets.RandomNamePicker,
			color: '#64c6c5',
			period: { from: new Date(2022, 7, 1), to: new Date(2022, 7, 10) },
			links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/random-name-picker' }],
			description:
				'An android application used to create lists for random name picking. Lists and user preferences are saved',
			technologies: [Technologies.Android, Technologies.Kotlin]
		},
		{
			name: 'WeTube',
			type: 'Web App',
			logo: Assets.WeTube,
			color: '#00b0fa',
			period: { from: new Date(2022, 6, 1), to: new Date(2022, 6, 10) },
			links: [
				{ label: 'GitHub (Backend)', to: 'https://github.com/RiadhAdrani/wetube-be' },
				{ label: 'GitHub (Frontend)', to: 'https://github.com/RiadhAdrani/wetube-fe' }
			],
			description:
				'Another clone added to the list of clones that I made using my own framework Recursive for the web, and as you guessed it, its a Youtube clone.',
			technologies: [
				Technologies.JavaScript,
				Technologies.NodeJs,
				Technologies.Recursive,
				Technologies.ExpressJs,
				Technologies.PostgreSQL
			]
		},
		{
			name: 'Audiphy',
			type: 'Desktop App',
			logo: Assets.Audiphy,
			color: '#3083f6',
			period: { from: new Date(2022, 5, 1), to: new Date(2022, 6, 10) },
			links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/audiphy' }],
			description:
				'A simple audio player for Windows. Audiphy is intended to be a Spotify clone, but turned out to be an audio player for Windows OS.',
			technologies: [
				Technologies.JavaScript,
				Technologies.NodeJs,
				Technologies.Recursive,
				Technologies.Electron
			]
		},
		{
			name: 'Wroddit',
			type: 'Web App',
			logo: Assets.Wroddit,
			color: '#E9ECEF',
			period: { from: new Date(2022, 4, 1), to: new Date(2022, 4, 10) },
			links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/wroddit' }],
			description: 'Reddit clone made using Recursive.js for front-end and Firebase as a database.',
			technologies: [
				Technologies.JavaScript,
				Technologies.NodeJs,
				Technologies.Recursive,
				Technologies.Firebase
			]
		},
		{
			name: 'Dwidder',
			type: 'Web App',
			logo: Assets.Dwidder,
			color: '#1e9eae',
			period: { from: new Date(2022, 2, 1), to: new Date(2022, 3, 10) },
			links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/dwidde' }],
			description:
				'Dwidder is a twitter clone made to showcase the potential of Recursive.js. The name came originally from a tunisian meal called Dwida as I was developping the app.',
			technologies: [
				Technologies.JavaScript,
				Technologies.NodeJs,
				Technologies.Recursive,
				Technologies.Firebase
			]
		},
		{
			name: 'Question Submission',
			type: 'Web App',
			logo: Assets.QuestionSubmission,
			color: '#ffde16',
			period: { from: new Date(2021, 6, 1), to: new Date(2021, 7, 10) },
			links: [
				{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/guess-app-questions-submission' }
			],
			description:
				'A website that allow users to submit their questions and answers for a possible game app.',
			technologies: [
				Technologies.JavaScript,
				Technologies.NodeJs,
				Technologies.VueJs,
				Technologies.Firebase
			]
		},
		{
			name: 'Azur City',
			type: 'Android App',
			logo: Assets.Azur,
			color: '#01acc8',
			period: { from: new Date(2021, 1, 1), to: new Date(2021, 4, 10) },
			links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/azur_app' }],
			description:
				'A prototype of a commercial app made for Azur City. The App was presented as an End of studies projects.',
			technologies: [Technologies.Android, Technologies.Kotlin]
		},
		{
			name: 'Werewolves',
			type: 'Android App',
			logo: Assets.Werewolves1,
			color: '#fbb03b',
			period: { from: new Date(2021, 0, 1), to: new Date(2021, 5, 10) },
			links: [
				{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/werewolves_of_the_millers_hollow' }
			],
			description:
				'Creating a guide for the game "Werewolves of The Millers Hollow" originally "Les loups garous de Thierclieux".',
			technologies: [Technologies.Android, Technologies.Kotlin]
		},
		{
			name: 'Color Noter',
			type: 'Cross platform App',
			logo: Assets.ColorNoter,
			color: '#8cacb9',
			period: { from: new Date(2020, 8, 1), to: new Date(2020, 9, 10) },
			links: [
				{ label: 'GitHub (Android)', to: 'https://github.com/RiadhAdrani/color_note_plus' },
				{ label: 'GitHub (Desktop)', to: 'https://github.com/RiadhAdrani/color_noter-desktop' },
				{ label: 'GitHub (Web)', to: 'https://github.com/RiadhAdrani/color_noter-web' }
			],
			description:
				'Color Noter is a color based note taking app that offer the user the ability to write and save his ideas and todos in an easy to use environment.',
			technologies: [
				Technologies.Android,
				Technologies.Java,
				Technologies.Electron,
				Technologies.NodeJs,
				Technologies.ReactJs,
				Technologies.Recursive,
				Technologies.Firebase
			]
		}
	]
};

export const ProfessionalCareerParams: CareerParams = {
	title: 'Professional Experience',
	items: [
		{
			title: 'Fullstack Developer',
			company: {
				name: 'HSTECH',
				logo: Assets.HsTech
			},
			description: '',
			employmentType: EmploymentType.FullTime,
			industry: 'Software Development',
			location: 'Remote, Tunisia',
			period: { from: new Date(2022, 9, 3) },
			skills: [
				Technologies.Deno,
				Technologies.TypeScript,
				Technologies.NodeJs,
				Technologies.Svelte,
				Technologies.Quasar,
				Technologies.VueJs,
				Technologies.Nuxt,
				Technologies.ReactJs,
				Technologies.Sass,
				Technologies.Tailwind,
				Technologies.Redis,
				Technologies.MongoDB
			]
		},
		{
			title: 'Software Development Freelancer',
			company: {
				name: 'Self-employed',
				logo: Assets.Unknown
			},
			description:
				'Creating Mobile and Web Apps for customers using various technologies like "Xamarin", "Native Android", "React" ...',
			employmentType: EmploymentType.Freelance,
			industry: 'Software Development',
			location: 'Tunisia',
			period: { from: new Date(2021, 10, 1), to: new Date(2022, 5, 16) },
			skills: [
				Technologies.JavaScript,
				Technologies.NodeJs,
				Technologies.ReactJs,
				Technologies.Android,
				Technologies.Kotlin,
				Technologies.Firebase,
				Technologies.Xamarin,
				Technologies.Csharp
			]
		},
		{
			title: 'Web Designer',
			company: {
				name: 'TriWeb',
				logo: Assets.TriWeb
			},
			description:
				'My job consisted of designing (Using Adobe Photoshop and Illustrator) the graphical charter of turnkey websites and integrating them with the help of a custom CMS made for TriWeb.',
			employmentType: EmploymentType.FullTime,
			industry: 'UI Design',
			location: 'Tunis, Tunisia',
			period: { from: new Date(2021, 4, 1), to: new Date(2021, 11, 12) },
			skills: [
				Technologies.HTML,
				Technologies.CSS,
				Technologies.JavaScript,
				Technologies.Photoshop,
				Technologies.Illustrator
			]
		},
		{
			title: 'Graphic Designer',
			company: {
				name: 'Self-employed',
				logo: Assets.Unknown
			},
			description:
				'Designing graphics for small startups and companies, Creating logos, posters ... etc',
			employmentType: EmploymentType.Freelance,
			industry: 'Graphic Design',
			location: 'Tunisia',
			period: { from: new Date(2020, 5, 1), to: new Date(2021, 11, 12) },
			skills: [
				Technologies.Photoshop,
				Technologies.AfterEffects,
				Technologies.Illustrator,
				Technologies.Premiere
			]
		},
		{
			title: 'Intern',
			company: {
				name: 'Brain Academy Tunisia',
				logo: Assets.BrainAcademy
			},
			description:
				'We developed the prototype of "SMARTchair" which is an EEG controlled wheelchair. Using our skills was not enough, so it was imminent for us to learn and get used to many other programming languages, software and even new operating systems. The project was defended the 19th of July 2020 and got "Very Good" as honor.',
			employmentType: EmploymentType.Internship,
			industry: 'Robotics',
			location: 'Ben Arous, Tunisia',
			period: { from: new Date(2020, 0, 1), to: new Date(2020, 6, 19) },
			skills: [Technologies.Python]
		}
	]
};

export const MySkillsParams: SkillsParams = {
	skills: [
		{
			technology: Technologies.JavaScript,
			description: 'I think I unlocked all Javascript and have almost 100% achievement.'
		},
		{
			technology: Technologies.TypeScript,
			description:
				'Being a fanatic in the JavaScript land made the transition to TypeScript easier.'
		}
	],
	title: 'My Skills'
};

export const ResumeParams: ResumePageParams = {
	title: 'Resumé',
	cv: ''
};
