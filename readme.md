These are good V2 features, but they shouldn't block the frontend.

Email notifications
Interview scheduling
Saved jobs
Search and filters
Pagination
Refresh tokens
Rate limiting
Swagger/OpenAPI documentation
Unit and integration tests
Background jobs (BullMQ) for AI processing
Recruiter analytics
WebSockets for real-time notifications

These can all be added after you have a working product.

src
│
├── api
│ ├── axios.js
│ ├── auth.api.js
│ ├── jobs.api.js
│ ├── resume.api.js
│ └── application.api.js
│
├── app
│ └── store.js
│
├── assets
│
├── components
│ ├── common
│ ├── forms
│ ├── layout
│ ├── recruiter
│ └── candidate
│
├── features
│ ├── auth
│ ├── candidate
│ ├── recruiter
│ ├── jobs
│ └── applications
│
├── hooks
│
├── layouts
│
├── pages
│ ├── auth
│ ├── candidate
│ ├── recruiter
│ └── public
│
├── routes
│
├── services
│
├── slices
│
├── utils
│
└── App.jsx

Public
├── Home
├── Jobs
├── Job Details
├── Login
└── Register

Candidate
├── Dashboard
├── My Profile
├── Upload Resume
├── My Applications
└── Job Details

Recruiter
├── Dashboard
├── My Jobs
├── Create Job
├── Applicants
├── Candidate Details
└── Analytics

src/
│
├── layouts/
│ └── RecruiterLayout.jsx
│
├── components/
│ └── recruiter/
│ ├── sidebar/
│ │ Sidebar.jsx
│ │ SidebarItem.jsx
│ │
│ ├── header/
│ │ Topbar.jsx
│ │ ProfileMenu.jsx
│ │ NotificationButton.jsx
│ │
│ ├── dashboard/
│ │ StatsCard.jsx
│ │ WelcomeCard.jsx
│ │ RecentJobs.jsx
│ │ RecentApplications.jsx
│ │ QuickActions.jsx
│ │
│ └── common/
│ PageHeader.jsx
│
├── pages/
│ └── recruiter/
│ Dashboard.jsx
│ Jobs.jsx
│ CreateJob.jsx
│ Candidates.jsx
│ Applications.jsx
│ Settings.jsx

{aiAnalysis: {…}, \_id: '6a5797ae6e7e547d1bdf65fa', candidateId: '6a560bc005247fa8d516cf87', jobId: '6a5797256e7e547d1bdf65d7', atsScore: 30, …}
aiAnalysis
:
{source: 'AI', score: 25, summary: 'Vivek is a skilled full-stack developer with stron…e, making them unsuitable for this specific role.', strengths: Array(5), weaknesses: Array(4), …}
atsScore
:
30
candidateId
:
"6a560bc005247fa8d516cf87"
createdAt
:
"2026-07-15T14:22:38.194Z"
jobId
:
"6a5797256e7e547d1bdf65d7"
recruiterNotes
:
""
status
:
"APPLIED"
statusHistory
:
[{…}]
updatedAt
:
"2026-07-15T14:22:38.194Z"
\_\_v
:
0
\_id
:
"6a5797ae6e7e547d1bdf65fa"
