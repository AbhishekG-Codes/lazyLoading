import { Suspense } from "react"
import { useState } from "react"
import { lazy } from "react"
const Dashboard = lazy(()=>import("./Dashboard"))
export default function App() {
  const [showDashboard,setshowDashboard] = useState(false)
  return (
    <>
      <h1>welcome to home page</h1>
      <button onClick={()=>{setshowDashboard(!showDashboard)}}>{showDashboard?<h1>hide dash</h1>:<h1>show dash</h1>}</button>
      <Suspense fallback={<h1>Loading....</h1>}>
      {showDashboard && <Dashboard/>}
      </Suspense>
    </>
  )
}
