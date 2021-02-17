import { useState, useEffect } from "react";
import * as React from "react";
import axios from "axios"

type User = {
  link: string,
  owner: string,
  repo: string
}

const useGetRepos = () => {
  const [pinnedRepos, setPinnedRepos] = useState<User[]>([])
  useEffect(() => {
    axios.get<User[]>("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=brianaruff")
      .then(res => {
        setPinnedRepos(res.data);
      })
      .catch(err => console.error(err));
  }, []);
  return pinnedRepos
}

export default useGetRepos;