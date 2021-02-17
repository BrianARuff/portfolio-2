import { useState, useEffect } from "react";
import * as React from "react";
import axios from "axios"

type User = {
  link: string,
  owner: string,
  repo: string
}

const useGetRepos = ():User[] => {
  const [pinnedRepos, setPinnedRepos] = useState([])
  useEffect(() => {
    axios.get("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=brianaruff")
      .then(res => {
        setPinnedRepos(res.data);
      })
      .catch(err => console.error(err));
  }, []);
  return pinnedRepos
}

export default useGetRepos;