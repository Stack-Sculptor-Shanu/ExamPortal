import React from 'react'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Landingpage from './Components/LandingPage/Landingpage'
import Login from './Components/Login/Login'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Privacy from './Components/Privacy/Privacy'
import ExamLists from './Components/LiveExams/ExamLists'
import Instruction from './Components/LiveExams/Instructions/Instruction'
import QuestionSection from './Components/LiveExams/TestSection/QuestionSection'
import UserManual from './Components/GetStarted/UserManual'
import AdminReg from './Admin/AdminReg'
import StudentReg from './Student/StudentReg'
import MockTest from './Components/MockTest/MockTest'
import MockResult from './Components/MockTest/MockResult'
import ExamPortal from './Exam/ExamPortal'
import StudentDashboard from './Student/Dashboard/StudentDashboard'
import AdminDashboard from './Admin/Dashboard/AdminDashboard'

const App = () => {
  const route = createBrowserRouter([
    {
      path:'/',
      element:<Dashboard/>,
      children:[
        {
          path:'/',
          element:<Landingpage/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/privacy',
          element:<Privacy/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'howitworks',
          element:<UserManual/>
        },
        {
          path:'/examlists',
          element:<ExamLists/>
        },
        {
          path:'/instructions',
          element:<Instruction/>
        },
        {
          path:'/questionSection',
          element:<QuestionSection/>
        },
        {
          path:'adminReg',
          element:<AdminReg/>
        },
        {
          path:'/studentReg',
          element:<StudentReg/>
        },
        {
          path:"/mocktest",
          element:<MockTest/>
        },
        {
          path: '/MockResult',
          element: <MockResult/>
        },
        {
          path : '/adminDashboard',
          element : <AdminDashboard/>
        },
        {
          path: '/studentDashboard',
          element : <StudentDashboard/>
        },
        {
          path : '/examportal',
          element : <ExamPortal/>
        }
      ]
    }
  ])
  return <RouterProvider router={route}/>
}

export default App
