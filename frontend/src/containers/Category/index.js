import React from "react";
import { useParams } from "react-router";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";

const Category = () => {


  let { id, slug } = useParams();


  return (
    <Query query={CATEGORY_ARTICLES_QUERY} slug={slug}>
      {({ data: { categories } }) => {

        if (categories.length) {
          return (
            < div className="category-wrapper">
              <div className="category">
                <div className="uk-section">
                  <div className="uk-container uk-container-large">
                    <h1 className="title-category" >{categories[0].name}</h1>
                    <Articles articles={categories[0].articles} />
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Category;