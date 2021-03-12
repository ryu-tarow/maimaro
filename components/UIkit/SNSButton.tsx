interface SNSProps {
  img: string;
  imgClass: string;
  bgClass: string;
  link: string;
}

export const SNSButton = ({ img, imgClass, bgClass, link }: SNSProps) => {
  return (
    <a href={link}>
      <div
        className={`border border-gray-500 m-1 rounded-lg duration-300 hover:opacity-70 cursor-pointer ${bgClass}`}
      >
        <img src={`/snsIcons${img}`} className={imgClass} />
      </div>
    </a>
  );
};
