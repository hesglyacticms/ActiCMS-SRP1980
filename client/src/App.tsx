// County Record Office style: route structure mirrors an established civic organization directory for Roblox ERLC.
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/NotFound';
import { Route, Switch } from 'wouter';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './contexts/ThemeContext';
import { About, Applications, Departments, Home, Ownership, Roleplay, Rules, Status } from './pages/SitePages';

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/roleplay" component={Roleplay} />
    <Route path="/departments" component={Departments} />
    <Route path="/ownership" component={Ownership} />
    <Route path="/rules" component={Rules} />
    <Route path="/applications" component={Applications} />
    <Route path="/status" component={Status} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
