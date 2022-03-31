import React from "react";

type AppHeaderProps = {
  title: string;
  favourite_color: string;
};

const AppHeader = ({ favourite_color }: AppHeaderProps) => {
  return <h1 className="text-5xl text-zinc-900">{favourite_color}</h1>;
};

export default AppHeader;
