// Shared content for the Springfield 1980 Roleplay Roblox ERLC community.
export const siteSettings = {
  name: "1980's Springfield RP",
  location: 'Springfield County, America',
  era: '1980',
  members: '3,200+',
  discordUrl: 'https://discord.com',
  robloxUrl: 'https://www.roblox.com',
};

export const departments = [
  { name: 'Springfield Police Department', short: 'SPD', color: 'navy', emblem: 'SPD', description: 'Patrol the city, answer calls, and keep the streets moving.', leadership: 'Police Chief · Administration', duties: ['City patrol', 'Traffic stops', 'Investigations'], positions: 'Officer · Sergeant · Command', recruitment: 'Accepting applications', application: '#applications' },
  { name: 'Springfield County Sheriff’s Office', short: 'SCSO', color: 'green', emblem: 'SCSO', description: 'Cover the county roads, courthouse, and calls outside the city.', leadership: 'Sheriff · County Operations', duties: ['County patrol', 'Search and rescue', 'Court security'], positions: 'Deputy · Corporal · Supervisor', recruitment: 'Reviewing applicants', application: '#applications' },
  { name: 'Springfield Fire & Rescue', short: 'SFR', color: 'red', emblem: 'F&R', description: 'Take the truck to fires, crashes, and rescue calls.', leadership: 'Fire Chief · Station 1', duties: ['Fire calls', 'Vehicle rescue', 'Safety visits'], positions: 'Firefighter · Engineer · Captain', recruitment: 'Accepting applications', application: '#applications' },
  { name: 'Emergency Medical Services', short: 'EMS', color: 'gold', emblem: 'EMS', description: 'Treat patients and handle ambulance calls across the county.', leadership: 'EMS Director · Medical Operations', duties: ['Patient care', 'Ambulance calls', 'Hospital transfer'], positions: 'EMT · Paramedic · Field Supervisor', recruitment: 'Applications closed', application: '#applications' },
];

export const boardMembers = [
  { name: 'xDomMoretti', position: 'Founder', area: 'Executive Administration', bio: 'Sets the direction for the community and handles the big calls.' },
  { name: 'Younus_20123', position: 'Co-Founder', area: 'Community Operations', bio: 'Organizes sessions and helps new members get started.' },
  { name: 'WestThePilot', position: 'Assistant Founder', area: 'Experience Development', bio: 'Works on the map, departments, and session setup.' },
  { name: 'f14_t0mcatx', position: 'Co-Founder’s Assistant', area: 'Administration Office', bio: 'Keeps routine admin work organized.' },
  { name: 'rip_exvirtyx2 & fearsomesnail31', position: 'Community Managers', area: 'Member Relations', bio: 'Help members find a role and sort out community issues.' },
  { name: 'Treyhi123', position: 'Developer', area: 'Systems & Tools', bio: 'Maintains the website and community tools.' },
];

export const roleplayTypes = [
  { number: '01', title: 'Law Enforcement', text: 'Patrol, answer calls, write reports, and see what comes over the radio.', note: 'Department roleplay · Recruitment varies' },
  { number: '02', title: 'Fire & Rescue', text: 'Run calls with the crew and handle fires, crashes, and rescues.', note: 'Station roleplay · Recruitment available' },
  { number: '03', title: 'Emergency Medical Services', text: 'Treat patients and get people from the scene to the hospital.', note: 'Medical roleplay · Check recruitment status' },
  { number: '04', title: 'Civilian Life', text: 'Go to work, run a shop, attend an event, or make your own reason to be out.', note: 'Open to all players' },
  { number: '05', title: 'Communications', text: 'Run the radio, sort calls, and keep field units on the same page.', note: 'Specialized roleplay · Check notices' },
  { number: '06', title: 'Business & Government', text: 'Run a store, work in an office, or build the places civilians visit.', note: 'Organized community roleplay' },
];

export const announcements = [
  { date: 'AUG 19, 1980', category: 'COMMUNITY NOTICE', title: 'Check here for updates', text: 'Staff will post session reminders, department notices, and changes here.' },
  { date: 'AUG 12, 1980', category: 'PUBLIC INFORMATION', title: 'Pick your role first', text: 'Look through the roleplay page before applying so you know what you want to play.' },
  { date: 'AUG 02, 1980', category: 'ADMINISTRATION', title: 'Bring something to the session', text: 'A plan, a job, or a simple scene gives everyone else something to play off.' },
];

export const applications = [
  { department: 'Springfield Police Department', position: 'Police Officer', requirements: 'Read the rules, attend orientation, and be ready to work patrol with the team.', status: 'Open' },
  { department: 'Springfield Fire & Rescue', position: 'Firefighter', requirements: 'Learn the station routine and take part in a practical session.', status: 'Open' },
  { department: 'Sheriff’s Office', position: 'County Deputy', requirements: 'Know what county patrol involves and be ready for a short interview.', status: 'Reviewing' },
];
