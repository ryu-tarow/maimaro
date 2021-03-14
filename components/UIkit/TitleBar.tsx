interface TitleBarProps {
  text: string;
}

export const TitleBar = ({ text }: TitleBarProps) => {
  return (
    <div className="py-2 bg-gray-800 my-3">
      <h1 className="text-white text-center">{text}</h1>
    </div>
  );
};
