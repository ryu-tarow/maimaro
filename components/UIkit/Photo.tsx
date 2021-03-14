interface PhotoProps {
  photo: string;
  photoName: string;
}

export const Photo = ({ photo, photoName }: PhotoProps) => {
  const url = "https://maimaro.vercel.app";
  return (
    <li>
      <div className="p-1 absolute">
        <a href={`${url}/high_photos${photo}`} download={photoName}>
          <svg
            className="bg-white w-8 h-8 p-1 rounded-lg sm:w-12 sm:h-12 duration-300 opacity-40 hover:opacity-80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            ></path>
          </svg>
        </a>
      </div>
      <img src={`/photos${photo}`} className="" />
    </li>
  );
};
