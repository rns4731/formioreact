import { useState } from 'react'
import { FormBuilder } from '@formio/react'
import './App.css'

function App() {
  const [form, setForm] = useState({
    display: 'wizard',
    components: []
  })

  const handleFormChange = (schema: any) => {
    setForm(schema)
  }

  const handleSaveForm = () => {
    console.log('Form JSON:', JSON.stringify(form, null, 2))
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>FormIO Form Builder - Wizard Mode</h1>
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={handleSaveForm}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Save Form
        </button>
      </div>
      <div style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '10px' }}>
        <FormBuilder
          initialForm={form}
          onChange={handleFormChange}
        />
      </div>
    </div>
  )
}

export default App
