export const BrowserRouter = ({ children }) => <div>{children}</div>;
export const Route = ({ element }) => element;
export const Routes = ({ children }) => <div>{children}</div>;
export const useNavigate = jest.fn();
export const useLocation = jest.fn(() => ({ state: null }));