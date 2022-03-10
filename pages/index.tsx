import Script from "next/script";
import { Component, Key } from "react";
import { attributes, react as HomeContent } from "../content/home.md";

interface Cat {
  description: String;
  name: String;
}

export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat: Cat, i: Key) => (
              <li key={i}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    );
  }
}
