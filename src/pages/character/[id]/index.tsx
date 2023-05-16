import Head from "next/head";
import Link from "next/link";
import Layout from "../../../Commons/Layout/Layout";
import CardComponent from "../../../components/Cards/Cards";

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
          <CardComponent
            name={name} image={image} gender={gender} location={location} origin={origin} species={species} status={status} />
          <p>
            <Link href="/">Back</Link>
          </p>
        </main>
      </Layout>
    </>
  );
}
