import React, { FC } from "react";
import Link from "next/link";
import { useAppSelector } from "redux/hooks";
import { selectStatus } from "redux/userSlice";

const IndexPage: FC = () => {
  const isLogin = useAppSelector(selectStatus);
  return (
    <React.Fragment>
      <Link href="/home">
        <button className="pl-8">go to main</button>
      </Link>

      <Link href="/login">
        <button className="pl-8">login</button>
      </Link>
    </React.Fragment>
  );
};

export default IndexPage;
