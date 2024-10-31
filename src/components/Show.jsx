const Show = ({ condition, children }) => {
  return <>{condition && children}</>;
};

export default Show;
