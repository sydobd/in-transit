import React from "react"
import Banner from "../components/banner/Banner"
import SimpleHero from "../components/hero/SimpleHero"
import Layout from "../components/layout/Layout"
import { Link } from "gatsby"
import About from "../components/about/About"
import Services from "../components/services/Services"

import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  const aboutImage = getImage(data.aboutImage)
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="lets travel the world"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis impedit tenetur nisi minima aperiam sint, ipsum sit debitis culpa vel hic atque exercitationem voluptatem amet, accusantium quos distinctio! Quis."
        >
          <Link to="/tours" className="btn-white">
            Letss go!
          </Link>
        </Banner>
      </SimpleHero>
      <About image={aboutImage} />
      <Services />
    </Layout>
  )
}

export const pageQuery = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
