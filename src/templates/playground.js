import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import QueryCard from '../components/queryCard';
import "../styles/fonts.css"

/**
 * Functional Collection Component
 * This function will find all the collection components on the drupal site and create a page
 * on the gatsby site for each component. This is the page accessed when
 * the card component in clicked.
 */

// TODO: Move this styling to a separate file 

const container = {
    padding: "5% 5%",
    // paddingTop: "10%",
    ["font-family"]: 'Roboto',
};

const card_name = {
    ["text-align"]: 'center',
    ['padding-top']: 10,
    ['font-family']: 'Roboto Slab, serif',
    color: '#b3a369',
}

function Plushie({ data }) {
    const playground = data.Plushie;
    

    return (
        <Layout>
            <div style={container}>
                <h1 style={card_name}>{playground.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: playground.body.processed }} />
                <p></p>
                {playground.map((i) => (
                    <QueryCard
                        img={"https://empathy.library.gatech.edu" + i.field_pic.uri.url}
                        title={i.title}

                        // author={i.field_author}
                        // date={i.field_hg_dateline}
                        // body={i.field_blurb}
                         url={"/playground"}
                    />
                ))}

            </div>
        </Layout>
    );
}



// These are the graphql queries to pull the drupal site data
Plushie.propTypes = {
    data: PropTypes.object.isRequired,
};

export const query = graphql`
    query {
        plushie: taxonomyTermPlushies (name: { eq: "Bellzi" }) { 
            title
            relationships {
                field_pfp {
                    uri {
                        url
                    }
                }
                }
        }
    }
`;

export default Plushie;