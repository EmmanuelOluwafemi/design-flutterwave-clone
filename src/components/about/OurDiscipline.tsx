import Grid from 'components/layout/Grid'
import React from 'react'
import DisciplineCard from './DisciplineCard'

const disciplines = [
    {
        imgUrl: "https://design.flutterwave.com/_nuxt/img/product-design.5695415.png",
        title: "Product Design",
        desc: `Product Designers at Flutterwave are responsible for creating a rich and 
               functional product experience for all of our products, both internal and 
               external. We create value and impact for the businesses who use our products, 
               and their end-users.`,
        color: "#FFEEB3"
    },
    {
        imgUrl: "https://design.flutterwave.com/_nuxt/img/web-design.2684184.png",
        title: "Web Experience Design",
        desc: `The web experience team tells beautiful, succinct stories about Flutterwave 
               and its products by creating rich, interactive and accessible experiences for 
               the company, and our end-users.`,
        color: "#A8DCEA"
    },
    {
        imgUrl: "https://design.flutterwave.com/_nuxt/img/branding.36558de.png",
        title: "Brand Design",
        desc: `We work to create a beautiful and distinctive brand identity for Flutterwave. 
               We create illustrations, icons, and other brand elements that align with the 
               business vision and goals.`,
        color: "#E7B2AD"
    },
    {
        imgUrl: "https://design.flutterwave.com/_nuxt/img/ux-writing.738a0cd.png",
        title: "UX Writing",
        desc: `UX Writing is a crucial part of our design process. Our writers are tasked 
               with creating compelling content that elevates the product experience for 
               our customers and helps them complete the job they need to get done 
               without hassles."`,
        color: "#A9E5C6"
    },
]

type disciplineType = {
    imgUrl: string,
    title: string,
    desc: string,
    color: string
}

const OurDiscipline = () => {
  return (
    <Grid
        tempCol="repeat(auto-fit, minmax(600px, 1fr))"
        gap="3rem"
    >
        {
            disciplines.map(({ imgUrl, title, desc, color } : disciplineType) => (
                <DisciplineCard 
                    imgUrl={imgUrl}
                    title={title}
                    desc={desc}
                    color={color}
                />
            ))
        }
    </Grid>
  )
}

export default OurDiscipline