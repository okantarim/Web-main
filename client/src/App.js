import React from "react";
import "./App.css";
import PreLoginPage from "./components/PreLoginPage";
import LoginPage from "./components/LoginPage";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'


import StudentPage from "./components/Student/StudentPage";
import DownloadInt from "./components/Student/DownloadInt";
import UploadInt from "./components/Student/UploadInt";
import UploadTranscript from "./components/Student/UploadTranscript";
import Inbox from "./components/Student/Inbox";
import Message from "./components/Student/Message";
import Notification from "./components/Student/Notification";
import Profile from "./components/Student/Profile";
import CoordinatorPage from "./components/Coordinator/CoordinatorPage";
import CoordinatorLoginPage from "./components/CoordinatorLoginPage";
import StudentsForms from "./components/Coordinator/StudentsForms";
import CoordinatorUploadInt from "./components/Coordinator/CoordinatorUploadInt";
import ViewTranscript from "./components/Coordinator/ViewTranscript";
import CoordinatorMessage from "./components/Coordinator/CoordinatorMessage";
import CoordinatorNotification from "./components/Coordinator/CoordinatorNotification";
import CoordinatorProfile from "./components/Coordinator/CoordinatorProfile";
import UpperMessage from "./components/Student/UpperMessage";
import CareerPage from "./components/CareerCenter/CareerPage";
import CareerCenterLoginPage from "./components/CareerCenterLoginPage";
import ApprovedForms from "./components/CareerCenter/ApprovedForms";
import IncomingMessage from "./components/Student/IncomingMessage";
import NewStudent from "./components/Student/NewStudent";

function App() {
  //const [showLoginPage, setShowLoginPage] = useState(false);
  

  
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<PreLoginPage/>} />

          <Route path='/login/student' element={<LoginPage
          type={"student"} FirstInput={"Student ID or Email:"} entry={"Student Entry"}  />  } />

          <Route path='/login/coordinator' element={<CoordinatorLoginPage  type={"coordinator"} FirstInput={"Username:"} entry={"Coordinator Entry"}/>} />

          <Route path='/login/career' element={<CareerCenterLoginPage type={"career"} FirstInput={"Username:"} entry={"Career Center Entry"}/>} />
          

            
          
           <Route path='/student' element={  <NewStudent/>  }  />
           

            <Route path='/student/downint' element={<DownloadInt/> }  />
            <Route path='/student/upint' element={ <UploadInt/>}  />
            <Route path='/student/uptranscript' element={ <UploadTranscript/>}  />
            <Route path='/student/inbox' element={ <Inbox/>}  />
            <Route path='/student/notifications' element={ <Notification/>}  />
            <Route path='/student/message' element={ <Message/>}  />
            <Route path='/student/uppermessage' element={ <UpperMessage/>}  />
            <Route path='/student/incoming' element={ <IncomingMessage/>}  />
            <Route path='/student/profile' element={ <Profile/>}  />
           

            <Route path='/coordinator' element={ <CoordinatorPage/> }  />
            <Route path='/coordinator/studentsforms' element={ <StudentsForms/> }  />
            <Route path='/coordinator/uploadform' element={ <CoordinatorUploadInt/> }  />
            <Route path='/coordinator/viewtranscript' element={ <ViewTranscript/> }  />
            <Route path='/coordinator/message' element={ <CoordinatorMessage/>}  />
            <Route path='/coordinator/notifications' element={ <CoordinatorNotification/>}  />
            <Route path='/coordinator/profile' element={ <CoordinatorProfile/>}  />

            <Route path='/career' element={ <CareerPage/> }  />
            <Route path='/career/approvedforms' element={ <ApprovedForms/> }  />
            
            

          </Routes>
            
   
        
      </Router>




      {/* {showLoginPage ? (
        <LoginPage newProp="value" />
      ) : (
        <PreLoginPage
          onStudentEntry={() => setShowLoginPage(true)}
          onCoordinatorEntry={() => setShowLoginPage(true)}
          onCareerCenterEntry={() => setShowLoginPage(true)}
          newProp="value"
        />
      )} */}


    </div>
  );
}

export default App;
