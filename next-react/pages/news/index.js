import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJs is a Great Framework
          </Link>
        </li>
        <li>Angular is an overkilled Framework</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
