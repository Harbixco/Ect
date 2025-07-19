import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  AddNewCourse,
  AdminAssignment,
  AdminAssignmentLayout,
  AdminCategory,
  AdminCourseManagement,
  AdminCourses,
  AdminDashboard,
  AdminEditCourse,
  AdminGenSetting,
  AdminLayout,
  AdminNotifSetting,
  AdminProfile,
  AdminProject,
  AdminQuickPractice,
  AdminReports,
  AdminRevenue,
  AdminSchedule,
  AdminSecurity,
  AdminSettingsLayout,
  Analytics,
  AssignmentDetails,
  AssignmentWeb,
  Checkout,
  CourseLandingPage,
  CourseLayout,
  Courses,
  Dashboard,
  DashboardLayout,
  GeneralLayout,
  LandingPage,
  Portfolio,
  ContactUs,
  FAQs,
  Joboffer,
  Premium,
  SingleCourse,
  Superadmin,
  SuperadminLayout,
  Blog,
  BlogDetails,
  AdminNewTopic,
  AdminNotification,
  AdminNotificationDetails,
  PortfolioDetails,
  Jobofferdetails,
  Gencourses,
  Privacypolicy,
  RequestaQuote,
  Media,
} from "./pages";
import {
  ErrorPage,
  Support,
  Quickpractice,
  Practice,
  Assignment,
  SettingLayout,
  Mylearning,
  Schedule,
  Projecthub,
  ProjecthubLayout,
  Projecthubresult,
  Projecthubsubmit,
  Setting,
  Settingchangepassword,
  Settingnotification,
  Settingpayment,
  Settingsecurity,
  AddJob,
  ViewJob,
  Contact,
  GetQuote,
  JobSetting,
  Supermedia,
  Imagealbum,
  AddPortfolio,
  ViewPortfolio,
  AddBlog,
  ViewBlog,
  Learningtab,
  Learninglayout,
  Nexttopic,
  Prevtopic,
  Resources,
  Reviews,
} from "./components";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GeneralLayout />,
      children: [
        { index: true, element: <LandingPage /> },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/portfolio/:id",
          element: <Portfolio />,
        },
        {
          path: "/portfolio-details/:id",
          element: <PortfolioDetails />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
        {
          path: "/faqs",
          element: <FAQs />,
        },

        {
          path: "/joboffer",
          element: <Joboffer />,
        },
        {
          path: "/media",
          element: <Media />,
        },
        {
          path: "/joboffer-details/:id",
          element: <Jobofferdetails />,
        },
        {
          path: "/gencourses",
          element: <Gencourses />,
        },
        {
          path: "/media",
          element: <Media />,
        },
        {
          path: "/privacypolicy",
          element: <Privacypolicy />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/blog-detail/:id",
          element: <BlogDetails />,
        },
        {
          path: "/getaquote",
          element: <RequestaQuote />,
        },
      ],
    },
    {
      path: "course",
      element: <CourseLayout />,
      children: [
        {
          index: true,
          element: <CourseLandingPage />,
        },
        {
          path: "premium",
          element: <Premium />,
        },
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "courses/:courseId",
          element: <SingleCourse />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
      ],
    },

    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/dashboard/support",
          element: <Support />,
        },
        {
          path: "/dashboard/practice",
          element: <Quickpractice />,
        },
        {
          path: "/dashboard/practice",
          element: <Practice />,
        },
        {
          path: "/dashboard/assignment",
          element: <Assignment />,
        },

        {
          path: "/dashboard/setting",
          element: <SettingLayout />,
          children: [
            {
              index: true,
              element: <Setting />,
            },
            {
              path: "/dashboard/setting/change-password",
              element: <Settingchangepassword />,
            },
            {
              path: "/dashboard/setting/notification",
              element: <Settingnotification />,
            },
            {
              path: "/dashboard/setting/setting-payment",
              element: <Settingpayment />,
            },
            {
              path: "/dashboard/setting/setting-security",
              element: <Settingsecurity />,
            },
          ],
        },

        {
          path: "learning",
          element: <Mylearning />,
        },

        {
          path: "schedule",
          element: <Schedule />,
        },

        {
          path: "/dashboard/project",
          element: <ProjecthubLayout />,
          children: [
            {
              index: true,
              element: <Projecthub />,
            },
            {
              path: "/dashboard/project/submit-project",
              element: <Projecthubsubmit />,
            },
            {
              path: "/dashboard/project/project-result",
              element: <Projecthubresult />,
            },
          ],
        },
      ],
    },

    {
      path: "/learningtab",
      element: <Learningtab />,
      children: [
        {
          index: true,
          element: <Learninglayout />,
        },
        {
          path: "/learningtab/Learninglayout/resources",
          element: <Resources />,
        },
        {
          path: "/learningtab/Learninglayout/prevtopic",
          element: <Prevtopic />,
        },
        {
          path: "/learningtab/Learninglayout/nexttopic",
          element: <Nexttopic />,
        },
        {
          path: "/learningtab/Learninglayout/reviews",
          element: <Reviews />,
        },
      ],
    },

    {
      path: "admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <AdminDashboard />,
        },

        {
          path: "/admin/analytics",
          element: <Analytics />,
        },
        {
          path: "/admin/revenue",
          element: <AdminRevenue />,
        },
        {
          path: "/admin/notification",
          element: <AdminNotification />,
        },
        {
          path: "/admin/notification/:id",
          element: <AdminNotificationDetails />,
        },
        {
          path: "/admin/report",
          element: <AdminReports />,
        },
        {
          path: "/admin/schedule",
          element: <AdminSchedule />,
        },
        {
          path: "/admin/projects",
          element: <AdminProject />,
        },
        {
          path: "/admin/courses-management",
          element: <AdminCourseManagement />,
        },
        {
          path: "/admin/courses/quick-practice",
          element: <AdminQuickPractice />,
        },
        {
          path: "/admin/courses/categories",
          element: <AdminCategory />,
        },
        {
          path: "/admin/courses/assignments",
          element: <AdminAssignmentLayout />,
          children: [
            {
              index: true,
              element: <AdminAssignment />,
            },
            {
              path: "/admin/courses/assignments/web",
              element: <AssignmentWeb />,
            },
          ],
        },
        {
          path: "/admin/courses/course",
          element: <AdminCourses />,
        },
        {
          path: "/admin/courses/add-topic",
          element: <AdminNewTopic />,
        },
        {
          path: "/admin/courses/add-course",
          element: <AddNewCourse />,
        },
        {
          path: "/admin/courses/edit-course/:id",
          element: <AdminEditCourse />,
        },
        {
          path: "/admin/assignments-detail/:id",
          element: <AssignmentDetails />,
        },
        {
          path: "/admin/settings",
          element: <AdminSettingsLayout />,
          children: [
            {
              index: true,
              element: <AdminProfile />,
            },
            {
              path: "/admin/settings/general",
              element: <AdminGenSetting />,
            },
            {
              path: "/admin/settings/notification",
              element: <AdminNotifSetting />,
            },
            {
              path: "/admin/settings/security",
              element: <AdminSecurity />,
            },
          ],
        },
      ],
    },

    {
      path: "/superadmin",
      element: <SuperadminLayout />,
      children: [
        {
          index: true,
          element: <Superadmin />,
        },

        {
          path: "/superadmin/add-job",
          element: <AddJob />,
        },
        {
          path: "/superadmin/view-job",
          element: <ViewJob />,
        },

        {
          path: "/superadmin/media",
          element: <Supermedia />,
        },
        {
          path: "/superadmin/album",
          element: <Imagealbum />,
        },

        {
          path: "/superadmin/add-portfolio",
          element: <AddPortfolio />,
        },
        {
          path: "/superadmin/view-portfolio",
          element: <ViewPortfolio />,
        },

        {
          path: "/superadmin/add-blog",
          element: <AddBlog />,
        },
        {
          path: "/superadmin/view-blog",
          element: <ViewBlog />,
        },

        {
          path: "/superadmin/get-quote",
          element: <GetQuote />,
        },

        {
          path: "/superadmin/contact",
          element: <Contact />,
        },
        {
          path: "/superadmin/settings",
          element: <JobSetting />,
        },
      ],
    },

    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
