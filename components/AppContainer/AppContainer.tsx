type AppContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return <div className="app-container container">{children}</div>;
};

export default AppContainer;
