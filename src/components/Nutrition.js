import React from "react";

const Nutrition = () => {
  return (
    <div className="nutrition">
      <div className="calorie-wrapper">
        <div className="calorie">
          <svg
            width="17"
            height="20"
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.905 7.86625C10.905 7.86625 11.8375 2.38125 8.03249 0C7.91784 1.90607 6.99682 3.6731 5.49999 4.85875C3.87499 6.2875 0.81874 9.5 0.85124 12.925C0.827424 15.9116 2.49913 18.6534 5.16499 20C5.25931 18.6645 5.88737 17.4233 6.90749 16.5562C7.77187 15.8915 8.33304 14.9074 8.46499 13.825C10.7407 15.0348 12.2125 17.3521 12.34 19.9263V19.9425C14.8552 18.7904 16.5109 16.3241 16.625 13.56C16.895 10.3425 15.1325 5.9675 13.5687 4.5375C12.9784 5.85556 12.0615 7.00126 10.905 7.86625Z"
              fill="#FF0000"
            />
          </svg>
          1930kCal
        </div>
        <span>Calories</span>
      </div>
      <div className="protein-wrapper">
        <div className="protein">155g</div>
        <span><svg  width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="60" height="60" rx="6" fill="#4AB8FF" fill-opacity="0.1"/><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2353 2.47058C17.8824 2.11764 17.4118 1.88234 17.0588 1.88234C16.9412 1.41176 16.8235 1.05881 16.4706 0.705873C15.6471 -0.117656 14.2353 -0.117656 13.4118 0.705873C12.7059 1.41176 12.5882 2.58823 13.1765 3.41176L10.5882 5.88234L9.29412 4.58823L6.70588 7.17646C6.47059 7.05881 6.11765 7.05881 5.88235 7.05881C2.58824 7.05881 0 9.64705 0 12.9412C0 16.2353 2.58824 18.8235 5.88235 18.8235C9.17647 18.8235 11.7647 16.2353 11.7647 12.9412C11.7647 12.7059 11.7647 12.3529 11.6471 12.1176L14.2353 9.5294L12.9412 8.23528L15.4118 5.7647C16.2353 6.35293 17.4118 6.23529 18.1176 5.5294C19.0588 4.70587 19.0588 3.29411 18.2353 2.47058Z" fill="#4AB8FF"/>
</svg>

</svg>
Protéines</span>
      </div>

      <div className="carbo-wrapper">
        <div className="carbo">290g</div>
        <span>Glucides</span>
      </div>

      <div className="lipid-wrapper">
        <div className="lipid">290g</div>
        <span>Lipides</span>
      </div>
    </div>
  );
};

export default Nutrition;
