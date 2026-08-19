// Structured, editable content for the Roblox ERLC community website.
export const siteSettings = {
  name: "1980's Springfield RP",
  location: 'Springfield County, America',
  era: '1980',
  members: '3,200+',
  discordUrl: 'https://discord.com',
  robloxUrl: 'https://www.roblox.com',
};

export const departments = [
  { name: 'Springfield Police Department', short: 'SPD', color: 'navy', emblem: 'SPD', description: 'Works the city streets, answers calls, and deals with the everyday problems that come up on a patrol.', leadership: 'Chief of Police · Administration Office', duties: ['City patrol', 'Traffic stops', 'Investigations'], positions: 'Officer · Sergeant · Command Staff', recruitment: 'Accepting applications', application: '#applications' },
  { name: 'Springfield County Sheriff’s Office', short: 'SCSO', color: 'green', emblem: 'SCSO', description: 'Covers the county roads, handles calls outside the city, and provides security around the courthouse and other county buildings.', leadership: 'Sheriff’s Office · County Operations', duties: ['County patrol', 'Search and rescue', 'Court security'], positions: 'Deputy · Corporal · Supervisor', recruitment: 'Reviewing applicants', application: '#applications' },
  { name: 'Springfield Fire & Rescue', short: 'SFR', color: 'red', emblem: 'F&R', description: 'Responds to fires, crashes, and rescue calls. When there is no call, the crew keeps the station and equipment ready.', leadership: 'Fire Chief · Station 1', duties: ['Fire calls', 'Vehicle rescue', 'Safety visits'], positions: 'Firefighter · Engineer · Captain', recruitment: 'Accepting applications', application: '#applications' },
  { name: 'Emergency Medical Services', short: 'EMS', color: 'gold', emblem: 'EMS', description: 'Treats patients at the scene and takes care of the ambulance side of calls across Springfield County.', leadership: 'EMS Director · Medical Operations', duties: ['Patient care', 'Ambulance calls', 'Hospital transfer'], positions: 'EMT · Paramedic · Field Supervisor', recruitment: 'Applications closed', application: '#applications' },
];

export const boardMembers = [
  { name: 'xDomMoretti', position: 'Founder', area: 'Executive Administration', bio: 'Makes the final calls on the direction of the community and deals with the larger problems when they come up.' },
  { name: 'Younus_20123', position: 'Co-Founder', area: 'Community Operations', bio: 'Helps organize sessions, answers member questions, and works out where new people can get started.' },
  { name: 'WestThePilot', position: 'Assistant Founder', area: 'Experience Development', bio: 'Works on the map, department setup, and other changes that affect how sessions run.' },
  { name: 'f14_t0mcatx', position: 'Co-Founder’s Assistant', area: 'Administration Office', bio: 'Keeps track of admin work and helps handle the routine jobs that keep things from getting lost.' },
  { name: 'rip_exvirtyx2 & fearsomesnail31', position: 'Community Managers', area: 'Member Relations', bio: 'Help members find their place, answer questions, and step in when a community issue needs attention.' },
  { name: 'Treyhi123', position: 'Developer', area: 'Systems & Tools', bio: 'Maintains the website and the tools that support the community.' },
];

export const roleplayTypes = [
  { number: '01', title: 'Law Enforcement', text: 'Run patrol, answer calls, write reports, and deal with whatever starts on the radio while you are out on the road.', note: 'Department roleplay · Recruitment varies' },
  { number: '02', title: 'Fire & Rescue', text: 'Take the truck to calls, work with the crew, and handle fires, crashes, and rescue scenes around the county.', note: 'Station roleplay · Recruitment available' },
  { number: '03', title: 'Emergency Medical Services', text: 'Treat patients, work alongside fire and police, and get people from the scene to the hospital.', note: 'Medical roleplay · Check recruitment status' },
  { number: '04', title: 'Civilian Life', text: 'Go to work, run a shop, attend an event, meet friends, or make up a reason to be out in Springfield.', note: 'Open to all players' },
  { number: '05', title: 'Communications', text: 'Take the radio, sort calls, send the right units, and keep track of what is happening in the field.', note: 'Specialized roleplay · Check notices' },
  { number: '06', title: 'Business & Government', text: 'Run a store, work in an office, hold a local role, or help create the places civilians visit during a session.', note: 'Organized community roleplay' },
];

export const announcements = [
  { date: 'AUG 19, 1980', category: 'COMMUNITY NOTICE', title: 'Use the bulletin for updates', text: 'This is where staff will put session reminders, department notices, and changes members should know about.' },
  { date: 'AUG 12, 1980', category: 'PUBLIC INFORMATION', title: 'Start with the role you actually want', text: 'Read through the roleplay page before applying. It should help you decide whether you want department work, civilian scenes, or something else.' },
  { date: 'AUG 02, 1980', category: 'ADMINISTRATION', title: 'Sessions need people in them', text: 'The county is at its best when members bring a plan, talk to each other, and give the next person something to play off.' },
];

export const applications = [
  { department: 'Springfield Police Department', position: 'Police Officer', requirements: 'Read the department rules, attend orientation, and be ready to work with the rest of the patrol during a session.', status: 'Open' },
  { department: 'Springfield Fire & Rescue', position: 'Firefighter', requirements: 'Learn the station routine, listen to the crew, and take part in a practical session before working calls alone.', status: 'Open' },
  { department: 'Sheriff’s Office', position: 'County Deputy', requirements: 'Know what county patrol involves and be ready for a short interview with command staff.', status: 'Reviewing' },
];
