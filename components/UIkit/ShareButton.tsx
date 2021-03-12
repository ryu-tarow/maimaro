import {
  TwitterShareButton,
  FacebookShareButton,
  HatenaShareButton,
  TwitterIcon,
  FacebookIcon,
  HatenaIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

interface Props {
  text: string;
  url: string;
}

export const ShareButton = ({ text, url }: Props) => {
  return (
    <ul className="flex justify-center mt-0.5">
      <li className="m-1 duration-300 hover:opacity-70">
        <TwitterShareButton url={url} title={text}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </li>
      <li className="m-1 duration-300 hover:opacity-70">
        <FacebookShareButton url={url}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </li>
      <li className="m-1 duration-300 hover:opacity-70">
        <HatenaShareButton url={url} title={text}>
          <HatenaIcon size={32} round={true} />
        </HatenaShareButton>
      </li>
      <li className="m-1 duration-300 hover:opacity-70">
        <LineShareButton url={url} title={text}>
          <LineIcon size={32} round={true} />
        </LineShareButton>
      </li>
    </ul>
  );
};
