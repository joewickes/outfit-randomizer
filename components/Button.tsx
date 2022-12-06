import styles from '../styles/Buttons.module.scss';

const Button = (({ size }: { size: string }) => {
  switch (size) {
    case 'sm':
      return (<></>);
    case 'md':
      return (<></>);
    case 'lg':
      return (<></>)
    default:
      return null;
  }
};

export default Button;
