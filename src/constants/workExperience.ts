import type { WorkExperience } from "../types";

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    title: `Lead Software Engineer`,
    company_name: `Hexagon Manufacturing Intelligence`,
    logo: `/assets/CompanyLogos/hexagon.png`,
    iconBg: `#2563eb`,
    date: `09/2023 - Present`,
    points: [
      `Led a cross-functional team of 9 across 5 countries (China, India, UK, US, and Canada), implementing a streamlined Agile
       workflow to deliver innovative system architecture and software solutions, resulting in measurable improvements in delivery
       timelines, team performance, and project outcomes.`,
      `Established Azure deployment pipelines incorporating security and code quality scans using BlackDuck and SonarQube,
       along with configuring metrics and alerting systems via PagerDuty to ensure reliable releases and proactive monitoring.
       Collaborated with cross-functional teams to identify business needs and deliver end-to-end solutions.`,
      `Led full-stack initiatives including Nexus portal and landing page redesign, user invitation flow, registration and onboarding
       processes, device registration, product entitlements and trials, software download access, transition to Keycloak
       authentication, customer support workflows, and development of analytics dashboards.`,
      `Led full-stack initiatives including Nexus portal and landing page redesign, user invitation flow, registration and onboarding
       processes, device registration, product entitlements and trials, software download access, transition to Keycloak
       authentication, customer support workflows, and development of analytics dashboards.`,
    ],
  },
  {
    title: `Full Stack Engineer`,
    company_name: `Altitude Sports`,
    logo: `/assets/CompanyLogos/altitude.png`,
    iconBg: `#059669`,
    date: `08/2021 - 04/2023`,
    points: [
      `Designed and implemented an event-driven product review moderation flow, resulting in cost savings and enabling review
       analytics through data lake integration.`,
      `Reorganized the email notifications and order refunds projects, reducing processing time.`,
      `Collaborated with a team to develop a platform-agnostic order management system, allowing the company to transition away
       from "Shopify" and realizing millions in cost savings.`,
      `Implemented comprehensive monitors, metrics, and alert notifications for key services, enabling the efficient identification
       of system issues and bottlenecks, resulting in faster response times to bugs and problems.`,
      `Improved legacy systems by introducing unit, functional, and E2E tests, ensuring reliable production deployments and
       reducing bugs, along with comprehensive documentation improvements.`,
    ],
  },
  {
    title: `Full Stack Engineer`,
    company_name: `Washmen`,
    logo: `/assets/CompanyLogos/washmen.png`,
    iconBg: `#dc2626`,
    date: `02/2019 - 07/2021`,
    points: [
      `Contributed to the successful launch of the Facility Project, helping position Washmen among the top three laundries
       globally. Implemented an event-driven architecture to optimize operations and generate actionable performance insights.`,
      `Refactored and documented the payment logic, simplifying maintenance and improving the overall system sustainability.`,
      `Designed and implemented an automated customer notification system, delivering order and marketing updates via email,
       SMS, and WhatsApp, resulting in improved customer retention and engagement.`,
      `Designed and implemented RESTful APIs for customer, dashboard, driver, and facility apps, providing seamless integration.`,
    ],
  },
];
