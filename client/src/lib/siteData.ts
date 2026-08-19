// County Record Office style: structured, editable content for the Roblox ERLC community site.
export const siteSettings = {
  name: "1980's Springfield RP",
  location: 'Springfield County, America',
  era: '1980',
  members: '3,200+',
  discordUrl: 'https://discord.com',
  robloxUrl: 'https://www.roblox.com',
};

export const departments = [
  { name: 'Springfield Police Department', short: 'SPD', color: 'navy', emblem: 'SPD', description: 'Keeps the city streets covered, handles calls from local businesses, and gives patrol officers plenty to do on a normal shift.', leadership: 'Chief of Police · Administration Office', duties: ['Patrol operations', 'Traffic enforcement', 'Criminal investigations'], positions: 'Officer · Sergeant · Command Staff', recruitment: 'Accepting applications', application: '#applications' },
  { name: 'Springfield County Sheriff’s Office', short: 'SCSO', color: 'green', emblem: 'SCSO', description: 'Covers the roads outside town, works the courthouse, and handles the county calls that do not stop at city limits.', leadership: 'Sheriff’s Office · County Operations', duties: ['County patrol', 'Search and rescue', 'Court security'], positions: 'Deputy · Corporal · Supervisor', recruitment: 'Reviewing applicants', application: '#applications' },
  { name: 'Springfield Fire & Rescue', short: 'SFR', color: 'red', emblem: 'F&R', description: 'Answers fires, crashes, and rescue calls while keeping Station 1 ready for whatever the county sends its way.', leadership: 'Fire Chief · Station 1', duties: ['Fire response', 'Vehicle rescue', 'Public safety education'], positions: 'Firefighter · Engineer · Captain', recruitment: 'Accepting applications', application: '#applications' },
  { name: 'Emergency Medical Services', short: 'EMS', color: 'gold', emblem: 'EMS', description: 'Takes care of patients at the scene and gets them safely where they need to go across Springfield County.', leadership: 'EMS Director · Medical Operations', duties: ['Emergency care', 'Ambulance response', 'Hospital transfer'], positions: 'EMT · Paramedic · Field Supervisor', recruitment: 'Applications closed', application: '#applications' },
];

export const boardMembers = [
  { name: 'xDomMoretti', position: 'Founder', area: 'Executive Administration', bio: 'Sets the direction for the community, keeps the standards clear, and looks after the bigger picture.' },
  { name: 'Younus_20123', position: 'Co-Founder', area: 'Community Operations', bio: 'Helps keep sessions organized and makes sure new and returning members know where they fit.' },
  { name: 'WestThePilot', position: 'Assistant Founder', area: 'Experience Development', bio: 'Works on improvements that make the map, departments, and day-to-day experience better.' },
  { name: 'f14_t0mcatx', position: 'Co-Founder’s Assistant', area: 'Administration Office', bio: 'Keeps records in order and helps with the everyday admin work members actually see.' },
  { name: 'rip_exvirtyx2 & fearsomesnail31', position: 'Community Managers', area: 'Member Relations', bio: 'Help members find a department, settle into the community, and get more out of each session.' },
  { name: 'Treyhi123', position: 'Developer', area: 'Systems & Tools', bio: 'Keeps the website and supporting tools working so the community can focus on the roleplay.' },
];

export const roleplayTypes = [
  { number: '01', title: 'Law Enforcement', text: 'Work a patrol, answer calls, write reports, and see what a normal day turns into once the radio starts talking.', note: 'Structured departments · Recruitment varies' },
  { number: '02', title: 'Fire & Rescue', text: 'Take the truck out, work the scene, and learn how much easier a difficult call is when everyone does their part.', note: 'Station-based roleplay · Recruitment available' },
  { number: '03', title: 'Emergency Medical Services', text: 'Treat the patient, coordinate with fire and police, and handle the part of the call that happens between the roadside and the hospital.', note: 'Medical roleplay · Recruitment status posted' },
  { number: '04', title: 'Civilian Life', text: 'Go to work, run a shop, meet friends, attend an event, or make up your own reason to be out in the county.', note: 'Open to all players' },
  { number: '05', title: 'Communications', text: 'Answer the radio, sort the calls, and keep the people in the field pointed in the right direction.', note: 'Specialized opportunities · Check notices' },
  { number: '06', title: 'Business & Government', text: 'Run the places that make Springfield more than a backdrop: shops, offices, local government, and the people who keep them going.', note: 'Organized community roleplay' },
];

export const announcements = [
  { date: 'AUG 19, 1980', category: 'COMMUNITY NOTICE', title: 'The bulletin board is open', text: 'This is where we will post department notices, event reminders, and anything members need to know.' },
  { date: 'AUG 12, 1980', category: 'PUBLIC INFORMATION', title: 'Not sure where to start?', text: 'Have a look around the roleplay options first. It is easier to choose a department once you know what kind of shift you actually want.' },
  { date: 'AUG 02, 1980', category: 'ADMINISTRATION', title: 'Springfield works when people show up', text: 'The town stays busy because members bring ideas, staff keep things moving, and people give each session a little more life.' },
];

export const applications = [
  { department: 'Springfield Police Department', position: 'Police Officer', requirements: 'Read the handbook, come to orientation, and be ready to work professionally with the rest of the department.', status: 'Open' },
  { department: 'Springfield Fire & Rescue', position: 'Firefighter', requirements: 'Learn the station routine, work well with the crew, and take part in a practical session.', status: 'Open' },
  { department: 'Sheriff’s Office', position: 'County Deputy', requirements: 'Know what county patrol involves and be ready for a short interview with command staff.', status: 'Reviewing' },
];
