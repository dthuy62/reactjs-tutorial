import Router from "./presentation/routes/Router.tsx";
import "./core/i18n/i18n.ts";
function App() {

  return (
   <div className="app h-screen bg-gray-100">
     <Router />
   </div>
  )
}

export default App
