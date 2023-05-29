export const Button = ({ children, className, onClick }) => {
  console.log('button hola', { className });
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
