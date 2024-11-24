import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          React Form Handling Examples
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Controlled Components Version */}
          <div>
            <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
              Using Controlled Components
            </h2>
            <RegistrationForm />
          </div>
          
          {/* Custom Form Management Version */}
          <div>
            <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
              Using Custom Form Management
            </h2>
            <FormikForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App