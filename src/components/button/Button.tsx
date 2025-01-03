interface Props {
  value: string;
}
const Button: React.FC<Props> = ({ value }) => {
  return <button>{value}</button>;
};

export default Button;
