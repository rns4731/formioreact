import { useState, useEffect } from 'react'
import { FormBuilder, FormType } from '@formio/react'
import { Formio } from '@formio/js'
import './App.css'

Formio.setBaseUrl('')
Formio.setProjectUrl('')
Formio.setApiUrl('')

Formio.options = {
  ...Formio.options,
  builder: {
    noProject: true,
    noSource: true
  }
}

function App() {
  const [form, setForm] = useState<FormType>({
    display: 'wizard',
    components: []
  })

  useEffect(() => {
  }, [])

  const handleFormChange = (schema: any) => {
    setForm(schema)
  }

  const handleSaveForm = () => {
    console.log('Form JSON:', JSON.stringify(form, null, 2))
  }

  const handleSaveComponent = (component: any, original: any, parent: any, path: string, index: number, isNew: boolean, originalComponentSchema: any) => {
    console.log('Component saved:', component)
  }

  const handleEditComponent = (component: any) => {
    console.log('Component edited:', component)
  }

  const handleDeleteComponent = (component: any, parent: any, path: string, index: number) => {
    console.log('Component deleted:', component)
  }

  const handleUpdateComponent = (component: any) => {
    console.log('Component updated:', component)
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
      <div>
        <FormBuilder
          initialForm={form}
          onChange={handleFormChange}
          onSaveComponent={handleSaveComponent}
          onEditComponent={handleEditComponent}
          onDeleteComponent={handleDeleteComponent}
          onUpdateComponent={handleUpdateComponent}
          options={{
            noDefaultSubmitButton: true,
            language: 'en'
          }}
        />
      </div>
    </div>
  )
}

export default App
