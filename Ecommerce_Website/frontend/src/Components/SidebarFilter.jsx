import "./SidebarFilter.css";
import { useState } from "react";

const SidebarFilter = () => {

  const [openSections, setOpenSections] = useState({
    category: true,
    brands: true,
    features: true,
    price: true,
    condition: true,
    ratings: true,
  });

  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section],
    });
  };

  return (
    <aside className="filter-sidebar">

      {/* CATEGORY */}
      <div className="filter-box">

        <div
          className="filter-title"
          onClick={() => toggleSection("category")}
        >
          <h4>Category</h4>

          <span>
            {openSections.category ? "⌃" : "⌄"}
          </span>
        </div>

        {openSections.category && (
          <>
            <ul>
              <li>Mobile accessory</li>
              <li>Electronics</li>
              <li>Smartphones</li>
              <li>Modern tech</li>
            </ul>

            <p className="see-all">See all</p>
          </>
        )}

      </div>

      {/* BRANDS */}
      <div className="filter-box">

        <div
          className="filter-title"
          onClick={() => toggleSection("brands")}
        >
          <h4>Brands</h4>

          <span>
            {openSections.brands ? "⌃" : "⌄"}
          </span>
        </div>

        {openSections.brands && (
          <>
            <label><input type="checkbox" /> Samsung</label>
            <label><input type="checkbox" /> Apple</label>
            <label><input type="checkbox" /> Huawei</label>
            <label><input type="checkbox" /> Poco</label>
            <label><input type="checkbox" /> Lenovo</label>

            <p className="see-all">See all</p>
          </>
        )}

      </div>

      {/* FEATURES */}
      <div className="filter-box">

        <div
          className="filter-title"
          onClick={() => toggleSection("features")}
        >
          <h4>Features</h4>

          <span>
            {openSections.features ? "⌃" : "⌄"}
          </span>
        </div>

        {openSections.features && (
          <>
            <label><input type="checkbox" /> Metallic</label>
            <label><input type="checkbox" /> Plastic cover</label>
            <label><input type="checkbox" /> 8GB Ram</label>
            <label><input type="checkbox" /> Super power</label>
            <label><input type="checkbox" /> Large Memory</label>

            <p className="see-all">See all</p>
          </>
        )}

      </div>

      {/* PRICE */}
      <div className="filter-box">

        <div
          className="filter-title"
          onClick={() => toggleSection("price")}
        >
          <h4>Price range</h4>

          <span>
            {openSections.price ? "⌃" : "⌄"}
          </span>
        </div>

        {openSections.price && (
          <>
            <input type="range" className="range-slider" />

            <div className="price-inputs">

              <div>
                <small>Min</small>
                <input type="text" placeholder="0" />
              </div>

              <div>
                <small>Max</small>
                <input type="text" placeholder="999999" />
              </div>

            </div>

            <button className="apply-btn">Apply</button>
          </>
        )}

      </div>

      {/* CONDITION */}
      <div className="filter-box">

        <div
          className="filter-title"
          onClick={() => toggleSection("condition")}
        >
          <h4>Condition</h4>

          <span>
            {openSections.condition ? "⌃" : "⌄"}
          </span>
        </div>

        {openSections.condition && (
          <>
            <label><input type="radio" name="condition" defaultChecked /> Any</label>
            <label><input type="radio" name="condition" /> Refurbished</label>
            <label><input type="radio" name="condition" /> Brand new</label>
            <label><input type="radio" name="condition" /> Old items</label>
          </>
        )}

      </div>

      {/* RATINGS */}
      <div className="filter-box">

        <div
          className="filter-title"
          onClick={() => toggleSection("ratings")}
        >
          <h4>Ratings</h4>

          <span>
            {openSections.ratings ? "⌃" : "⌄"}
          </span>
        </div>

        {openSections.ratings && (
          <>
            <label><input type="checkbox" /> ⭐⭐⭐⭐⭐</label>
            <label><input type="checkbox" /> ⭐⭐⭐⭐☆</label>
            <label><input type="checkbox" /> ⭐⭐⭐☆☆</label>
          </>
        )}

      </div>

    </aside>
  );
};

export default SidebarFilter;