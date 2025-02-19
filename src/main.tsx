import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { SectionProvider } from './context/sectionContext/sectionProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter basename='/'>
		<SectionProvider>
		<App />
		</SectionProvider>
	</BrowserRouter>
);
