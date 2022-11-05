import React from "react";
import Chicken from "./Chicken";

const Collection = () => {
  return (
    <div className="collection">
      <Chicken
        img="https://www.cuisine-et-mets.com/wp-content/uploads/2017/11/Fotolia_170028787_Subscription_Monthly_XXLopt-1024x1024.jpg"
        title="Poulet au marrons"
        caption="Bien tendre avec la douceur des marrons."
      />
      <Chicken
        img="https://cache.marieclaire.fr/data/photo/w1536_ci/5e/poulet-et-fenouil-rotis1.jpg"
        title="Poulet au oigons"
        caption="Bonne dose d'oignons pour un maximum de saveur !"
      />
      <Chicken
        img="https://www.ptitchef.com/imgupl/recipe/comment-cuire-un-poulet-au-four--460158p722989.jpg"
        title="Poulet au oignons"
        caption="Les pommes de terre avec le poulet, toujours un régal !"
      />
      <Chicken
        img="https://www.ptitchef.com/imgupl/recipe/comment-cuire-un-poulet-au-four--460158p722989.jpg"
        title="Poulet au patates"
        caption="Les pommes de terre avec le poulet, toujours un régal !"
      />
    </div>
  );
};

export default Collection;
