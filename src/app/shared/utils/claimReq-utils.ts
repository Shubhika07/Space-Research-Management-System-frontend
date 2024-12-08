export const claimReq = {
  adminOnly: (c: any) => c.role == "ADMIN",
  director: (c: any) => c.role == "MISSION_DIRECTOR" || c.role == "ADMIN",
  engineer: (c: any) => c.role == "ENGINEER" || c.role == "ADMIN",
  scientist: (c: any) => c.role == "SCIENTIST" || c.role == "ADMIN",
  astronomer: (c: any) => c.role == "ASTRONOMER" || c.role == "ADMIN",
  researchAssistant: (c: any) => c.role == "RESEARCH_ASSISTANT" || c.role == "ADMIN",
  notification: (c: any) => c.role == "MISSION_DIRECTOR" || c.role == "ADMIN",
  teacher: (c: any) => c.role == "TEACHER",
  student: (c: any) => c.role == "STUDENT",
}