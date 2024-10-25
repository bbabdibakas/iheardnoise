import { createRoot } from 'react-dom/client'
import App from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import 'app/styles/index.scss'

const rootElement = document.getElementById('root')
if (rootElement) {
    const root = createRoot(rootElement)
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}