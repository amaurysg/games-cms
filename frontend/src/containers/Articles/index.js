import React from 'react'
import Articles from '../../components/Articles'
import Query from '../../components/Query'
import ARTICLES_QUERY from '../../queries/article/articles'
import Heros from '../Heros'

const Home = () => {
  return (
    <>
      <Heros />
      <div>
        <div className="uk-section">
          <div className="uk-container uk-container-large">

            <Query query={ARTICLES_QUERY}>
              {({ data: { articles } }) => {
                return <Articles articles={articles} />;
              }}
            </Query>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
