import React  from 'react';
import { Link } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import SearchBar from "../molecules/Search/SearchBar";

const Header = () => {

  const renderYoutubeIcon = () => {
    return (
      <Link className="flex items-center" to="/">
        <BsYoutube className="text-4xl text-brand"/>
        <h1 className="text-2xl text-bold ml-2 mr-2">Youtube</h1>
      </Link>
    );
  };

  return (
    <header className="flex w-full border-b p-4 text-2xl border-zinc-600 mb-4">
      {renderYoutubeIcon()}
      <SearchBar />
    </header>
  );
};

export default Header;
