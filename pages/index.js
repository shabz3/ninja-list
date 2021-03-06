import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>hello</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula
          purus elit, ac commodo lorem efficitur eget. Cras eleifend eu lacus
          gravida ullamcorper. Nullam nec eleifend mi. Nunc imperdiet ornare
          imperdiet. Aliquam id nulla tempor, luctus massa et, iaculis velit.
          Quisque mattis nibh ut arcu ornare accumsan.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula
          purus elit, ac commodo lorem efficitur eget. Cras eleifend eu lacus
          gravida ullamcorper. Nullam nec eleifend mi. Nunc imperdiet ornare
          imperdiet. Aliquam id nulla tempor, luctus massa et, iaculis velit.
          Quisque mattis nibh ut arcu ornare accumsan.
        </p>
        <Link href="ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
