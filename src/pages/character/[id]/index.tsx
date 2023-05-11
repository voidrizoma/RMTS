import Head from "next/head";
import Link from "next/link";
import Layout from "../../../Commons/Layout/Layout";

const defaultEndpoint = `https://rickandmortyapi.com/api/character/`;

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`${defaultEndpoint}${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Character({ data }) {
  const { name, image, gender, location, origin, species, status } = data;
  console.log("data", data);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <div>
            <div>
              <img src={image} alt={name} />
            </div>
            <div>
              <h2>Character Details</h2>
              <ul>
                <li>
                  <strong>Name:</strong>
                  {name}{" "}
                </li>
                <li>
                  <strong>Status:</strong>
                  {status}{" "}
                </li>
                <li>
                  <strong>Gender:</strong>
                  {gender}{" "}
                </li>
                <li>
                  <strong>Species:</strong>
                  {species}{" "}
                </li>
                <li>
                  <strong>Location:</strong>
                  {location?.name}{" "}
                </li>
                <li>
                  <strong>Originally From:</strong>
                  {origin?.name}{" "}
                </li>
              </ul>
            </div>
          </div>
          <p>
            <Link href="/">Back</Link>
          </p>
        </main>
      </Layout>
    </>
  );
}