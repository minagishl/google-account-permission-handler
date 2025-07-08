import Form from './components/form'

function App() {
  const items = {
    placeholder: 'Please enter URL',
    button1: 'Open account switching screen',
    button2: 'Automatically opens in an authorized account',
    bottomText: 'Browse GitHub for usage instructions'
  }

  return <Form items={items} />
}

export default App
