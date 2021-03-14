interface profileBarProp {
  item: string;
  text: string;
}

export const ProfileBar = ({ item, text }: profileBarProp) => {
  return (
    <>
      <h3 className="text-center text-xs text-gray-400 px-4">{item}</h3>
      <p className="border-b w-11/12 m-auto text-center border-gray-700 py-3 bg-black text-white mb-2">
        {text}
      </p>
    </>
  );
};
