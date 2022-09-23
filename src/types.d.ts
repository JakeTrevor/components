declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

declare type setState<T> = React.Dispatch<React.SetStateAction<T>>;
