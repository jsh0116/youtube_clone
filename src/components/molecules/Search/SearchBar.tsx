import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const SearchBar = () => {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState<string>("");

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  }

  return (
    <form className="flex justify-center w-full gap-4" onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Search...'
        value={text}
        onChange={handleChange}
        className={`w-1/2 p-2 outline-none bg-black text-gray-50`}
      />
      <Button className="bg-zinc-600 px-4">
        <BsSearch />
      </Button>
    </form>
  );
};

export default SearchBar;
