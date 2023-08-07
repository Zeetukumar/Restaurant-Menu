import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
        <section className="main-card--cointainer">
            {menuData.map((currElem)=>{
                const{id,name,category,image,description}=currElem;
                return(
                    <>
            <div className="card-container" key={id}>
          <div className="card">
              <div className="card-body">
                 <span className="card-number card-circle subtle">{id}</span>
                 <span className="card-author subtle">
                 {name}
                 </span>
                 <h2 className="card-title">{name}</h2>
                 <span className="card-description subtle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, est. Quos accusamus iusto vel porro sequi. Iste, enim voluptatibus? Fugiat saepe distinctio mollitia iure similique omnis et aliquam neque a.
                 </span>
                 <div className="card-read">Read</div>
              </div>
              <img src={image} alt="image" className="card-media" />
              <span className="card-tag subtle">Order Now</span>
          </div>
      </div>
      </>
        );
            })}
            </section>
    </>
  );
};

export default MenuCard
