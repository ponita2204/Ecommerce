import React, { useState, useEffect } from "react";

const FoodSection = () => {
  const [foodMenu, setFoodMenu] = useState([]); // Stores the food items
  const [filter, setFilter] = useState("all"); // Current category filter
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [orderSuccess, setOrderSuccess] = useState(""); // Order success message

  // Fetch food data from the fake API
  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch(
          "https://mocky.io/v2/your-mock-api-endpoint"
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch food data");
        }
        const data = await response.json();
        setFoodMenu(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, []);

  // Handle ordering pizza
  const handleOrder = async (itemId) => {
    try {
      const response = await fetch(
        "https://mocky.io/v2/your-order-api-endpoint",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ itemId }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to place order");
      }

      const result = await response.json();
      setOrderSuccess(`Order placed successfully for item: ${result.name}`);
    } catch (err) {
      setOrderSuccess("Failed to place order. Please try again.");
    }
  };

  // Filtered items based on the selected category
  const filteredMenu =
    filter === "all"
      ? foodMenu
      : foodMenu.filter((item) => item.category === filter);

  if (loading) {
    return <div className="loading">Loading food menu...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <section className="food_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Menu</h2>
        </div>

        {/* Filters */}
        <ul className="filters_menu">
          {["all", "burger", "pizza", "pasta", "fries"].map((category) => (
            <li
              key={category}
              className={filter === category ? "active" : ""}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>

        {/* Success Message */}
        {orderSuccess && <div className="order-success">{orderSuccess}</div>}

        {/* Food Items */}
        <div className="filters-content">
          <div className="row grid">
            {filteredMenu.map((item) => (
              <div
                key={item.id}
                className={`col-sm-6 col-lg-4 all ${item.category}`}
              >
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="detail-box">
                      <h5>{item.name}</h5>
                      <p>{item.description}</p>
                      <div className="options">
                        <h6>{item.price}</h6>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleOrder(item.id)}
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="btn-box">
          <a href="#">View More</a>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
