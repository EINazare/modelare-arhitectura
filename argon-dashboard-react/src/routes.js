/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// auth layout
import Login from "views/auth-layout/Login.jsx";
import AdminLogin from "views/auth-layout/AdminLogin.jsx";
import TeacherLogin from "views/auth-layout/TeacherLogin.jsx";
import StudentLogin from "views/auth-layout/StudentLogin.jsx";
// admin layout
import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Tables from "views/examples/Tables.jsx";
import Icons from "views/examples/Icons.jsx";
// teacher layout
import TeacherProfile from "views/teacher-layout/Profile.jsx";
import TeacherSubjects from "views/teacher-layout/Subjects.jsx";
import TeacherStudents from "views/teacher-layout/Students.jsx";
import TeacherGrades from "views/teacher-layout/Grades.jsx";
// student layout
import StudentProfile from "views/student-layout/Profile.jsx";
import StudentSubjects from "views/student-layout/Subjects.jsx";
import StudentGrades from "views/student-layout/Grades.jsx";

var routes = [
  // auth layout
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/admin-login",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: AdminLogin,
    layout: "/auth"
  },
  {
    path: "/teacher-login",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: TeacherLogin,
    layout: "/auth"
  },
  {
    path: "/student-login",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: StudentLogin,
    layout: "/auth"
  },
  // admin layout
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  // teacher layout
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-single-02 text-yellow",
    component: TeacherProfile,
    layout: "/teacher"
  },
  {
    path: "/subjects",
    name: "Subjects",
    icon: "ni ni-bullet-list-67 text-red",
    component: TeacherSubjects,
    layout: "/teacher"
  },
  {
    path: "/students",
    name: "Students",
    icon: "ni ni-align-left-2 text-info",
    component: TeacherStudents,
    layout: "/teacher"
  },
  {
    path: "/grades",
    name: "Grades",
    icon: "ni ni-tv-2 text-primary",
    component: TeacherGrades,
    layout: "/teacher"
  },
  // student layout
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-single-02 text-yellow",
    component: StudentProfile,
    layout: "/student"
  },
  {
    path: "/subjects",
    name: "Subjects",
    icon: "ni ni-bullet-list-67 text-red",
    component: StudentSubjects,
    layout: "/student"
  },
  {
    path: "/grades",
    name: "Grades",
    icon: "ni ni-tv-2 text-primary",
    component: StudentGrades,
    layout: "/student"
  }
];
export default routes;
