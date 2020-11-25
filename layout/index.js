const Layout = ({ children, frontmatter }) => {
  return (
    <div>
      <h1>frontmatter.title</h1>
      {children}
    </div>
  );
};

export default Layout;
