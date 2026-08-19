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
  { name: 'Springfield Police Department', short: 'SPD', color: 'navy', emblem: 'SPD', description: 'Municipal law enforcement serving Springfield streets, neighborhoods, and local businesses.', leadership: 'Chief of Police · Administration Office', duties: ['Patrol operations', 'Traffic enforcement', 'Criminal investigations'], positions: 'Officer · Sergeant · Command Staff', recruitment: 'Accepting applications', application: '#applications' },
  { name: 'Springfield County Sheriff’s Office', short: 'SCSO', color: 'green', emblem: 'SCSO', description: 'County-wide public safety, rural patrol, courthouse security, and regional response.', leadership: 'Sheriff’s Office · County Operations', duties: ['County patrol', 'Search and rescue', 'Court security'], positions: 'Deputy · Corporal · Supervisor', recruitment: 'Reviewing applicants', application: '#applications' },
  { name: 'Springfield Fire & Rescue', short: 'SFR', color: 'red', emblem: 'F&R', description: 'Fire suppression, rescue response, and the everyday work of keeping Springfield prepared.', leadership: 'Fire Chief · Station 1', duties: ['Fire response', 'Vehicle rescue', 'Public safety education'], positions: 'Firefighter · Engineer · Captain', recruitment: 'Accepting applications', application: '#applications' },
  { name: 'Emergency Medical Services', short: 'EMS', color: 'gold', emblem: 'EMS', description: 'Emergency medical crews providing patient care and transport across the county.', leadership: 'EMS Director · Medical Operations', duties: ['Emergency care', 'Ambulance response', 'Hospital transfer'], positions: 'EMT · Paramedic · Field Supervisor', recruitment: 'Applications closed', application: '#applications' },
];

export const boardMembers = [
  { name: 'xDomMoretti', position: 'Founder', area: 'Executive Administration', bio: 'Responsible for the organization’s direction, standards, and long-term community stewardship.' },
  { name: 'Younus_20123', position: 'Co-Founder', area: 'Community Operations', bio: 'Supports server operations and helps maintain a consistent, welcoming roleplay environment.' },
  { name: 'WestThePilot', position: 'Assistant Founder', area: 'Experience Development', bio: 'Coordinates experience improvements and keeps Springfield’s setting moving in the right direction.' },
  { name: 'f14_t0mcatx', position: 'Co-Founder’s Assistant', area: 'Administration Office', bio: 'Assists with internal organization, records, and community-facing administration.' },
  { name: 'rip_exvirtyx2 & fearsomesnail31', position: 'Community Managers', area: 'Member Relations', bio: 'Help members find their place in Springfield and support departments across the community.' },
  { name: 'Treyhi123', position: 'Developer', area: 'Systems & Tools', bio: 'Maintains the digital systems that support the experience and its community operations.' },
];

export const roleplayTypes = [
  { number: '01', title: 'Law Enforcement', text: 'Patrol the city and county, respond to calls, investigate incidents, and build the everyday rhythm of public safety.', note: 'Structured departments · Recruitment varies' },
  { number: '02', title: 'Fire & Rescue', text: 'Answer alarms, manage scenes, operate apparatus, and take part in the teamwork that makes emergency response feel real.', note: 'Station-based roleplay · Recruitment available' },
  { number: '03', title: 'Emergency Medical Services', text: 'Provide patient care, coordinate with responders, and bring a human story to the moments between the call and the hospital.', note: 'Medical roleplay · Recruitment status posted' },
  { number: '04', title: 'Civilian Life', text: 'Run errands, work a shift, manage a business, attend local events, or simply make a life in Springfield County.', note: 'Open to all players' },
  { number: '05', title: 'Communications', text: 'Keep the county connected through dispatch, radio traffic, call handling, and the decisions that shape each shift.', note: 'Specialized opportunities · Check notices' },
  { number: '06', title: 'Business & Government', text: 'Build the public and private institutions that give the town a reason to exist beyond the next emergency call.', note: 'Organized community roleplay' },
];

export const announcements = [
  { date: 'AUG 19, 1980', category: 'COMMUNITY NOTICE', title: 'The Springfield Bulletin is now open', text: 'Check this board for department notices, community events, and updates from the administration office.' },
  { date: 'AUG 12, 1980', category: 'PUBLIC INFORMATION', title: 'Find your place in Springfield', text: 'New members are encouraged to review the roleplay divisions before choosing a department or submitting an application.' },
  { date: 'AUG 02, 1980', category: 'ADMINISTRATION', title: 'A town built around participation', text: 'Our community continues to grow through organized sessions, thoughtful staff, and members who keep the setting alive.' },
];

export const applications = [
  { department: 'Springfield Police Department', position: 'Police Officer', requirements: 'Read the department handbook; attend an orientation; maintain professional conduct.', status: 'Open' },
  { department: 'Springfield Fire & Rescue', position: 'Firefighter', requirements: 'Review station procedures; demonstrate teamwork; attend a practical session.', status: 'Open' },
  { department: 'Sheriff’s Office', position: 'County Deputy', requirements: 'Understand county patrol duties; complete an interview with command staff.', status: 'Reviewing' },
];
